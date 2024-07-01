import { LoginData } from '@base/types/auth';
import { Headers, axiosGet, axiosPost } from '@base/utils/axios/api';

import { URL_GET_APP_INFO, URL_LOGIN, URL_LOGOUT, URL_CHANGE_EXPIRED_PASSWORD } from './contants';

// type LoginResponse = {};

const authServices = {
  login: (params: LoginData) => {
    return axiosPost(URL_LOGIN, params, Headers);
  },
  logout: () => {
    // return axiosGet(URL_LOGOUT, {}, Headers);
    return true;
  },
  getAppInfo: (params: any) => {
    return axiosGet(URL_GET_APP_INFO, params);
  }
};

export default authServices;
