const knex = require('../knex');

module.exports = {
  create,
  get,
  list,
  remove,
  update
};

function create(cohort) {
  return knex('people').insert(cohort);
}

function get(id) {
  return knex('people').where({id:id}).first();
}

function list(orderBy) {
  orderBy = orderBy || firstName;
  return knex('people').orderBy(orderBy);
}

function remove(id) {
  return knex('people').where({id:id}).del();
}

function update(id,cohort) {
  return knex('people').update(cohort).where({id:id});
}
