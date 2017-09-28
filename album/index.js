/**
 * Created by Administrator on 2017/8/25.
 */
var fs=require("fs");
//��ȡĿ¼�����е��ļ���
var Rf=require("./module/readFolder.js");
//��ȡĿ¼�����е��ļ�
var Rrf=require("./module/readFiles.js");
var express=require("express");
var formidable=require("formidable");
//���ڵ���
var util=require("util");
var app=express();
app.set("view engine","ejs");
//���ļ���ͼƬָ��·��
app.use("/img", function (req,res) {
    var thepath=req.path;
    fs.readFile("./img"+thepath,function(err,data){
        res.send(data);
    })
});
//��ҳ
app.get("/",function(req,res,next){
    var folist= Rf.readFolder("./files/",function(a){
        //������ҳ����ģ��
        res.render("index",{"data":a});
        //�����ļ���ָ����·������ģ��
        dd(a);
    });
});
//�ϴ�ͼƬpost��·��
app.post(/^\/[a-z]{1,10}\/post$/, function (req,res) {
    var form=new formidable.IncomingForm();
    //��ȡ�û��ϴ�ͼƬ���ļ�����;
    var Uurl=req.originalUrl.split("/");
    var adress= "./files/"+Uurl[1];
    form.uploadDir = adress;
    form.parse(req,function(err,fields,files){
        //���ϴ����ļ�����
        var oldname=files.pic.path.substring(8,files.pic.path.length);
        var newname=files.pic.name;
        if(newname.length>12){
            newname=newname.substring(newname.length-12,newname.length)
        };
        fs.rename(adress+"/"+oldname,adress+"/"+newname, function () {

        });
        res.end("sucess");
    })
});
//����ļ���
app.get("/add", function (req,res) {
    fs.mkdir("./files/"+req.query.name, function () {
    });
    res.send()
});
//ɾ���ļ���
app.get("/delete", function (req,res){
    var arg=req.query.del;
    var pathurl="./files/"+arg;
    var pathuurl="./files/"+arg+"/";
    Rrf.readFiles(pathuurl,function(arg){
        if(arg.length>0){
            res.send("plese clear the folder")
        }else{
            fs.rmdir(pathurl,function(err){
                res.send("sucess");
            })
        }
    })

    //fs.stat(pathurl,function(err,stats){
    //    if(stats.isDirectory()){
    //        fs.rmdir(pathurl,function(err){
    //
    //        })
    //    }
    //})
});
//ɾ��ͼƬ
app.get(/^\/[a-z]{1,10}\/deletefile$/,function(req,res){
    var arg=req.query.delfile;
    var argf=req.originalUrl.split("/");
    console.log(argf[1]);
    var path="./files/"+argf[1]+"/"+arg;
    fs.unlink(path,function(err){
        if(err){res.send("ɾ��ʧ��")};
        res.send("sucess");
    })
});
function dd(arg){
    for(var j= 0;j<arg.length;j++){
        (function(k){
            app.get("/"+arg[k],function(req,res){
                Rrf.readFiles("./files/"+arg[k]+"/", function (data) {
                    res.render("piclist",{"data":data});
                });

            })
        })(j)
    }
}

app.use(express.static("files"));
app.listen(3000);