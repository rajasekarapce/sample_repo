var mongoose = require('./mongoConnect'); //importing connection config
var autoIncrement = require('mongoose-auto-increment'); //for auto incrementing during create

var Schema = mongoose.Schema;

//schema 
var Contact = new Schema(
  {
    contactId: Number,
    username: String,
    phone: Number,
    email: String,
    createdBy : String,
    createdOn : {type: Date, default: Date.now},
    updatedBy : String,
    updatedOn : {type: Date, default: Date.now}
  },{
      strict: false
  }
);

autoIncrement.initialize(mongoose.connection);
Contact.plugin(autoIncrement.plugin, {model:'Contact', field:'contactId', startAt:1})
module.exports = mongoose.model('contacts', Contact);