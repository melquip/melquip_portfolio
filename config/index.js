module.exports = {
  env: process.env.NODE_ENV ? process.env.NODE_ENV : 'development',
  port: process.env.PORT,
  origin: [
    'http://localhost:3000',
    'http://www.melquip.com',
    'https://www.melquip.com'
  ],
  productionDB: process.env.DATABASE_URL,
}