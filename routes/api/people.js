'use strict';

const router = require('express').Router();

//TODO only using for testing//////

// let peopleDir = '../../queries/people';

let peopleDir = '../../queries/people.mock';
///////////////////////////////////

if (process.env.NODE_ENV === 'test') {
  peopleDir = '../../queries/people.mock';
}

const people = require(peopleDir);

const ev = require('express-validation');

//TODO validations for people.js
const validations = require('../../validations/cohorts');

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

// router.post('/', ev(validations.post), (req,res,next) => {
//   cohorts.create(req.body).then(() => {
//     res.sendStatus(201);
//   });
// });
//
// router.patch('/:id', ev(validations.patch), (req,res,next) => {
//   cohorts.update(req.params.id,req.body).then(() => {
//     res.sendStatus(204);
//   });
// });
//
// router.delete('/:id', ev(validations.delete), (req,res,next) => {
//   cohorts.remove(req.params.id).then(() => {
//     res.sendStatus(204);
//   });
// });

module.exports = router;
