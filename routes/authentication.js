const express = require("express");
const { cookie } = require("express-validator");
const router = express.Router();
const passport = require("passport");
const pool = require("../database");
const { isLoggedIn } = require("../lib/auth");
const multer = require("multer");
const mimeTypes = require("mime-types");
const facebookStrategy = require("passport-facebook").Strategy;
const helpers = require("../lib/helpers");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const nodemailer = require("nodemailer");
const bcrypt = require("bcryptjs");
const { config } = require("./../config");
const jwt = require("jsonwebtoken");
const fs = require("fs");
const pdf = require("html-pdf");
const https = require("https");

/* const { session } = require('passport'); */
const GOOGLE_CLIENT_ID =
  "771954959053-srkej35ttdfhleqd9lc7in3rv973fahm.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "Pa67_zLGGVuwontRzcx60nzo";
const FACEBOOK_APP_ID = "268594808391429";
const FACEBOOK_APP_SECRET = "7f66c5b2f1816a3c241db3060af5d2bc";

var filenamegl = "";
var filenamegl2 = "";
var filenamecole = "";
const storage = multer.diskStorage({
  destination: "public/cvs",
  filename: function (req, file, cb) {
    filenamegl = Date.now() + "." + mimeTypes.extension(file.mimetype);
    cb("", Date.now() + "." + mimeTypes.extension(file.mimetype));
  },
});

const upload = multer({
  storage: storage,
});

const storage2 = multer.diskStorage({
  destination: "public/Facademica",
  filename: function (req, file, cb) {
    if (file.fieldname == "documentoti") {
      filenamegl =
        Date.now() +
        file.originalname +
        "." +
        mimeTypes.extension(file.mimetype);
    } else if (file.fieldname == "documentocole") {
      filenamecole =
        Date.now() +
        file.originalname +
        "." +
        mimeTypes.extension(file.mimetype);
    }
    console.log(filenamegl);
    console.log(filenamecole);
    cb(
      "",
      Date.now() + file.originalname + "." + mimeTypes.extension(file.mimetype)
    );
  },
});

const upload2 = multer({
  storage: storage2,
});

const storage3 = multer.diskStorage({
  destination: "public/Fcontinua",
  filename: function (req, file, cb) {
    filenamegl = Date.now() + "." + mimeTypes.extension(file.mimetype);
    cb("", Date.now() + "." + mimeTypes.extension(file.mimetype));
  },
});
const upload3 = multer({
  storage: storage3,
});

const storage4 = multer.diskStorage({
  destination: "public/Experiencia",
  filename: function (req, file, cb) {
    filenamegl = Date.now() + "." + mimeTypes.extension(file.mimetype);
    cb("", Date.now() + "." + mimeTypes.extension(file.mimetype));
  },
});

const upload4 = multer({
  storage: storage4,
});

router.get("/signin", (req, res) => {
  res.render("auth/signin");
});

router.get("/recovery", (req, res) => {
  const { token } = req.query;
  if (token) {
    res.render("auth/recovery", { token });
  }
});

router.get("/sendmailPassword/:mail", async (req, res) => {
  email = req.params.mail;
  const payload = {
    sub: email,
    role: 1,
  };
  const password_token = jwt.sign(payload, config.jwtSecretPassword, {
    expiresIn: "15min",
  });

  const link = `http://143.198.153.102:4010/recovery?token=${password_token}`;

  const data = await pool.query("SELECT primernombre, apellidopaterno FROM tb_acercadeti_consultor WHERE email = $1", [email]);
  const nombre = data.rows[0].primernombre;
  const apellido = data.rows[0].apellidopaterno;

  await pool.query("UPDATE users SET password_token = $1 WHERE email = $2", [
    password_token,
    email,
  ]);

  let transporter = nodemailer.createTransport({
    host: "mi3-ls12.a2hosting.com",
    secure: true, // true for 465, false for other ports
    port: 465,
    auth: {
      user: "talento@gestionayaprende.com",
      pass: "F??hWc^[H8hX",
    },
  });

  let info = await transporter.sendMail({
    from: '"TalentoGyA+" <talento@gestionayaprende.com>',
    to: email,
    subject: `Cambio de contraseña`,
    html: `<p>Hola, ${nombre} ${apellido}</p><br><p>Si has sido tú, puedes recuperar el acceso a tu cuenta o cambiar la contraseña ahora.</p><br><b>Ingresa a este link para cambiar su contraseña: ${link}</b><br><p>Si no has solicitado un enlace de inicio de sesión o un cambio de contraseña, puedes ignorar este mensaje</p>`,
  });
  console.log("Message sent: %s", info.messageId);
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  res.redirect("/signin");
});

router.post("/change-password", async (req, res) => {
  try {
    const { password_token, newPassword } = req.body;
    const payload = jwt.verify(password_token, config.jwtSecretPassword);
    const rtp = await pool.query("SELECT * FROM users WHERE email = $1 ", [
      payload.sub,
    ]);
    const hash = await bcrypt.hash(newPassword, 10);
    if (rtp.rows[0].password_token == password_token) {
      await pool.query(
        "UPDATE users SET password_token = $1, password = $2  WHERE email = $3",
        ["", hash, payload.sub]
      );
    }
    res.redirect(`/perfil/${payload.sub}/${newPassword}`);
  } catch (error) {
    res.redirect("/signin");
  }
});

router.post("/signin", (req, res, next) => {
  passport.authenticate("local.signin", {
    successRedirect: "/modulos",
    failureRedirect: "/signin",
    failureFlash: true,
  })(req, res, next);
});

router.get("/perfil/:mail/:passw", (req, res, next) => {
  let email = req.params.mail;
  let password = req.params.passw;
  req.body.email = email;
  req.body.password = password;
  console.log(req.body.email, req.body.password);
  passport.authenticate("local.signin", {
    successRedirect: "/profile",
    failureRedirect: "/signin",
    failureFlash: true,
  })(req, res, next);
});

router.get("/getperfilcv", (req, res, next) => {
  var html = fs.readFileSync("./views/perfilcv.hbs", "utf8");
  var options = { format: "Letter" };

  pdf.create(html, options).toFile("./businesscard.pdf", function (err, res) {
    if (err) return console.log(err);
    console.log(res); // { filename: '/app/businesscard.pdf' }
  });

  const path = `./businesscard.pdf`;
  const filePath = fs.createWriteStream(path);
  res.pipe(filePath);
  filePath.on("finish", () => {
    filePath.close();
    console.log("Download Completed");
  });
});


router.post("/disclaimer", async (req, res) => {
  const email = req.body.email;
  console.log(email);
  const updatephoto = await pool.query("UPDATE tb_acercadeti_consultor SET disclaimer = $1 WHERE email = $2",
    [1, email]);
  res.redirect("/profile");
});

router.get("/modulos", (req, res) => {
  res.render("modulos");
});


router.post("/update-photo", async (req, res, next) => {
  
  let email = req.body.email;
  let photo = req.body.photo;
  console.log(email, photo);
  const updatephoto = await pool.query(
    "UPDATE tb_acercadeti_consultor SET photo = $1 WHERE email = $2",
    [photo, email]
  );
  console.log(updatephoto);
});

// router.get("/recovery/:token/", (req, res, next) => {
//   let email = req.params.token;
//   req.body.email = email;
//   console.log(req.body.email);
//   res.send("No se encontro el token ");
// });

router.get("/signup", (req, res) => {
  res.render("auth/signup");
});

router.post(
  "/signup",
  passport.authenticate("local.signup", {
    successRedirect: "/profile",
    failureRedirect: "/signin",
    failureFlash: true,
  })
);

router.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/signin");
});

router.get("/profile", (req, res) => {
  res.render("profile");
});

router.get("/perfilcv", (req, res) => {
  res.render("perfilcv");
});

router.post(
  "/pregrado",
  upload.single("cvpostulante"),
  async (req, res, next) => {
    if (req.body.fecha_nacimiento === "") {
      req.body.fecha_nacimiento = null;
    }
    if (req.body.documento === "") {
      req.body.documento = null;
    }
    if (req.body.numero1 === "") {
      req.body.numero1 = null;
    }
    if (req.body.numero2 === "") {
      req.body.numero2 = null;
    }
    if (req.body.salarial === "") {
      req.body.salarial = null;
    }

    const result = await pool.query(
      "UPDATE tb_AcercaDeTi_Consultor SET PrimerNombre = $1, SegundoNombre = $2, ApellidoPaterno = $3, ApellidoMaterno = $4, IdDocumento = $5, NumerodeDocumento = $6, FechadeNacimiento = $7, NumeroCelular1 = $8, NumeroCelular2 = $9, Region = $10, Provincia = $11, Distrito = $12, Direccion = $13, ExpectativaSueldo = $14, pais = $15, CvPostulante = $16 WHERE email = $17",
      [
        req.body.primer_nombre,
        req.body.segundo_nombre,
        req.body.primer_apellido,
        req.body.segundo_apellido,
        req.body.tip_doc,
        req.body.documento,
        req.body.fecha_nacimiento,
        req.body.numero1,
        req.body.numero2,
        req.body.region,
        req.body.provincia,
        req.body.distrito,
        req.body.direccion,
        req.body.salarial,
        req.body.pais,
        req.body.cvpostulante,
        req.user.email,
      ]
    );

    const habilidades = await pool.query(
      "UPDATE tb_Habilidades_Consultor SET comunicativas  = $1,  equipo = $2,  iniciativas = $3,  puntualidad = $4,  pensamiento = $5 WHERE email = $6",
      [
        req.body.comunicativas,
        req.body.equipo,
        req.body.iniciativas,
        req.body.puntualidad,
        req.body.pensamiento,
        req.user.email,
      ]
    );

    res.render("pregrado");
  }
);

router.post(
  "/fcontinua",
  upload3.single("FormacionContinuaDocumento"),
  async (req, res, next) => {
    if (req.body.FechaExpedicionTitulo === "") {
      req.body.FechaExpedicionTitulo = null;
    }
    if (req.body.horasacademicas === "") {
      req.body.horasacademicas = null;
    }

    try {
      console.log(req.body);
      const result = await pool.query(
        "INSERT INTO tb_FormacionContinua (NombreLogro, InstitucionEducativa, HorasAcademicas, FechaExpedicion, FormacionContinuaDocumento, idSelecFormacionContinua, email) VALUES ($1, $2, $3, $4, $5, $6, $7)",
        [
          req.body.forcontinua,
          req.body.inEducativa,
          req.body.horasacademicas,
          req.body.FechaExpedicionTitulo,
          filenamegl,
          req.body.tipFormacionCon,
          req.user.email,
        ]
      );
      filenamegl = "";
      res.render("continua");
    } catch (err) {
      console.log(req.body);
    }
  }
);

router.post(
  "/addcontinua",
  upload3.single("FormacionContinuaDocumento"),
  async (req, res, next) => {
    if (req.body.FechaExpedicionTitulo === "") {
      req.body.FechaExpedicionTitulo = null;
    }
    if (req.body.horasacademicas === "") {
      req.body.horasacademicas = null;
    }

    if (filenamegl) {
      const result = await pool.query(
        "INSERT INTO tb_formacioncontinua (nombrelogro, institucioneducativa, horasacademicas, formacioncontinuadocumento, fechaexpedicion, idselecformacioncontinua, email) VALUES ($1, $2, $3, $4, $5, $6, $7)",
        [
          req.body.forcontinua,
          req.body.inEducativa,
          req.body.horasacademicas,
          filenamegl,
          req.body.FechaExpedicionTitulo,
          req.body.tipFormacionCon,
          req.user.uno.email,
        ]
      );
      filenamegl = "";
    } else {
      const result = await pool.query(
        "INSERT INTO tb_formacioncontinua (nombrelogro, institucioneducativa, horasacademicas, fechaexpedicion, idselecformacioncontinua, email) VALUES ($1, $2, $3, $4, $5, $6)",
        [
          req.body.forcontinua,
          req.body.inEducativa,
          req.body.horasacademicas,
          req.body.FechaExpedicionTitulo,
          req.body.tipFormacionCon,
          req.user.uno.email,
        ]
      );
    }

    res.redirect("profile");
  }
);

router.post(
  "/experiencia",
  upload4.single("documentoexp"),
  async (req, res, next) => {
    if (req.body.FechaFin === "") {
      req.body.FechaFin = null;
    }
    if (req.body.FechaInicio === "") {
      req.body.FechaInicio = null;
    }
    const result = await pool.query(
      "INSERT INTO tb_ExperienciaLaboral (NombreCargo, NombreEmpresa, SectorEmpresarial, ExperienciaFechaInicio, ExperienciaFechaFinal, CertificadoPostulante, FuncionesDesarrolladas, email) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)",
      [
        req.body.nomcargo,
        req.body.nomempresa,
        req.body.sectorempresa,
        req.body.FechaInicio,
        req.body.FechaFin,
        filenamegl,
        req.body.funciones,
        req.user.email,
      ]
    );
    filenamegl = "";
    res.render("experiencia");
  }
);

router.post(
  "/addexperiencia",
  upload4.single("documentoexp"),
  async (req, res, next) => {
    if (req.body.FechaFin === "") {
      req.body.FechaFin = null;
    }
    if (req.body.FechaInicio === "") {
      req.body.FechaInicio = null;
    }
    const result = await pool.query(
      "INSERT INTO tb_ExperienciaLaboral (NombreCargo, NombreEmpresa, SectorEmpresarial, ExperienciaFechaInicio, ExperienciaFechaFinal, CertificadoPostulante, FuncionesDesarrolladas, email) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)",
      [
        req.body.nomcargo,
        req.body.nomempresa,
        req.body.sectorempresa,
        req.body.FechaInicio,
        req.body.FechaFin,
        filenamegl,
        req.body.funciones,
        req.user.uno.email,
      ]
    );
    filenamegl = "";
    res.redirect("profile");
  }
);

router.post(
  "/facademica",
  upload2.fields([{ name: "documentoti" }, { name: "documentocole" }]),
  async (req, res, next) => {
    if (req.body.FechaExpedicionTitulo === "") {
      req.body.FechaExpedicionTitulo = null;
    }
    if (req.body.iniAcad === "") {
      req.body.iniAcad = null;
    }
    if (req.body.finAcad === "") {
      req.body.finAcad = null;
    }
    if (req.body.ultimacarrera === "") {
      req.body.ultimacarrera = null;
    }
    if (req.body.colegiado === "") {
      req.body.colegiado = null;
    }

    if (req.body.tipo_formacion == 1) {
      if (req.body.subPre == 1) {
        const result = await pool.query(
          "INSERT INTO tb_FormacionInicial (IdTipoDeFormacion, IdFormacionPregrado, Universidad, CarreraUniversitaria, inicioacademico, UltimaCarrera, email) VALUES ($1, $2, $3, $4, $5, $6, $7)",
          [
            req.body.tipo_formacion,
            req.body.subPre,
            req.body.universidad,
            req.body.carrerauniversitaria,
            req.body.iniAcad,
            req.body.ultimacarrera,
            req.user.email,
          ]
        );
        console.log(result);
        res.render("pregrado");
      } else if (req.body.subPre == 2 || req.body.subPre == 3) {
        const result = await pool.query(
          "INSERT INTO tb_FormacionInicial (IdTipoDeFormacion, IdFormacionPregrado, Universidad, CarreraUniversitaria, inicioacademico, finacademico, FechaExpedicionTitulo, DocumentoTitulo, UltimaCarrera, email) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)",
          [
            req.body.tipo_formacion,
            req.body.subPre,
            req.body.universidad,
            req.body.carrerauniversitaria,
            req.body.iniAcad,
            req.body.finAcad,
            req.body.FechaExpedicionTitulo,
            filenamegl,
            req.body.ultimacarrera,
            req.user.email,
          ]
        );
        console.log(result);
        filenamegl = "";
        res.render("pregrado");
      } else if (req.body.subPre == 4) {
        if (req.body.colegiado == 1) {
          const result = await pool.query(
            "INSERT INTO tb_FormacionInicial (IdTipoDeFormacion, IdFormacionPregrado, Universidad, CarreraUniversitaria, inicioacademico, finacademico, FechaExpedicionTitulo, DocumentoTitulo, EresColegiado, DocumentoColegiado, UltimaCarrera, email) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)",
            [
              req.body.tipo_formacion,
              req.body.subPre,
              req.body.universidad,
              req.body.carrerauniversitaria,
              req.body.iniAcad,
              req.body.finAcad,
              req.body.FechaExpedicionTitulo,
              filenamegl,
              req.body.colegiado,
              filenamecole,
              req.body.ultimacarrera,
              req.user.email,
            ]
          );
          console.log(result);
          filenamegl = "";
          filenamecole = "";
          res.render("pregrado");
        } else {
          const result = await pool.query(
            "INSERT INTO tb_FormacionInicial (IdTipoDeFormacion, IdFormacionPregrado, Universidad, CarreraUniversitaria, inicioacademico, finacademico, FechaExpedicionTitulo, DocumentoTitulo, UltimaCarrera, email) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)",
            [
              req.body.tipo_formacion,
              req.body.subPre,
              req.body.universidad,
              req.body.carrerauniversitaria,
              req.body.iniAcad,
              req.body.finAcad,
              req.body.FechaExpedicionTitulo,
              req.body.documentoti,
              req.body.ultimacarrera,
              req.user.email,
            ]
          );
          console.log(result);
          res.render("pregrado");
        }
      }
    } else if (req.body.tipo_formacion == 2) {
      if (req.body.subPost == 1) {
        const result = await pool.query(
          "INSERT INTO tb_FormacionInicial (IdTipoDeFormacion, IdFormacionPostgrado, IdSubPostgrado, Universidad, CarreraUniversitaria, inicioacademico, UltimaCarrera, email) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)",
          [
            req.body.tipo_formacion,
            req.body.forPost,
            req.body.subPost,
            req.body.universidad,
            req.body.carrerauniversitaria,
            req.body.iniAcad,
            req.body.ultimacarrera,
            req.user.email,
          ]
        );
        console.log(result);
        res.render("pregrado");
      } else if (req.body.subPost == 2 || req.body.subPost == 3) {
        const result = await pool.query(
          "INSERT INTO tb_FormacionInicial (IdTipoDeFormacion, IdFormacionPostgrado, IdSubPostgrado, Universidad, CarreraUniversitaria, inicioacademico, finacademico, FechaExpedicionTitulo, DocumentoTitulo, UltimaCarrera, email) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)",
          [
            req.body.tipo_formacion,
            req.body.forPost,
            req.body.subPost,
            req.body.universidad,
            req.body.carrerauniversitaria,
            req.body.iniAcad,
            req.body.finAcad,
            req.body.FechaExpedicionTitulo,
            req.body.documentoti,
            req.body.ultimacarrera,
            req.user.email,
          ]
        );
        console.log(result);
        res.render("pregrado");
      }
    }
  }
);

router.post(
  "/facademica2",
  upload2.fields([{ name: "documentoti" }, { name: "documentocole" }]),
  async (req, res, next) => {
    console.log("email:   ->>>>>>>>>>>>>>>>>>>>", req.user.uno.email);
    if (req.body.FechaExpedicionTitulo === "") {
      req.body.FechaExpedicionTitulo = null;
    }
    if (req.body.iniAcad === "") {
      req.body.iniAcad = null;
    }
    if (req.body.finAcad === "") {
      req.body.finAcad = null;
    }
    if (req.body.ultimacarrera === "") {
      req.body.ultimacarrera = null;
    }
    if (req.body.colegiado === "") {
      req.body.colegiado = null;
    }

    if (req.body.tipo_formacion == 1) {
      if (req.body.subPre == 1) {
        const result = await pool.query(
          "INSERT INTO tb_FormacionInicial (IdTipoDeFormacion, IdFormacionPregrado, Universidad, CarreraUniversitaria, inicioacademico, UltimaCarrera, email) VALUES ($1, $2, $3, $4, $5, $6, $7)",
          [
            req.body.tipo_formacion,
            req.body.subPre,
            req.body.universidad,
            req.body.carrerauniversitaria,
            req.body.iniAcad,
            req.body.ultimacarrera,
            req.user.uno.email,
          ]
        );
        console.log(result);
        res.redirect("profile");
      } else if (req.body.subPre == 2 || req.body.subPre == 3) {
        const result = await pool.query(
          "INSERT INTO tb_FormacionInicial (IdTipoDeFormacion, IdFormacionPregrado, Universidad, CarreraUniversitaria, inicioacademico, finacademico, FechaExpedicionTitulo, DocumentoTitulo, UltimaCarrera, email) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)",
          [
            req.body.tipo_formacion,
            req.body.subPre,
            req.body.universidad,
            req.body.carrerauniversitaria,
            req.body.iniAcad,
            req.body.finAcad,
            req.body.FechaExpedicionTitulo,
            filenamegl,
            req.body.ultimacarrera,
            req.user.uno.email,
          ]
        );
        console.log(result);
        filenamegl = "";
        res.redirect("profile");
      } else if (req.body.subPre == 4) {
        if (req.body.colegiado == 1) {
          const result = await pool.query(
            "INSERT INTO tb_FormacionInicial (IdTipoDeFormacion, IdFormacionPregrado, Universidad, CarreraUniversitaria, inicioacademico, finacademico, FechaExpedicionTitulo, DocumentoTitulo, EresColegiado, DocumentoColegiado, UltimaCarrera, email) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)",
            [
              req.body.tipo_formacion,
              req.body.subPre,
              req.body.universidad,
              req.body.carrerauniversitaria,
              req.body.iniAcad,
              req.body.finAcad,
              req.body.FechaExpedicionTitulo,
              filenamegl,
              req.body.colegiado,
              filenamecole,
              req.body.ultimacarrera,
              req.user.uno.email,
            ]
          );
          console.log(result);
          filenamegl = "";
          filenamecole = "";
          res.redirect("profile");
        } else {
          const result = await pool.query(
            "INSERT INTO tb_FormacionInicial (IdTipoDeFormacion, IdFormacionPregrado, Universidad, CarreraUniversitaria, inicioacademico, finacademico, FechaExpedicionTitulo, DocumentoTitulo, UltimaCarrera, email) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)",
            [
              req.body.tipo_formacion,
              req.body.subPre,
              req.body.universidad,
              req.body.carrerauniversitaria,
              req.body.iniAcad,
              req.body.finAcad,
              req.body.FechaExpedicionTitulo,
              req.body.documentoti,
              req.body.ultimacarrera,
              req.user.uno.email,
            ]
          );
          console.log(result);
          res.redirect("profile");
        }
      }
    } else if (req.body.tipo_formacion == 2) {
      if (req.body.subPost == 1) {
        const result = await pool.query(
          "INSERT INTO tb_FormacionInicial (IdTipoDeFormacion, IdFormacionPostgrado, IdSubPostgrado, Universidad, CarreraUniversitaria, inicioacademico, UltimaCarrera, email) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)",
          [
            req.body.tipo_formacion,
            req.body.forPost,
            req.body.subPost,
            req.body.universidad,
            req.body.carrerauniversitaria,
            req.body.iniAcad,
            req.body.ultimacarrera,
            req.user.uno.email,
          ]
        );
        console.log(result);
        res.redirect("profile");
      } else if (req.body.subPost == 2 || req.body.subPost == 3) {
        const result = await pool.query(
          "INSERT INTO tb_FormacionInicial (IdTipoDeFormacion, IdFormacionPostgrado, IdSubPostgrado, Universidad, CarreraUniversitaria, inicioacademico, finacademico, FechaExpedicionTitulo, DocumentoTitulo, UltimaCarrera, email) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)",
          [
            req.body.tipo_formacion,
            req.body.forPost,
            req.body.subPost,
            req.body.universidad,
            req.body.carrerauniversitaria,
            req.body.iniAcad,
            req.body.finAcad,
            req.body.FechaExpedicionTitulo,
            req.body.documentoti,
            req.body.ultimacarrera,
            req.user.uno.email,
          ]
        );
        console.log(result);
        res.redirect("profile");
      }
    }
  }
);

router.get("/experiencia", isLoggedIn, (req, res) => {
  res.render("experiencia");
});

router.get("/pregrado", isLoggedIn, (req, res) => {
  res.render("pregrado");
});

router.get("/continua", isLoggedIn, (req, res) => {
  res.render("continua");
});

router.get("/file/:tb_id", isLoggedIn, async (req, res) => {
  let tbid = req.params.tb_id;
  let doc = await pool.query(
    "SELECT documentotitulo FROM tb_formacioninicial WHERE idformacioninicial = $1",
    [tbid]
  );
  doc = doc.rows[0].documentotitulo;
  let result = "http://143.198.153.102:4010/Facademica/" + doc; //cambiar
  res.redirect(result);
});

router.get("/file2/:tb_id", isLoggedIn, async (req, res) => {
  let tbid = req.params.tb_id;
  let doc = await pool.query(
    "SELECT documentocolegiado FROM tb_formacioninicial WHERE idformacioninicial = $1",
    [tbid]
  );
  doc = doc.rows[0].documentocolegiado;
  let result = "http://143.198.153.102:4010/Facademica/" + doc; //cambiar
  res.redirect(result);
});

router.get("/file3/:tb_id", isLoggedIn, async (req, res) => {
  let tbid = req.params.tb_id;
  let doc = await pool.query(
    "SELECT formacioncontinuadocumento FROM tb_formacioncontinua WHERE idformacioncontinua = $1",
    [tbid]
  );
  doc = doc.rows[0].formacioncontinuadocumento;
  let result = "http://143.198.153.102:4010/Fcontinua/" + doc; //cambiar
  res.redirect(result);
});

router.get("/file4/:tb_id", isLoggedIn, async (req, res) => {
  let tbid = req.params.tb_id;
  let doc = await pool.query(
    "SELECT certificadopostulante FROM tb_experiencialaboral WHERE idexperiencialaboral = $1",
    [tbid]
  );
  doc = doc.rows[0].certificadopostulante;
  let result = "http://143.198.153.102:4010/Experiencia/" + doc; //cambiar
  res.redirect(result);
});

router.get("/drop/:tb_id", isLoggedIn, async (req, res, done) => {
  let tbid = req.params.tb_id;
  await pool.query(
    "DELETE FROM tb_formacioninicial WHERE idformacioninicial = $1",
    [tbid]
  );
  let result = "http://143.198.153.102:4010/profile";
  done(null, req.flash("message", "Eliminado correctamente"));
  res.redirect(result);
});

router.get("/dropcontinua/:tb_id", isLoggedIn, async (req, res, done) => {
  let tbid = req.params.tb_id;
  await pool.query(
    "DELETE FROM tb_formacioncontinua WHERE idformacioncontinua = $1",
    [tbid]
  );
  done(null, req.flash("message", "Eliminado correctamente"));
  let result = "http://143.198.153.102:4010/profile";
  res.redirect(result);
});

router.get("/dropexper/:tb_id", isLoggedIn, async (req, res, done) => {
  let tbid = req.params.tb_id;
  await pool.query(
    "DELETE FROM tb_experiencialaboral WHERE idexperiencialaboral = $1",
    [tbid]
  );
  done(null, req.flash("message", "Eliminado correctamente"));
  let result = "http://143.198.153.102:4010/profile";
  res.redirect(result);
});

router.post(
  "/actualizado",
  upload2.fields([{ name: "documentoti" }, { name: "documentocole" }]),
  async (req, res, next) => {
    const result = await pool.query(
      "UPDATE tb_formacioninicial SET idformacionpregrado  = $1,  universidad = $2 WHERE email = $3",
      [req.body.idformacionpregrado, req.body.universidad, req.user.uno.email]
    );
    if (filenamegl2) {
      await pool.query(
        "UPDATE tb_formacioninicial SET documentotitulo  = $1 WHERE email = $2",
        [filenamegl2, req.user.uno.email]
      );
      filenamegl2 = "";
    }
    res.redirect("profile");
  }
);

router.post("/updateabilities", async (req, res, done) => {
  const result = await pool.query(
    "UPDATE tb_Habilidades_Consultor SET comunicativas  = $1,  equipo = $2,  iniciativas = $3,  puntualidad = $4,  pensamiento = $5 WHERE email = $6",
    [
      req.body.comunicativas,
      req.body.equipo,
      req.body.iniciativas,
      req.body.puntualidad,
      req.body.pensamiento,
      req.user.uno.email,
    ]
  );
  done(null, req.flash("success", "Actualizado correctamente"));
  res.redirect("profile");
});

router.post("/updateinfo", async (req, res, done) => {
  if (req.body.documento === "") {
    req.body.documento = null;
  }
  if (req.body.numero1 === "") {
    req.body.numero1 = null;
  }
  if (req.body.numero2 === "") {
    req.body.numero2 = null;
  }
  if (req.body.salarial === "") {
    req.body.salarial = null;
  }

  if (req.body.fecha_nacimiento === "") {
    await pool.query(
      "UPDATE tb_AcercaDeTi_Consultor SET PrimerNombre = $1, SegundoNombre = $2, ApellidoPaterno = $3, ApellidoMaterno = $4, IdDocumento = $5, NumerodeDocumento = $6, NumeroCelular1 = $7, NumeroCelular2 = $8, Region = $9, Provincia = $10, Distrito = $11, Direccion = $12,  ExpectativaSueldo = $13, pais = $14 WHERE email = $15",
      [
        req.body.primer_nombre,
        req.body.segundo_nombre,
        req.body.primer_apellido,
        req.body.segundo_apellido,
        req.body.tip_doc,
        req.body.documento,
        req.body.numero1,
        req.body.numero2,
        req.body.region,
        req.body.provincia,
        req.body.distrito,
        req.body.direccion,
        req.body.salarial,
        req.body.pais,
        req.user.uno.email,
      ]
    );
  } else {
    await pool.query(
      "UPDATE tb_AcercaDeTi_Consultor SET PrimerNombre = $1, SegundoNombre = $2, ApellidoPaterno = $3, ApellidoMaterno = $4, IdDocumento = $5, NumerodeDocumento = $6, FechadeNacimiento = $7, NumeroCelular1 = $8, NumeroCelular2 = $9, Region = $10, Provincia = $11, Distrito = $12, Direccion = $13,  ExpectativaSueldo = $14, pais = $15 WHERE email = $16",
      [
        req.body.primer_nombre,
        req.body.segundo_nombre,
        req.body.primer_apellido,
        req.body.segundo_apellido,
        req.body.tip_doc,
        req.body.documento,
        req.body.fecha_nacimiento,
        req.body.numero1,
        req.body.numero2,
        req.body.region,
        req.body.provincia,
        req.body.distrito,
        req.body.direccion,
        req.body.salarial,
        req.body.pais,
        req.user.uno.email,
      ]
    );
  }
  done(null, req.flash("success", "Actualizado correctamente"));

  res.redirect("http://143.198.153.102:4010/profile");
});

router.post(
  "/updatefacademica/:tb_id",
  upload2.fields([{ name: "documentoti" }, { name: "documentocole" }]),
  async (req, res, next) => {
    let idfaca = req.params.tb_id;
    console.log(req.body);
    if (req.body.institucion === "") {
      req.body.institucion = null;
    }
    if (req.body.profesion === "") {
      req.body.profesion = null;
    }
    if (req.body.inicioacademico === "") {
      req.body.inicioacademico = null;
    }
    if (req.body.finacademico === "") {
      req.body.finacademico = null;
    }
    if (req.body.expedicionfechacole === "") {
      req.body.expedicionfechacole = null;
    } else if (req.body.expedicionfechacole == "") {
      req.body.expedicionfechacole = 0;
    } else {
      req.body.expedicionfechacole = 1;
    }
    console.log(req.body);
    if (req.body.expedicionfecha === "") {
      if (filenamecole === "" && filenamegl === "") {
        const result = await pool.query(
          "UPDATE tb_formacioninicial SET universidad = $1, carrerauniversitaria = $2, inicioacademico = $3, finacademico = $4, erescolegiado = $5 WHERE idformacioninicial = $6",
          [
            req.body.institucion,
            req.body.profesion,
            req.body.inicioacademico,
            req.body.finacademico,
            req.body.expedicionfechacole,
            idfaca,
          ]
        );
      } else if (filenamecole === "") {
        const result = await pool.query(
          "UPDATE tb_formacioninicial SET universidad = $1, carrerauniversitaria = $2, inicioacademico = $3, finacademico = $4, documentotitulo = $5, erescolegiado = $6 WHERE idformacioninicial = $7",
          [
            req.body.institucion,
            req.body.profesion,
            req.body.inicioacademico,
            req.body.finacademico,
            filenamegl,
            req.body.expedicionfechacole,
            idfaca,
          ]
        );
        filenamegl = "";
      } else if (filenamegl === "") {
        const result = await pool.query(
          "UPDATE tb_formacioninicial SET universidad = $1, carrerauniversitaria = $2, inicioacademico = $3, finacademico = $4, documentocolegiado = $5, erescolegiado = $6 WHERE idformacioninicial = $7",
          [
            req.body.institucion,
            req.body.profesion,
            req.body.inicioacademico,
            req.body.finacademico,
            filenamecole,
            req.body.expedicionfechacole,
            idfaca,
          ]
        );
        filenamecole = "";
      } else {
        const result = await pool.query(
          "UPDATE tb_formacioninicial SET universidad = $1, carrerauniversitaria = $2, inicioacademico = $3, finacademico = $4, documentotitulo = $5, documentocolegiado = $6, erescolegiado = $7 WHERE idformacioninicial = $8",
          [
            req.body.institucion,
            req.body.profesion,
            req.body.inicioacademico,
            req.body.finacademico,
            filenamegl,
            filenamecole,
            req.body.expedicionfechacole,
            idfaca,
          ]
        );
        filenamegl = "";
        filenamecole = "";
      }
    } else {
      if (filenamecole === "" && filenamegl === "") {
        const result = await pool.query(
          "UPDATE tb_formacioninicial SET universidad = $1, carrerauniversitaria = $2, inicioacademico = $3, finacademico = $4, erescolegiado = $5, fechaexpediciontitulo = $7 WHERE idformacioninicial = $6",
          [
            req.body.institucion,
            req.body.profesion,
            req.body.inicioacademico,
            req.body.finacademico,
            req.body.expedicionfechacole,
            idfaca,
            req.body.expedicionfecha,
          ]
        );
      } else if (filenamecole === "") {
        const result = await pool.query(
          "UPDATE tb_formacioninicial SET universidad = $1, carrerauniversitaria = $2, inicioacademico = $3, finacademico = $4, documentotitulo = $5, erescolegiado = $6, fechaexpediciontitulo = $8 WHERE idformacioninicial = $7",
          [
            req.body.institucion,
            req.body.profesion,
            req.body.inicioacademico,
            req.body.finacademico,
            filenamegl,
            req.body.expedicionfechacole,
            idfaca,
            req.body.expedicionfecha,
          ]
        );
        filenamegl = "";
      } else if (filenamegl === "") {
        const result = await pool.query(
          "UPDATE tb_formacioninicial SET universidad = $1, carrerauniversitaria = $2, inicioacademico = $3, finacademico = $4, documentocolegiado = $5, erescolegiado = $, fechaexpediciontitulo = $8 WHERE idformacioninicial = $7",
          [
            req.body.institucion,
            req.body.profesion,
            req.body.inicioacademico,
            req.body.finacademico,
            filenamecole,
            req.body.expedicionfechacole,
            idfaca,
            req.body.expedicionfecha,
          ]
        );
        filenamecole = "";
      } else {
        const result = await pool.query(
          "UPDATE tb_formacioninicial SET universidad = $1, carrerauniversitaria = $2, inicioacademico = $3, finacademico = $4, documentotitulo = $5, documentocolegiado = $6, erescolegiado = $7, fechaexpediciontitulo = $9 WHERE idformacioninicial = $8",
          [
            req.body.institucion,
            req.body.profesion,
            req.body.inicioacademico,
            req.body.finacademico,
            filenamegl,
            filenamecole,
            req.body.expedicionfechacole,
            idfaca,
            req.body.expedicionfecha,
          ]
        );
        filenamegl = "";
        filenamecole = "";
      }
    }

    res.redirect("http://143.198.153.102:4010/profile");
  }
);

router.post(
  "/updatefacademicapost/:tb_id",
  upload2.fields([{ name: "documentoti" }, { name: "documentocole" }]),
  async (req, res, next) => {
    let idfaca = req.params.tb_id;
    console.log(req.body);
    if (req.body.universidad === "") {
      req.body.universidad = null;
    }
    if (req.body.profesion === "") {
      req.body.profesion = null;
    }
    if (req.body.inicio === "") {
      req.body.inicio = null;
    }
    if (req.body.fin === "") {
      req.body.fin = null;
    }
    if (req.body.FechaExpedicionTitulo === "") {
      await pool.query(
        "UPDATE tb_formacioninicial SET universidad = $1, carrerauniversitaria = $2, inicioacademico = $3, finacademico = $4 WHERE idformacioninicial = $5",
        [
          req.body.universidad,
          req.body.profesion,
          req.body.inicio,
          req.body.fin,
          idfaca,
        ]
      );
    } else {
      await pool.query(
        "UPDATE tb_formacioninicial SET universidad = $1, carrerauniversitaria = $2, inicioacademico = $3, finacademico = $4, fechaexpediciontitulo = $5 WHERE idformacioninicial = $6",
        [
          req.body.universidad,
          req.body.profesion,
          req.body.inicio,
          req.body.fin,
          req.body.FechaExpedicionTitulo,
          idfaca,
        ]
      );
    }
    console.log(req.body);
    if (filenamegl) {
      await pool.query(
        "UPDATE tb_formacioninicial SET documentotitulo  = $1 WHERE idformacioninicial = $2",
        [filenamegl, idfaca]
      );
    }

    res.redirect("http://143.198.153.102:4010/profile");
  }
);

router.post(
  "/updatefcontinua/:tb_id",
  upload3.single("FormacionContinuaDocumento"),
  async (req, res, next) => {
    let idfaca = req.params.tb_id;
    console.log(req.body);
    if (req.body.forcontinua === "") {
      req.body.forcontinua = null;
    }
    if (req.body.inEducativa === "") {
      req.body.inEducativa = null;
    }
    if (req.body.horasacademicas === "") {
      req.body.horasacademicas = null;
    }
    if (req.body.FechaExpedicionTitulo === "") {
      await pool.query(
        "UPDATE tb_formacioncontinua SET nombrelogro = $1, institucioneducativa = $2, horasacademicas = $3 WHERE idformacioncontinua = $4",
        [
          req.body.forcontinua,
          req.body.inEducativa,
          req.body.horasacademicas,
          idfaca,
        ]
      );
    } else {
      await pool.query(
        "UPDATE tb_formacioncontinua SET nombrelogro = $1, institucioneducativa = $2, horasacademicas = $3, fechaexpedicion = $4 WHERE idformacioncontinua = $5",
        [
          req.body.forcontinua,
          req.body.inEducativa,
          req.body.horasacademicas,
          req.body.FechaExpedicionTitulo,
          idfaca,
        ]
      );
    }
    console.log(req.body);
    if (filenamegl) {
      await pool.query(
        "UPDATE tb_formacioncontinua SET formacioncontinuadocumento = $1 WHERE idformacioncontinua = $2",
        [filenamegl, idfaca]
      );
    }

    res.redirect("http://143.198.153.102:4010/profile");
  }
);

router.post(
  "/updateexperiencia/:tb_id",
  upload4.single("documentoexp"),
  async (req, res, next) => {
    let idfaca = req.params.tb_id;
    console.log(req.body);
    if (req.body.FechaInicio !== "") {
      await pool.query(
        "UPDATE tb_experiencialaboral SET experienciafechainicio = $1 WHERE idexperiencialaboral = $2",
        [req.body.FechaInicio, idfaca]
      );
    }
    if (req.body.FechaFin !== "") {
      await pool.query(
        "UPDATE tb_experiencialaboral SET experienciafechafinal = $1 WHERE idexperiencialaboral = $2",
        [req.body.FechaFin, idfaca]
      );
    }
    if (req.body.funciones !== "") {
      await pool.query(
        "UPDATE tb_experiencialaboral SET funcionesdesarrolladas = $1 WHERE idexperiencialaboral = $2",
        [req.body.funciones, idfaca]
      );
    }
    await pool.query(
      "UPDATE tb_experiencialaboral SET nombrecargo = $1, nombreempresa = $2, sectorempresarial = $3 WHERE idexperiencialaboral = $4",
      [req.body.nomcargo, req.body.nomempresa, req.body.sectorempresa, idfaca]
    );

    if (filenamegl) {
      await pool.query(
        "UPDATE tb_experiencialaboral SET certificadopostulante = $1 WHERE idexperiencialaboral = $2",
        [filenamegl, idfaca]
      );
    }

    res.redirect("http://143.198.153.102:4010/profile");
  }
);

router.get("/profile", isLoggedIn, function (req, res) {
  res.render("profile");
});


//facebook
router.get(
  "/auth/facebook",
  passport.authenticate("facebook", { scope: "email" })
);

router.get(
  "/facebook/callback",
  passport.authenticate("facebook", {
    successRedirect: "/profile",
    failureRedirect: "/failed",
  })
);

router.get("/profile", (req, res) => {
  res.send("tu usuario esta validado profile");
});

router.get("/failed", (req, res) => {
  res.send("tu usuario esta validado failed");
});

router.use(passport.initialize());
router.use(passport.session());

router.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["email"] })
);

router.get("/google/callback", (req, res, next) => {
  passport.authenticate("google", {
    successRedirect: "/profile",
    failureRedirect: "/auth/failure",
  })(req, res, next);
});

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "http://143.198.153.102:4010/google/callback",
      passReqToCallback: true,
    },
    async function (req, emails, password, profile, done) {
      console.log(profile);
      console.log("Email: ");
      console.log(profile.displayName);
      console.log(profile.emails[0].value);
      console.log("////////7Email: ");
      ////////////////

      let contra = profile.id;
      contra = await helpers.encryptPassword(profile.id);

      const result_email = await pool.query(
        "SELECT * FROM users WHERE email = $1",
        [profile.emails[0].value]
      );
      console.log(result_email);
      if (result_email.rows.length == 0) {
        console.log("is ok");

        try {
          const result = await pool.query(
            "INSERT INTO users (tipUsu, nom_usu, email, password) VALUES (1, $1, $2, $3)",
            [profile.emails[0].value, profile.emails[0].value, contra]
          );
          const acercadeticonsultor = await pool.query(
            "INSERT INTO tb_acercadeti_consultor (iddocumento, email) VALUES ($1, $2)",
            [1, profile.emails[0].value]
          );
          const habilidadesconsultor = await pool.query(
            "INSERT INTO tb_Habilidades_Consultor (email, comunicativas, equipo, iniciativas, puntualidad, pensamiento) VALUES ($1, $2, $3, $4, $5, $6)",
            [profile.emails[0].value, 5, 5, 5, 5, 5]
          );
          console.log(result);
          console.log("is ok2");
          let hoy = new Date();
          let mm = hoy.getMonth() + 1;
          const fecha = hoy.getFullYear() + "-" + mm + "-" + hoy.getDate();
          const eqdate = true;
          const nom_usu = profile.emails[0].value;
          const email = profile.emails[0].value;
          const password = profile.id;
          const passwordcry = contra;
          let newUser = {
            nom_usu,
            email,
            password,
            passwordcry,
            fecha,
            eqdate,
          };
          return done(null, newUser);
        } catch (e) {
          console.log(e);
        }
      } else if (result_email.rows.length > 0) {
        console.log("////////999999120Email: ");
        var hoy = new Date();
        var mm = hoy.getMonth() + 1;
        var fecha = hoy.getFullYear() + "-" + mm + "-" + hoy.getDate();
        const pass = result_email.rows[0].password;

        let contras = profile.id;

        const validPassword = await helpers.matchPassword(contras, pass);
        if (validPassword) {
          await pool.query(
            "UPDATE users SET fecha_ult_se = $1 WHERE email = $2",
            [fecha, result_email.rows[0].email]
          );
          const res = await pool.query(
            "SELECT * FROM tb_acercadeti_consultor WHERE email = $1 ",
            [result_email.rows[0].email]
          );

          done(null, result_email.rows[0].email);
          console.log(profile.displayName);
        } else {
          done(null, false, req.flash("message", "Contraseña incorrecta"));
        }
      } else {
        return done(null, false, req.flash("message", "Usuario incorrecto"));
      }
    }
  )
);

router.get(
  "/auth/facebook",
  passport.authenticate("facebook", { scope: "email" })
);

router.get("/facebook/callback", (req, res, next) => {
  passport.authenticate("facebook", {
    successRedirect: "/profile",
    failureRedirect: "/failed",
    failureFlash: true,
  })(req, res, next);
});

passport.use(
  new facebookStrategy(
    {
      clientID: FACEBOOK_APP_ID,
      clientSecret: FACEBOOK_APP_SECRET,
      callbackURL: "http://143.198.153.102:4010/facebook/callback",
      profileFields: [
        "id",
        "displayName",
        "name",
        "gender",
        "picture.type(large)",
        "email",
      ],
      passReqToCallback: true,
    },
    async function (req, emails, password, profile, done) {
      console.log(profile);
      console.log("Email: ");
      console.log(profile.displayName);
      console.log(profile.emails[0].value);
      console.log("////////7Email: ");
      ////////////////

      let contra = profile.id;
      contra = await helpers.encryptPassword(profile.id);

      const result_email = await pool.query(
        "SELECT * FROM users WHERE email = $1",
        [profile.emails[0].value]
      );
      console.log(result_email);
      if (result_email.rows.length == 0) {
        console.log("is ok");
        try {
          const result = await pool.query(
            "INSERT INTO users (tipUsu, nom_usu, email, password) VALUES (1, $1, $2, $3)",
            [profile.displayName, profile.emails[0].value, contra]
          );
          const acercadeticonsultor = await pool.query(
            "INSERT INTO tb_acercadeti_consultor (iddocumento, email) VALUES ($1, $2)",
            [1, profile.emails[0].value]
          );
          const habilidadesconsultor = await pool.query(
            "INSERT INTO tb_Habilidades_Consultor (email, comunicativas, equipo, iniciativas, puntualidad, pensamiento) VALUES ($1, $2, $3, $4, $5, $6)",
            [profile.emails[0].value, 5, 5, 5, 5, 5]
          );
          console.log(result);
          console.log("is ok2");
          let hoy = new Date();
          let mm = hoy.getMonth() + 1;
          const fecha = hoy.getFullYear() + "-" + mm + "-" + hoy.getDate();
          const eqdate = true;
          const nom_usu = profile.emails[0].value;
          const email = profile.emails[0].value;
          const password = profile.id;
          const passwordcry = contra;
          let newUser = {
            nom_usu,
            email,
            password,
            passwordcry,
            fecha,
            eqdate,
          };
          return done(null, newUser);
        } catch (e) {
          console.log(e);
        }
      } else if (result_email.rows.length > 0) {
        console.log("////////999999120Email: ");
        var hoy = new Date();
        var mm = hoy.getMonth() + 1;
        var fecha = hoy.getFullYear() + "-" + mm + "-" + hoy.getDate();
        const pass = result_email.rows[0].password;

        let contras = profile.id;

        const validPassword = await helpers.matchPassword(contras, pass);
        if (validPassword) {
          await pool.query(
            "UPDATE users SET fecha_ult_se = $1 WHERE email = $2",
            [fecha, result_email.rows[0].email]
          );
          const res = await pool.query(
            "SELECT * FROM tb_acercadeti_consultor WHERE email = $1 ",
            [result_email.rows[0].email]
          );

          const nom_usu = profile.emails[0].value;
          const email = profile.emails[0].value;

          let newUser = {
            nom_usu,
            email,
          };

          return done(null, result_email.rows[0].email, newUser);
        } else {
          done(null, false, req.flash("message", "Contrasena incorrecta"));
        }
      } else {
        return done(null, false, req.flash("message", "Usuario incorrecto"));
      }
    }
  )
);

router.get("/auth/failure", (req, res) => {
  res.send("te salio mal");
});

router.get("/protected", (req, res) => {
  res.send("hello!");
});

module.exports = router;
