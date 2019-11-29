exports.up = function(knex) {
  return knex.schema.createTable('users', (users) => {
    users.increments();
    users.string('username', 100).notNullable().unique();
    users.string('password').notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('users');
};
