var mongoose = require("mongoose");
var ObjectId = require('mongodb').ObjectID;

var reviewsSchema = mongoose.Schema({
    name: String,
    rating: String

});

var reviews = mongoose.model('reviews', reviewsSchema);



exports.getReviewsList = function (req, res) {
    reviews.find({}).exec(function (err, collecton) {
        res.send(collecton);
    })
}