exports.seed = (knex) => knex('questions').truncate()
  .then(() => knex('questions').insert([
    {
      question: 'What is the question?',
      answer: 'The question is just a question. The question is just a question. The question is just a question.',
      priority: 0,
    },
    {
      question: 'Do you have a question?',
      answer: 'Yes I do. Yes I do. Yes I do.',
      priority: 1,
    },
  ]));
