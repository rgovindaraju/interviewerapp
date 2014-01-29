'use strict';


//var IndexModel = require('../models');


module.exports = function (app) {

    var model = "interviewapp";


    app.get('/', function (req, res) {
        
        res.render('index', model);
        
    });

};
