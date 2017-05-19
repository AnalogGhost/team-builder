'use strict';

process.env.NODE_ENV = 'test';

const assert = require('chai').assert;
const { suite, test } = require('mocha');
const knex = require('../../knex');

suite('Schema for cohorts should be built.', () => {
  before( done => {
    knex.migrate.latest()
      .then(() => {
        done();
      })
      .catch( err => {
        done(err);
      });
  });

  test('The cohorts table should have columns, data types and parameters that match the required schema.', (done) => {
    knex('cohorts').columnInfo()
      .then((actual) => {
        const expected = {
          id: {
            type: 'integer',
            maxLength: null,
            nullable: false,
            defaultValue: 'nextval(\'cohorts_id_seq\'::regclass)'
          },

          name: {
            type: 'character varying',
            maxLength: 255,
            nullable: false,
            defaultValue: null
          },

          isActive: {
            type: 'boolean',
            maxLength: null,
            nullable: false,
            defaultValue: 'true'
          },

          created_at: {
            type: 'timestamp with time zone',
            maxLength: null,
            nullable: false,
            defaultValue: 'now()'
          },

          updated_at: {
            type: 'timestamp with time zone',
            maxLength: null,
            nullable: false,
            defaultValue: 'now()'
          }
        };

        for (const column in expected) {
          assert.deepEqual(
            actual[column],
            expected[column],
            `Column named - ${column} - is not the same.`
          );
        }
        knex.destroy();
        done();
      })
      .catch((err) => {
        done(err);
      });
  });
});
