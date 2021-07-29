import config from './config';
import express from 'express';
const server = express();

server.listen(config.port, () => {
  console.log('Server listening on PORT', config.port);
});