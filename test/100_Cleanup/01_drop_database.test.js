'use strict';

process.env.NODE_ENV = 'test';

const assert = require('chai').assert;
const exec = require('child_process').exec;

const { suite, test } = require('mocha');


suite('Test Database Should Be Dropped', () => {

  before( done => {
    drop_db( err => {
      done(err);
    });

  });

  test('Test Database Dropped', done => {
    done();
  });

});

function drop_db(next){
  let testDatabase = process.env.TEST_DATABASE_NAME || 'testdb';
  exec('dropdb ' + testDatabase, function(err) {
    next(err);
  });
}
