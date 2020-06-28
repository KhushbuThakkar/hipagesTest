"user strict";
var sql = require("../db.js");

// Job object constructor
var Job = function (job) {};

Job.getJobs = function (status, result) {
  sql.query(
    "SELECT jobs.id, jobs.category_id, jobs.status, jobs.contact_name, jobs.contact_phone, jobs.contact_email, jobs.price, jobs.description, jobs.created_at, categories.name AS location, categories.postcode, t3.name AS category FROM hipages.jobs jobs INNER JOIN hipages.suburbs categories ON jobs.suburb_id = categories.id INNER JOIN hipages.categories t3 ON jobs.category_id = t3.id WHERE jobs.status = ?;",
    [status],
    function (err, res) {
      if (err) {
        console.log("error: ", err);
        result(null, err);
      } else {
        console.log("jobs : ", res);
        result(null, res);
      }
    }
  );
};

Job.editJob = function (jobId, status, result) {
  console.log(status, "status is");
  sql.query(
    "UPDATE `jobs` SET `status` = ? WHERE `id` = ? ",
    [status, jobId],
    function (err, res) {
      if (err) {
        console.log("error: ", err);
        result(err, null);
      } else {
        result(null, res);
      }
    }
  );
};

module.exports = Job;
