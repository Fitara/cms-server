const { User, Post } = require("../models");

async function cleanUp() {
  await User.destroy({
    truncate: true,
    restartIdentity: true,
    cascade: true,
  });

  await Post.destroy({
    truncate: true,
    restartIdentity: true,
    cascade: true,
  });
}

module.exports = cleanUp;
