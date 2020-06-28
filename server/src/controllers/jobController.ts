"use strict";

var Job = require("../models/jobModel");

exports.list_jobs = function (req, res) {
  var status = req.params.status;

  Job.getJobs(status, function (err, jobs) {
    console.log("controller");
    if (err) res.send({ err });
    // console.log("res", jobs);
    res.send({ jobs: jobs });
  });
};

exports.change_job_status = function (req, res) {
  console.log("req", req.body);
  var id = req.params.id;
  var status = req.body.status;

  Job.editJob(id, status, function (err, job) {
    if (err) res.send({ err });
    // console.log("res", jobs);
    res.send({ data: job });
  });
};

// exports.read_a_task = function(req, res) {
//   Task.getTaskById(req.params.taskId, function(err, task) {
//     if (err)
//       res.send(err);
//     res.json(task);
//   });
// };
