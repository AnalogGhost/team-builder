'use strict';

process.env.NODE_ENV = 'test';

const assert = require('chai').assert;
const exec = require('child_process').exec;

const { suite, test } = require('mocha');

const knex = require('../../knex');


suite('Test Database Should Be Dropped', function () {

  before( done => {
    knex.destroy().then(function() {
      drop_db( err => {
        done(err);
      });
    });


  });

  test('Test Database Dropped', done => {
    done();
  });

});

function drop_db(next){
  const testDatabase = process.env.TEST_DATABASE_NAME || 'team_test';
  exec('dropdb ' + testDatabase, function(err) {
    next(err);
  });

}
