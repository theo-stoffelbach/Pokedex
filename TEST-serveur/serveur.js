var express = require('express'),
app = express(),
port = process.env.PORT || 3000,
mongoose = require('mongoose'),
User = require('./api/models/userListModels'),
bodyParser = require('body-parser');


mongoose.Promise = global.Promise;
app.listen(port);
console.log('user List started on:' + port);



