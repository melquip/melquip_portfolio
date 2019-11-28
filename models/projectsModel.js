const db = require('../data/dbConfig');

const getAll = (filter) => {
  if (!filter) {
    return db('projects');
  } else {
    return db('projects').where(filter);
  }
}

const getOne = (filter) => {
  return db('projects').where(filter).first();
}

const addOne = (project) => {
  return db('projects')
    .insert(project, 'id')
    .then((ids) => getOne({ id: ids[0] }));
}

const updateOne = (id, project) => {
  return db('projects')
    .where({ id })
    .update(project)
    .then(ids => getOne({ id: ids[0] }));
}

const deleteOne = (id) => {
  return db('projects').where({ id }).del();
}

module.exports = {
  getAll,
  getOne,
  addOne,
  updateOne,
  deleteOne
}