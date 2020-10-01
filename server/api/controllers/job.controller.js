const database = require('../models/database.models');
const Job = database.job;
const { v4: uuidV4 } = require('uuid');
const { reset } = require('nodemon');
const fs = require('fs');


exports.getMethods = {
  getJobs : (req, res) => {
    console.log("getJobs called...");
    Job
    .find()
    .then(data => {
        res.json(data);
    })
    .catch(err => {
        res.status(404).json({message: err.message});
    });
    // res.json(jobs);
  },

  getJob : (req, res) => {
    console.log('getJob');
    Job.findById(req.params.id)
    .then(data => {
      res.json(data)
    })
    .catch(err => res.status(400).json({message: err}));
  }

}

exports.postMethods = {
  postJob: (req, res) => {
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
  },

  postJobs: (req, res) => {
    console.log("job.controller.createMultipleJobs");

    // read file contents
    fs.readFile(req.file.path, 'utf8', (err, data) => {
      if(err) {
        console.log(err);
      }
      const uploadJobs = JSON.parse(data);
      // create jobs
      for (var key in uploadJobs) {
        let newJob = new Job({
          imgUrl: uploadJobs[key]['imgUrl'],
          position: uploadJobs[key]['position'],
          company: uploadJobs[key]['company'],
          description: uploadJobs[key]['description'],
          salary: uploadJobs[key]['salary'],
          tags: uploadJobs[key]['tags'],
          location: uploadJobs[key]['location'],
        });
        // save job
        newJob
        .save()
        .catch(err => console.log(err));
      }
      // delete file
      fs.unlinkSync(req.file.path);
      // return success
      res.status(201).json({
        message: "Success"
    });
   });
  }
}

exports.putMethods = {
  putJob: (req, res) => {
    console.log(req);
    res.json({"id": req.params.id});
  }
}

exports.deleteMethods = {
  deleteJob: (req, res) => {
    Job.deleteOne({ _id: req.params.id }, (err, data) => {
      if(!err) {
        res.json({message: `${JSON.stringify(data)} Deleted successfully.`});
      } else {
        res.json({message: err});
      }
    });
  }
}