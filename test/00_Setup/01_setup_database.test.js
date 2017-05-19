'use strict';

process.env.NODE_ENV = 'test';

const assert = require('chai').assert;
const exec = require('child_process').exec;

const { suite, test } = require('mocha');


suite('Test Database Should Be Created', () => {

  before( done => {
    prepare_db( err => {
      done(err);
    });

  });

  test('Test Database Created', done => {
    done();
  });

});

function prepare_db(next){
  let testDatabase = process.env.TEST_DATABASE_NAME || 'testdb';
  exec('dropdb ' + testDatabase, function(err) {
    if (err !== null && !err.toString().includes('does not exist')) {
      return next(err);
    }

    exec('createdb ' + testDatabase, function(err){
      if (err !== null) {
      }
      next(err);
    });
  });
}
