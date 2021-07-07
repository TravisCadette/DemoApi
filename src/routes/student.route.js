// This router handles all requests to 
//the api/student endpoint
// Three Module Local, ThirdParty, ???

module.exports = app => {
    //Everthing in these curly brackets will be
    //exported
    const router = require('express').Router();

    // configure routes based on combo of URL/VERB

    //GET all students
    router.get("/", function(req, res) {
        res.send('You have reached the router for api/student');
    });

    app.use('/api/student', router);
}

//GET http://localhost:3000/api/student
