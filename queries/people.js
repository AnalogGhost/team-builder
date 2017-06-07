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

function list() {
  return knex('person').orderBy('first_name');
}

function remove(id) {
  return knex('person').where({person_id:id}).del();
}

function update(id, person) {
  return knex('person').update(person).where({person_id:id});
}
