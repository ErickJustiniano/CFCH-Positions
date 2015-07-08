var express = require('express');
var router = express.Router();
var tablesController = require('../controllers/tables_controller');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'CFCH - Positions' });
});

router.get('/tables/femenil', tablesController.femenil);

module.exports = router;
