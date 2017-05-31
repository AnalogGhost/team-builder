'use strict';

exports.seed = function(knex, Promise) {

  let data = [
    {
      "person_id": 1,
      "first_name": "Mat",
      "last_name": "Brown",
      "email": "mat@gmail.com",
      "is_active": true,
      "created_at": "2017-05-22T20:18:11.881Z",
      "updated_at": "2017-05-22T20:18:11.881Z"
    },
    {
      "person_id": 2,
      "first_name": "Katie",
      "last_name": "Jenkins",
      "email": "katie@gmail.com",
      "is_active": true,
      "created_at": "2017-05-22T20:18:11.881Z",
      "updated_at": "2017-05-22T20:18:11.881Z"
    },
  ];

  return knex('person').insert(data)
  .then(() => {
  return knex.raw(
    "SELECT setval('person_person_id_seq', (SELECT MAX(person_id) FROM person))");
});

};
