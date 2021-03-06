const express = require('express');
const serveStatic = require('serve-static');
const path = require('path');
// test

const app = express();

// app.use('/', serveStatic(path.join(__dirname, '/dist')));
app.use(express.static(__dirname + '/build'));


app.get('/people', function (req, res) {
    res.send('hello');
})

const port = process.env.PORT || 8080;
app.listen(port);