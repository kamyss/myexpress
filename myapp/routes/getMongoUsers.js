var express=require('express');
var router=express.Router();
var router2=express.Router();
var users=require('../model/getMongoDb');
router.get('/',function(req,res,next){
    var userInfo=users.users;
    console.log(userInfo);
    res.render('mongodb',{userInfo:userInfo})                         
});
router.get('/update',function(req,res,next){
  users.updateUser();
  
    console.log('update');
    res.render('update',{updateInfo:'123456'});
               
});
//对某条件进行新增
router.get('/add',function(req,res,next){
    users.addUser();
});
//对某条件进行删除
router.get('/del',function(req,res,next){
    users.delUser();
});
module.exports=router;
// exports.router=router;
// exports.router2=router2;