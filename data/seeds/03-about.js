exports.seed = function(knex) {
  return knex('about').truncate()
    .then(function () {
      return knex('about').insert([
        {
          line: "Hi, I'm Melqui,|23 years old,|portuguese,|full-stack|web developer",
          priority: 10,
        },
        {
          line: "I've worked|in web development|for 2 years|before starting|Lambda School",
          priority: 9,
        },
        {
          line: "Now I'm looking|for remote|and exciting|new projects|to work on!",
          priority: 8,
        }
      ]);
    });
};
