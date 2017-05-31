'use strict';

process.env.NODE_ENV = 'test';


const { suite, test } = require('mocha');
const request = require('supertest');
const server = require('../../index');


suite('CRUD routes for cohorts resource should be created.', () => {

  test('GET /api/cohorts should return the id,name,isActive, created_at and updated_at of all cohorts.', done => {

    let data = [
      {
        "cohort_id": 1,
        "name": "test1",
        "is_active": true,
        "created_at": "2017-05-22T20:18:11.881Z",
        "updated_at": "2017-05-22T20:18:11.881Z"
      },
      {
        "cohort_id": 2,
        "name": "test2",
        "is_active": false,
        "created_at": "2017-05-22T20:18:11.881Z",
        "updated_at": "2017-05-22T20:18:11.881Z"
      },
    ];

    request(server)
      .get('/api/cohorts')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200,data, done);

  });

  test('GET /api/cohorts/1 should return the id,name,isActive,created_at and updated_at of cohort with id 1.', (done) => {
    let data = {
      "cohort_id": 1,
      "name": "test1",
      "is_active": true,
      "created_at": "2017-05-22T20:18:11.881Z",
      "updated_at": "2017-05-22T20:18:11.881Z"
    };
    request(server)
      .get('/api/cohorts/1')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, data, done);

  });

  test('GET /api/cohorts/:id with an invalid id should return a 404 status code.', done => {
  request(server)
    .post('/api/cohorts/invalid')
    .set('Accept', 'text/plain')
    .expect(404, done);
  });

  test('POST /api/cohorts with a valid object should return a 201 status code.', done => {
  request(server)
    .post('/api/cohorts')
    .set('Accept', 'text/plain')
    .send({name: 'TEST POST' })
    .expect('Content-Type', /text\/plain/)
    .expect(201, done);
  });

  test('POST /api/cohorts with a valid object and a param should return a 404 status code.', done => {
  request(server)
    .post('/api/cohorts/1')
    .set('Accept', 'text/plain')
    .expect(404, done);
  });

  test('POST /api/cohorts with an invalid object (extra key/value pairs) should return a 400 status code.', done => {
  request(server)
    .post('/api/cohorts')
    .set('Accept', 'text/plain')
    .send({name: 'TEST POST', invalid: 'invalid' })
    .expect('Content-Type', /json/)
    .expect(400, done);
  });

  test('POST /api/cohorts with an invalid object (no name) should return a 400 status code.', done => {
  request(server)
    .post('/api/cohorts')
    .set('Accept', 'text/plain')
    .send({})
    .expect('Content-Type', /json/)
    .expect(400, done);
  });

  test('PATCH /api/cohorts:id with a valid object should return a 204 status code.', done => {
  request(server)
    .patch('/api/cohorts/1')
    .set('Accept', 'text/plain')
    .send({name: 'TEST POST' })
    .expect(204, done);
  });

  test('PATCH /api/cohorts with a valid object and without a param should return a 404 status code.', done => {
  request(server)
    .patch('/api/cohorts')
    .set('Accept', 'text/plain')
    .expect(404, done);
  });

  test('PATCH /api/cohorts/1 with an invalid object (extra key/value pairs) should return a 400 status code.', done => {
  request(server)
    .patch('/api/cohorts/1')
    .set('Accept', 'text/plain')
    .send({name: 'TEST POST', invalid: 'invalid' })
    .expect('Content-Type', /json/)
    .expect(400, done);
  });

  test('PATCH /api/cohorts/1 with an invalid object (no name) should return a 400 status code.', done => {
  request(server)
    .patch('/api/cohorts/1')
    .set('Accept', 'text/plain')
    .send({})
    .expect('Content-Type', /json/)
    .expect(400, done);
  });

  test('DELETE /api/cohorts:id with a valid id should return a 204 status code.', done => {
  request(server)
    .delete('/api/cohorts/1')
    .set('Accept', 'text/plain')
    .expect(204, done);
  });

  test('DELETE /api/cohorts:id with an invalid id should return a 400 status code.', done => {
  request(server)
    .delete('/api/cohorts/invalid')
    .set('Accept', 'text/plain')
    .expect(400, done);
  });

  test('DELETE /api/cohorts:id without an id should return a 404 status code.', done => {
  request(server)
    .delete('/api/cohorts/')
    .set('Accept', 'text/plain')
    .expect(404, done);
  });

});
