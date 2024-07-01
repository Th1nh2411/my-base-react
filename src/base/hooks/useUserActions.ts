import authServices from '@base/services/auth';
import { authAtom } from '@base/store/atoms/auth';
import { AuthProps, LoginData } from '@base/types/auth';
import { useCallback, useState } from 'react';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router';

import { useRecoilState, useResetRecoilState, useSetRecoilState } from 'recoil';

const useUserActions = () => {
  const navigate = useNavigate();
  const [loadingApp, setLoadingApp] = useState(false);
  const setAuthAtom = useSetRecoilState(authAtom);
  const [cookie, setCookie, removeCookie] = useCookies();

  const login = (params: LoginData) => {
    return authServices.login(params as LoginData);
  };

  const logout = async () => {
    const res: any = await authServices.logout();
    if (res) {
      removeCookie('user');

      setAuthAtom({
        isLoggedIn: false,
        user: null,
        token: null
      });
      navigate('/login', {
        replace: true
      });
    }
  };

  const loginSuccess = async (data: any = null) => {
    try {
      // Get config from api...
      if (data?.token) {
        setCookie('user', data);
        setAuthAtom((prev) => ({
          ...prev,
          isLoggedIn: true,
          token: data.token,
          user: data
        }));
        return true;
      }
    } catch (error) {
      return false;
    }
  };

  return {
    login,
    logout,
    loadingApp,
    loginSuccess
  };
};

export default useUserActions;
