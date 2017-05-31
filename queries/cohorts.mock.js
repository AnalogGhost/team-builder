module.exports = {
  create,
  get,
  list,
  remove,
  update
};

const data = [
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
