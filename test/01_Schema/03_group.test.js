'use strict';

process.env.NODE_ENV = 'test';

const assert = require('chai').assert;
const { suite, test } = require('mocha');
const knex = require('../../knex');

suite('Schema for group should be built.', () => {

  test('The group table should have columns, data types and parameters that match the required schema.', (done) => {
    knex('group').columnInfo()
      .then((actual) => {
        const expected = {
          group_id: {
            type: 'integer',
            maxLength: null,
            nullable: false,
            defaultValue: 'nextval(\'group_group_id_seq\'::regclass)'
          },

          cohort_id: {
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
