var employeeModel = require('../model/employee');
var ObjectId = require('mongodb').ObjectID;
var EmployeeModelSchema=employeeModel.getEmployeeModelSchema();


exports.testServer = function (req, res) {
    res.send("Server Working...");
};
exports.getAllEmployees = function (req, res) {
    EmployeeModelSchema.find({}).exec(function (err, collection) {
        res.send(collection);
    })
};