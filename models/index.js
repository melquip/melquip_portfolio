const db = require('../data/dbConfig');

function tableModel(table) {
  const getAll = (filter) => {
    if (!filter) {
      return db(table).orderBy('priority', 'desc');
    } else {
      return db(table).where(filter).orderBy('priority', 'desc');
    }
  }
  
  const getOne = (filter) => {
    return db(table).where(filter).first();
  }
  
  const addOne = (data) => {
    return db(table)
      .insert(data, 'id')
      .then((ids) => getOne({ id: ids[0] }));
  }
  
  const updateOne = (id, data) => {
    return db(table)
      .where({ id })
      .update(data)
      .then(updated => getOne({ id }));
  }
  
  const deleteOne = (id) => {
    return db(table).where({ id }).del();
  }
  
  return {
    getAll,
    getOne,
    addOne,
    updateOne,
    deleteOne
  }
}

module.exports = tableModel;