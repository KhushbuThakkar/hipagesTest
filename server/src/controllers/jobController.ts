"use strict";

var Job = require("../models/jobModel");

exports.list_jobs = function (req, res) {
  var status = req.params.status;

  Job.getJobs(status, function (err, jobs) {
    if (err) res.send({ err });
    // console.log("res", jobs);
    res.send({ jobs: jobs });
  });
};

exports.change_job_status = function (req, res) {
  var id = req.params.id;
  var status = req.body.status;

  Job.editJob(id, status, function (err, job) {
    if (err) res.send({ err });
    res.send({ data: job });
  });
};
