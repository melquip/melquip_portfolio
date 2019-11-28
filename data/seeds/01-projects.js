exports.seed = function (knex) {
  return knex('projects').truncate()
    .then(function () {
      return knex('projects').insert([
        {
          title: "This website - Portfolio",
          summary: "This is a summary paragraph",
          description: "This is a description paragraph|This is a description paragraph|This is a description paragraph|This is a description paragraph|This is a description paragraph|This is a description paragraph|This is a description paragraph|This is a description paragraph|",
          urlLive: "http://www.google.com/",
          urlRepo: "https://github.com/melquip/melquip_portfolio",
          priority: 0,
        },
        {
          title: "New website",
          summary: "This is a summary paragraph",
          description: "This is a description paragraph|This is a description paragraph|This is a description paragraph|This is a description paragraph|This is a description paragraph|This is a description paragraph|This is a description paragraph|This is a description paragraph|",
          urlLive: "http://www.google.com/",
          urlRepo: "https://github.com/melquip/melquip_portfolio",
          priority: 0,
        },
        {
          title: "Another website",
          summary: "This is a summary paragraph",
          description: "This is a description paragraph|This is a description paragraph|This is a description paragraph|This is a description paragraph|This is a description paragraph|This is a description paragraph|This is a description paragraph|This is a description paragraph|",
          urlLive: "http://www.google.com/",
          urlRepo: "https://github.com/melquip/melquip_portfolio",
          priority: 0,
        },
      ]);
    });
};
