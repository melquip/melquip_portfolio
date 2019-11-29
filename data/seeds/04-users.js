require('dotenv').config();
const bcrypt = require('bcryptjs');
const config = require('../../config');
exports.seed = function (knex) {
  return knex('users').truncate()
    .then(function () {
      return knex('users').insert([
        {
          username: 'melquip',
          password: bcrypt.hashSync(config.adminPassword, 11),
        },
      ]);
    });
};
