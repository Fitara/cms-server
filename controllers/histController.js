const { History } = require("../models/index");

class Controller {
  static async histories(req, res, next) {
    try {
      const history = await History.findAll({
        order: [["id", "DESC"]],
      });

      res.status(200).json(history);
    } catch (err) {
      next(err);
    }
  }
}

module.exports = Controller;
