const express = require('express');
const server = express();
const cors = require("cors");

const apiRoutes = require('./routes/routes')

server.use(cors());
server.use(express.json());

server.use("/api/star-wars", apiRoutes);

module.exports = server;