import reqajax from '@/api/http.js'

const BASE_URL='/api'

// 根据经纬度获取位置详情根据经纬度获取位置详情
export const reqAdress = (geohash)=> reqajax(`${BASE_URL}/position/${geohash}`)
// 获取食品分类列表获取食品分类列表
export const reqfoodlist = ()=> reqajax(BASE_URL+'/index_category')

// 根据经纬度获取商铺列表根据经纬度获取商铺列表 因为参数类型是query所以要这样传
export const reqshops = (a,b)=> reqajax(BASE_URL+'/shops',{latitude:a,longitude:b})

// 根据经纬度和关键字搜索商铺列表根据经纬度和关键字搜索商铺列表
export const reqsearchshops = (geohash,keyword)=> reqajax(BASE_URL+'/search_shops',{geohash,keyword})

// 获取一次性验证码获取一次性验证码
export const reqyanzhengma = ()=> reqajax(BASE_URL+'/captcha')

// 用户名密码登陆用户名密码登陆
export const reqlogopwd = (name,pwd,captcha)=> reqajax(BASE_URL+'/login_pwd',{name,pwd,captcha},'post')

// 发送短信验证码发送短信验证码
export const reqsendcode = (phone)=> reqajax(BASE_URL+'/sendcode',phone)

// 手机号验证码登陆手机号验证码登陆
export const reqlogin_sms = (phone,code)=> reqajax(BASE_URL+'/login_sms',{phone,code},'post')

// 根据会话获取用户信息根据会话获取用户信息
export const requserinfo = ()=> reqajax(BASE_URL+'/userinfo')

// 用户登出0用户登出
export const reqlogout = ()=> reqajax(BASE_URL+'/logout')
