var express = require('express');
var router = express.Router();
var User = require('../models/mahasiswa')

//router mengembalikan dua parameters
//pertama request = req
//keuda resonse = res

router.get('/insert', function (req, res) {
  User //kalo di sql ini table, nosql collection
    .find({})
    // .update({name: 'ade'}, { $set: { name: 'Aldi', age: '22' } }, { multi: true, new: true })
    .exec(function (err, mahasiswa) {
      res.render('insert', { data: mahasiswa })
    })
})

router.post('/insert', function (req, res) {
  var name = req.body.name
  var age = req.body.age

  var newUser = new User({
    name: name,
    age: age
  })

  newUser.save(function(err, saveUser) {
    var userId = saveUser._id
    res.redirect('/mahasiswa/insert')
  })
})

module.exports = router;
