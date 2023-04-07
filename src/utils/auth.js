const jwt = require('jsonwebtoken');

const { JWT_SECRET } = process.env;

const options = {
  algorithm: 'HS256',
  expiresIn: '1 day',
};

const genToken = (user) => {
  const payload = {
    email: user.email,
    id: user.id,
  };
  return jwt.sign(payload, JWT_SECRET, options);
};

module.exports = { genToken };