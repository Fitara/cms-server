if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}
const port = process.env.PORT || 3000;
const cors = require("cors")

const express = require("express");
const app = express();

const routes = require("./routes");
const errors = require("./middlewares/errors");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())
app.use(routes);
app.use(errors);

module.exports = app
