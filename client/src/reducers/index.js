import * as types from '../actions/types';


const initialAboutState = [
  {"id":1,"line":["Hi, I'm Melqui,","a portuguese","developer","making","a game"],"priority":10},
  {"id":2,"line":["And working", "with Last Call Media", "to improve", "Massachusset's", "PFML program"],"priority":9},
  {"id":3,"line":[""],"priority":8}
];
export function aboutReducer(state = initialAboutState, action) {
  switch (action.type) {
    case types.SET_ABOUT:
      return action.payload.map(slide => ({
        ...slide,
        line: slide.line.split('|')
      }));
    default:
      return state;
  }
}

const initialProjectsState = [{"id":1,"title":"Trackdrills","summary":"A tracker application that motivates and tells you how to workout!","description":["\nPeople can be intimidated by going to the gym, and once they bypass that fear, they struggle to build a consistent routine. This can either be from lack of motivation or that people are often confused about how to do the workouts and what to do to build in certain areas.","\nThe best alternative solution to this problem, a personal trainer, is expensive so many users turn to fitness apps.\n"],"url":"trackdrills","urlLive":"https://app.trackdrills.com/","urlRepo":"https://github.com/LABS-EU3?utf8=%E2%9C%93&q=wt_&type=&language=","video":"https://www.youtube.com/embed/Nn2XUnbr_10","image":null,"tech":["Apollo","GraphQL","NodeJS","Express","MongoDB","React"],"priority":0},{"id":2,"title":"PostHere","summary":"An application that predicts in which subreddits your post belongs and will be the most popular!","description":["\nAs a back-end developer on this project I had the opportunity to work together with the data science engineers to deliver a great predictive model along with asking for Reddit account permissions from the user to automatically post the user's content in the relevant subreddit!\n"],"url":"posthere","urlLive":"https://front-end.posthere.now.sh/","urlRepo":"https://github.com/Build-Week-the-subreddit-predictor-intl/Backend","video":null,"image":null,"tech":["NodeJS","Express","SQLite","Postgres","KnexJS","Reddit API"],"priority":0},{"id":3,"title":"Sleep Tracker","summary":"An application designed to track and report how many hours you should sleep!","description":["\nIt does this by allowing the user to enter the time when it went to bed and the time when it woke up as well as how it was feeling before bed, after bed and during the day.","\nWith this data it can calculate the optimal amount of sleep needed of a given user.\n"],"url":"sleep-tracker","urlLive":"https://sleeptrackerapp.netlify.com/","urlRepo":"https://github.com/Build-Week-Sleep-Tracker-App/Front-end","video":null,"image":null,"tech":["HTML","SCSS","React","Redux","Thunk"],"priority":0},{"id":4,"title":"OER Bookr","summary":"A teacher's source for OER - Open Educational Resources!","description":["\nPicture the Yelp of text books, a social platform for peer reviewed, open licensed text books.\n"],"url":"oer-bookr","urlLive":"https://oerbookr.netlify.com/","urlRepo":"https://github.com/Buildweek-OER-Bookr/oer-fe","video":null,"image":null,"tech":["HTML","SCSS","React","Redux","Thunk"],"priority":0},{"id":5,"title":"Droom","summary":"Marketing page for an app makes your career dreams come true!","description":["\n'Droom', dutch for 'dream', is a website that allows you to search for your dream job as well as a great user experience and workflow for both job seekers and companies.","\nFor this build week, only a Marketing Website page was built.","\nThis app attempts to combine Tinder’s intuitive workflow and apply it to a LinkedIn type website allowing users to swipe right on their dream jobs and apply, or left to keep looking. A similar workflow is presented from the company point of view when selecting applicants to interview or hire.","\n\"Your career dreams, delivered.\"\n"],"url":"droom","urlLive":"https://melquip.github.io/droom/","urlRepo":"https://github.com/melquip/droom/","video":null,"image":null,"tech":["HTML","Stylus","jQuery"],"priority":0},{"id":6,"title":"Flama","summary":"Full-fledged website and online store for a manufacturer of domestic appliances of most shapes and sizes!","description":["Full-fledged website and online store for a manufacturer of domestic appliances of most shapes and sizes!"],"url":"flama","urlLive":"https://flama.pt/","urlRepo":null,"video":null,"image":null,"tech":["HTML","Stylus","jQuery","PHP","MySQL"],"priority":0},{"id":7,"title":"Miranda Bike Parts","summary":"Full-fledged website and online store for the supplier of the top brands of bicycles in the world!","description":["Full-fledged website and online store for the supplier of the top brands of bicycles in the world!"],"url":"miranda-bike-parts","urlLive":"https://mirandabikeparts.com/","urlRepo":null,"video":null,"image":null,"tech":["HTML","Stylus","jQuery","PHP","MySQL","SVG Animation"],"priority":0}];

export function projectsReducer(state = initialProjectsState, action) {
  switch (action.type) {
    case types.SET_PROJECTS:
      return action.payload.map(project => ({
        ...project,
        description: project.description.split('|'),
        tech: project.tech.split('|')
      }));
    default:
      return state;
  }
}

const initialQuestionsState = 
[
  {"id":3,"question":"What kind of game are you making?","answer":"The idea is to create a space game and combine it with fast action combat and some MMORPG concepts.","priority":1,"open":true},
  {"id":2,"question":"What are you working on right now?","answer":"Currently working at Last Call Media for the Paid Family and Medical Leave program in Massachusetts, US. Checkout https://paidleave.mass.gov/ for more details.","priority":1,"open":true},
  {"id":1,"question":"What's your current availability?","answer":"I am currently unavailable for new projects, as I am quite busy between Last Call Media and my game development project, but I'm always interested in connecting!","priority":0,"open":true}
];

export function questionsReducer(questions = initialQuestionsState, action) {
  switch (action.type) {
    case types.SET_QUESTIONS:
      return action.payload.map((question, i) => ({ ...question, open: i <= 2 }));
    case types.TOGGLE_FAQ:
      return questions.map(question => {
        if (question.id === action.payload) {
          return { ...question, open: !question.open };
        }
        return question;
      });
    default:
      return questions;
  }
}

const initialUsersState = {};
export function userReducer(state = initialUsersState, action) {
  switch (action.type) {
    case types.SET_USER:
      return action.payload;
    case types.LOGOUT:
      return initialUsersState;
    default:
      return state;
  }
}
