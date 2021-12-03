const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://Jordan:Jordan@cluster0.l7bfv.mongodb.net/test',{useNewUrlParser:true});

mongoose.connection.once('open', function(){
    console.log('connection has been made');
}).on('error', function(error){
    console.log('error is', error)
});
