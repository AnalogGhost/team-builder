const knex = require('../knex');

module.exports = {
  create,
  get,
  list,
  remove,
  update
};

function create(cohort) {
  return knex('cohort').insert(cohort);
}

function get(id) {
  return knex('cohort').where({cohort_id:id}).first();
}

function list() {
  return knex('cohort').orderBy('name');
}

function remove(id) {
  return knex('cohort').where({cohort_id:id}).del();
}

function update(id,cohort) {
  return knex('cohort').update(cohort).where({cohort_id:id});
}
