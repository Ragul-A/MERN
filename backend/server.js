/* eslint-disable no-unused-vars */
import config from './config';
import express from 'express';
const cors = require('cors');
const server = express();
// const mongoose = require('mongoose');
const MongoClient = require('mongodb').MongoClient;
const uri = 'mongodb://localhost:27017';
const client = new MongoClient(uri, {useUnifiedTopology: true});

server.use(cors());
server.use(express.json());

// const URI = process.env.ATLAS_URI;

// mongoose.conn

const db = client.db('registeration');
// MongoClient.connect('mongodb-connection-string', (err, client) => {
//   // ... do something here
// });

server.listen(config.port, () => {
  console.log('Server listening on PORT', config.port);
});

server.post('/register', function(req, res) {
  // db.collection('userData').insertOne(req.body);
  console.log('req', req.body);
  console.log('res', res);
  const client = new MongoClient('mongodb://localhost:27017');
  run();
  async function run() {
    try {
      await client.connect();
      const database = client.db('registeration');
      const collection = database.collection('userData');
      console.log('collection', collection);

      const result = await collection.insertOne(req.body);
      res.end(JSON.stringify(result));
    } catch (e) {
      console.log('Error: ' + e);
    } finally {
      await client.close();
    }
  }

});