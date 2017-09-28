/**
 * Created by Administrator on 2017/8/25.
 */
var fs=require("fs");
exports.readFolder=a;
function a(paths,callback){
 return  fs.readdir(paths,function(err,files){
        //files : ["0.jpg","1.jpg" ……,"aaa","bbb"];
        //files是一个存放文件(夹)名的数组
        //存放文件夹的数组
        var wenjianjia = [];
        //迭代器就是强行把异步的函数，变成同步的函数
        //1做完了，再做2；2做完了，再做3
      return (function iterator(i){
            //遍历结束
            if(i == files.length){
                callback(wenjianjia);
                return
            }
            fs.stat(paths + files[i],function(err,stats){
                //检测成功之后做的事情
                if(stats.isDirectory()){
                    //如果是文件夹，那么放入数组。不是，什么也不做。
                    wenjianjia.push(files[i]);
                }
                iterator(i+1);
            });
        })(0);

    });
}

