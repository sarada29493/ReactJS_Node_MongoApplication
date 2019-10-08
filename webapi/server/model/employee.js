var mongoose = require("mongoose");
var ObjectId = require('mongodb').ObjectID;
var employeeSchema = mongoose.Schema({
    EmpID: Number,
    EmpName: String,
    Designation: String,
    Salary: Number
   
    
});
var employees = mongoose.model('employees', employeeSchema);

exports.getEmployeeModelSchema = function (req, res) {
    return employees;
};


