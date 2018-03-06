 //import { Module } from 'module';

var mysql=require('mysql');
var express=require('express');
// var bodyParser=require('body-parser');
// var cookieParser=require('cookie-parser');
// var session=require('cookie-session');


//查询sql语句
async function select(){
   var result=await userList();
   return result;
}
select().then(function(v){
    exports.select=v;
   // console.log(v);
});
//获取用户列表
function userList(){
    var connection=getConnection();
   // console.log(connection);
    return new Promise(function(resolve,reject){
        var sql="select * from pro_users";
       // console.log(connection)
        connection.query(sql,{},function(err,result){
            //console.log(err);
            resolve(result);
        });
    });
}

//读取数据库配置
function getConnection(){
    // var config=require('../conf/config');
    // console.log(config);
    var connection=mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database:'procedure_test',
        port:3306
      });
    connection.connect();
    return connection;
}

