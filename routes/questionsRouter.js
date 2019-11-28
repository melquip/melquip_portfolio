const questionsRouter = require('express').Router();

const Questions = require('../models')('questions');
const {
  handleErrors,
  validateId,
  validateQuestionReq,
  validateQuestionPost
} = require('../middleware');

questionsRouter.get('/', async (req, res, next) => {
  try {
    const questions = await Questions.getAll();
    if (questions.length) {
      res.status(200).json(questions);
    } else {
      next({ message: "No questions were found!", status: 404 });
    }
  } catch (error) {
    next(error);
  }
});

questionsRouter.get('/:id', validateId, validateQuestionReq, (req, res, next) => {
  res.status(200).json(req.question);
});

questionsRouter.post('/', validateQuestionPost, async (req, res, next) => {
  try {
    const { question, answer, priority } = req.body;
    const newQuestion = await Questions.addOne({ question, answer, priority });
    if (newQuestion && newQuestion.id) {
      res.status(200).json(newQuestion);
    } else {
      next({ message: "Couldn't add question to database!" });
    }
  } catch (error) {
    next(error);
  }
});

questionsRouter.put('/:id', validateId, validateQuestionPost, async (req, res, next) => {
  try {
    const { id } = req.params;
    const { question, answer, priority } = req.body;
    const updatedQuestion = await Questions.updateOne(id, { question, answer, priority });
    if (updatedQuestion && updatedQuestion.id) {
      res.status(200).json(updatedQuestion);
    } else {
      next({ message: "Couldn't update question info!" });
    }
  } catch (error) {
    next(error);
  }
});

questionsRouter.delete('/:id', validateId, async (req, res, next) => {
  try {
    const { id } = req.params;
    const deleted = await Questions.deleteOne(id);
    if (deleted) {
      res.status(200).json({ message: "Successfully deleted question " + id + "!" });
    } else {
      next({ message: "Couldn't delete question!" });
    }
  } catch (error) {
    next(error);
  }
});

handleErrors('questionsRouter', questionsRouter);

module.exports = questionsRouter;