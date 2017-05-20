'use strict';

const devDatabase = process.env.DEV_DATABASE_NAME || 'team_dev';
const testDatabase = process.env.TEST_DATABASE_NAME || 'team_test';
const prodDatabase = process.env.DATABASE_URL || 'team_prod';

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/' + devDatabase
  },
  test: {
    client: 'pg',
    connection: 'postgres://localhost/' + testDatabase
  },
  production: {
    client: 'pg',
    connection: prodDatabase
  }
};
