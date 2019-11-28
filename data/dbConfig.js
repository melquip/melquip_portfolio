const knex = require('knex');
const env = require('../config').env;
const config = require('../knexfile');

module.exports = knex(config[env]);