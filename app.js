const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// const cookieParser = require('cookie-parser');
// app.use(cookieParser());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use("/", require('./router/index'));

const port = process.env.PORT || 7777;
const server = app.listen(port, function () {
    console.log(`Server is listening ${server.address().port}`);
});


