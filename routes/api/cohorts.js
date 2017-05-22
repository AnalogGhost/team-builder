const router = require('express').Router();
const knex = require('../../knex');

router.get('/', (req,res,next) => {
  res.send('GET ALL ROUTE');
});

router.get('/:id', (req,res,next) => {
  res.send('GET ROUTE FOR ID' + req.params.id);
});

router.post('/', (req,res,next) => {
  res.send('POST ROUTE');
});

router.patch('/:id', (req,res,next) => {
  res.send('PATCH ROUTE');
});

router.delete('/:id', (req,res,next) => {
  res.send('DELETE ROUTE');
});

module.exports = router;
