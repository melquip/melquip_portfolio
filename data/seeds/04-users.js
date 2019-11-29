const bcrypt = require('bcryptjs');
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {
          username: 'melquip',
          password: bcrypt.hashSync(process.env.ADMINPW, 11),
        },
      ]);
    });
};
