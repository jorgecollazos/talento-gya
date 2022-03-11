const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const jwt = require('jsonwebtoken');
const {config} = require('./../config')
const pool = require('../database');
const helpers = require('./helpers');


passport.use('local.signin', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
}, async (req, email, password, done) => {
    const result = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
    
    if (result.rows.length > 0) {
        var hoy = new Date();
        var mm = hoy.getMonth() + 1;
        var fecha = hoy.getFullYear() + '-' + mm + '-' + hoy.getDate();
        const pass = result.rows[0].password;
        const validPassword = await helpers.matchPassword(password, pass)
        if (validPassword) {
            const res = await pool.query('SELECT * FROM tb_acercadeti_consultor WHERE email = $1 ',[result.rows[0].email]);

            const payload = {
                sub: result.rows[0].email,
                role: result.rows[0].tipusu
            }
            const log_token = jwt.sign(payload, config.jwtSecretLog);

            await pool.query('UPDATE users SET fecha_ult_se = $1, log_token = $2 WHERE email = $3', [fecha, log_token, result.rows[0].email]);
        
            if(res.rows.length <= 0){
                done(null, result.rows[0].email);
            }
            try {
                done(null, res.rows[0].email);
            }
            catch(err) {
            }
         
        } else {
            done(null, false, req.flash('message', 'Contraseña incorrecta'));
        }
    } else {
        return done(null, false, req.flash('message', 'Usuario incorrecto'));
    }
}));

passport.use('local.signup', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
}, async (req, email, password, done) => {
    var hoy = new Date();
    var mm = hoy.getMonth() + 1;
    const fecha = hoy.getFullYear() + '-' + mm + '-' + hoy.getDate();
    const eqdate = true;
    const { nom_usu } = req.body;
    const {passwordcry} = '';
    let newUser = {
        nom_usu,
        email,
        password,
        passwordcry,
        fecha,
        eqdate
        
    };
    newUser.passwordcry = await helpers.encryptPassword(password);
    const result_email = await pool.query('SELECT * FROM users WHERE email = $1', [newUser.email]);
    if (result_email.rows.length === 0) {
        const payload = {
            sub: newUser.email,
            role: 1
        }
        const log_token = jwt.sign(payload, config.jwtSecretLog);
        try {
            const result = await pool.query("INSERT INTO users (tipUsu, nom_usu, email, password, fecha_ult_se, log_token) VALUES (1, $1, $2, $3, $4, $5)", [newUser.nom_usu, newUser.email, newUser.passwordcry, newUser.fecha, log_token]);
            const acercadeticonsultor = await pool.query("INSERT INTO tb_acercadeti_consultor (iddocumento, email) VALUES ($1, $2)", [1, newUser.email]);
            const habilidadesconsultor = await pool.query("INSERT INTO tb_Habilidades_Consultor (email, comunicativas, equipo, iniciativas, puntualidad, pensamiento) VALUES ($1, $2, $3, $4, $5, $6)", [newUser.email, 5, 5, 5, 5, 5]);
            return done(null, newUser);
        } catch (e) {
            console.log(e)
        }
    } else {
        return done(null, false, req.flash('message', 'Este correo ya esta resgitrado'));
    }
}));