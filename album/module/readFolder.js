/**
 * Created by Administrator on 2017/8/25.
 */
var fs=require("fs");
exports.readFolder=a;
function a(paths,callback){
 return  fs.readdir(paths,function(err,files){
        //files : ["0.jpg","1.jpg" ����,"aaa","bbb"];
        //files��һ������ļ�(��)��������
        //����ļ��е�����
        var wenjianjia = [];
        //����������ǿ�а��첽�ĺ��������ͬ���ĺ���
        //1�����ˣ�����2��2�����ˣ�����3
      return (function iterator(i){
            //��������
            if(i == files.length){
                callback(wenjianjia);
                return
            }
            fs.stat(paths + files[i],function(err,stats){
                //���ɹ�֮����������
                if(stats.isDirectory()){
                    //������ļ��У���ô�������顣���ǣ�ʲôҲ������
                    wenjianjia.push(files[i]);
                }
                iterator(i+1);
            });
        })(0);

    });
}

