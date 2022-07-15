const express = require('express')

const router = express.Router();
const pool = require('../libs/postgres.pool');

router.get('/', async (req, res, next) => {
  try {
    const users = await pool.query('SELECT * FROM users');
    res.json(users);
  } catch (error) {
    console.error(error);
  }
});

router.post('/', async (req, res, next) => {
  const {email, password} = req.body;
  try {
    const users = await pool.query('SELECT password, id FROM users WHERE email = $1', [email]);
    if(users.rows[1].password == password) {
      res.json({'value': true, 'token': users.rows[1].id});
    }
    res.json({'value': false});
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;