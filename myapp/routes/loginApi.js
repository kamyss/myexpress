var express=require('express');
var router=express.Router();
var userList=require('../model/userList');
//var app=express();
//接收请求
router.post('/',function(req,res){
    var user_name=req.body.username;  
    var password=req.body.password;  
    console.log("User name = "+user_name+", password is "+password);  
    console.log(userList);
    userList.select.forEach(function(v){
        console.log(v.userName);
    });
    res.end("yes");  
});
module.exports=router;