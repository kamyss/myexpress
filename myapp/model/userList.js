 //import { Module } from 'module';

var mysql=require('mysql');
var express=require('express');
var config=require('../conf/config');
// var bodyParser=require('body-parser');
// var cookieParser=require('cookie-parser');
// var session=require('cookie-session');


//查询sql语句
async function select(username,password){
   var result=await userList(username,password);
   return result;
}
exports.select=select;
/*function theUser(userName,password){
    select(userName,password).then(function(v){
        exports.select=v;
       // console.log(v);
    });
}*/

//获取用户列表
function userList(userName,password){
    var connection=getConnection();
   // console.log(connection);
    return new Promise(function(resolve,reject){
        var sql="select * from pro_users where username=? and password=?";
       // console.log(connection)
        connection.query(sql,[userName,password],function(err,result){
            //console.log(err);
            resolve(result);
        });
    });
}


//读取数据库配置
function getConnection(){
    
    // console.log(config);
   // console.log(config.config);
   //console.log(config.config);
    var connection=mysql.createConnection(config.config);
    connection.connect();
    return connection;
}

