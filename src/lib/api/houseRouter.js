'use strict';

import express from 'express';

const router = express.Router();

import Houses from '../models/houses';

let sendJSON = (res, data) => {
  res.status(200).json(data);
};

router.post('api/v1/houses', (res, req) => {
  let house = new Houses(req.body.address, req.body.description, req.body.sqFootage);

  house.save()
    .then(data => sendJSON(res, data))
    .catch(console.error);
});

export default router;
