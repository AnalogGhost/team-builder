const knex = require('../knex');

module.exports = {
  create,
  get,
  list,
  remove,
  update
};

function create(cohort) {
  return knex('cohorts').insert(cohort);
}

function get(id) {
  return knex('cohorts').where({id:id}).first();
}

function list() {
  return knex('cohorts').orderBy('name');
}

function remove(id) {
  return knex('cohorts').where({id:id}).del();
}

function update(id,cohort) {
  return knex('cohorts').update(cohort).where({id:id});
}
