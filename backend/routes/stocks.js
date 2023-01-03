var express = require("express");
var router = express.Router();
var movies = require("../stocks.json");
router.get("/", function (req, res, next) {
  res.send(movies);
});

module.exports = router;