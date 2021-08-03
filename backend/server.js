import config from './config';
import express from 'express';
const cors = require('cors');
const server = express();
// const mongoose = require('mongoose');
// const mongodb = require('mongodb');

server.use(cors());
server.use(express.json());

// const URI = process.env.ATLAS_URI;

// mongoose.conn
server.listen(config.port, () => {
  console.log('Server listening on PORT', config.port);
});

server.post('/register', function(req, res) {
  console.log('req', req);
  console.log('res', res);
});