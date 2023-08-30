const { OAuth2Client } = require("google-auth-library");
const { compare } = require("../helpers/bcrypt");
const { token } = require("../helpers/jwt");
const { User } = require("../models");
const CLIENT_ID = process.env.CLIENT_ID;

class Controller {
  static async register(req, res, next) {
    try {
      const newUser = await User.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        role: "Customer",
        phoneNumber: req.body.phoneNumber,
        address: req.body.address,
      });

      res.status(201).json({
        id: newUser.id,
        username: newUser.username,
        email: newUser.email,
      });
    } catch (err) {
      next(err);
    }
  }
  static async login(req, res, next) {
    try {
      const { email, password } = req.body;
      if (!email || !password) throw { name: "EmailorPasswordRequired" };

      const user = await User.findOne({ where: { email } });
      if (!user) throw { name: "EmailorPasswordRequired" };

      const checkPass = compare(password, user.password);
      if (!checkPass) throw { name: "EmailorPasswordRequired" };

      const payload = { id: user.id };

      const access_token = token(payload);

      res.status(200).json({
        access_token,
        id: user.id,
        name: user.username,
        role: user.role,
      });
    } catch (err) {
      next(err);
    }
  }
  static async googleLogin(req, res, next) {
    try {
      const client = new OAuth2Client(CLIENT_ID);
      const ticket = await client.verifyIdToken({
        idToken: req.headers.token,
        audience: CLIENT_ID,
      });

      const payload = ticket.getPayload();
      const [user] = await User.findOrCreate({
        where: { email: payload.email },
        default: {
          username: payload.name,
          email: payload.email,
          password: "secret",
          role: "Customer",
          phoneNumber: 682666,
          address: "Pondok Indah",
        },
        hooks: false,
      });

      const access_token = token({ id: user.id, email: user.email });

      res.status(200).json({
        access_token,
        id: user.id,
        username: user.username,
      });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = Controller;
