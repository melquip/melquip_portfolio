const projectsRouter = require('express').Router();

const Projects = require('../models')('projects');
const {
  handleErrors,
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
      next({ message: "No projects were found!", status: 404 });
    }
  } catch (error) {
    next(error);
  }
});

projectsRouter.get('/:id', validateId, validateProjectReq, (req, res, next) => {
  res.status(200).json(req.project);
});

projectsRouter.post('/', validateProjectPost, async (req, res, next) => {
  try {
    const { title, summary, description, urlLive, urlRepo, priority } = req.body;
    const newProject = await Projects.addOne({ title, summary, description, urlLive, urlRepo, priority });
    if (newProject && newProject.id) {
      res.status(200).json(newProject);
    } else {
      next({ message: "Couldn't add project to database!" });
    }
  } catch (error) {
    next(error);
  }
});

projectsRouter.put('/:id', validateId, validateProjectPost, async (req, res, next) => {
  try {
    const { id } = req.params;
    const { title, summary, description, urlLive, urlRepo, priority } = req.body;
    const updatedProject = await Projects.updateOne(id, { title, summary, description, urlLive, urlRepo, priority });
    if (updatedProject && updatedProject.id) {
      res.status(200).json(updatedProject);
    } else {
      next({ message: "Couldn't update project info!" });
    }
  } catch (error) {
    next(error);
  }
});

projectsRouter.delete('/:id', validateId, async (req, res, next) => {
  try {
    const { id } = req.params;
    const deleted = await Projects.deleteOne(id);
    if (deleted) {
      res.status(200).json({ message: "Successfully deleted project " + id + "!" });
    } else {
      next({ message: "Couldn't delete project!" });
    }
  } catch (error) {
    next(error);
  }
});

handleErrors('projectsRouter', projectsRouter);

module.exports = projectsRouter;