// actions间接更新state仓库 。涉及到发请求 并调用请求
import {
  RECEVIE_ADDRESS,
  RECEVIE_SHOPS,
  RECEVIE_CATEGORUYS
} from './mutations-type'

import {reqAdress} from '@/api/ajax' //引入api接口
import { log } from 'util';
export default {
 async getaddress({commit,state:{latitude,longitude}}){
   const geohashData = `${latitude},${longitude}`
   const result= await reqAdress(geohashData)
   
   // 发请求
   if (result.data.code===0) {
     const addressData = result.data.data
      commit(RECEVIE_ADDRESS,addressData)
    }
  }
}