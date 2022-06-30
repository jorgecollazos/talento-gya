const express = require("express");

const router = express.Router();
const pool = require("../libs/postgres.pool");

router.get("/", async (req, res, next) => {
  try {
    const users = await pool.query("SELECT * FROM users");
    res.json(users.rows);
  } catch (error) {
    console.error(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const { email, password } = req.body;
    let hoy = new Date();
    let mm = hoy.getMonth() + 1;
    let date = hoy.getFullYear() + "-" + mm + "-" + hoy.getDate();
    const newUser = await pool.query(
      "INSERT INTO users (email, password, account_creation, last_session) VALUES ($1, $2, $3, $4)",
      [email, password, date, date]
    );
    const id = await pool.query(
      "SELECT id FROM users WHERE email = $1 and password = $2",
      [email, password]
    );
    const token = {
      token: id.rows[0].id,
    };
    res.status(201).json(token);
  } catch (error) {
    console.error(error);
  }
});

router.post("/information", async (req, res, next) => {
  try {
    const {
      name,
      f_last_name,
      m_last_name,
      birthday,
      cellphone,
      document_number,
      cellphone_code,
      document_type,
      token,
    } = req.body;

    const query = await pool.query(
      "INSERT INTO users_information (user_id, name, f_last_name, m_last_name, birthday, cellphone_code, cellphone, document_type, document_number) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)",
      [token, name, f_last_name, m_last_name, birthday, cellphone_code, cellphone, document_type, document_number]
    );
    
    // let hoy = new Date();
    // let mm = hoy.getMonth() + 1;
    // let date = hoy.getFullYear() + "-" + mm + "-" + hoy.getDate();
    // const newUser = await pool.query(
    //   "INSERT INTO users (email, password, account_creation, last_session) VALUES ($1, $2, $3, $4)",
    //   [email, password, date, date]
    // );
    // const token = {
    //   'token': 'asdsad1231dqsda'
    // }
    res.status(201).json(token);
  } catch (error) {
    console.error(error);
  }
});

router.post("/academic", async (req, res, next) => {
  try {
    const {
      colegiado,
      proof_date,
      selectedDegree,
      selectedNivelEstudio,
      selectedNivelObtenido,
      selectedUniversity,
      token,
    } = req.body;

    const query = await pool.query(
      "INSERT INTO user_education (user_id, educational_level, level_obtained, institution, graduation_degree, proof_date, collegiate) VALUES ($1, $2, $3, $4, $5, $6, $7)",
      [token, selectedNivelEstudio, selectedNivelObtenido, selectedUniversity, selectedDegree, proof_date, colegiado]
    );
    
    // let hoy = new Date();
    // let mm = hoy.getMonth() + 1;
    // let date = hoy.getFullYear() + "-" + mm + "-" + hoy.getDate();
    // const newUser = await pool.query(
    //   "INSERT INTO users (email, password, account_creation, last_session) VALUES ($1, $2, $3, $4)",
    //   [email, password, date, date]
    // );
    // const token = {
    //   'token': 'asdsad1231dqsda'
    // }
    res.status(201).json(token);
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
