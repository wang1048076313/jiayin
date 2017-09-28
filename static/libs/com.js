/**
 * Created by wang on 2017/8/18.
 */
// CommonJs 是服务器端模块的规范，Node.js采用了这个规范。
// 根据CommonJS规范，一个单独的文件就是一个模块。加载模块使用require方法，该方法读取一个文件并执行，最后返回文件内部的exports对象。
"use strict"

var local=function () {
  return{
    get :function (name) {
      return sessionStorage.getItem(name)!=null?JSON.parse(sessionStorage.getItem(name)):''
    },
    set : function (name,age) {
      return sessionStorage.setItem(name,JSON.stringify(age))
    },
    clear:function () {
      return sessionStorage.clear();
    }
  }
}();
window.local=local;

/*获取上传图片*/
var readFile1=function(fileEleId,TargetEle){
  if(typeof FileReader==='undefined'){
    return  alert("抱歉，你的浏览器不支持 FileReader");
  }
  var input1 = document.getElementById(fileEleId);
  var result1,div1
  document.querySelector('.'+TargetEle).innerHTML='';
  for(var i=0;i<input1.files.length;i++) {
    if (!input1['value'].match(/.jpg|.jpeg|.gif|.png|.bmp/i)) {　　//判断上传文件格式
      return alert("上传的图片格式不正确，请重新选择")
    }

    var reader = new FileReader();
    reader.readAsDataURL(input1.files[i]);
    (function (i) {
    reader.onload = function (e) {
      if(i>=2){return false}
      result1 = '<img   class="upimg"  src="' + this.result + '"  />';

      div1 = document.createElement('div');

      div1.innerHTML = result1;

      document.querySelector('.'+TargetEle).appendChild(div1);

      }
    })(i)
  }
}
window.readFile1=readFile1

function Fileurl(e,callback) {
//        document.getElementById('comment_file').addEventListener('change', function (e) {
  var files = e.target.files;
  for(var i=0;i<files.length;i++){
    if(i>=2){
      return false
    }
    // var storeAs = 'upload-file'+Date.now()+Math.floor(Math.random()*10)+i;
//    console.log(file.name + ' => ' + storeAs);

    (function (i) {
    OSS.urllib.request("http://d.launchso.com/shj/sts_server",
      {method: 'GET'},
      function (err, response) {
        var file= files[i]
        var result='';
        if (err) {
          return alert(err);
        }
        try {
          result = JSON.parse(response);
        } catch (e) {
          return alert('parse sts response info error: ' + e.message);
        }
        var client = new OSS.Wrapper({
          accessKeyId: result.AccessKeyId,
          accessKeySecret: result.AccessKeySecret,
          stsToken: result.SecurityToken,
          endpoint: 'http://oss-cn-shanghai.aliyuncs.com',
          bucket: 'launchso'
        });
        client.multipartUpload('upload-img'+Date.now()+Math.floor(Math.random()*10)+i, file).then(function (result) {
          callback(result)
        }).catch(function (err) {
          console.log(err);
        });
      });
    })(i)
//        });
  }
}
window.Fileurl=Fileurl
