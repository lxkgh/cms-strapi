import useSWR, { SWRConfiguration, SWRResponse } from 'swr';
import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';

export type GetRequest = AxiosRequestConfig | null;

interface Return<Data, Error>
    extends Pick<SWRResponse<AxiosResponse<Data>, AxiosError<Error>>, 'isValidating' | 'error' | 'mutate'> {
    data: Data | undefined;
    response: AxiosResponse<Data> | undefined;
}

export interface Config<Data = unknown, Error = unknown>
    extends Omit<SWRConfiguration<AxiosResponse<Data>, AxiosError<Error>>, 'fallbackData'> {
    fallbackData?: Data;
}
axios.interceptors.response.use(
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
export default function useRequest<Data = unknown, Error = unknown>(
    request: GetRequest,
    { fallbackData, ...config }: Config<Data, Error> = {}
): Return<Data, Error> {
    const { data: response, error, isValidating, mutate } = useSWR<AxiosResponse<Data>, AxiosError<Error>>(
        request && JSON.stringify(request),
        () => axios.request<Data>(request!),
        {
            ...config,
            fallbackData: fallbackData && {
                status: 200,
                statusText: 'InitialData',
                config: request!,
                headers: {},
                data: fallbackData,
            },
        }
    );

    return {
        data: response && response.data,
        response,
        error,
        isValidating,
        mutate,
    };
}
