'use strict';


//var IndexModel = require('../models');


module.exports = function (app) {

    var model = "interviewapp";

    app.get('/feedback', function (req, res) {

        console.log("feedback get");
        
        res.render('feedback', model);
        
    });

    app.post('/feedback', function (req, res) {

        console.log("feedback post");
        
    });

     app.get('/feedback_save', function (req, res) {


        console.log("feedback_save get");

        var models = require('../models');
        var Feedback = models.Feedback;  
        var question_id = req.param('question_id');

        console.log("question id is "+question_id);

        var feedback_obj = Feedback.build({ full_name: 'justin', rating: 'GOOD' });
        feedback_obj.save().success(function(feedback_obj){
        console.log("obj created.");
        }).error(function (error){
          console.log(error);
        }) ;
        
        console.log("form saved");
        res.render('index', model);
        
    });

};
