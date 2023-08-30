const { Post, Category, Favorite } = require("../models");

class Controller {
  static async showFav(req, res, next) {
    try {
      const favorite = await Favorite.findAll({
        where: { userId: req.user.id },
        attributes: { exclude: ["postId"] },
        include: Post,
      });

      res.status(200).json(favorite);
    } catch (err) {
      next(err);
    }
  }
  static async addFav(req, res, next) {
    try {
      await Favorite.create({
        userId: req.user.id,
        postId: req.params.postId,
      });

      res.status(201).json({ message: "Succesfully added to favorite" });
    } catch (err) {
      next(err);
    }
  }
  static async delete(req, res, next) {
    try {
      const deleteFav = await Favorite.destroy({
        where: { postId: req.params.postId },
      });

      res.status(200).json(deleteFav);
    } catch (err) {
      next(err);
    }
  }
}

module.exports = Controller;
