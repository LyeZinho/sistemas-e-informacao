const express = require('express');
const pagerouter = express.Router();
const path = require('path');


pagerouter.get('/', function(req, res){
    res.sendFile(path.join(__dirname, '/home.html'));
});



module.exports = pagerouter;