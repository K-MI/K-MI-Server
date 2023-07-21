//import fs from 'fs';
import express from 'express';
import { config } from 'dotenv';
import { Request, Response, NextFunction } from 'express';
import { UserSource, RestaurntSource } from './ormconfig';
config();
const app = express();
const prod: boolean = process.env.NODE_ENV === ' production';

app.set('port', prod ? process.env.PORT : 8080);

// UserSource.initialize()
//   .then(() => {
//     console.log('User DB connect success!!');
//   })
//   .catch((err) => {
//     console.error('User DB connect failed', err);
//   });
// RestaurntSource.initialize()
//   .then(() => {
//     console.log('Restaurant DB connect success!!');
//   })
//   .catch((err) => {
//     console.error('Restaurant DB connect failed', err);
//   });

app
  .listen(app.get('port'), () => {
    console.log(`# Server is running on PORT: ${app.get('port')}`);
  })
  .on('error', (err) => {
    console.error('Server failed to start:', err);
  });
