
exports.seed = (knex) => knex('about').truncate()
  .then(() => knex('about').insert([
    {
      line: 'Hi, I\'m Melqui,|a team lead,|full-stack|developer|and teacher',
      priority: 10,
    },
    {
      line: 'Available|for new remote|and exciting|projects|to work on!',
      priority: 9,
    },
    {
      line: '',
      priority: 8,
    },
  ]));
