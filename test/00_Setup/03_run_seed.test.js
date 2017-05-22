'use strict';

process.env.NODE_ENV = 'test';

const assert = require('chai').assert;
const exec = require('child_process').exec;

const { suite, test } = require('mocha');

const knex = require('../../knex');

suite('Database Seed Data Should Be Run', function () {

  before( done => {

    knex.seed.run()
      .then(() => {
        done();
      })
      .catch((err) => {
        done(err);
      });

  });

  test('Database Seed Data Ran', done => {
    done();
  });

});
