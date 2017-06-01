'use strict';

process.env.NODE_ENV = 'test';


const { suite, test } = require('mocha');
const request = require('supertest');
const server = require('../../index');


suite('CRUD routes for people resource should be created.', () => {

  test('GET /api/people should return the id,name,isActive, created_at and updated_at of all people.', done => {

    let data = [
      {
        "person_id": 1,
        "name": "Mat",
        "last_name": "Brown",
        "email": "mat@gmail.com",
        "is_active": true,
        "created_at": new Date("2017-05-22T20:18:11.881Z"),
        "updated_at": new Date("2017-05-22T20:18:11.881Z")
      },
      {
        "person_id": 2,
        "first_name": "Katie",
        "last_name": "Jenkins",
        "email": "katie@gmail.com",
        "is_active": true,
        "created_at": new Date("2017-05-22T20:18:11.881Z"),
        "updated_at": new Date("2017-05-22T20:18:11.881Z")
      },
    ];

    request(server)
      .get('/api/people')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, data, done);

  });

  test('GET /api/people/1 should return the id,name,is_active,created_at and updated_at of people with id 1.', (done) => {
    let data = {
      "person_id": 1,
      "first_name": "Mat",
      "last_name": "Brown",
      "email": "mat@gmail.com",
      "is_active": true,
      "created_at": new Date("2017-05-22T20:18:11.881Z"),
      "updated_at": new Date("2017-05-22T20:18:11.881Z")
    };
    request(server)
      .get('/api/people/1')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, data, done);
      
  });

  test('GET /api/people/:id with an invalid id should return a 404 status code.', done => {
  request(server)
    .post('/api/people/invalid')
    .set('Accept', 'text/plain')
    .expect(404, done);
  });

  test('POST /api/people with a valid object should return a 201 status code.', done => {
  request(server)
    .post('/api/people')
    .set('Accept', 'text/plain')
    .send({name: 'TEST POST' })
    .expect('Content-Type', /text\/plain/)
    .expect(201, done);
  });

  test('POST /api/people with a valid object and a param should return a 404 status code.', done => {
  request(server)
    .post('/api/people/1')
    .set('Accept', 'text/plain')
    .expect(404, done);
  });

  test('POST /api/people with an invalid object (extra key/value pairs) should return a 400 status code.', done => {
  request(server)
    .post('/api/people')
    .set('Accept', 'text/plain')
    .send({name: 'TEST POST', invalid: 'invalid' })
    .expect('Content-Type', /json/)
    .expect(400, done);
  });

  test('POST /api/people with an invalid object (no name) should return a 400 status code.', done => {
  request(server)
    .post('/api/people')
    .set('Accept', 'text/plain')
    .send({})
    .expect('Content-Type', /json/)
    .expect(400, done);
  });

  test('PATCH /api/people:id with a valid object should return a 204 status code.', done => {
  request(server)
    .patch('/api/people/1')
    .set('Accept', 'text/plain')
    .send({name: 'TEST POST' })
    .expect(204, done);
  });

  test('PATCH /api/people with a valid object and without a param should return a 404 status code.', done => {
  request(server)
    .patch('/api/people')
    .set('Accept', 'text/plain')
    .expect(404, done);
  });

  test('PATCH /api/people/1 with an invalid object (extra key/value pairs) should return a 400 status code.', done => {
  request(server)
    .patch('/api/people/1')
    .set('Accept', 'text/plain')
    .send({name: 'TEST POST', invalid: 'invalid' })
    .expect('Content-Type', /json/)
    .expect(400, done);
  });

  test('PATCH /api/people/1 with an invalid object (no name) should return a 400 status code.', done => {
  request(server)
    .patch('/api/people/1')
    .set('Accept', 'text/plain')
    .send({})
    .expect('Content-Type', /json/)
    .expect(400, done);
  });

  test('DELETE /api/people:id with a valid id should return a 204 status code.', done => {
  request(server)
    .delete('/api/people/1')
    .set('Accept', 'text/plain')
    .expect(204, done);
  });

  test('DELETE /api/people:id with an invalid id should return a 400 status code.', done => {
  request(server)
    .delete('/api/people/invalid')
    .set('Accept', 'text/plain')
    .expect(400, done);
  });

  test('DELETE /api/people:id without an id should return a 404 status code.', done => {
  request(server)
    .delete('/api/people/')
    .set('Accept', 'text/plain')
    .expect(404, done);
  });

});
