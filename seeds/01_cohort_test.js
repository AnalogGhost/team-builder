
exports.seed = function(knex, Promise) {

  let data = [
    {
      "cohort_id": 1,
      "name": "test1",
      "is_active": true,
      "created_at": "2017-05-22T20:18:11.881Z",
      "updated_at": "2017-05-22T20:18:11.881Z"
    },
    {
      "cohort_id": 2,
      "name": "test2",
      "is_active": false,
      "created_at": "2017-05-22T20:18:11.881Z",
      "updated_at": "2017-05-22T20:18:11.881Z"
    },
  ];

  return knex('cohort').insert(data)
  .then(() => {
  return knex.raw(
    "SELECT setval('cohort_cohort_id_seq', (SELECT MAX(cohort_id) FROM cohort))");
});

};
