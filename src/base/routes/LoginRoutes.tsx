import { lazy } from 'react';

// project import
import Loadable from '@base/components/Loadable';
import CommonLayout from '@base/layouts/CommonLayout/index';
import GuestGuard from '@base/utils/route-guard/GuestGuard';

// render - login
const AuthLogin = Loadable(lazy(() => import('base/pages/auth/Login')));
const AuthRegister = Loadable(lazy(() => import('base/pages/auth/Register')));

// ==============================|| AUTH ROUTING ||============================== //

const LoginRoutes = {
  path: '/',
  children: [
    {
      path: '/',
      element: (
        <GuestGuard>
          <CommonLayout />
        </GuestGuard>
      ),
      children: [
        {
          path: 'login',
          element: <AuthLogin />
        },
        {
          path: 'register',
          element: <AuthRegister />
        }
      ]
    }
  ]
};

export default LoginRoutes;
