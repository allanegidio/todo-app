const bodyParser = require('body-parser');
const express = require('express');
const allowCors = require('./cors');
const server = express();

const port = 8080;

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.use(allowCors);

server.listen(port, function() {
	console.log(`BACKEND IS RUNNING ON PORT: ${port}`);
});

module.exports = server;