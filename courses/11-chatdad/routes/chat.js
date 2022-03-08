var express = require('express');
var router = express.Router();

/* GET chat home page. */
router.get('/', function(req, res, next) {
    console.log(req.users);
  res.render('chat', { user: req.user });
});

module.exports = router;
