// import { defineConfig } from 'vite';
// import vue from '@vitejs/plugin-vue';

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [
//     vue(),
//   ],
//   server: {
//     proxy: {
//       "/": { // “/api” 以及前置字符串会被替换为真正域名
//         target: "http://localhost:8081/", // 请求域名
//         secure: false, // 请求是否为httpss
//         changeOrigin: true, // 是否跨域
//         rewrite: (path) => path.replace(/^\/api/, "")
//       }
//     }
//   }
// });


