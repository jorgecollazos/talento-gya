const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    //res.send('hola');
    res.render('auth/signin');
});

module.exports = router;