/**
 * Created by Administrator on 2017/8/29.
 */
var fs=require("fs");
exports.readFiles=q;
function q(paths,callback){
      fs.readdir(paths,function(err,files){
        //files : ["0.jpg","1.jpg" ����,"aaa","bbb"];
        //files��һ������ļ�(��)��������
        //����ļ��е�����
        var fileslist = [];
        //����������ǿ�а��첽�ĺ��������ͬ���ĺ���
        //1�����ˣ�����2��2�����ˣ�����3
        (function iterator(i){
            //��������
            if(i == files.length){
                callback(fileslist);
                return
            }
            fs.stat(paths + files[i],function(err,stats){
                //���ɹ�֮����������
                if(!stats.isDirectory()){
                    //������ļ��У���ô�������顣���ǣ�ʲôҲ������
                    fileslist.push(files[i]);
                }
                iterator(i+1);
            });
        })(0);

    });
}