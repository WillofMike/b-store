const express = require('express');

const router = express.Router();

router.get('/', (req,res) => {
  res.render('index', {
    title: 'Checkout These Titles'
  })
})

module.exports = router;
