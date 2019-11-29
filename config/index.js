module.exports = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT,
  origin: [
    'http://localhost:3000',
    'http://www.melquip.com',
    'https://www.melquip.com'
  ],
  productionDB: process.env.DATABASE_URL,
  jwtSecret: process.env.JWTSECRET,
  adminPassword: process.env.ADMINPW,
  errors: {
    invalidId: { message: "Invalid asset id!", status: 401 },
    missingFields: { message: "Missing one of the required fields!", status: 401 },
    exceededMaxLength: { message: "Contents exceeds maximum allowed length", status: 401 },
    aboutNotFound: { message: "About line not found!", status: 404 },
    couldntGetAllSlides: { message: "Couldn't get about slides" },
    couldntAddAboutLine: { message: "Couldn't add about line to database!" },
    couldntUpdateAboutLine: { message: "Couldn't update about line info!" },
    couldntDeleteAboutLine: { message: "Couldn't delete about line!" },
    projectNotFound: { message: "Project not found!", status: 404 },
    couldntGetAllProject: { message: "Couldn't get project!" },
    couldntAddProject: { message: "Couldn't add project to database!" },
    couldntUpdateProject: { message: "Couldn't update project info!" },
    couldntDeleteProject: { message: "Couldn't delete project!" },
    questionNotFound: { message: "Question not found!", status: 404 },
    couldntGetAllQuestion: { message: "Couldn't get question!" },
    couldntAddQuestion: { message: "Couldn't add question to database!" },
    couldntUpdateQuestion: { message: "Couldn't update question info!" },
    couldntDeleteQuestion: { message: "Couldn't delete question!" },
    noTokenProvided: { message: "You need to login in order to gain access!", status: 403 },
    invalidLogin: { message: "Invalid username or password", status: 401 },
  }
}