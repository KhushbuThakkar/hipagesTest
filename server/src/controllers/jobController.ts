"use strict";

var Job = require("../models/jobModel");

exports.list_jobs = function (req, res) {
  Job.getJobs(function (err, jobs) {
    console.log("controller");
    if (err) res.send({ err });
    // console.log("res", jobs);
    res.send({ jobs: jobs });
  });
};

// exports.read_a_task = function(req, res) {
//   Task.getTaskById(req.params.taskId, function(err, task) {
//     if (err)
//       res.send(err);
//     res.json(task);
//   });
// };
