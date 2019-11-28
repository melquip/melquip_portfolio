import * as types from '../actions/types';

const initialAboutState = [
  [
    "Hi, I'm Melqui,",
    "22 years old,",
    "portuguese,",
    "full-stack developer",
    "& gamer",
  ],
  [
    "Hi, I'm Melqui,",
    "22 years old,",
    "portuguese,",
    "full-stack developer",
    "& gamer",
  ],
  [
    "Hi, I'm Melqui,",
    "22 years old,",
    "portuguese,",
    "full-stack developer",
    "& gamer",
  ]
];
export function aboutReducer(state = initialAboutState, action) {
  switch (action.type) {
    case types.SET_ABOUT:
      return action.payload;
    default:
      return state;
  }
}


const initialProjectsState = [
  {
    id: 1,
    title: "Title of a portfolio project",
    summary: "This is an answhe question this is an ao the question this is er to the question Tan answer to the question s an answer to the question is is an answer to the question",
    description: ["Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil ratione, cupiditate quidem accusantium corrupti voluptate maxime mollitia. Corrupti, exercitationem ex? Accusamus deleniti rerum vel cum optio asperiores explicabo rem laudantium!", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, ipsa saepe quasi nobis exercitationem iste commodi, tempora ea expedita et odit illo quis tenetur porro sequi necessitatibus suscipit odio quibusdam!", "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga iste voluptates facilis sint possimus, tempora impedit vel voluptas soluta praesentium velit voluptatibus? Nemo ex numquam praesentium exercitationem cumque voluptas laboriosam?"],
    urlLive: "https://www.google.com/",
    urlRepo: "https://github.com/melquip/melquip_portfolio",
    open: false,
  },
  {
    id: 2,
    title: "Title of a portfolio project",summary: "This is an answhe question this is an ao the question this is er to the question Tan answer to the question s an answer to the question is is an answer to the question",
    description: "This is an answhe question this is an ao the question this is er to the question Tan answer to the question s an answer to the question is is an answer to the question",
    urlLive: "https://www.google.com/",
    urlRepo: "https://github.com/melquip/melquip_portfolio",
    open: false,
  },
  {
    id: 3,
    title: "Title of a portfolio project",summary: "This is an answhe question this is an ao the question this is er to the question Tan answer to the question s an answer to the question is is an answer to the question",
    description: "This is an answhe question this is an ao the question this is er to the question Tan answer to the question s an answer to the question is is an answer to the question",
    urlLive: "https://www.google.com/",
    urlRepo: "https://github.com/melquip/melquip_portfolio",
    open: false,
  },
  {
    id: 4,
    title: "Title of a portfolio project",summary: "This is an answhe question this is an ao the question this is er to the question Tan answer to the question s an answer to the question is is an answer to the question",
    description: "This is an answhe question this is an ao the question this is er to the question Tan answer to the question s an answer to the question is is an answer to the question",
    urlLive: "https://www.google.com/",
    urlRepo: "https://github.com/melquip/melquip_portfolio",
    open: false,
  },
  {
    id: 5,
    title: "Title of a portfolio project",summary: "This is an answhe question this is an ao the question this is er to the question Tan answer to the question s an answer to the question is is an answer to the question",
    description: "This is an answhe question this is an ao the question this is er to the question Tan answer to the question s an answer to the question is is an answer to the question",
    urlLive: "https://www.google.com/",
    urlRepo: "https://github.com/melquip/melquip_portfolio",
    open: false,
  },
  {
    id: 6,
    title: "Title of a portfolio project",summary: "This is an answhe question this is an ao the question this is er to the question Tan answer to the question s an answer to the question is is an answer to the question",
    description: "This is an answhe question this is an ao the question this is er to the question Tan answer to the question s an answer to the question is is an answer to the question",
    urlLive: "https://www.google.com/",
    urlRepo: "https://github.com/melquip/melquip_portfolio",
    open: false,
  }
];
export function projectsReducer(state = initialProjectsState, action) {
  switch (action.type) {
    case types.SET_PROJECTS:
      return action.payload;
    default:
      return state;
  }
}

const initialQuestionsState = [
  {
    id: 1,
    question: "What is the question?",
    answer: "This is an answhe question this is an ao the question this is er to the question Tan answer to the question s an answer to the question is is an answer to the question",
    open: true,
  },
  {
    id: 2,
    question: "What is the question?",
    answer: "This is an answhe question this is an ao the question this is er to the question Tan answer to the question s an answer to the question is is an answer to the question",
    open: false,
  }
];
export function questionsReducer(questions = initialQuestionsState, action) {
  switch (action.type) {
    case types.SET_QUESTIONS:
      return action.payload;
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