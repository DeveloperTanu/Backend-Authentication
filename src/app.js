const express = require("express");
const morgan = require("morgan");
const app = express();
const authRouter = require("./routes/auth.routes");

app.use(express.json());
app.use(morgan("dev"));

app.use("/api/auth", authRouter);

module.exports = app;