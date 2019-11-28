const Projects = require('../models')('projects');
const Questions = require('../models')('questions');

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
    next({ message: "Invalid project id!", status: 401 });
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
      next({ message: "Project not found!", status: 404 });
    }
  } catch (error) {
    next(error);
  }
}

function validateProjectPost(req, res, next) {
  const { title, summary, description, urlLive, urlRepo, priority } = req.body;
  if (!title || !summary || !description || !urlLive || !urlRepo || typeof priority !== 'number') {
    next({ message: "Missing one of the required fields!", status: 401 });
  } else {
    if (title.length > 100 || summary.length > 255 || urlLive.length > 255 || urlRepo.length > 255) {
      next({ message: "Contents exceeds maximum allowed length", status: 401 });
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
      next({ message: "Question not found!", status: 404 });
    }
  } catch (error) {
    next(error);
  }
}

function validateQuestionPost(req, res, next) {
  const { question, answer, priority } = req.body;
  if (!question || !answer || typeof priority !== 'number') {
    next({ message: "Missing one of the required fields!", status: 401 });
  } else {
    if (question.length > 255) {
      next({ message: "Contents exceeds maximum allowed length", status: 401 });
    } else {
      next();
    }
  }
}

module.exports = {
  handleErrors,
  validateId,
  validateProjectReq,
  validateProjectPost,
  validateQuestionReq,
  validateQuestionPost
}