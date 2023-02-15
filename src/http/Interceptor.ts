// import axios from 'axios';
// import { ElAlert, ElMessage } from 'element-plus';

// // 创建axios实例
// const $http = axios.create({
//   // 请求的域名，基本地址，proxy 代理时会将“/api”以及前置字符串会被替换为真正域名
//   baseURL: '/api',
//   // 跨域请求时发送Cookie
//   // withCredentials: true, // 视情况而定
//   // 超时时间
//   timeout: 5000,
//   headers: {
//     'content-type': 'application/json; charset=utf-8'
//   }
// });

// // 请求拦截器
// axios.interceptors.request.use((config) => {
//   console.log(window.sessionStorage.getItem("token"))

//   config.headers = config.headers || {};
//   if (window.sessionStorage.getItem("token")) {
//     console.log(window.sessionStorage.getItem("token"))
//     config.headers.set('Authorization', window.sessionStorage.getItem("token"));
//   }
//   return config;
// });

// // 响应拦截器
// axios.interceptors.response.use((success) => {
  
//     //业务逻辑错误
//     if(success.status && success.status == 200) {
//         if (success.data.code == 500 || success.data.code == 401 || success.data.code == 403) {
//             ElAlert.error({message: success.data.message})
//             return;
//         }
//         if (success.data.message) {
//             ElAlert.success({message: success.data.message})
//         }
//     }
//     return success.data;
// }, (error) => {
//   ResponseProcessing(error);
// });

// /**
//  * 响应处理
//  * @param error 
//  * @returns 
//  */
// const ResponseProcessing = (error: { response: { state: any; data: any; }; }) => {
//   if (error.response) {
//     switch (error.response.state) {
//       case 401:
//         ElMessage.warning("资源没有访问权限！");
//         break;
//       case 404:
//         ElMessage.warning("接口不存在，请检查接口地址是否正确！");
//         break;
//       case 500:
//         ElMessage.warning("内部服务器错误，请联系系统管理员！");
//         break;
//       default:
//         return Promise.reject(error.response.data); // 返回接口返回的错误信息
//     }
//   } else {
//     ElMessage.error("遇到跨域错误，请设置代理或者修改后端允许跨域访问！");
//   }
// };

// export default $http;
