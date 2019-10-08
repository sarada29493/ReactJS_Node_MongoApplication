
var mongoose = require("mongoose");
var ObjectId = require('mongodb').ObjectID;
var jwt = require('jsonwebtoken');

var userCrenSchema = mongoose.Schema({
    username: {
        type: String, unique: true
    },
    email: String,

});
var user = mongoose.model('users', userCrenSchema);



exports.auntheticate = function (req, res, next) {
    console.log(req.body.username);
    user.findOne({
        username: req.body.username
    }, function (err, user) {

        if (err) throw err;

        if (!user) {
            res.json({ success: false, message: 'Authentication failed. User not found.' });
        } else if (user) {

            // check if password matches
            if (user.email != req.body.email) {
                res.json({ success: false, message: 'Authentication failed. Wrong password.' });
            } else {

                const payload = {
                    admin: true
                };
                var token = jwt.sign(payload, req.app.get('superSecret'), {
                    expiresIn: '1h'
                });
                res.json({
                    success: true,
                    message: 'Enjoy your token!',
                    token: token
                });
            }
        }
    });
}
exports.isUserAuntheticated = function (req, res, next) {
    // var token = req.body.token || req.query.token || req.headers['x-access-token'];
    var token = req.headers['x-access-token'] || '';
    console.log(token)
    if (token) {
        jwt.verify(token, req.app.get('superSecret'), function (err, decoded) {
            if (err) {
                return res.json({ success: false, message: 'Failed to authenticate token.' });
            } else {
                // if everything is good, save to request for use in other routes
                req.decoded = decoded;
                next();
            }
        });
    }
    else {
        return res.status(403).send({
            success: false,
            message: 'No token provided.'
        });
    }
}