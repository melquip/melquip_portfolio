exports.up = (knex) => knex.schema.createTable('questions', (questions) => {
  questions.increments();
  questions.string('question').notNullable().unique();
  questions.text('answer').notNullable();
  questions.integer('priority').notNullable();
});

exports.down = (knex) => knex.schema.dropTableIfExists('questions');
