const createProjectUrl = (title) => title.toLowerCase().replace(/[\s-]/gi, '-');

exports.seed = (knex) => knex('projects').truncate()
  .then(() => knex('projects').insert([
    {
      title: 'Trackdrills',
      summary: 'A tracker application that motivates and tells you how to workout!',
      description: `
People can be intimidated by going to the gym, and once they bypass that fear, they struggle to build a consistent routine. This can either be from lack of motivation or that people are often confused about how to do the workouts and what to do to build in certain areas.|
The best alternative solution to this problem, a personal trainer, is expensive so many users turn to fitness apps.
      `,
      url: createProjectUrl('Trackdrills'),
      urlLive: 'https://app.trackdrills.com/',
      urlRepo: 'https://github.com/LABS-EU3?utf8=%E2%9C%93&q=wt_&type=&language=',
      tech: 'Apollo|GraphQL|NodeJS|Express|MongoDB|React',
      priority: 0,
    },
    {
      title: 'PostHere',
      summary: 'An application that predicts in which subreddits your post belongs and will be the most popular!',
      description: `
As a back-end developer on this project I had the opportunity to work together with the data science engineers to deliver a great predictive model along with asking for Reddit account permissions from the user to automatically post the user's content in the relevant subreddit!
      `,
      url: createProjectUrl('PostHere'),
      urlLive: 'https://front-end.posthere.now.sh/',
      urlRepo: 'https://github.com/Build-Week-the-subreddit-predictor-intl/Backend',
      tech: 'NodeJS|Express|SQLite|Postgres|KnexJS|Reddit API',
      priority: 0,
    },
    {
      title: 'Sleep Tracker',
      summary: 'An application designed to track and report how many hours you should sleep!',
      description: `
It does this by allowing the user to enter the time when it went to bed and the time when it woke up as well as how it was feeling before bed, after bed and during the day.|
With this data it can calculate the optimal amount of sleep needed of a given user.
      `,
      url: createProjectUrl('Sleep Tracker'),
      urlLive: 'https://sleeptrackerapp.netlify.com/',
      urlRepo: 'https://github.com/Build-Week-Sleep-Tracker-App/Front-end',
      tech: 'HTML|SCSS|React|Redux|Thunk',
      priority: 0,
    },
    {
      title: 'OER Bookr',
      summary: 'A teacher\'s source for OER - Open Educational Resources!',
      description: `
Picture the Yelp of text books, a social platform for peer reviewed, open licensed text books.
      `,
      url: createProjectUrl('OER Bookr'),
      urlLive: 'https://oerbookr.netlify.com/',
      urlRepo: 'https://github.com/Buildweek-OER-Bookr/oer-fe',
      tech: 'HTML|SCSS|React|Redux|Thunk',
      priority: 0,
    },
    {
      title: 'Droom',
      summary: 'Marketing page for an app makes your career dreams come true!',
      description: `
'Droom', dutch for 'dream', is a website that allows you to search for your dream job as well as a great user experience and workflow for both job seekers and companies.|
For this build week, only a Marketing Website page was built.|
This app attempts to combine Tinder’s intuitive workflow and apply it to a LinkedIn type website allowing users to swipe right on their dream jobs and apply, or left to keep looking. A similar workflow is presented from the company point of view when selecting applicants to interview or hire.|
"Your career dreams, delivered."
      `,
      url: createProjectUrl('Droom'),
      urlLive: 'https://melquip.github.io/droom/',
      urlRepo: 'https://github.com/melquip/droom/',
      tech: 'HTML|Stylus|jQuery',
      priority: 0,
    },
    {
      title: 'Flama',
      summary: 'Full-fledged website and online store for a manufacturer of domestic appliances of most shapes and sizes!',
      description: 'Full-fledged website and online store for a manufacturer of domestic appliances of most shapes and sizes!',
      url: createProjectUrl('Flama'),
      urlLive: 'https://flama.pt/',
      urlRepo: null,
      tech: 'HTML|Stylus|jQuery|PHP|MySQL',
      priority: 0,
    },
    {
      title: 'Miranda Bike Parts',
      summary: 'Full-fledged website and online store for the supplier of the top brands of bicycles in the world!',
      description: 'Full-fledged website and online store for the supplier of the top brands of bicycles in the world!',
      url: createProjectUrl('Miranda Bike Parts'),
      urlLive: 'https://mirandabikeparts.com/',
      urlRepo: null,
      tech: 'HTML|Stylus|jQuery|PHP|MySQL|SVG Animation',
      priority: 0,
    },
  ]));
