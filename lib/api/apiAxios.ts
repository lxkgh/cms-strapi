import axiosClient from 'axios';
import type { AxiosRequestConfig } from 'axios';

const instance = axiosClient.create({
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json; charset=utf-8',
    },
});

instance.interceptors.response.use(
    function (response) {
        // 2xx 范围内的状态码都会触发该函数。
        // 对响应数据做点什么
        if ([0, '000000'].indexOf(response.data.code) === -1) {
            const error = new Error(response.data.msg);
            error.message = response.data.msg;
            const errorObj = {
                code: response.data.code,
                url: response.config.url,
                status: response.status,
                ...error,
            };
            return Promise.reject(errorObj);
        }
        return response.data;
    },
    function (error) {
        // 超出 2xx 范围的状态码都会触发该函数。
        // 对响应错误做点什么
        return Promise.reject(error);
    }
);

const apiAxios = <T>(cfg: AxiosRequestConfig) => instance.request<any, T>(cfg);

export default apiAxios;
