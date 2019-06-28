var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var customerDataSchema = require('../public/models/dataSchema');
var customerData = mongoose.model('CustomersData',customerDataSchema);


router.get('/getData',function (req,res) {
    customerData.find(function (err,data) {
        if(err){
            console.log(err);
        }
        else {
            console.log(data);
            res.send(data);
        }

    });
});
router.post('/saveData',function (req,res) {
    customerData.create(req.body,function (err,data) {
        if(err){
            console.log(err);
        }
        else {
            console.log(data);
            res.send('Created');
        }
    })
});
router.post('/onSaveEdit',function (req,res) {
var index = req.body.index;
    customerData.find(function (err,data) {
        if(err){
            console.log(err);
        }
        else {
             var OId= data[index]._id;
           // console.log(data[index]._id);
            customerData.findByIdAndUpdate({_id:OId},{name:req.body.name,phoneno:req.body.phoneno,
                 address:req.body.address,email:req.body.email },function (err1,data1) {
                        if(err1){
                            console.log(err1);
                        }
                        else{
                            res.send('Edit Saved');
                        }
            });
        }
    });
});

    router.post('/onDelete',function (req,res) {
        var index = req.body.index;
        customerData.find(function (err,data) {
            if(err){
                console.log(err);
            }
            else {
                var OId= data[index]._id;

                customerData.remove({_id:OId},function (err1,data1) {
                    if(err1){
                        console.log(err1);
                    }
                    else{
                        res.send('Deleted');
                    }
                });
            }
        });
    });

module.exports = router;