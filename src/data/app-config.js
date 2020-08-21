/**
 * Created by xing.lin on 2020-8-21.
 */
let get= function(url){
  return new Promise((resolve,reject)=>{
    let xhr= new XMLHttpRequest();
    xhr.open('get',url,true);
    xhr.onload=function(){
      if(xhr.status==200){
        resolve(JSON.parse(xhr.responseText));
      }else{
        reject(null);
      }
    }
    xhr.onerror = function(){
      reject(null);
    }
    xhr.send(null);
  });
}

export default{
  getConfig(){
    let hash = Math.random();
    return get(`/config/app-config.json?hash=${hash}`);
  }
}
