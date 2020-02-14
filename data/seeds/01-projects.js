const createProjectUrl = (title) => {
  return title.toLowerCase().replace(/[\s-]/gi, '-')
}

exports.seed = function (knex) {
  return knex('projects').truncate()
    .then(function () {
      return knex('projects').insert([
        {
          title: "Trackdrills",
          summary: "ok",
          description: "",
          url: createProjectUrl("Trackdrills"),
          urlLive: "https://app.trackdrills.com/",
          urlRepo: "https://github.com/LABS-EU3?utf8=%E2%9C%93&q=wt_&type=&language=",
          tech: "Apollo|GraphQL|NodeJS|Express|MongoDB|React",
          priority: 0,
        },
        {
          title: "PostHere",
          summary: "ok",
          description: "",
          url: createProjectUrl("PostHere"),
          urlLive: "https://front-end.posthere.now.sh/",
          urlRepo: "https://github.com/Build-Week-the-subreddit-predictor-intl/Backend",
          tech: "NodeJS|Express|SQLite|Postgres|KnexJS|Reddit API",
          priority: 0,
        },
        {
          title: "Sleep Tracker",
          summary: "ok",
          description: "",
          url: createProjectUrl("Sleep Tracker"),
          urlLive: "https://sleeptrackerapp.netlify.com/",
          urlRepo: "https://github.com/Build-Week-Sleep-Tracker-App/Front-end",
          tech: "HTML|SCSS|React|Redux|Thunk",
          priority: 0,
        },
        {
          title: "OER Bookr",
          summary: "ok",
          description: "",
          url: createProjectUrl("OER Bookr"),
          urlLive: "https://oerbookr.netlify.com/",
          urlRepo: "https://github.com/Buildweek-OER-Bookr/oer-fe",
          tech: "HTML|SCSS|React|Redux|Thunk",
          priority: 0,
        },
        {
          title: "Droom",
          summary: "ok",
          description: "",
          url: createProjectUrl("Droom"),
          urlLive: "https://melquip.github.io/droom/",
          urlRepo: "https://github.com/melquip/droom/",
          tech: "HTML|Stylus|jQuery",
          priority: 0,
        },
        {
          title: "Flama",
          summary: "ok",
          description: "",
          url: createProjectUrl("Flama"),
          urlLive: "https://flama.pt/",
          urlRepo: null,
          tech: "HTML5|Stylus|jQuery|PHP|MySQL",
          priority: 0,
        },
        {
          title: "Miranda Bike Parts",
          summary: "ok",
          description: "",
          url: createProjectUrl("Miranda Bike Parts"),
          urlLive: "https://mirandabikeparts.com/",
          urlRepo: null,
          tech: "HTML5|Stylus|jQuery|PHP|MySQL|SVG Animation",
          priority: 0,
        },
      ]);
    });
};
