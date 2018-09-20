'use strict';

require('dotenv').config();
require('babel-register');

console.log(`Process running with id: ${process.pid}`);

require('./src/app').start(process.env.PORT);


