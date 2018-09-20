'use strict';

import express from 'express';

let app = express();

//middleware use
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//router access
import houseRouter from './lib/api/houseRouter';
app.use(houseRouter);

//catch-all route
app.use('/*', (req, res) =>{
  res.status(400).end();
});

//listening and running server
let isRunning = false;

module.exports = {
  start: port => {
    if (!isRunning) {
      app.listen(port, (err) => {
        if (err) {throw err;}
        isRunning = true;
        console.log(`server is up and running on port ${port}`);
      });
    } 
  },
  stop: () => {
    app.close( () => {
      isRunning = false;
      console.log(`server has been shut down`);
    });
  },
};

