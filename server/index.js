const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const server = express();

const config = require('../config');

server.use(helmet());
server.use(cors({ origin: config.origin }));
server.use(express.json());
server.use(logger);

server.get("/", (req, res) => {
	res.status(200).json({ message: "Server is running" });
});

const aboutRouter = require('../routes/aboutRouter');
const projectsRouter = require('../routes/projectsRouter');
const faqRouter = require('../routes/faqRouter');

server.use("/api/about", aboutRouter);
server.use("/api/projects", projectsRouter);
server.use("/api/faq", faqRouter);

function logger(req, res, next) {
  console.log(`${req.method} to ${req.url}`);
  next();
}

module.exports = server;