var express = require('express')
var router = express.Router()
/* GET users listing. */
router.get('/', function(req, res, next) {
  var nama = req.query.saya
  res.send(nama)
});

router.get('/:name/:age', function(req, res, next) {
  var name = req.params.name
  var age = req.params.age
  res.send(nama + ' ' + umur)
})

module.exports = router;
