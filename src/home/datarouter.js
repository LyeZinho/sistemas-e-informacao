const express = require('express');
const datarouter = express.Router();
const path = require('path');


datarouter.get('/css', function(req, res){
    res.sendFile(path.join(__dirname, '/style.css'));
});


datarouter.get('/img/:imagesrc', function(req, res){
    res.sendFile(path.join(__dirname, '/imgsrc/' + req.params.imagesrc));
});


module.exports = datarouter;