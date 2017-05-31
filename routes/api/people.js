'use strict';

const router = require('express').Router();

let peopleDir = '../../queries/people';
if (process.env.NODE_ENV === 'test') {
  peopleDir = '../../queries/people.mock';
}

const people = require(peopleDir);

const ev = require('express-validation');

const validations = require('../../validations/people');

router.get('/', (req,res,next) => {
  people.list().then(result => {
    res.send(result);
  });
});

router.get('/:id', ev(validations.get), (req,res,next) => {
  people.get(req.params.id).then(result => {
    if (!result) {
      return res.sendStatus(404);
    }
    res.send(result);
  });
});

router.post('/', ev(validations.post), (req,res,next) => {
  people.create(req.body).then(() => {
    res.sendStatus(201);
  });
});

router.patch('/:id', ev(validations.patch), (req,res,next) => {
  people.update(req.params.id,req.body).then(() => {
    res.sendStatus(204);
  });
});

// router.delete('/:id', ev(validations.delete), (req,res,next) => {
//   cohorts.remove(req.params.id).then(() => {
//     res.sendStatus(204);
//   });
// });

module.exports = router;
