const database = require('../models/database.models');
const Job = database.job;
const { v4: uuidV4 } = require('uuid');
const { reset } = require('nodemon');
const fs = require('fs');


const jobs = [
  {
    imgUrl: 'https://transcosmos.co.uk/wp-content/uploads/2015/09/google_logo_03-818x600.jpg',
    position: 'job title',
    company: 'company',
    description: 'description',
    salary: 75000,
    tags: ['software', 'remote', 'python', 'google', 'web', 'test'],
    location: 'testremote',
    creationTime: '2020-09-26 00:00:00'
  },
  {
    imgUrl: 'https://transcosmos.co.uk/wp-content/uploads/2015/09/google_logo_03-818x600.jpg',
    position: 'Senior Full Stack Developer',
    company: 'Google',
    description: 'Ex eiusmod veniam nisi ut commodo sint aliquip mollit aliqua. Tempor nisi cupidatat reprehenderit enim quis irure ea irure quis enim consequat. Quis qui amet labore in reprehenderit. Occaecat ad velit voluptate aliquip sunt ex mollit. Esse id exercitation nostrud commodo incididunt nulla elit eu pariatur in. Adipisicing qui irure officia do esse. Proident occaecat sint commodo officia id id do laborum adipisicing duis sit. ',
    salary: 75000,
    tags: ['software', 'remote', 'python', 'google', 'web'],
    location: 'remote',
    creationTime: '2020-09-26 00:00:00'
  },
  {
    imgUrl: 'https://transcosmos.co.uk/wp-content/uploads/2015/09/google_logo_03-818x600.jpg',
    position: 'Senior Full Stack Developer',
    company: 'Google',
    description: 'Ex eiusmod veniam nisi ut commodo sint aliquip mollit aliqua. Tempor nisi cupidatat reprehenderit enim quis irure ea irure quis enim consequat. Quis qui amet labore in reprehenderit. Occaecat ad velit voluptate aliquip sunt ex mollit. Esse id exercitation nostrud commodo incididunt nulla elit eu pariatur in. Adipisicing qui irure officia do esse. Proident occaecat sint commodo officia id id do laborum adipisicing duis sit. ',
    salary: 75000,
    tags: ['software', 'remote', 'python', 'google', 'web'],
    location: 'remote',
    creationTime: '2020-09-26 00:00:00'
  },
  {
    imgUrl: 'https://transcosmos.co.uk/wp-content/uploads/2015/09/google_logo_03-818x600.jpg',
    position: 'Senior Full Stack Developer',
    company: 'Google',
    description: 'Ex eiusmod veniam nisi ut commodo sint aliquip mollit aliqua. Tempor nisi cupidatat reprehenderit enim quis irure ea irure quis enim consequat. Quis qui amet labore in reprehenderit. Occaecat ad velit voluptate aliquip sunt ex mollit. Esse id exercitation nostrud commodo incididunt nulla elit eu pariatur in. Adipisicing qui irure officia do esse. Proident occaecat sint commodo officia id id do laborum adipisicing duis sit. ',
    salary: 75000,
    tags: ['software', 'remote', 'python', 'google', 'web'],
    location: 'remote',
    creationTime: '2020-09-26 00:00:00'
  },
]


exports.getAllJobs = (req, res) => {
    console.log("getAllJobs called...");
    // Job
    // .find()
    // .then(data => {
    //     res.json(data);
    // })
    // .catch(err => {
    //     res.status(404).json({message: err.message});
    // });
    res.json(jobs);

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

exports.createMultipleJobs = async (req, res) => {
  console.log("job.controller.createMultipleJobs");
  fs.readFile(req.file.path, 'utf8', (err, data) => {
    if(err) {
      console.log(err);
    }
    res.json(JSON.parse(data));
 });
}