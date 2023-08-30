const { Post } = require("../models/index");

const author = async function (req, res, next) {
  try {
    const post = await Post.findByPk(req.params.id);
    if (!post) throw { name: "PostNotFound" };

    if (post.authorId == req.user.id || req.user.role === "Admin") next();
    else {
      throw { name: "Forbidden" };
    }
  } catch (err) {
    next(err);
  }
};

module.exports = author;
