var express=require('express');
var router=express.Router();
var userList=require('../model/userList');
//var app=express();
//接收请求
router.post('/',function(req,res){
    var user_name=req.body.username;  
    var password=req.body.password; 
   // var result=''; 
    console.log("User name = "+user_name+", password is "+password);  
    userList.select(user_name,password).then(function(v){
        // result=v;
       var result=JSON.stringify(v);
        res.end(result); 
       
    });
    
    // userList.select.forEach(function(v){
    //     console.log(v.userName);
    // });
   
});
module.exports=router;