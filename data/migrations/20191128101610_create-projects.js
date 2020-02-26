exports.up = (knex) => knex.schema.createTable('projects', (projects) => {
  projects.increments();
  projects.string('title', 100).notNullable().unique();
  projects.string('summary').notNullable();
  projects.text('description').notNullable();
  projects.string('url').notNullable().unique();
  projects.string('urlLive').notNullable();
  projects.string('urlRepo');
  projects.string('video');
  projects.string('image');
  projects.string('tech').notNullable();
  projects.integer('priority').notNullable();
});

exports.down = (knex) => knex.schema.dropTableIfExists('projects');
