//node特点: 单线程、非阻塞异步IO
//node使用场景:考试系统 表单提交 办公社交软件 论坛

var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res)
{
	//	res.end("我是node搭建的服务器返回的内容");
	// 路由:
	// 127.0.0.1:3000/A 就返回a.html
	// url/B 就返回b.html
	// url/C 就返回c.html
	if (req.url == "/")
	{
		// fs模块读取本地a.html
		fs.readFile('./index.html', function(error, data)
		{
			if(error){
				throw new Error('错误')
			}
			// 设置响应头
			res.writeHead('200',
			{
					// "Content-Type": "text/plain"
				"Content-Type": "text/html"
				// "Content-Type": "text/css"
				// "Content-Type" : "text/js"
				// "Content-Type" : "img/jpg"
				// "Content-Type" : "img/png"
			});
			// 返回到前端
			res.write(data.toString())

			// 发送响应数据
			res.end(data);
		});

	}
	else if (req.url == "/B")
	{

	}
	else if (req.url == "/C")
	{

	}
	else if(req.url == "/images"){
		fs.readFile('./images/1.png',function(e,data){
			res.writeHead(200,{
				"Content-Type" : "img/jpg"
			});
			res.end(data);
		});
	}
});

server.listen(3000, '127.0.0.1');
// server.listen(4000,'192.168.0.102');
// 控制台会输出以下信息
console.log('Server running at http://127.0.0.1:3000/');