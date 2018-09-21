'use strict';
const debug = require('debug')('app');

import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

let app = express();

//parsing middleware
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//router access
import houseRouter from './lib/api/houseRouter';
app.use(houseRouter);

//catch-all route
app.use('/*', (req, res) =>{
  console.log('catchall');
  console.log(req.query.id);
  res.status(400).end();
});

module.exports = app;