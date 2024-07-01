import { ReactElement, useEffect } from 'react';
import { useMatch, useNavigate } from 'react-router-dom';

// project import
import useAuth from '@base/hooks/useAuth';
import { topMenuData } from '@base/_mocks/menu';

// types

// ==============================|| GUEST GUARD ||============================== //

const GuestGuard = ({ children }: any) => {
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();
  const isLogin = useMatch('login');

  useEffect(() => {
    if (isLoggedIn && isLogin) {
      navigate(topMenuData[0].url, { replace: true });
    }
  }, [navigate, isLoggedIn, isLogin]);

  return children;
};

export default GuestGuard;
