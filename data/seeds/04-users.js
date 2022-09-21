const bcrypt = require('bcryptjs');
const config = require('../../config');

console.log(config)
console.log(process.env)

exports.seed = (knex) => knex('users').truncate()
  .then(() => knex('users').insert([
    {
      username: 'melquip',
      password: bcrypt.hashSync(config.adminPassword, 11),
    },
  ]));
