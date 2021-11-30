const mongoose = require('mongoose');

mongoose
    .connect(
        'mongodb+srv://Jordan:Jordan@cluster0.l7bfv.mongodb.net/test',
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false,
        }
    )
    .then(() => console.log('Connected to Among us!!!!'))
    .catch((err) => console.log("C'est bagdad", err));