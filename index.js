'use strict';

require('dotenv').config();
require('babel-register');

console.log(`Process running with id: ${process.pid}`);

require('./src/app.js').start(process.env.PORT);


