const path = require('path');
const express = require('express');
const reload = require('reload');
const http = require('http');

const app = express();
const port = 8080;

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/p5/index.html'));
});

app.get('/index.js', function(req, res) {
    res.sendFile(path.join(__dirname + '/p5/index.js'));
});

var server = http.createServer(app);

// Reload
reload(app).then(function (reloadReturned) {
    server.listen(port, function () {
        console.log(`Web server listening on port ${port}`);
        reloadReturned.reload();
    });

}).catch(function (err) {
    console.error('Reload could not start, could not start server', err);
});
