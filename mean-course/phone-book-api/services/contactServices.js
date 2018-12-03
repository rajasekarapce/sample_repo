//global contacts
var Contact = require("../model/contact");  //1. connect to db

//create contact
exports.createContact = function (req, callback){
    var contactDao = new Contact(req.body);
    contactDao.save(function(err, savedConact){
        if(!err){
            console.log(`contact registered successfully with contactId:${savedConact.contactId}`);
        }
        callback(err, savedConact);
        
    });
}

//get all contacts
exports.getContacts = function(callback){
    Contact.find({}, function(err, contacts){
        if(!err){
            console.log("fetched all contacts", contacts);
        }
        callback(err, contacts);
    })
}

//get single contact
exports.getContactById = function(req, callback){
    Contact.findOne({contactId:req.params.id}, function(err, contact){
        if(!err){
            console.log("fetched single contact", contact);
        }
        callback(err, contact);
    })
}

//update single contact
exports.updateContact = function(req, callback){
    Contact.update({contactId:req.params.id}, req.body, function(err, updatecontact){
        if(!err){
            console.log("fetched single contact", updatecontact);
        }
        callback(err, updatecontact);
    })
}

//Delete single contact
exports.deleteContact = function(req, callback){
    Contact.remove({contactId:req.params.id}, function(err, deletecontact){
        if(!err){
            console.log("fetched single contact", deletecontact);
        }
        callback(err, deletecontact);
    })
}

