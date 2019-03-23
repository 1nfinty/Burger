var express = require('express');

var router = express.Router();

var burger = require('../models/burgers.js');

router.get('/', function (req, res){
    burger.all(function(burgers){
        console.log(burgers);
        res.render('index',{burgers});
    })
})

module.exports = router;  //links to server file