const jwt = require('jsonwebtoken');

const { JWT_SECRET } = process.env;

const auth = (req, res, next) => {
  // header
  const token = req.headers.authorization;
  // validate
  if (!token) return res.status(401).json({ message: 'Token not found' });
  // try catch return
  try {
    const validatedToken = jwt.verify(token, JWT_SECRET);
    req.user = validatedToken;
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = auth;