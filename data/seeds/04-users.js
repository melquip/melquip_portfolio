const bcrypt = require('bcryptjs');
const config = require('../../config');

exports.seed = (knex) => knex('users').truncate()
  .then(() => knex('users').insert([
    {
      username: 'melquip',
      password: bcrypt.hashSync(config.adminPassword, 11),
    },
  ]));
