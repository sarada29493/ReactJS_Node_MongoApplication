
var express = require('express'),
    stylus = require('stylus'),
    logger = require('morgan'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    cookieParser = require('cookie-parser'),
    session = require('express-session')


module.exports = function (app, config) {
    app.use(logger('dev'));
    // app.use(cookieParser());
    // app.use(bodyParser.urlencoded({ extended: true, resave: false, saveUnintialized: false }));
    // app.use(bodyParser.json());
    // app.use(session({ secret: 'secrettexthereyu' }));

    app.use(bodyParser.urlencoded({ extended: true, resave: false, saveUnintialized: false }));
    app.use(bodyParser.json());
    app.use(express.static(config.rootPath));
}