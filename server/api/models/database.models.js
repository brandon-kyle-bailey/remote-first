const configuration = require('../../config/db.config');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const database = {};
database.mongoose = mongoose;
database.url = configuration.url;

database.job = require('./job.model')(mongoose);
database.company = require('./company.model')(mongoose);

module.exports = database;


