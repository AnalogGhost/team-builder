'use strict';

const knex = require('../knex');

module.exports = {
  create,
  get,
  list,
  remove,
  update
};

function create(person) {
  return knex('person').insert(person);
}

function get(id) {
  return knex('person').where({person_id:id}).first();
}

function list(orderBy) {
  orderBy = orderBy || 'first_name';
  return knex('person').orderBy(orderBy);
}

function remove(id) {
  return knex('person').where({person_id:id}).del();
}

function update(id,cohort) {
  return knex('person').update(cohort).where({person_id:id});
}
