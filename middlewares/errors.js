const errors = async function (err, req, res, next) {
  if (
    err.name === "SequelizeValidationError" ||
    err.name === "SequelizeUniqueConstraintError"
  ) {
    res.status(400).json({ message: err.errors[0].message });
  } else if (err.name === "EmailorPasswordRequired") {
    res.status(401).json({ message: "Invalid email or password" });
  } else if (err.name === "JsonWebTokenError" || err.name === "InvalidToken") {
    res.status(401).json({ message: "Invalid token" });
  } else if (err.name === "Forbidden") {
    res.status(403).json({ message: "Not allowed" });
  } else if (err.name === "PostNotFound") {
    res.status(404).json({ message: "Post not found" });
  }  else if (err.name === "CatsNotFound") {
    res.status(404).json({ message: "Category not found" });
  } else if (err.name === "FavNotFound") {
    res.status(404).json({ message: "Favorite not found" });
  } else {
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = errors;
