var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'),
    User = require('./api/models/userListModels'),
    bodyParser = require('body-parser');


mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/users');
app.use(bodyParser.urlencoded({ extented: true }));
app.use(bodyParser.json());

var route = require('./api/routes/userListRoutes');
routes(app);
app.listen(port);
console.log('user List started on:' + port);



