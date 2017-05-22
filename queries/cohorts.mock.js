module.exports = {
  create,
  get,
  list,
  remove,
  update
};

const data = [
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
