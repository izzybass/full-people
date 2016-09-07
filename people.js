var mongoose = require('mongoose');
var Schema = mongoose.Schema;

///Schema
var personSchema = new Schema({ 
  firstName: String,
  picture: String
});

///Model
var Person = mongoose.model("PersonModel", personSchema);

module.exports = Person;