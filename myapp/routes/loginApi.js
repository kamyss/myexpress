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
        // result=v
        var params={};
        params.data=v;
       //var result=JSON.stringify(data);
      
        res.send(params); 
       
    });
    
    // userList.select.forEach(function(v){
    //     console.log(v.userName);
    // });
   
});
//get访问同步模板
router.get('/',function(req,res){
    var user_name=req.query.username;  
    var password=req.query.password; 
   // var result=''; 
    console.log("User name = "+user_name+", password is "+password);  
    userList.select(user_name,password).then(function(v){
        
       result=v;
     // var result=JSON.stringify(v);
      console.log(result);
       res.render('userList',{userInfo:result[0]});
       // res.end(result); 
       
    });
    
    // userList.select.forEach(function(v){
    //     console.log(v.userName);
    // });
   
});
module.exports=router;