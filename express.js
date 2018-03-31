/**
 * Created by wang on 2017/9/16.
 */
var express=require('express');
// var path=require('path');
var app=express();

/*app.get('/',function (req,res) {
    console.log(res)
    res.send('hello');
})*/
app.use(express.static('launchso2.0'))
// app.use(express.static(path.join(__dirname,'dist')))
// 其中最主要的部分是app.use(express.static(path.join(__dirname, 'public')))，该行代码是在express添加中间件，设置静态资源路径为dist，所有的HTML、CSS、JS等文件都放在public下即可，后续代码迁移直接将dist下的代码copy到Java Web的webRoot中就行


// app.get('/index.html',function (req,res) {
//
//     res.sendFile(__dirname+'/index.html')
//     // res.json({name:'米国'})
//     // res.send('页面')
// })
var server=app.listen(8081,function () {
    var host=server.address().address
    var port=server.address().port
    console.log('服务器地址,端口号为',host,port)
})
