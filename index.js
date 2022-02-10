
const express = require('express');
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const path = require('path')
const session = require('express-session');
const validator = require('express-validator');
const passport = require('passport');
const flash = require('connect-flash');
const PostgreSqlStore = require('express-pg-session')(session);
const bodyParser = require('body-parser');
const pool = require('./database');
const {database} = require('./keys');
const app = express();
const cookieParser = require('cookie-parser');
const facebookStrategy = require('passport-facebook').Strategy
//pdf
const fs = require("fs");
const utils = require("util");
const hb = require("handlebars");
const puppeteer = require("puppeteer");
const readFile = utils.promisify(fs.readFile);


//google auth
const {OAuth2Client} = require('google-auth-library');
const { reset } = require('nodemon');
const CLIENT_ID = '771954959053-tpsc0p2a5rj5stm9rqq1uen5oqaeitgh.apps.googleusercontent.com'
const client = new OAuth2Client(CLIENT_ID);
const helpers = require('./lib/helpers');
const LocalStrategy = require('passport-local').Strategy;

// Intializations
require('./lib/passport');

//pdf
async function getTemplateHtml() {
    console.log("Loading template file in memory");
    try {
        const invoicePath = path.resolve("./src/views/perfil.hbs");
        return await readFile(invoicePath, "utf8");
    } catch (err) {
        return Promise.reject("Could not load html template");
    }
}
async function generatePdf(id) {
    const habilidades = await pool.query("SELECT * FROM tb_habilidades_consultor WHERE email = $1 ",[id]);
    const habili = habilidades.rows[0];
    let data = {
        habili
    };
    getTemplateHtml()
        .then(async (res) => {
            console.log("Compiing the template with handlebars");
            const template = hb.compile(res, { strict: true });
            const result_tmp = template(data);
            const html = result_tmp;
            const browser = await puppeteer.launch();
            const page = await browser.newPage();
            await page.setContent(html);
            let namefile = "./src/public/cv/" +  name + ".pdf";
            await page.pdf({ path: namefile, format: "A4" });
            await browser.close();
            console.log("PDF Generated");
        })
        .catch((err) => {
            console.error(err);
        });
}


// Serializar y Deserializar
passport.serializeUser(function(user, done) {
    done(null, user);
});


passport.deserializeUser(async function(id, done) {
    const res2 =  await pool.query("SELECT * FROM users WHERE email = $1", [id]);
    const res = await pool.query("SELECT * FROM tb_acercadeti_consultor WHERE email = $1 ",[id]);
    if (res.rows.length > 0){
        const fecha = await pool.query("SELECT to_char(fechadenacimiento :: DATE, 'dd/mm/yyyy') as fechadenacimiento FROM tb_acercadeti_consultor  WHERE email = $1",[id]);
        const grado1 = await pool.query("SELECT forinicial.idformacioninicial, forinicial.universidad, forinicial.carrerauniversitaria, to_char(forinicial.fechaexpediciontitulo :: DATE, 'dd/mm/yyyy') as fechaexpediciontitulo, forinicial.documentotitulo, forinicial.documentocolegiado, forinicial.erescolegiado, forinicial.ultimacarrera, forinicial.idtipodeformacion, forinicial.idformacionpregrado, forinicial.idformacionpostgrado, forinicial.idsubpostgrado, forinicial.email, forinicial.inicioacademico, forinicial.finacademico, forpre.nombreformacionpregrado FROM tb_formacioninicial forinicial LEFT JOIN formacionpregrado forpre ON forpre.idformacionpregrado = forinicial.idformacionpregrado WHERE email = $1 AND idtipodeformacion = $2 ORDER BY idformacioninicial DESC",[id, 1]);
        const grado2 = await pool.query("SELECT forinicial.idformacioninicial, forinicial.universidad, forinicial.carrerauniversitaria, to_char(forinicial.fechaexpediciontitulo :: DATE, 'dd/mm/yyyy') as fechaexpediciontitulo, forinicial.documentotitulo, forinicial.documentocolegiado, forinicial.erescolegiado, forinicial.ultimacarrera, forinicial.idtipodeformacion, forinicial.idformacionpregrado, forinicial.idformacionpostgrado, forinicial.idsubpostgrado, forinicial.email, forinicial.inicioacademico, forinicial.finacademico, forpost.nombreformacionpostgrado FROM tb_formacioninicial forinicial LEFT JOIN formacionpostgrado forpost ON forpost.idformacionpostgrado = forinicial.idformacionpostgrado WHERE email = $1 AND idtipodeformacion = $2 ORDER BY idformacioninicial DESC",[id, 2]);
        const continua = await pool.query("SELECT continua.idformacioncontinua, continua.nombrelogro, continua.institucioneducativa, continua.horasacademicas, continua.formacioncontinuadocumento, to_char(continua.fechaexpedicion :: DATE, 'dd/mm/yyyy') as fechaexpedicion, continua.idselecformacioncontinua, s.nombreselecformacioncontinua FROM tb_formacioncontinua continua LEFT JOIN selecformacioncontinua s on continua.idselecformacioncontinua = s.idselecformacioncontinua WHERE continua.email = $1 ORDER BY continua.idformacioncontinua DESC",[id]);
        const exper = await pool.query("SELECT idexperiencialaboral, to_char(experienciafechainicio :: DATE, 'dd/mm/yyyy') as inicio, to_char(experienciafechafinal :: DATE, 'dd/mm/yyyy') as final, funcionesdesarrolladas, certificadopostulante, nombrecargo, sectorempresarial, nombreempresa FROM tb_experiencialaboral WHERE email = $1 ORDER BY idexperiencialaboral DESC",[id]);
        const resultado = await pool.query("SELECT n.nombreformacionpregrado FROM tb_formacioninicial as c INNER JOIN formacionpregrado as n ON n.idformacionpregrado = c.idformacionpregrado where  email  = $1 ",[id]);
        const resultados = await pool.query("SELECT n.nombresubpostgrado FROM tb_formacioninicial as c INNER JOIN formacionsubpostgrado as n ON n.idsubpostgrado = c.idsubpostgrado where  email = $1",[id]);
        const resultados1 = await pool.query("SELECT * FROM formacionpregrado");
        const habilidades = await pool.query("SELECT * FROM tb_habilidades_consultor WHERE email = $1 ",[id]);

        const uno = res.rows[0];
        const dos = grado1.rows[0];
        const pregrado = grado1.rows;
        const postgrado = grado2.rows;
        const forcontinua = continua.rows;
        const experiencia = exper.rows;
        const iner = resultado.rows[0];
        const iner2 = resultados.rows[0];
        const habili = habilidades.rows[0];
        const iner3 = resultados1.rows[0];
        const iner4 = resultados1.rows[1];
        const iner5 = resultados1.rows[2];
        const iner6 = resultados1.rows[3];
        const fechanaci = fecha.rows[0].fechadenacimiento;

        let uno1 = '';
        let uno2 = '';

        if(res.rows[0].primernombre !== res.rows[0].apellidopaterno){
            uno1 = res.rows[0].primernombre[0];
            uno2 = res.rows[0].apellidopaterno[0];
        }

        let tres = {
            uno,
            dos,
            pregrado,
            postgrado,
            forcontinua,
            experiencia,
            iner,
            iner2,
            iner3,
            iner4,
            iner5,
            iner6,
            habili,
            fechanaci,
            uno1,
            uno2
        };
        done(null, tres);
    }
    else if (res2.rows.length > 0){
        const uno = res2.rows[0];
        let cadena = {
            uno
        }
        done(null, cadena);
    }
    else{
        done(null, id);
    }
});

// facebook auth
app.set("view engine","ejs")

app.use(passport.initialize());
app.use(passport.session());
app.use(session({ 
    secret : "thisissecretkey",
    proxy : true , 
    resave : true , 
    saveUninitialized : true 
}));

// Settings
app.set('port', process.env.PORT || 4010);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs',
    helpers: require('./lib/handlebars')
}))
app.set('view engine', '.hbs');

// Middlewares
app.use(session({
    cookie: { maxAge: 60000 },
    secret: 'woot',
    resave: false,
    saveUninitialized: false
}));
app.use(flash());
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(passport.initialize());
app.use(passport.session());


// Global variables
app.use((req, res, next) => {
    app.locals.message = req.flash('message');
    app.locals.success = req.flash('success');
    app.locals.user = req.user;
    next();
});


app.use(express.json());
app.use(cookieParser());

// Routes
app.use(require('./routes/index'));
app.use(require('./routes/authentication'));
app.use('/links', require('./routes/links'));

// Public
app.use(express.static(path.join(__dirname, 'public')));

// Starting
app.listen(app.get('port'), () => {
    console.log('Server is in port', app.get('port'));
});