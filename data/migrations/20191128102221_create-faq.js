exports.up = function(knex) {
  return knex.schema.createTable('questions', (questions) => {
    questions.increments();
    questions.string('question').notNullable().unique();
    questions.text('answer').notNullable();
    questions.integer('priority').notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('questions');
};
