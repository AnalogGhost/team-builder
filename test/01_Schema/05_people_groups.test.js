'use strict';

process.env.NODE_ENV = 'test';

const assert = require('chai').assert;
const { suite, test } = require('mocha');
const knex = require('../../knex');

suite('Schema for people_groups should be built.', () => {

  test('The people_groups table should have columns, data types and parameters that match the required schema.', (done) => {
    knex('people_groups').columnInfo()
      .then((actual) => {
        const expected = {

          peopleId: {
            type: 'integer',
            maxLength: null,
            nullable: false,
            defaultValue: null
          },

          groupId: {
            type: 'integer',
            maxLength: null,
            nullable: false,
            defaultValue: null
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
        done();
      })
      .catch((err) => {
        done(err);
      });
  });
});
