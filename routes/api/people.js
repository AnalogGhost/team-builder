'use strict';

const router = require('express').Router();

let peopleDir = '../../queries/people';

//TODO: what is the mock? Need one for people? - rename
// if (process.env.NODE_ENV === 'test') {
//   cohortsDir = '../../queries/cohorts.mock';
// }

const people = require(peopleDir);

const ev = require('express-validation');

//TODO validations for people.js
// const validations = require('../../validations/cohorts');

router.get('/', (req,res,next) => {
  // people.list().then(result => {
    console.log("working!");
    // res.send(result);
  // });
});
//
// router.get('/:id', ev(validations.get), (req,res,next) => {
//   cohorts.get(req.params.id).then(result => {
//     if (!result) {
//       return res.sendStatus(404);
//     }
//     res.send(result);
//   });
// });
//
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
