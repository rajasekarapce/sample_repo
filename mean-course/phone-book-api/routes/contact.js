var express = require('express');
var router = express.Router();

//connect to services
var contactServices = require("../services/contactServices");

/* GET users listing. */
router.get('/', function(req, res, next) {
   //send request to services 
    contactServices.getContacts(function(err, data){  

        res.json(data);
    });
});

router.get('/status', function(req, res, next) {
    contactServices.getContactStatus(req, function(data){
        res.json({ contactData: data });
    });              
});

router.get('/:id', function(req, res, next) {
    contactServices.getContactById(req, function(err,data){
        if(!err){
            res.json(data);
        }else{
            res.json(err);
        }  
    });              
});

  router.post('/', function(req, res, next) {
    contactServices.createContact(req, function(err,data){
        if(!err){
            res.json(data);
        }else{
            res.json(err);
        }
    }); 
  });

router.put('/:id', function(req, res, next) {  
    contactServices.updateContact(req, function(err,data){
        if(!err){
            res.json(data);
        }else{
            res.json(err);
        }
    }); 
});

router.delete('/:id', function(req, res, next) {
    contactServices.deleteContact(req, function(err,data){
        if(!err){
            res.json(data);
        }else{
            res.json(err);
        }
    });
});

module.exports = router;
