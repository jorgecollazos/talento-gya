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
      [
        token,
        name,
        f_last_name,
        m_last_name,
        birthday,
        cellphone_code,
        cellphone,
        document_type,
        document_number,
      ]
    );
    res.status(201).json(token);
  } catch (error) {
    console.error(error);
  }
});

router.put("/information", async (req, res, next) => {
  try {
    const {
      cellphone,
      cellphone_code,
      country,
      state,
      province,
      address,
      token,
    } = req.body;

    const query = await pool.query(
      "UPDATE users_information SET cellphone_code = $1, cellphone = $2, country = $3, state = $4, province = $5, address = $6 WHERE user_id = $7",
      [cellphone_code, cellphone, country, state, province, address, token]
    );
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
      [
        token,
        selectedNivelEstudio,
        selectedNivelObtenido,
        selectedUniversity,
        selectedDegree,
        proof_date,
        colegiado,
      ]
    );
    res.status(201).json(token);
  } catch (error) {
    console.error(error);
  }
});

router.post("/continuos", async (req, res, next) => {
  try {
    const {
      certificationName,
      documentDate,
      hours,
      selectedCurso,
      selectedUniversity,
      token,
    } = req.body;

    const query = await pool.query(
      "INSERT INTO user_continuos (user_id, certification_type, institution, certification_name, certification_hours, document_date) VALUES ($1, $2, $3, $4, $5, $6)",
      [
        token,
        selectedCurso,
        selectedUniversity,
        certificationName,
        hours,
        documentDate,
      ]
    );
    res.status(201).json(token);
  } catch (error) {
    console.error(error);
  }
});

router.post("/experience", async (req, res, next) => {
  try {
    const {
      cargo,
      empresa,
      endDate,
      startDate,
      validEndDate,
      valueTexTarea,
      valueTexTarea2,
      valueTexTarea3,
      valueTexTarea4,
      valueTexTarea5,
      token,
    } = req.body;

    if (validEndDate) {
      const query = await pool.query(
        "INSERT INTO user_experience (user_id, institution, position, start_date) VALUES ($1, $2, $3, $4)",
        [token, empresa, cargo, startDate]
      );
    } else {
      const query = await pool.query(
        "INSERT INTO user_experience (user_id, institution, position, start_date, end_date) VALUES ($1, $2, $3, $4, $5)",
        [token, empresa, cargo, startDate, endDate]
      );
    }

    const last_experience = await pool.query(
      "SELECT max(id) from user_experience"
    );
    if (valueTexTarea) {
      const queryTexTarea = await pool.query(
        "INSERT INTO experience_function (experience_id, function) VALUES ($1, $2)",
        [last_experience.rows[0].max, valueTexTarea]
      );
    }
    if (valueTexTarea2) {
      const queryTexTarea2 = await pool.query(
        "INSERT INTO experience_function (experience_id, function) VALUES ($1, $2)",
        [last_experience.rows[0].max, valueTexTarea2]
      );
    }
    if (valueTexTarea3) {
      const queryTexTarea3 = await pool.query(
        "INSERT INTO experience_function (experience_id, function) VALUES ($1, $2)",
        [last_experience.rows[0].max, valueTexTarea3]
      );
    }
    if (valueTexTarea4) {
      const queryTexTarea4 = await pool.query(
        "INSERT INTO experience_function (experience_id, function) VALUES ($1, $2)",
        [last_experience.rows[0].max, valueTexTarea4]
      );
    }
    if (valueTexTarea5) {
      const queryTexTarea5 = await pool.query(
        "INSERT INTO experience_function (experience_id, function) VALUES ($1, $2)",
        [last_experience.rows[0].max, valueTexTarea5]
      );
    }

    res.status(201).json(token);
  } catch (error) {
    console.error(error);
  }
});

router.get("/curriculum/:token", async (req, res, next) => {
  try {
    let token = req.params.token;
    const users = await pool.query("SELECT * FROM users WHERE id = $1", [
      token,
    ]);
    const users_information = await pool.query(
      "SELECT *, to_char(birthday,'DD-MM-YYYY') as birthday2 FROM users_information WHERE user_id = $1",
      [token]
    );
    const user_education = await pool.query(
      "SELECT *,  to_char(proof_date,'DD-MM-YYYY') as proof_date2 FROM user_education WHERE user_id = $1",
      [token]
    );
    const user_continuos = await pool.query(
      "SELECT *, to_char(document_date,'DD-MM-YYYY') as document_date2 FROM user_continuos WHERE user_id = $1",
      [token]
    );
    const user_experience = await pool.query(
      "SELECT *,to_char(start_date,'DD-MM-YYYY') as start_date2, to_char(end_date,'DD-MM-YYYY') as end_date2 FROM user_experience WHERE user_id = $1",
      [token]
    );
    let user_experiences = [];
    for (let i = 0; i < user_experience.rows.length; i++) {
      const experience_function = await pool.query(
        "SELECT * FROM experience_function WHERE experience_id = $1",
        [user_experience.rows[i].id]
      );
      user_experiences.push(experience_function.rows);
    }

    let data = [
      token,
      users.rows[0],
      users_information.rows[0],
      user_education.rows,
      user_continuos.rows,
      user_experience.rows,
      user_experiences,
    ];
    res.status(201).json(data);
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
