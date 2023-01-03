var express = require('express');
var router = express.Router();
var fs = require('fs');

var today = new Date();
var year = today.getFullYear();
var month = today.getMonth();
var date = today.getDate();

router.post('/', function(req, res, next) {
    var post_date = `${year}/${month + 1}/${date}`;
    var name = req.query.name;
    var price = req.query.price;
    var count = req.query.count;
    var category = req.query.category;
    var json = {
        "date" : post_date,
        "name" : name,
        "price" : price,
        "count" : count,
        "category" : category
    }
    res.send(json);
    // fs.appendFile('../stocks.json', json, function(err) {
    //     if (err) throw err;
    //     console.log('Data appended');
    // });
})

module.exports = router;