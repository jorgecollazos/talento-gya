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

module.exports = router;