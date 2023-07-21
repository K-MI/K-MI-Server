"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//import fs from 'fs';
const express_1 = __importDefault(require("express"));
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
const app = (0, express_1.default)();
const prod = process.env.NODE_ENV === ' production';
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
