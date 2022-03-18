const express = require("express");
const morgan = require("morgan");
const exphbs = require("express-handlebars");
const path = require("path");
const session = require("express-session");
const validator = require("express-validator");
const passport = require("passport");
const flash = require("connect-flash");
const PostgreSqlStore = require("express-pg-session")(session);
const bodyParser = require("body-parser");
const pool = require("./database");
const { database } = require("./keys");
const app = express();
const cookieParser = require("cookie-parser");
const facebookStrategy = require("passport-facebook").Strategy;
//pdf
const fs = require("fs");
const PDFDocument = require("pdfkit");
const utils = require("util");
const hb = require("handlebars");
const puppeteer = require("puppeteer");
const readFile = utils.promisify(fs.readFile);

const cors = require("cors");

//google auth
const { OAuth2Client } = require("google-auth-library");
const { reset } = require("nodemon");
const CLIENT_ID =
  "771954959053-tpsc0p2a5rj5stm9rqq1uen5oqaeitgh.apps.googleusercontent.com";
const client = new OAuth2Client(CLIENT_ID);
const helpers = require("./lib/helpers");
const LocalStrategy = require("passport-local").Strategy;

// Intializations
require("./lib/passport");

function generateHeader(doc) {
  doc
    .image("./public/img/TALENTO.png", 50, 45, { width: 50 })
    .fillColor("#444444")
    .fontSize(20)
    .text("ACME Inc.", 110, 57)
    .fontSize(10)
    .text("123 Main Street", 200, 65, { align: "right" })
    .text("New York, NY, 10025", 200, 80, { align: "right" })
    .moveDown();
}

function generateFooter(doc) {
  doc
    .fontSize(10)
    .text(
      "Payment is due within 15 days. Thank you for your business.",
      50,
      780,
      { align: "center", width: 500 }
    );
}

const createPDF = async (name, about, grado1, grado2, continua, exper) => {
  const doc = new PDFDocument({ size: "A4", margin: 50 });
  const docName = name;
  const docPath = `./public/shareCV/${name}.pdf`;



  generateHeader(doc);

  doc.fontSize(22);
  doc.text(
    `${about.primernombre} ${about.apellidopaterno} ${about.apellidomaterno}`,
    50,
    80,
    {
      width: 410,
      align: "left",
    }
  );
  doc.fontSize(18);
  doc.text(
    `${about.email}`,
    {
      width: 410,
      align: "left",
    }
  );

  doc.fontSize(16);
  doc.text(`           `, {
    width: 410,
    align: "left",
  });

  doc.fontSize(16);
  doc.text(`Experiencia`, {
    width: 410,
    align: "left",
  });

  if (exper) {
    for (var i = 0; i < exper.length; i++) {
      doc.fontSize(5);
      doc.text(`           `, {
        width: 410,
        align: "left",
      });

      let arr = [];
      if (exper[i].funcionesdesarrolladas) {
        arr.push(exper[i].funcionesdesarrolladas);
      }
      if (exper[i].funcion2) {
        arr.push(exper[i].funcion2);
      }
      if (exper[i].funcion3 > 0) {
        arr.push(exper[i].funcion3);
      }
      if (exper[i].funcion4 > 0) {
        arr.push(exper[i].funcion4);
      }
      if (exper[i].funcion5 > 0) {
        arr.push(exper[i].funcion5);
      }

      doc.fontSize(14);
      doc.text(
        `${exper[i].nombrecargo} - ${exper[i].nombreempresa}`,
        {
          width: 410,
          align: "left",
        }
      );
      doc.fontSize(12);
      doc.text(`${exper[i].inicio} - ${exper[i].final}`, {
        width: 410,
        align: "left",
      });
      doc.text(`Funciones:`, {
        width: 410,
        align: "left",
      });
      doc.list(arr);
    }
  }

  doc.fontSize(10);
  doc.text(`           `, {
    width: 410,
    align: "left",
  });

  doc.fontSize(16);
  doc.text(`Formación académica`, {
    width: 410,
    align: "left",
  });

  if (grado1) {
    for (let i = 0; i < grado1.length; i++) {
      doc.fontSize(5);
      doc.text(`           `, {
        width: 410,
        align: "left",
      });
      doc.fontSize(14);
      doc.text(
        `${grado1[i].carrerauniversitaria} - ${grado1[i].universidad}`,
        {
          width: 410,
          align: "left",
        }
      );
      doc.fontSize(12);
      doc.text(
        `${grado1[i].inicioacademico} - ${grado1[i].finacademico}`,
        {
          width: 410,
          align: "left",
        }
      );
    }
  }

  if (grado2) {
    for (var i = 0; i < grado2.length; i++) {
      doc.fontSize(5);
      doc.text(`           `, {
        width: 410,
        align: "left",
      });
      doc.fontSize(14);
      doc.text(
        `${grado2[i].carrerauniversitaria} - ${grado2[i].universidad}`,
        {
          width: 410,
          align: "left",
        }
      );
      doc.fontSize(12);
      doc.text(
        `${grado2[i].inicioacademico} - ${grado2[i].finacademico}`,
        {
          width: 410,
          align: "left",
        }
      );
    }
  }

  doc.fontSize(10);
  doc.text(`           `, {
    width: 410,
    align: "left",
  });

  doc.fontSize(16);
  doc.text(`Formación continua`, {
    width: 410,
    align: "left",
  });

  if (continua) {
    for (var i = 0; i < continua.length; i++) {
      doc.fontSize(5);
      doc.text(`           `, {
        width: 410,
        align: "left",
      });
      doc.fontSize(14);
      doc.text(
        `${continua[i].nombrelogro} - ${continua[i].institucioneducativa}`,
        {
          width: 410,
          align: "left",
        }
      );
      doc.fontSize(12);
      doc.text(`${continua[i].fechaexpedicion}`, {
        width: 410,
        align: "left",
      });
    }
  }

  doc.end();
  doc.pipe(fs.createWriteStream(docPath));

  return [docName, docPath];
};


// Serializar y Deserializar
passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(async function (id, done) {
  const res2 = await pool.query("SELECT * FROM users WHERE email = $1", [id]);
  const res = await pool.query(
    "SELECT * FROM tb_acercadeti_consultor WHERE email = $1 ",
    [id]
  );
  if (res.rows.length > 0) {
    const fecha = await pool.query(
      "SELECT to_char(fechadenacimiento :: DATE, 'dd/mm/yyyy') as fechadenacimiento FROM tb_acercadeti_consultor  WHERE email = $1",
      [id]
    );
    const grado1 = await pool.query(
      "SELECT forinicial.idformacioninicial, forinicial.universidad, forinicial.carrerauniversitaria, to_char(forinicial.fechaexpediciontitulo :: DATE, 'dd/mm/yyyy') as fechaexpediciontitulo, forinicial.documentotitulo, forinicial.documentocolegiado, forinicial.erescolegiado, forinicial.ultimacarrera, forinicial.idtipodeformacion, forinicial.idformacionpregrado, forinicial.idformacionpostgrado, forinicial.idsubpostgrado, forinicial.email, forinicial.inicioacademico, forinicial.finacademico, forpre.nombreformacionpregrado FROM tb_formacioninicial forinicial LEFT JOIN formacionpregrado forpre ON forpre.idformacionpregrado = forinicial.idformacionpregrado WHERE email = $1 AND idtipodeformacion = $2 ORDER BY idformacioninicial DESC",
      [id, 1]
    );
    const grado2 = await pool.query(
      "SELECT forinicial.idformacioninicial, forinicial.universidad, forinicial.carrerauniversitaria, to_char(forinicial.fechaexpediciontitulo :: DATE, 'dd/mm/yyyy') as fechaexpediciontitulo, forinicial.documentotitulo, forinicial.documentocolegiado, forinicial.erescolegiado, forinicial.ultimacarrera, forinicial.idtipodeformacion, forinicial.idformacionpregrado, forinicial.idformacionpostgrado, forinicial.idsubpostgrado, forinicial.email, forinicial.inicioacademico, forinicial.finacademico, forpost.nombreformacionpostgrado FROM tb_formacioninicial forinicial LEFT JOIN formacionpostgrado forpost ON forpost.idformacionpostgrado = forinicial.idformacionpostgrado WHERE email = $1 AND idtipodeformacion = $2 ORDER BY idformacioninicial DESC",
      [id, 2]
    );
    const continua = await pool.query(
      "SELECT continua.idformacioncontinua, continua.nombrelogro, continua.institucioneducativa, continua.horasacademicas, continua.formacioncontinuadocumento, to_char(continua.fechaexpedicion :: DATE, 'dd/mm/yyyy') as fechaexpedicion, continua.idselecformacioncontinua, s.nombreselecformacioncontinua FROM tb_formacioncontinua continua LEFT JOIN selecformacioncontinua s on continua.idselecformacioncontinua = s.idselecformacioncontinua WHERE continua.email = $1 ORDER BY continua.idformacioncontinua DESC",
      [id]
    );
    const exper = await pool.query(
      "SELECT idexperiencialaboral, to_char(experienciafechainicio :: DATE, 'dd/mm/yyyy') as inicio, to_char(experienciafechafinal :: DATE, 'dd/mm/yyyy') as final, funcionesdesarrolladas, funcion2, funcion3, funcion4, funcion5, certificadopostulante, nombrecargo, sectorempresarial, nombreempresa FROM tb_experiencialaboral WHERE email = $1 ORDER BY idexperiencialaboral DESC",
      [id]
    );
    const resultado = await pool.query(
      "SELECT n.nombreformacionpregrado FROM tb_formacioninicial as c INNER JOIN formacionpregrado as n ON n.idformacionpregrado = c.idformacionpregrado where  email  = $1 ",
      [id]
    );
    const resultados = await pool.query(
      "SELECT n.nombresubpostgrado FROM tb_formacioninicial as c INNER JOIN formacionsubpostgrado as n ON n.idsubpostgrado = c.idsubpostgrado where  email = $1",
      [id]
    );
    const resultados1 = await pool.query("SELECT * FROM formacionpregrado");
    const habilidades = await pool.query(
      "SELECT * FROM tb_habilidades_consultor WHERE email = $1 ",
      [id]
    );

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

    const pdf = await createPDF(id,
      uno,
      pregrado,
      postgrado,
      forcontinua,
      experiencia
    );

    let uno1 = "";
    let uno2 = "";

    if (res.rows[0].primernombre !== res.rows[0].apellidopaterno) {
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
      uno2,
    };
    done(null, tres);
  } else if (res2.rows.length > 0) {
    const uno = res2.rows[0];
    let cadena = {
      uno,
    };
    done(null, cadena);
  } else {
    done(null, id);
  }
});

// facebook auth
app.set("view engine", "ejs");

app.use(passport.initialize());
app.use(passport.session());
app.use(
  session({
    secret: "thisissecretkey",
    proxy: true,
    resave: true,
    saveUninitialized: true,
  })
);

app.use(cors());

// Settings
app.set("port", process.env.PORT || 4010);
app.set("views", path.join(__dirname, "views"));
app.engine(
  ".hbs",
  exphbs({
    defaultLayout: "main",
    layoutsDir: path.join(app.get("views"), "layouts"),
    partialsDir: path.join(app.get("views"), "partials"),
    extname: ".hbs",
    helpers: require("./lib/handlebars"),
  })
);
app.set("view engine", ".hbs");

// Middlewares
app.use(
  session({
    cookie: { maxAge: 60000 },
    secret: "woot",
    resave: false,
    saveUninitialized: false,
  })
);
app.use(flash());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(passport.initialize());
app.use(passport.session());

// Global variables
app.use((req, res, next) => {
  app.locals.message = req.flash("message");
  app.locals.success = req.flash("success");
  app.locals.user = req.user;
  next();
});

app.use(express.json());
app.use(cookieParser());

// Routes
app.use(require("./routes/index"));
app.use(require("./routes/authentication"));
app.use("/links", require("./routes/links"));

// Public
app.use(express.static(path.join(__dirname, "public")));

// Starting
app.listen(app.get("port"), () => {
  console.log("Server is in port", app.get("port"));
});
