"user strict";
var sql = require("../db.js");

//Task object constructor
var Job = function (job) {};
// Task.createTask = function (newTask, result) {
//   sql.query("INSERT INTO tasks set ?", newTask, function (err, res) {
//     if (err) {
//       console.log("error: ", err);
//       result(err, null);
//     } else {
//       console.log(res.insertId);
//       result(null, res.insertId);
//     }
//   });
// };
// Task.getTaskById = function (taskId, result) {
//   sql.query("Select task from tasks where id = ? ", taskId, function (
//     err,
//     res
//   ) {
//     if (err) {
//       console.log("error: ", err);
//       result(err, null);
//     } else {
//       result(null, res);
//     }
//   });
// };
Job.getJobs = function (result) {
  sql.query(
    "SELECT jobs.id, jobs.category_id, jobs.status, jobs.contact_name, jobs.contact_phone, jobs.contact_email, jobs.price, jobs.description, jobs.created_at, categories.name AS location, categories.postcode, t3.name AS category FROM hipages.jobs jobs INNER JOIN hipages.suburbs categories ON jobs.suburb_id = categories.id INNER JOIN hipages.categories t3 ON jobs.category_id = t3.id",
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
module.exports = Job;
