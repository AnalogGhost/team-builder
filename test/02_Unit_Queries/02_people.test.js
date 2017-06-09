'use strict';

process.env.NODE_ENV = 'test';

const assert = require('chai').assert;
const { suite, test } = require('mocha');
const server = require('../../index');
const query = require('../../queries/people.js');

suite('Query functions for people should work.', () => {

  test('Get function with a valid id should work.', done => {
    query.get(1)
    .then(result => {
      let expected = {
            "person_id": 1,
            "first_name": "Mat",
            "last_name": "Brown",
            "email": "mat@gmail.com",
            "is_active": true,
            "created_at": new Date("2017-05-22T20:18:11.881Z"),
            "updated_at": new Date("2017-05-22T20:18:11.881Z")
      };
      assert.deepEqual(result,expected);
      done();
    })
    .catch(err => done(err));
  });

  test('List function should work.', done => {
    query.list()
    .then(result => {
      let expected = [
        {
          "person_id": 2,
          "first_name": "Katie",
          "last_name": "Jenkins",
          "email": "katie@gmail.com",
          "is_active": true,
          "created_at": new Date("2017-05-22T20:18:11.881Z"),
          "updated_at": new Date("2017-05-22T20:18:11.881Z")
        },
        {
          "person_id": 1,
          "first_name": "Mat",
          "last_name": "Brown",
          "email": "mat@gmail.com",
          "is_active": true,
          "created_at": new Date("2017-05-22T20:18:11.881Z"),
          "updated_at": new Date("2017-05-22T20:18:11.881Z")
        },
      ];
      assert.deepEqual(result,expected);
      done();
    })
    .catch(err => done(err));
  });

  test('Create function should work with a valid object', done => {
    query.create({first_name:'Test', last_name:'Test', email:'test@gmail.com', is_active:true}).then(result => done()).catch(err => done(err));
  });

  test('Update function should work with a valid object', done => {
    query.update(3,{first_name:'TestUpdated', last_name:"TestUpdated", email:"TestUpdated@gmail.com", is_active:false, created_at: new Date("2017-05-22T20:18:11.881Z"), "updated_at": new Date("2017-05-22T20:18:11.881Z")}).then(() => {
      query.get(3).then(result => {
        delete result.created_at;
        delete result.updated_at;

        let expected = {
          "person_id": 3,
          "first_name": "TestUpdated",
          "last_name": "TestUpdated",
          "email": "TestUpdated@gmail.com",
          "is_active": false
        };
        assert.deepEqual(result,expected);
        done();
      });
    });
  });

  test('Delete function should work.', done => {
    query.remove(3).then(() => {
      query.list()
      .then(result => {
        let expected = [
          {
            "person_id": 2,
            "first_name": "Katie",
            "last_name": "Jenkins",
            "email": "katie@gmail.com",
            "is_active": true,
            "created_at": new Date("2017-05-22T20:18:11.881Z"),
            "updated_at": new Date("2017-05-22T20:18:11.881Z")
          },
          {
            "person_id": 1,
            "first_name": "Mat",
            "last_name": "Brown",
            "email": "mat@gmail.com",
            "is_active": true,
            "created_at": new Date("2017-05-22T20:18:11.881Z"),
            "updated_at": new Date("2017-05-22T20:18:11.881Z")
          }
        ];
        assert.deepEqual(result,expected);
        done();
      })
      .catch(err => done(err));
    });
  });

});
