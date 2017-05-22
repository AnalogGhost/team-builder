
exports.seed = function(knex, Promise) {

  let data = [
    {
      "id": 1,
      "name": "test1",
      "isActive": true,
      "created_at": "2017-05-22T20:18:11.881Z",
      "updated_at": "2017-05-22T20:18:11.881Z"
    },
    {
      "id": 2,
      "name": "test2",
      "isActive": false,
      "created_at": "2017-05-22T20:18:11.881Z",
      "updated_at": "2017-05-22T20:18:11.881Z"
    },
  ];

  return knex('cohorts').insert(data)
  .then(() => {
  return knex.raw(
    "SELECT setval('cohorts_id_seq', (SELECT MAX(id) FROM cohorts))");
});;

};
