
const mongoose = require('mongoose');
const MongoStore = require('connect-mongo')
const session = require("express-session");

const mongoConfig = () => {
    app.use(session({
        store: MongoStore.create({
            mongoUrl:"mongodb+srv://admin:admin@cluster0.baldr.mongodb.net/sessions?retryWrites=true&w=majority",
            mongoOptions:{useNewUrlParser: true},
        }),
        secret: "C0ntr4",
        resave: false,
        saveUninitialized: false
    }))



    mongoose.set('strictQuery', false)
    mongoose.connect('mongodb+srv://admin:admin@cluster0.baldr.mongodb.net/?retryWrites=true&w=majority', error => {
    if (error) {
        console.log(`Cannot connect to db. error ${error}`);
    }
    console.log('db conected');
});
}

module.exports = mongoConfig;