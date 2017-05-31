module.exports = {
  create,
  get,
  list,
  remove,
  update
};

let data = [
  {
    "person_id": 1,
    "first_name": "person1First",
    "last_name": "person1Last",
    "email": "test@gmail.com",
    "is_active": true,
    "created_at": "2017-05-22T20:18:11.881Z",
    "updated_at": "2017-05-22T20:18:11.881Z"
  },
  {
    "person_id": 2,
    "first_name": "person2First",
    "last_name": "person2Last",
    "email": "test@gmail.com",
    "is_active": true,
    "created_at": "2017-05-22T20:18:11.881Z",
    "updated_at": "2017-05-22T20:18:11.881Z"
  },
];

function create(cohort) {
  return Promise.resolve();
}

function get(id) {
  return Promise.resolve(data[id - 1]);
}

function list() {
  return Promise.resolve(data);
}

function remove(id) {
  return Promise.resolve();
}

function update(id,cohort) {
  return Promise.resolve();
}
