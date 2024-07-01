import { lazy } from 'react';
import { Navigate } from 'react-router';

import Loadable from '@base/components/Loadable';

import { MENU_VEHICLE_URL } from '../constants/menu';

const MainContainer = Loadable(lazy(() => import('../containers/MainContainer')));
const ListPage = Loadable(lazy(() => import('../pages/ListPage')));
const ViewPage = Loadable(lazy(() => import('../pages/ViewPage')));
const WritePage = Loadable(lazy(() => import('../pages/WritePage')));

const Routes = {
  path: MENU_VEHICLE_URL,
  element: <MainContainer />,
  children: [
    {
      index: true,
      element: <Navigate to={`/${MENU_VEHICLE_URL}/list/all`} />
    },
    {
      path: 'list/*',
      element: <ListPage />
    },
    {
      path: 'list/',
      element: <Navigate to={`/${MENU_VEHICLE_URL}/list/all`} />
    },
    {
      path: 'view/:id',
      element: <ViewPage />
    },
    {
      path: 'write/:id',
      element: <WritePage />
    }
  ]
};
export default Routes;
