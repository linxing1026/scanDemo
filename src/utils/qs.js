/**
 * Created by xing.lin on 2020-8-21.
 */
/**
 * @param {Object} 需要拼接的参数对象
 * @return {String}
 */
function obj2qs(obj) {
  if(!obj && !Object.keys(obj).length) {
    return "";
  }else {
    var arr = [];
    for(let key in obj) {
      arr.push(key+"="+obj[key]);
    }
    return arr.join("&");
  }
}

/**
 * @param {String} url
 * @return {Array}
 */

function qs2Obj(url) {
  var qs = url.split('?')[1];
  var arr = [];
  var res = [];
  if(!qs) {
    return ;
  }else {
    arr = qs.split('&');
    for(let i=0;i<arr.length;i++) {
      var key = arr[i].split("=")[0];
      var val = arr[i].split("=")[1];
      res[key] = decodeURIComponent(val);
    }
  }
  return res;
}
var url1 = "www.baidu.com?a=2&c=3";
var obj1 = {a:"qwe",v:"er"};
console.log(obj2qs(obj1));
console.log(qs2Obj(url1))
export default{
  obj2qs,
  qs2Obj
}
