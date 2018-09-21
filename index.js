'use strict';

require('dotenv').config();
require('babel-register');

console.log(`Process running with id: ${process.pid}`);
const app = require('./src/app.js');
// require('./src/app.js').listen(process.env.PORT);

// import app from './src/app.js';

app.listen(3000,() => {
  console.log('listening on PORT 3000');
});


