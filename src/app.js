'use strict';

import express from 'express';

let app = express();

//parsing middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//router access
import router from './lib/api/houseRouter';
app.use(router);

//catch-all route
app.use('/*', (req, res) =>{
  console.log('catchall');
  console.log(req.query.id);
  res.status(400).end();
});

module.exports = app;