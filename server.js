var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var request = require('request');

var Person = require('./people');

mongoose.connect("mongodb://localhost/peeps");

app.use(bodyParser.json());

app.use(express.static("client"));
app.use(express.static("node_modules"));


var lastPersonName;
//moving users from mongo db = database - to client = factory
app.get('/peoples', function(req, res){

  // //////GOES TO THE API AND SAVES TO THE DATABASE//////////////////
  request({
    uri: 'https://randomuser.me/api/',
    method: 'GET'
  },
  ////CALL BACK//////////
  function(error, response, body) {
    var data = JSON.parse(body);

    console.log(data);
    
    /////DATABASE SAVE/////////////////////////
    var person = new Person();

    person.firstName = data.results[0].name.first;
    lastPersonName = person.firstName;
    person.picture = data.results[0].picture.large;

    person.save(function(err, person) {
      res.json(person);
    });

  });
});   

app.listen(4000);

mongoose.connect(process.env.MONGOLAB_BLACK_URI || 'mongodb://localhost/full-people');

