import React, { createContext, useEffect } from 'react';
import { useCookies } from 'react-cookie';

import { useRecoilState, useSetRecoilState } from 'recoil';

import useUserActions from '@base/hooks/useUserActions';
import { authAtom } from '@base/store/atoms/auth';
import { AuthContextType } from '@base/types/auth';

// ==============================|| Vora Auth CONTEXT & PROVIDER ||============================== //

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactElement }) => {
  const [auth, setAuth] = useRecoilState(authAtom);
  const { login, logout, loginSuccess, loadingApp } = useUserActions();
  const [cookies] = useCookies();
  const [cookie, setCookie, removeCookie] = useCookies();

  useEffect(() => {
    const checkIsLoggedIn = async () => {
      if (cookies['user']?.token) {
        setAuth((prev) => ({
          ...prev,
          isLoggedIn: true,
          token: cookies['user'].token,
          user: cookies['user']
        }));
      } else {
        setAuth({
          isLoggedIn: false,
          user: null,
          token: null
        });
      }
    };
    checkIsLoggedIn();
  }, []);

  const register = () => {};
  const resetPassword = (email: string) => new Promise<void>((resolve, reject) => {});
  return (
    <AuthContext.Provider
      value={{
        ...auth,
        login,
        logout,
        register,
        resetPassword
      }}
    >
      {loadingApp ? <div>...</div> : children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
