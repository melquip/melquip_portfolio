const db = require('../data/dbConfig');

function tableModel(table) {
  const getAll = (filter) => {
    if (!filter) {
      return db(table).orderBy('priority', 'desc');
    }
    return db(table).where(filter).orderBy('priority', 'desc');
  };

  const getOne = (filter) => db(table).where(filter).first();

  const addOne = (data) => db(table)
    .insert(data, 'id')
    .then((ids) => getOne({ id: ids[0] }));

  const updateOne = (id, data) => db(table)
    .where({ id })
    .update(data)
    .then(() => getOne({ id }));

  const deleteOne = (id) => db(table).where({ id }).del();

  return {
    getAll,
    getOne,
    addOne,
    updateOne,
    deleteOne,
  };
}

module.exports = tableModel;
