/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var express = require('express');

// create our app
var app = express();

app.use(express.static('public'));

app.listen(3000, function() {
   console.log('Express server is up on port 3000'); 
});