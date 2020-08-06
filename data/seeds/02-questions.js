exports.seed = (knex) => knex('questions').truncate()
  .then(() => knex('questions').insert([
    {
      question: 'What\'s your current availability?',
      answer: 'I have immediate availability for remote positions!',
      priority: 0,
    },
    {
      question: 'What are you working on right now?',
      answer: 'Currently working on a project with Node, Apollo, GraphQL, TypeScript, MongoDB, Cypress and React!',
      priority: 1,
    },
  ]));
