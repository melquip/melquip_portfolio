const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const config = require('../config');

const server = express();

server.use(helmet());
server.use(cors({ origin: config.origin }));
server.use(express.json());
server.use(logger);

server.get("/", (req, res) => {
	res.status(200).json({ message: "Server is running" });
});

const aboutRouter = require('../routes/aboutRouter');
const projectsRouter = require('../routes/projectsRouter');
const questionsRouter = require('../routes/questionsRouter');
const loginRouter = require('../routes/loginRouter');

server.use("/api/about", aboutRouter);
server.use("/api/projects", projectsRouter);
server.use("/api/questions", questionsRouter);
server.use("/login", loginRouter);

function logger(req, res, next) {
  console.log(`${req.method} to ${req.url}`);
  next();
}

module.exports = server;