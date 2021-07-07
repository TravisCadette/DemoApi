const express = require('express');

const app = express();

app.get('/', function(req, res) {
    res.send('You have reached the top level route handler with a GET');
})

require('./src/routes/student.route')(app);

app.listen(3000, function() {
    console.log('DemoAPI listening on port 3000');
})