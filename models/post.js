"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Post.belongsTo(models.User, { foreignKey: "authorId" });
      Post.belongsTo(models.Category, { foreignKey: "categoryId" });
    }
  }
  Post.init(
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: { msg: "Title is required" },
          notNull: { msg: "Title is required" },
        },
      },
      content: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notEmpty: { msg: "Content is required" },
          notNull: { msg: "Content is required" },
        },
      },
      imgUrl: DataTypes.STRING,
      categoryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notEmpty: { msg: "Category is required" },
          notNull: { msg: "Category is required" },
        },
      },
      authorId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      status: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Post",
    }
  );
  Post.beforeCreate(function (post) {
    post.status = "Active";
  });

  return Post;
};
