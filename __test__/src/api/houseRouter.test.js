// 'use strict';

// const request = require('supertest');
// const app = require('../../../src/app.js');

// describe('POST requests', () => {

//   test('should show POST api responds to JSON', (done) => {
//     request(app)
//       .post('/api/v1/houses/')
//       .set('Accept', 'application/json')
//       .send({
//         "address": "1561 SW Rimrock",
//         "description": "lovely",
//         "sqFootage": "3000"
//       })
//       .expect(200)
//       .end((err, res) => {
//         if (err) throw err;
//         // let body = {"id":"7ed81bb0-bdc1-11e8-828e-39851145def5","address":"1561 SW Rimrock","description":"quaint little duplex with full yard and carport","sqFootage":"1200"};

//         // Uncomment to show it fails as expected
//         // expect(res.header['content-type']).toMatch(/application\/garbage/);
//         // expect(res.body).toEqual({});
//         // expect(res.status).toBe(9000);

//         // expect(res.header['content-type']).toMatch(/application\/json/);
//         expect(res.body).toEqual(body);
//         // expect(res.status).toBe(200);
//       });

//   });
// });