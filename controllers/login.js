'use strict';


var LoginModel = require('../models/login');
module.exports = function (app) {
    var model = new LoginModel();
    console.log("in route index");
    console.log(model.title);
    app.get('/login', function (req, res) {
        res.render('login', model);
    });
};
