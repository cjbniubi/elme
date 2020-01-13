import {
  RECEVIE_ADDRESS,
  RECEVIE_SHOPS,
  RECEVIE_CATEGORUYS
} from './mutations-type'
import { log } from 'util';
export default {
  //改变地址
  [RECEVIE_ADDRESS](state,addressData){
    console.log(addressData);
    
    state.address = addressData
  },
  //改变商家列表  
  [RECEVIE_SHOPS](state,{shops}){
    state.shops = shops
  },
  //改变食品列表
  [RECEVIE_CATEGORUYS](state,{categorys}){
    state.categorys = categorys
  }

}