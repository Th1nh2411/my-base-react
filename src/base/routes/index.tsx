import { useRoutes } from 'react-router-dom';

// project import
import AuthorizedRoutes from './AuthorizedRoutes';
import LoginRoutes from './LoginRoutes';

// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes() {
  return useRoutes([AuthorizedRoutes, LoginRoutes]);
}
