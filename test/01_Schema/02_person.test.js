'use strict';

process.env.NODE_ENV = 'test';

const assert = require('chai').assert;
const { suite, test } = require('mocha');
const knex = require('../../knex');

suite('Schema for person should be built.', () => {

  test('The person table should have columns, data types and parameters that match the required schema.', (done) => {
    knex('person').columnInfo()
      .then((actual) => {
        const expected = {
          person_id: {
            type: 'integer',
            maxLength: null,
            nullable: false,
            defaultValue: 'nextval(\'person_person_id_seq\'::regclass)'
          },

          first_name: {
            type: 'character varying',
            maxLength: 255,
            nullable: false,
            defaultValue: null
          },

          last_name: {
            type: 'character varying',
            maxLength: 255,
            nullable: false,
            defaultValue: null
          },

          email: {
            type: 'character varying',
            maxLength: 255,
            nullable: true,
            defaultValue: null
          },

          is_active: {
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
        done();
      })
      .catch((err) => {
        done(err);
      });
  });
});
