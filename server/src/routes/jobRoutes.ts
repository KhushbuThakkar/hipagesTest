"use strict";
module.exports = function (app) {
  var jobController = require("../controllers/jobController.js");

  // get all jobs
  app.get("/api/jobs/:status", jobController.list_jobs);

  // change status
  app.put("/api/job/:id", jobController.change_job_status);
};
