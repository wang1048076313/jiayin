var http = require("http");
var fs = require("fs");
var url = require("url");
var path = require("path");

var server = http.createServer(function(req,res){
    var pathname = url.parse(req.url).pathname;
    var fileURL = "./static/" + pathname ; 
    //得到拓展名
    var extname = path.extname(pathname);

    //把文件读出来
    fs.readFile(fileURL,function(err,data){
        
        if(err){
            //文件不存在
            res.writeHead(404,{"Content-Type":"text/html;charset=UTF8"})
            res.end("404,页面没有找到");
        }
       
        getMime(extname,function(mime){
            res.writeHead(200,{"Content-Type":mime})
            res.end(data);
        });
    });
});

server.listen(80,"127.0.0.1");

function getMime(extname,callback){
  
    fs.readFile("./mime.json",function(err,data){
        if(err){
            throw Error("找不到mime.json文件！");
            return;
        }
        //转成JSON
        var mimeJSON = JSON.parse(data);
        var mime =  mimeJSON[extname]  || "text/plain";
        //执行回调函数，mime类型字符串，就是它的参数
        callback(mime);
    });
}