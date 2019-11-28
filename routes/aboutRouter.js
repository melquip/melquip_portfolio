const aboutRouter = require('express').Router();

const About = require('../models')('about');
const {
  handleErrors,
  validateId,
  validateAboutReq,
  validateAboutPost
} = require('../middleware');

aboutRouter.get('/', async (req, res, next) => {
  try {
    const slides = await About.getAll();
    if (slides.length) {
      res.status(200).json(slides);
    } else {
      next({ message: "No slides were found!", status: 404 });
    }
  } catch (error) {
    next({ message: "Couldn't get about slides" });
  }
});

aboutRouter.get('/:id', validateId, validateAboutReq, async (req, res, next) => {
  res.status(200).json(req.aboutLine);
});

aboutRouter.post('/', validateAboutPost, async (req, res, next) => {
  try {
    const { line, priority } = req.body;
    const newAboutLine = await About.addOne({ line, priority });
    if (newAboutLine && newAboutLine.id) {
      res.status(200).json(newAboutLine);
    } else {
      next({ message: "Couldn't add about line to database!" });
    }
  } catch (error) {
    next(error);
  }
});

aboutRouter.put('/:id', validateId, validateAboutPost, async (req, res, next) => {
  try {
    const { id } = req.params;
    const { line, priority } = req.body;
    const updatedAboutLine = await About.updateOne(id, { line, priority });
    if (updatedAboutLine && updatedAboutLine.id) {
      res.status(200).json(updatedAboutLine);
    } else {
      next({ message: "Couldn't update about line info!" });
    }
  } catch (error) {
    next(error);
  }
});

aboutRouter.delete('/:id', validateId, async (req, res, next) => {
  try {
    const { id } = req.params;
    const deleted = await About.deleteOne(id);
    if (deleted) {
      res.status(200).json({ message: "Successfully deleted about line " + id + "!" });
    } else {
      next({ message: "Couldn't delete about line!" });
    }
  } catch (error) {
    next(error);
  }
});

handleErrors('aboutRouter', aboutRouter);

module.exports = aboutRouter;