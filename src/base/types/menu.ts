import { ReactElement, ReactNode } from 'react';

export type MenuItemType = {
  key: string;
  title?: ReactNode | string;
  type?: string;
  url: string;
  icon?: ReactNode;
  color?: string;
  disabled?: boolean;
};
export type sidebarType = {
  activeMenu: MenuItemType;
  listSidebar: {
    [key: string]: MenuItemType[];
  };
};
