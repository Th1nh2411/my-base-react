// project import
import { Navigate, Outlet } from 'react-router-dom';

import MainLayout from '@base/layouts/MainLayout';
import AuthGuard from '@base/utils/route-guard/AuthGuard';

// ==============================|| MAIN ROUTING ||============================== //
const moduleRoutes: any[] = [];
const requireAppRoutes = require.context('/src', true, /Route.tsx$/);

requireAppRoutes.keys().forEach((path: any) => {
  const route = requireAppRoutes(path).default;
  moduleRoutes.push(route);
});

const AuthorizedRoutes = {
  path: '/',
  children: [
    {
      path: '/',
      element: (
        <AuthGuard>
          <MainLayout />
        </AuthGuard>
      ),
      children: moduleRoutes
    }
  ]
};

export default AuthorizedRoutes;
