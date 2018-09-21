'use strict';

const request = require('supertest');
// // const express = require('express');
// import router from '../../../src/lib/api/houseRouter';
const app = require('../../../src/app.js');

describe ('POST requests', () => {

  test('POST api responds to JSON', () => {
    request(app)
      .post('/api/v1/houses')
      .set('Accept', 'application/json')
      .send({"1":"1"})
      .expect(400)
      .end();
      // .end((err, res) => {
      //   if (err) return done(err);
      //   done();
      // });
  });

});