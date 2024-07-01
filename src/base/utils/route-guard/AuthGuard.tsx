import { ReactNode, useEffect } from 'react';
import { useMatch, useNavigate } from 'react-router-dom';

// project import
import useAuth from '@base/hooks/useAuth';
import { topMenuData } from '@base/_mocks/menu';

// types

// ==============================|| AUTH GUARD ||============================== //

const AuthGuard = ({ children }: any) => {
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();
  const isHome = useMatch('/');
  useEffect(() => {
    if (!isLoggedIn) {
      navigate(`/login`, { replace: true });
    } else if (isHome) {
      navigate(topMenuData[0].url, { replace: true });
    }
  }, [isLoggedIn, navigate, isHome]);

  return isLoggedIn ? children : null;
};

export default AuthGuard;
