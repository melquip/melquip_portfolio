exports.up = (knex) => knex.schema.createTable('about', (about) => {
  about.increments();
  about.text('line').notNullable().unique();
  about.integer('priority').notNullable();
});

exports.down = (knex) => knex.schema.dropTableIfExists('about');
