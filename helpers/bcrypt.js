const bcrypt = require("bcryptjs");

const compare = (password, hashed) => bcrypt.compareSync(password, hashed);

module.exports = { compare };
