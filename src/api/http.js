import axios from 'axios'
export default function go(url,data={},type='get'){
  return new Promise((resolve,reject)=>{
    // 请求这个地址成功后才执行resolve方法  
    // 判断type是否微get 如果是
    let promise
    if (type==='get') {
      let str=''
      Object.keys(data).forEach(key=>{
        str+=key+'='+data[key]+'&'
      })
      if (str!=='') {
       str= str.substring(0,str.lastIndexOf('&'))
       url=url+'?'+str
      }
      promise=axios.get(url)
    }else{
      
      promise=axios.post(url,data)
    }
    promise.then((res)=>{
      resolve(res)
    }).catch((err)=>{
      reject(err)
    })
  })
}
