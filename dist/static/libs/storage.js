

//  function storage() {
//   return{
//     get :function (name) {
//       // return localStorage.getItem("item_key")!=null?JSON.parse(localStorage.getItem("item_key")):[]
//       return JSON.parse(sessionStorage.getItem(name))||[]
//     },
//     set  : function (name,age) {
//       return sessionStorage.setItem(name,JSON.stringify(age))
//     },
//     clear:function () {
//       return sessionStorage.clear();
//     }
//   }
// }
var storage=function () {
  return{
    get :function (name) {
      // return localStorage.getItem("item_key")!=null?JSON.parse(localStorage.getItem("item_key")):[]
      if(sessionStorage.getItem(name)!="undefined"){
        return JSON.parse(sessionStorage.getItem(name))
      }else{
        return {}
      }

    },
    set : function (name,age) {
      return sessionStorage.setItem(name,JSON.stringify(age))
    },
    clear:function () {
      return sessionStorage.clear();
    }
  }
}();
 window.storage=storage;
export {
  storage
}
