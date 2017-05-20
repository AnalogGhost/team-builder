'use strict';

process.env.NODE_ENV = 'test';

const assert = require('chai').assert;
const exec = require('child_process').exec;

const { suite, test } = require('mocha');

const knex = require('../../knex');

suite('Database Migrations Should Be Run', function () {

  before( done => {

    knex.migrate.latest()
    .then(() => {
      done();
    })
    .catch( err => {
      done(err);
    });

  });

  test('Database Migrations Run', done => {
    done();
  });

});
