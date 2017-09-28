var http=require('http');
var fs=require('fs');
var url=require('url');
var path=require('path')

// 创建服务器
http.createServer( function (request, response) {
    // 解析请求，包括文件名
    var pathname = url.parse(request.url).pathname
    console.info(request.url)
    // console.log(url.parse(request.url))
    // console.log(pathname.substr(1))
    /*检查文件后缀名*/
    function getname(call) {
        var fileName= path.extname(pathname)
        fs.readFile('./mime.json',function (err,data) {
            if(err){
                console.error(errr)
            }else{
                fileName=JSON.parse(data)[fileName] || 'text/html'
                call(fileName)
            }
        })
    }


    // 输出请求的文件名
    console.log("Request for " + pathname + " received.");

    // 从文件系统中读取请求的文件内容
    fs.readFile(pathname.substr(1), function (err, data) {
        if (err) {
            console.log(err);
            // HTTP 状态码: 404 : NOT FOUND
            // Content Type: text/plain
            // response.writeHead(404, {'Content-Type': fileName});
        }else{
            // HTTP 状态码: 200 : OK
            // Content Type: text/plain
            getname(function (fileName) {
                response.writeHead(200, {'Content-Type': fileName});
                // global.console.log(request.method + ': ' + request.url);
                // 响应文件内容
                // response.write(data.toString());

                //  发送响应数据
                response.end(data);
            })

        }

    });
})
    // .listen(8081,"127.0.0.1");
    .listen(8081,"127.0.0.1")
// 控制台会输出以下信息
console.log('Server running at http://127.0.0.1:8081/');