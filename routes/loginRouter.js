const db = require('../data/dbConfig.js');
const config = require('../config');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const loginRouter = require('express').Router();
const { handleErrors } = require('../middleware');

loginRouter.post('/', async (req, res, next) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      next(config.errors.missingFields);
      return;
    }
    const user = await db('users').first();
    const isValidPassword = bcrypt.compareSync(password, user.password);
    if (isValidPassword) {
      const token = jwt.sign({
        subject: user.id,
        username: user.username,
      }, config.jwtSecret, {
		    expiresIn: "2h"
      });
      res.status(200).json({
        id: user.id,
        username: user.username,
        token
      })
    }
  } catch (error) {
    next(error);
  }
});

handleErrors('loginRouter', loginRouter);

module.exports = loginRouter;