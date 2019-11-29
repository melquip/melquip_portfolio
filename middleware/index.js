const Projects = require('../models')('projects');
const Questions = require('../models')('questions');
const About = require('../models')('about');
const config = require('../config');
const jwt = require('jsonwebtoken');

// error middleware
function handleErrors(name, router) {
  router.use((error, req, res, next) => {
    res.status(error.status || 500).json({
      file: name,
      message: error.message || error,
      method: req.method,
      url: req.url
    });
  });
}

// validation middleware
function validateId(req, res, next) {
  const { id } = req.params;
  if (id && Number.isInteger(Number(id))) {
    next();
  } else {
    next(config.errors.invalidId);
  }
}

async function validateProjectReq(req, res, next) {
  let { id } = req.params;
  try {
    id = Number(id);
    const project = await Projects.getOne({ id });
    if (project && project.id) {
      req.project = project;
      next();
    } else {
      next(config.errors.projectNotFound);
    }
  } catch (error) {
    next(error);
  }
}

function validateProjectPost(req, res, next) {
  const { title, summary, description, urlLive, urlRepo, priority } = req.body;
  if (!title || !summary || !description || !urlLive || !urlRepo || typeof priority !== 'number') {
    next(config.errors.missingFields);
  } else {
    if (title.length > 100 || summary.length > 255 || urlLive.length > 255 || urlRepo.length > 255) {
      next(config.errors.exceededMaxLength);
    } else {
      next();
    }
  }
}

async function validateQuestionReq(req, res, next) {
  let { id } = req.params;
  try {
    id = Number(id);
    const question = await Questions.getOne({ id });
    if (question && question.id) {
      req.question = question;
      next();
    } else {
      next(config.errors.questionNotFound);
    }
  } catch (error) {
    next(error);
  }
}

function validateQuestionPost(req, res, next) {
  const { question, answer, priority } = req.body;
  if (!question || !answer || typeof priority !== 'number') {
    next(config.errors.missingFields);
  } else {
    if (question.length > 255) {
      next(config.errors.exceededMaxLength);
    } else {
      next();
    }
  }
}

async function validateAboutReq(req, res, next) {
  let { id } = req.params;
  try {
    id = Number(id);
    const aboutLine = await About.getOne({ id });
    if (aboutLine && aboutLine.id) {
      req.aboutLine = aboutLine;
      next();
    } else {
      next(config.errors.aboutNotFound);
    }
  } catch (error) {
    next(error);
  }
}

function validateAboutPost(req, res, next) {
  const { line, priority } = req.body;
  if (!line || typeof priority !== 'number') {
    next(config.errors.missingFields);
  } else {
    if (line.length > 255) {
      next(config.errors.exceededMaxLength);
    } else {
      next();
    }
  }
}

function requireLogin(req, res, next) {
  const token = req.headers.authorization;
  if (token) {
    jwt.verify(token, config.jwtSecret, (err, decodedUser) => {
      if (err) {
        next(err);
      } else {
        req.loggedInUser = decodedUser;
        next();
      }
    });
  } else {
    next(config.errors.noTokenProvided);
  }
}

module.exports = {
  handleErrors,
  requireLogin,
  validateId,
  validateProjectReq,
  validateProjectPost,
  validateQuestionReq,
  validateQuestionPost,
  validateAboutReq,
  validateAboutPost
}