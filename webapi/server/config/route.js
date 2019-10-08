var userCrenModel = require('../model/users');
var reviewModel = require('../model/reviews');
var employeeController = require('../controller/employeeController');

module.exports = function (app, dir) {


    app.get('/', employeeController.testServer);
    app.get('/employees', employeeController.getAllEmployees);

    app.get('/reviews', userCrenModel.isUserAuntheticated, reviewModel.getReviewsList);
    app.post('/login', userCrenModel.auntheticate);


}
