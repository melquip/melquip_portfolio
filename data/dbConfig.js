const knex = require('knex');
const { env } = require('../config');
const config = require('../knexfile');

module.exports = knex(config[env]);
