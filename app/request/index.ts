export interface IHttpOptions {
    method: any;
    url: string;
    params?: any;
    data?: any;
    options?: any;
}

export interface IApiResponse<T extends any> {
    data: T;
    code: number;
    message?: string;
}

export async function http<T = any>(options: IHttpOptions): Promise<IApiResponse<T>> {
    const { url, method, params, data, options: config = {} } = options;
    const baseURL = import.meta.env.VITE_API_BASE;

    const { data: res }: any = await useFetch(baseURL + url, {
        method: method,
        onRequest: ({ options }) => {
            options.body = data;
            options.query = params;
            options.timeout = 10000;
            Object.assign(options, config);
        },
        onResponse: async ({ response }) => {
            console.log("response=", response._data);
            const res = response._data as IApiResponse<T>;
            const code = Number(res.code);
            if (code !== Number(import.meta.env.VITE_API_SUCCESS_CODE)) {
                throw createError({
                    statusCode: (response._data as IApiResponse<T>)?.code,
                    statusMessage: (response._data as IApiResponse<T>)?.message,
                });
            }

            return response;
        },
        onRequestError({ request, options, error }) {
            // 处理请求错误
            console.warn("request error", error);
        },
        onResponseError({ request, response, options }) {
            // 处理响应错误
            // console.warn('response error', response);
            throw createError({ statusCode: response.status, statusMessage: response.statusText });
        },
    });

    return res;
}

export async function $http<T = any>(options: IHttpOptions): Promise<IApiResponse<T>> {
    const { url, method, params, data, options: config = {} } = options;
    const baseURL = import.meta.env.VITE_API_BASE;

    const res = (await $fetch(baseURL + url, {
        method: method,
        onRequest: ({ options }) => {
            options.body = data;
            options.query = params;
            options.timeout = 10000;
            Object.assign(options, config);
        },
        onResponse: ({ response }) => { },
        onRequestError: (error) => {
            console.error(error);
        },
        onResponseError: (error) => {
            console.error(error);
        },
    })) as IApiResponse<T>;

    return res;
}