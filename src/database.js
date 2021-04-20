const mongoose = require('mongoose');

mongoose
    .connect('mongodb://localhost/mflix',{
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useFindAndModify: false,
    })
    .then(db => console.log('Db connected'))
    .catch(err => console.log(err))