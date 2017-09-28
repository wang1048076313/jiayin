// 表单上床案例 
var http = require('http');
var fs = require('fs');


// 开发时用来调试的模块
var util = require('util');
// 专门处理表单上传的模块(先安装npm install formidable,后导入)
var formidable = require('formidable');

var server = http.createServer(function(req, res)
{
	if (req.url == '/uploads' && req.method.toLowerCase() == 'post')
	{
		var form = new formidable.IncomingForm();
			// fields:包含着表单元素
			// files:包含着文件信息
			
	form.parse(req, function(err, fields, files)
		{
		res.writeHead(200, 
			{ 'content-type': 'text/plain;charset=utf-8' ,
				'charset' : 'utf-8'
			});
			// 验证
			console.log(files.photos);
			for(var i in files.photos){
				
			}
//res.end(util.inspect({ fields: fields, files: files }));
		res.end("提交成功");
		});
	}
});

server.listen(3000, '192.168.56.186');