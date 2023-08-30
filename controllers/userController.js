const { User } = require("../models/index");
const { compare } = require("../helpers/bcrypt");
const { token } = require("../helpers/jwt");
const { OAuth2Client } = require("google-auth-library");
const clientId = process.env.clientId;

class Controller {
  static async register(req, res, next) {
    try {
      const newUser = await User.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        role: "Admin",
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
  static async google(req, res, next) {
    try {
      const client = new OAuth2Client(clientId);
      const ticket = await client.verifyIdToken({
        idToken: req.headers.token,
        audience: clientId,
      });

      const payload = ticket.getPayload();
      const [user] = await User.findOrCreate({
        where: { email: payload.email },
        defaults: {
          username: payload.name,
          password: "secret",
          email: payload.email,
          role: "Staff",
          phoneNumber: "secret",
          address: "secret",
        },
        hooks: false,
      });

      const access_token = token({
        id: user.id,
        email: user.email,
      });

      res.status(200).json({
        access_token,
        id: user.id,
        name: user.username,
        role: user.role,
        
      })
    } catch (err) {
      next(err);
    }
  }
}

module.exports = Controller;
