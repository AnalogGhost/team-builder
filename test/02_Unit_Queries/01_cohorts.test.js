'use strict';

process.env.NODE_ENV = 'test';

const assert = require('chai').assert;
const { suite, test } = require('mocha');
const server = require('../../index');
const query = require('../../queries/cohorts.js');

suite('Query functions for cohort should work.', () => {

  test('Get function with a valid id should work.', done => {
    query.get(1)
    .then(result => {
      let expected = {
            "cohort_id": 1,
            "name": "test1",
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
          "cohort_id": 1,
          "name": "test1",
          "is_active": true,
          "created_at": new Date("2017-05-22T20:18:11.881Z"),
          "updated_at": new Date("2017-05-22T20:18:11.881Z")
        },
        {
          "cohort_id": 2,
          "name": "test2",
          "is_active": false,
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
    query.create({name:'Test'}).then(result => done()).catch(err => done(err));
  });

  test('Update function should work with a valid object', done => {
    query.update(3,{name:'TestUpdated'}).then(() => {
      query.get(3).then(result => {
        delete result.created_at;
        delete result.updated_at;

        let expected = {
          "cohort_id": 3,
          "name": "TestUpdated",
          "is_active": true
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
            "cohort_id": 1,
            "name": "test1",
            "is_active": true,
            "created_at": new Date("2017-05-22T20:18:11.881Z"),
            "updated_at": new Date("2017-05-22T20:18:11.881Z")
          },
          {
            "cohort_id": 2,
            "name": "test2",
            "is_active": false,
            "created_at": new Date("2017-05-22T20:18:11.881Z"),
            "updated_at": new Date("2017-05-22T20:18:11.881Z")
          },
        ];
        assert.deepEqual(result,expected);
        done();
      })
      .catch(err => done(err));
    });
  });

});
