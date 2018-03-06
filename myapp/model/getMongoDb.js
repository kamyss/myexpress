

var mongoose=require('mongoose');
mongoose.Promise=global.Promise;
var conn=mongoose.connect('mongodb://localhost:27017/blog');
var User=new mongoose.Schema({
    userName:String,
    password:String
});
console.log(conn);
var myModel=mongoose.model('user',User);
//查询mongodb的某条记录
myModel.findOne({userName:"zjh"},function(err,user){
    exports.users=user;
    //console.log(user);
});
exports.addUser=addUser;
exports.updateUser=updateUser;
exports.delUser=delUser;
//增加mongodb的某条记录
function addUser(){
    let newPeople=[{
        userName:'小明',
        password:'654321'
    }];
    myModel.create(newPeople,function(err){
        if(err){
            console.log(err);
        }else{
            console.log('添加用户成功');
        }
        
    });
}
//更新某条记录信息
function updateUser(){
    var toSet={$set:{password:'123456'}}
    console.log('123456');
    myModel.update({userName:'小明'},toSet,function(err){
        if(err){
            console.log(err);
        }else{
            console.log('修改成功');
        }
    });
}
//对某条记录进行删除
function delUser(){
    myModel.remove({password:'123456'},function(err){
            if(err){
                console.log(err);
            }else{
                console.log('删除成功');
            }
    });
}


