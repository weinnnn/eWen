import axios from "axios";
import type { AxiosRequestConfig, AxiosResponse } from "axios";
const instance = axios.create({
  baseURL: "http://localhost:8080/api",
  timeout: 5000,
});

instance.interceptors.request.use(
  (config): any => {
    if (localStorage.getItem("token")) {
            config.headers.set('Authorization', localStorage.getItem("token"));
          }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

interface Data {
  [index: string]: unknown;
  // name:'',
  // age:''
}
interface Http {
  get(
    url: string,
    data: Data,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse>;
  post(
    url: string,
    data: Data,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse>;
  put(
    url: string,
    data: Data,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse>;
  patch(
    url: string,
    data: Data,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse>;
  delete(
    url: string,
    data: Data,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse>;
}
const http: Http = {
  get(url, data, config) {
    return instance.get(url, {
      params: data,
      ...config,
    });
  },
  post(url, data, config) {
    return instance.post(url, data, config);
  },
  put(url, data, config) {
    return instance.put(url, data, config);
  },
  patch(url, data, config) {
    return instance.patch(url, data, config);
  },
  delete(url, data, config) {
    return instance.delete(url, {
      data,
      ...config,
    });
  },
};

instance.interceptors.response.use(
  (response): any => {
    const res = response.data;
    return res;
  },
  (error) => {
    console.log("err" + error);

    return Promise.reject(error);
  }
);
export  default  http;
 
