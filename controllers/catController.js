const { Category, History } = require("../models/index");

class Controller {
  static async showCategories(req, res, next) {
    try {
      const categories = await Category.findAll();

      res.status(200).json(categories);
    } catch (err) {
      next(err);
    }
  }
  static async createCat(req, res, next) {
    try {
      const category = await Category.create({ name: req.body.name });

      await History.create({
        title: req.body.name,
        description: `New ${category.name} with id ${req.user.id} created`,
        updatedBy: req.user.email,
      });

      res
        .status(201)
        .json({ message: `${category.name} succesfully created.` });
    } catch (err) {
      next(err);
    }
  }
  static async replace(req, res, next) {
    try {
      const category = await Category.findByPk(req.params.id);
      if (!category) throw { name: "CatsNotFound" };

      await Category.update(
        { authorId: req.user.id, name: req.body.name },
        { where: { id: req.params.id } }
      );

      await History.create({
        title: req.body.name,
        description: `${category.name} with id ${req.user.id} updated`,
        updatedBy: req.user.email,
      });

      res.status(200).json({ message: `${category.name} succesfully updated` });
    } catch (err) {
      next(err);
    }
  }
  static async categoryById(req, res, next) {
    try {
      const category = await Category.findByPk(req.params.id);
      if (!category) throw { name: "CatsNotFound" };

      res.status(200).json(category);
    } catch (err) {
      next(err);
    }
  }
  static async delete(req, res, next) {
    try {
      const category = await Category.findByPk(req.params.id);
      if (!category) throw { name: "CatsNotFound" };

      await Category.destroy({ where: { id: req.params.id } });

      await History.create({
        title: category.name,
        description: `Category with id ${category.id} has been deleted.`,
        updatedBy: req.user.email,
      });

      res.status(200).json({ message: `${category.id} deleted succesfully.` });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = Controller;
