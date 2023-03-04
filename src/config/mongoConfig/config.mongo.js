const mongoose = require('mongoose');

const mongoConfig = () => {
    mongoose.set('strictQuery', false)
    mongoose.connect('mongodb+srv://admin:admin@cluster0.baldr.mongodb.net/?retryWrites=true&w=majority', error => {
    if (error) {
        console.log(`Cannot connect to db. error ${error}`);
    }
    console.log('db conected');
});
}

module.exports = mongoConfig;