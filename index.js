'use strict';

require('dotenv').config();
require('babel-register');

console.log(`Process running with id: ${process.pid}`);
const app = require('./src/app.js');
app.listen(process.env.PORT);


// app.listen(3000,() => {
//   console.log('listening on PORT 3000');
// });


