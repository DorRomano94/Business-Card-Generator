
const mysql = require('mysql');
const express = require('express');
const dotenv = require('dotenv');
const app = express();
const userRoute = require('./routes/user.routes');
const cardRoute = require('./routes/card.routes');

dotenv.config();

app.use(express.json());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept,token");
    next();
});


app.use('/users', userRoute);
app.use('/cards', cardRoute);


const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}..`));