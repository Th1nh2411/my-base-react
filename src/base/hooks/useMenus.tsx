import { useContext, useEffect, useState } from 'react';
import { MenuItemType, sidebarType } from '@base/types/menu';
import { topMenuData } from '@base/_mocks/menu';
import { useRecoilState } from 'recoil';
import { sidebarAtom } from '@base/store/atoms/menu';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';

// ==============================|| AUTH HOOKS ||============================== //

const useMenus = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [listMenuDisplay, setListMenuDisplay] = useState<MenuItemType[]>(topMenuData);
  const [listMenuDisplayMore, setListMenuDisplayMore] = useState<MenuItemType[]>([]);
  const [sidebarData, setSidebarData] = useRecoilState<sidebarType>(sidebarAtom);
  const [activeSidebar, setActiveSidebar] = useState<MenuItemType[]>([]);
  useEffect(() => {
    const handleSidebarData = async (path: string) => {
      let newSidebarData: any;
      topMenuData?.forEach(async (item) => {
        if (path.startsWith(item.url)) {
          setSidebarData((prev: sidebarType) => ({ ...prev, activeMenu: item }));
          if (item.key in sidebarData.listSidebar) {
            setActiveSidebar(sidebarData.listSidebar[item.key]);
          } else {
            newSidebarData = await fetchSidebarData(item.key);
            setActiveSidebar(newSidebarData);
            setSidebarData((prev: sidebarType) => ({ ...prev, listSidebar: { ...prev.listSidebar, [item.key]: newSidebarData } }));
          }
          return;
        }
      });
    };

    handleSidebarData(location.pathname);
  }, [location.pathname, setSidebarData]);

  const allMenus = [...listMenuDisplay, ...listMenuDisplayMore];
  return {
    listMenuDisplay,
    listMenuDisplayMore,
    allMenus,
    activeMenu: sidebarData.activeMenu,
    activeSidebar
  };
};

export default useMenus;
// Fake api call
type MenuMap = {
  [key: string]: MenuItemType[];
  // Các menu khác nếu có
};
const fetchSidebarData = async (menuKey: keyof MenuMap): Promise<MenuItemType[]> => {
  console.log(1);
  const menuMap: MenuMap = {
    vehicle: [
      // { title: 'Overview', url: '/vehicle/list/all', key: 'vehicle_all' },
      { title: '차량 목록', url: '/vehicle/list/all', key: 'vehicle_all' },
      { title: 'Motors', url: '/vehicle/list/motors', key: 'vehicle_motors' }
    ],
    planning: [
      { title: 'Schedule', url: '/planning/list/all', key: 'planning_all' },
      { title: 'Bookings', url: '/planning/list/bookings', key: 'planning_bookings' }
    ]
  };

  if (menuKey in menuMap) {
    return menuMap[menuKey];
  } else {
    console.warn(`MenuKey '${menuKey}' không tồn tại trong menuMap`);
    return []; // hoặc return một giá trị mặc định khác tùy vào yêu cầu của ứng dụng
  }
};
