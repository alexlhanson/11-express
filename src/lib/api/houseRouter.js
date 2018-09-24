'use strict';

import express from 'express';

const router = express.Router();

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

router.get('/api/v1/houses/:id', (req, res) => {
  Houses.get(req.params.id)
    .then(data => sendJSON(res, data))
    .catch(console.error);
});

router.delete('/api/v1/houses/:id', (req, res) => {

  if (!req.params.id) {
    res.statusCode = '400';
    res.write(`TypeError: cannot delete resource of blank id`);
    res.end();
  } else {
    Houses.delete(req.params.id)
      .then(msg => {
        res.status(200);
        res.statusMessage = 'DELETE SUCCESSFUL';
        res.send(msg);
      })
      .catch(console.error);
  }
});

export default router;
