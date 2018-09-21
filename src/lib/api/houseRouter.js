'use strict';

import express from 'express';

const houseRouter = express.Router();

import Houses from '../models/houses';

let sendJSON = (res, data) => {
  res.status(200).json(data);
};

router.post('/api/v1/houses', (req, res) => {
  let house = new Houses(req.body.address, req.body.description, req.body.sqFootage);

  house.save()
    .then(data => sendJSON(res, data))
    .catch(console.error);
});

router.get('/api/v1/houses', (req, res) => {
  console.log('getting in the route');
  Houses.get(req.query.id)
    .then(data => sendJSON(res, data))
    .catch(console.error);
});

router.delete('/api/v1/houses', (req, res) => {

  if (!req.query.id) {
    res.statusCode = '400';
    res.write(`TypeError: cannot delete resource of blank id`);
    res.end();
  } else {
    Houses.delete(req.query.id)
      .then(msg => {
        res.status(200);
        res.statusMessage = 'DELETE SUCCESSFUL';
        res.send(msg);
      })
      .catch(console.error);
  }
});

export default houseRouter;
