const { Pool } = require('pg')
const { promisify } = require('util');
const pool = new Pool({
    host: 'localhost',
    user: 'gestion5',
    password: '9dJ8e5Vdy.*VO2',
    database: 'gestion5_talento_db',
    port: 5432,
})

pool.query = promisify(pool.query)

module.exports = pool;
