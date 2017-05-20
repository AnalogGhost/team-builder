'use strict';

process.env.NODE_ENV = 'test';

const assert = require('chai').assert;
const exec = require('child_process').exec;

const { suite, test } = require('mocha');


suite('Test Database Should Be Created', function () {

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
  const testDatabase = process.env.TEST_DATABASE_NAME || 'team_test';
  exec('createdb ' + testDatabase, function(err){
    next(err);
  });
}
