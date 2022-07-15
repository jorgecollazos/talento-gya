const { Pool } = require('pg');

const { config } = require('./../config/config');

// const options = {
//   connectionString: config.dbUrl
// };

// if (config.isProd) {
//   options.ssl =  {
//     rejectUnauthorized: false
//   };
// }

const pool = new Pool({
  host: config.dbHost,
  port: config.dbPort,
  user: config.dbUser,
  password: config.dbPassword,
  database: config.dbName,
  ssl: true
});

module.exports = pool;
