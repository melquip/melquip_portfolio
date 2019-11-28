exports.up = function(knex) {
  return knex.schema.createTable('about', (about) => {
    about.increments();
    about.text('line').notNullable().unique();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('about');
};
