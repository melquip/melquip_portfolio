const projectsRouter = require('express').Router();
const Projects = require('../models')('projects');
const config = require('../config');
const {
  handleErrors,
  requireLogin,
  validateId,
  validateProjectReq,
  validateProjectPost
} = require('../middleware');

projectsRouter.get('/', async (req, res, next) => {
  try {
    const projects = await Projects.getAll();
    if (projects.length) {
      res.status(200).json(projects);
    } else {
      next(config.errors.projectNotFound);
    }
  } catch (error) {
    next(error);
  }
});

projectsRouter.get('/:id', validateId, validateProjectReq, (req, res, next) => {
  res.status(200).json(req.project);
});

projectsRouter.post('/', requireLogin, validateProjectPost, async (req, res, next) => {
  try {
    const { title, summary, description, urlLive, urlRepo, priority } = req.body;
    const newProject = await Projects.addOne({ title, summary, description, urlLive, urlRepo, priority });
    if (newProject && newProject.id) {
      res.status(200).json(newProject);
    } else {
      next(config.errors.couldntAddProject);
    }
  } catch (error) {
    next(error);
  }
});

projectsRouter.put('/:id', requireLogin, validateId, validateProjectPost, async (req, res, next) => {
  try {
    const { id } = req.params;
    const { title, summary, description, urlLive, urlRepo, priority } = req.body;
    const updatedProject = await Projects.updateOne(id, { title, summary, description, urlLive, urlRepo, priority });
    if (updatedProject && updatedProject.id) {
      res.status(200).json(updatedProject);
    } else {
      next(config.errors.couldntUpdateProject);
    }
  } catch (error) {
    next(error);
  }
});

projectsRouter.delete('/:id', requireLogin, validateId, async (req, res, next) => {
  try {
    const { id } = req.params;
    const deleted = await Projects.deleteOne(id);
    if (deleted) {
      res.status(200).json({ message: "Successfully deleted project " + id + "!" });
    } else {
      next(config.errors.couldntDeleteProject);
    }
  } catch (error) {
    next(error);
  }
});

handleErrors('projectsRouter', projectsRouter);

module.exports = projectsRouter;