const { Post, User, Category, History } = require("../models/index");

class Controller {
  static async createPost(req, res, next) {
    try {
      const post = await Post.create({
        authorId: req.user.id,
        title: req.body.title,
        content: req.body.content,
        imgUrl: req.body.imgUrl,
        categoryId: req.body.categoryId,
      });

      await History.create({
        title: req.body.title,
        description: `New ${post.title} with id ${req.user.id} created`,
        updatedBy: req.user.email,
      });

      res.status(201).json({ message: `${post.title} succesfully created` });
    } catch (err) {
      next(err);
    }
  }
  static async showPosts(req, res, next) {
    try {
      const posts = await Post.findAll({
        attributes: { exclude: ["categoryId", "authorId"] },
        include: [
          {
            model: User,
            attributes: { exclude: "password" },
          },
          {
            model: Category,
          },
        ],
      });

      res.status(200).json(posts);
    } catch (err) {
      next(err);
    }
  }
  static async findById(req, res, next) {
    try {
      const post = await Post.findByPk(req.params.id);
      if (!post) throw { name: "PostNotFound" };

      res.status(200).json(post);
    } catch (err) {
      next(err);
    }
  }
  static async replace(req, res, next) {
    try {
      const post = await Post.findByPk(req.params.id);
      if (!post) throw { name: "PostNotFound" };

      await Post.update(
        {
          authorId: req.user.id,
          title: req.body.title,
          content: req.body.content,
          imgUrl: req.body.imgUrl,
          status: req.body.status,
          categoryId: req.body.categoryId,
        },
        { where: { id: req.params.id } }
      );

      await History.create({
        title: req.body.title,
        description: `${post.title} with id ${req.user.id} updated`,
        updatedBy: req.user.email,
      });

      res.status(200).json({ message: `${post.title} succesfully updated` });
    } catch (err) {
      next(err);
    }
  }
  static async modify(req, res, next) {
    try {
      const post = await Post.findByPk(req.params.id);
      if (!post) throw { name: "PostNotFound" };

      await Post.update(
        { status: req.body.status },
        { where: { id: req.params.id } }
      );

      await History.create({
        title: req.body.title,
        description: `${post.title} with id ${req.user.id} has been updated from ${post.status} to ${req.body.status}`,
        updatedBy: req.user.email,
      });

      res.status(200).json({ message: "Status succesfully updated" });
    } catch (err) {
      next(err);
    }
  }
  static async filterPage(req, res, next) {
    try {
      const { filter, page } = req.query;
      const paramsQuery = {};

      let limit;
      let offset;

      if (filter !== "" && typeof filter !== "undefined") {
        paramsQuery.where = { categoryId: filter };
      }

      if (page !== "" && typeof page !== "undefined") {
        if (page.size !== "" && typeof page.size !== "undefined") {
          limit = page.size;
          paramsQuery.limit = limit;
        }

        if (page.number !== "" && typeof page.number !== "undefined") {
          offset = page.number * limit - limit;
          paramsQuery.offset = offset;
        }
      } else {
        (limit = 8), (offset = 0);
        paramsQuery.limit = limit;
        paramsQuery.offset = offset;
      }

      paramsQuery.include = Category;

      const { count, rows } = await Post.findAndCountAll(paramsQuery);
      let countPosts = Math.ceil(count / limit);

      res.status(200).json({ page: countPosts, posts: rows });
    } catch (err) {
      next(err);
    }
  }
  static async detail(req, res, next) {
    try {
      const post = await Post.findOne({
        where: { id: req.params.postId },
        attributes: { exclude: ["authorId", "categoryId"] },
        include: [
          {
            model: User,
            attributes: { exclude: ["password"] },
          },
          {
            model: Category,
          },
        ],
      });
      if (!post) throw { name: "PostNotFound" };

      res.status(200).json(post);
    } catch (err) {
      next(err);
    }
  }
  static async delete(req, res, next) {
    try {
      const post = await Post.findByPk(req.params.id);
      if (!post) throw { name: "PostNotFound" };

      await Post.destroy({ where: { id: req.params.id } });

      res.status(200).json({ message: `${post.title} success to delete` });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = Controller;
