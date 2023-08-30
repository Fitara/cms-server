const jwt = require("jsonwebtoken");
const SECRET = process.env.SECRET;

const token = (payload) => jwt.sign(payload, SECRET);
const verified = (token) => jwt.verify(token, SECRET);

module.exports = { token, verified };
