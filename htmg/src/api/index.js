import Axios from '../libs/AxiosPlugin'



// 接口地址
let BASE_PATH = ''//'http://localhost:9010'//

if(process.env.NODE_ENV === 'production');
else {
    BASE_PATH = 'http://localhost:9010'
}

// 用户登录
export const login = params => { return Axios.post(`${BASE_PATH}/user/login`, params).then(res => res.data); };

// 获取用户列表
export const getUserList = params => { return Axios.get(`${BASE_PATH}/user/list`, { params: params }).then(res => res.data); };

// 首页加载数据
export const loadData  = params => { return Axios.get(`${BASE_PATH}/home/loadData`, {params:params}).then(res => res.data) };

// 文件上传地址
export const uploadFile = `${BASE_PATH}/file/upload`;
