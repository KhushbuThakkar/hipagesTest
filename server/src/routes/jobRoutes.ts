"use strict";
module.exports = function (app) {
  var todoList = require("../controllers/jobController.js");

  // jobList Routes
  app.get("/api/jobs", todoList.list_jobs);
};
