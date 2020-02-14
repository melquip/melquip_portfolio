exports.up = (knex) => knex.schema.createTable('users', (users) => {
  users.increments();
  users.string('username', 100).notNullable().unique();
  users.string('password').notNullable();
});

exports.down = (knex) => knex.schema.dropTableIfExists('users');
