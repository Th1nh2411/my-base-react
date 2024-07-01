import axios, { AxiosRequestConfig, AxiosResponse, ResponseType } from 'axios';
// import accessToken from "./jwt-token-access/accessToken"
import Cookies from 'universal-cookie';

//pass new generated access token here
// const token = accessToken
export const Headers = {
  'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
};

export type CustomAxiosConfigType = Omit<AxiosRequestConfig, 'method' | 'url' | 'headers' | 'responseType' | 'data' | 'params'>;

export const axiosApi = axios.create({
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    // 'X-Requested-With': 'XMLHttpRequest',
    'Access-Control-Allow-Origin': '*'
  },
  baseURL: 'https://dummyjson.com/',
  // withCredentials: true
});

axiosApi.interceptors.request.use((config: any) => {
  // const token = localStorage.getItem('token')
  config.baseURL = 'https://dummyjson.com/';
  return config;
});

axiosApi.interceptors.response.use(
  (response) => response,
  (error) => {
    const serverResponse = error?.response;
    const errorStatus = serverResponse?.status;
    const responseData = serverResponse?.data;

    switch (errorStatus) {
      case 404:
        if (!responseData?.success) {
          const message = responseData?.msg || 'Not Found';
        }
        break;
      // case 401:
      //   if (!responseData?.success) {
      //     const message = responseData?.detail;
      //     message && enqueueErrorBar(message);
      //   }
      //   const cookie = new Cookies();
      //   const Ls = new Storage();
      //   // remove Local Storage Token
      //   Ls.remove('auth.token');

      //   // Remove cookies
      //   cookie.remove(COOKIES_HANBIRO_GW);
      //   cookie.remove(COOKIES_HMAIL_KEY);

      //   if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
      //     window.location.replace('/login');
      //   } else {
      //     const url = `${getBaseUrl()}${process.env.PUBLIC_URL}/login`;
      //     window.location.replace(url);
      //   }
      //   break;
    }

    console.log(error);
  }
);

export async function axiosAPI<T>(
  endPoint: string,
  method: string,
  payload = {},
  headers = {},
  responseType = 'json',
  customConfig: CustomAxiosConfigType = {}
) {
  let config: AxiosRequestConfig<any> = {
    method: method,
    url: endPoint as string,
    headers: headers,
    responseType: responseType as ResponseType
  };

  if (method === 'GET') {
    config.params = payload;
  } else {
    config.data = payload;
  }

  try {
    const response: AxiosResponse = await axiosApi(config);
    return response.data;
  } catch (error) {
    console.log(error);
    return error;
  }
}

export async function axiosGet<T>(
  endPoint: string,
  payload = {},
  headers = {},
  responseType = 'json',
  customConfig: CustomAxiosConfigType = {}
) {
  let config: AxiosRequestConfig<any> = {
    method: 'GET',
    url: endPoint as string,
    params: payload,
    headers: headers,
    responseType: responseType as ResponseType
  };

  try {
    const response: AxiosResponse = await axiosApi(config);
    return response.data;
  } catch (error) {
    console.log(error);
    return error;
  }
}

/**
 * Post Method
 */
export async function axiosPost<T>(
  endPoint: string,
  payload = {},
  headers = {},
  responseType = 'json',
  customConfig: CustomAxiosConfigType = {}
) {
  let config: AxiosRequestConfig<any> = {
    method: 'POST',
    url: endPoint as string,
    data: payload,
    headers: headers,
    responseType: responseType as ResponseType
  };

  try {
    const response: AxiosResponse = await axiosApi(config);
    return response?.data;
  } catch (error) {
    console.log(error);
    return error;
  }
}

/**
 * Delete Method
 */
export async function axiosDel<T>(
  endPoint: string,
  payload = {},
  headers = {},
  responseType = 'json',
  customConfig: CustomAxiosConfigType = {}
) {
  let config: AxiosRequestConfig<any> = {
    method: 'DELETE',
    url: endPoint as string,
    data: payload,
    headers: headers,
    responseType: responseType as ResponseType
  };

  try {
    const response = await axiosApi(config);
    return response.data;
  } catch (error) {
    console.log(error);
    return error;
  }
}

/**
 * PUT Method
 */
export async function axiosPut<T>(
  endPoint: string,
  payload = {},
  headers = {},
  responseType = 'json',
  customConfig: CustomAxiosConfigType = {}
) {
  let config: AxiosRequestConfig<any> = {
    method: 'PUT',
    url: endPoint as string,
    data: payload,
    headers: headers,
    responseType: responseType as ResponseType
  };

  try {
    const response: AxiosResponse = await axiosApi(config);
    return response.data;
  } catch (error) {
    console.log(error);
    return error;
  }
}

export async function axiosPatch<T>(
  endPoint: string,
  payload = {},
  headers = {},
  responseType = 'json',
  customConfig: CustomAxiosConfigType = {}
) {
  let config: AxiosRequestConfig<any> = {
    method: 'PATCH',
    url: endPoint as string,
    params: payload,
    headers: headers,
    responseType: responseType as ResponseType
  };

  try {
    const response = await axiosApi(config);
    return response.data;
  } catch (error) {
    console.log(error);
    return error;
  }
}
