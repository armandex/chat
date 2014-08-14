var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  res.render('admin/index', { title: 'Express' });
});

router.get('/usuarios', function(req, res) {
  res.render('admin/usuarios', { title: 'Express' });
});

module.exports = router;
