const database = require('../models/database.models');
const Job = database.job;
const { v4: uuidV4 } = require('uuid');
const { reset } = require('nodemon');


exports.getAllJobs = (req, res) => {
    console.log("getAllJobs called...");
    Job
    .find()
    .then(data => {
        res.json(data);
    })
    .catch(err => {
        res.status(404).json({message: err.message});
    });
}

exports.createJob = (req, res) => {
    const job = new Job({
        position: req.body.position,
        company: req.body.company,
        location: req.body.location,
        salary: req.body.salary
    });

    job
    .save()
    .then(data => {
        res.json(data);
    })
    .catch(err => {
        res.status(500).json({
            message: err.message
        });
    });
}

exports.updateJob = (req, res) => {
    console.log(req);
    res.json({"id": req.params.id});
}