const express = require('express');

const router = express.Router();

const db = require('../db/connection')

router.get('/', (req,res) => {
  return db('book').select()
  .then(book => {
    res.render('books', {
        book:book
    })
  })
})

// router.get('/books', (req,res) => {
//   return db('book').select()
//   .then(book => {
//     res.render('books' {
//       book: book
//     })
//   });
// })

module.exports = router;
