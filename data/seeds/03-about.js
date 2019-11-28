exports.seed = function(knex) {
  return knex('about').del()
    .then(function () {
      return knex('about').insert([
        {
          line: "Hi, I'm Melqui,|22 years old,|portuguese,|full-stack developer|& gamer",
        }
      ]);
    });
};
