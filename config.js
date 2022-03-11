require('dotenv').config();

const config = {
  talento_email: process.env.TALENTO_EMAIL,
  talento_password: process.env.TALENTO_PASSWORD,
  jwtSecretLog: process.env.JWT_SECRET_LOG,
  jwtSecretTime: process.env.JWT_SECRET_TIME,
  jwtSecretPassword: process.env.JWT_SECRET_PASSWORD,
}

module.exports = { config };