import { lazy } from 'react';
import { Navigate } from 'react-router';

import Loadable from '@base/components/Loadable';

import { MENU_ACCOUNT_URL } from '../constants/menu';

const MainContainer = Loadable(lazy(() => import('../containers/MainContainer')));
const ListPage = Loadable(lazy(() => import('../pages/ListPage')));
const ViewPage = Loadable(lazy(() => import('../pages/ViewPage')));
const WritePage = Loadable(lazy(() => import('../pages/WritePage')));

const Routes = {
  path: MENU_ACCOUNT_URL,
  element: <MainContainer />,
  children: [
    {
      index: true,
      element: <Navigate to={`/${MENU_ACCOUNT_URL}/list/all`} />
    },
    {
      path: 'list/:subParam',
      element: <ListPage />
    },
    {
      path: 'view/:subParam/:id',
      element: <ViewPage />,
    },
    {
      path: 'write/:subParam',
      element: <WritePage />,
    },
    {
      path: '*',
      element: <Navigate to={`/${MENU_ACCOUNT_URL}/list/all`} />
    }
  ]
};
export default Routes;
