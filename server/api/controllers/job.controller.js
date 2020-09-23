const database = require('../models/database.models');
const Job = database.job;
const { v4: uuidV4 } = require('uuid');
const { reset } = require('nodemon');


exports.getAllJobs = (req, res) => {
    console.log("getAllJobs called...");
    res.json({"job": "hi there"});
}


