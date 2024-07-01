import { BellOutlined, SearchOutlined } from '@ant-design/icons';
import Icon from '@ant-design/icons/lib/components/Icon';
import { CarIcon, MainLogo, UserIcon } from '@base/assets/icons';
import { APP_BAR_HEIGHT, SIDE_BAR_WIDTH } from '@base/configs/layoutConfig';
import useMenus from '@base/hooks/useMenus';
import { Avatar, Badge, Flex, Input, Layout, Space, Typography } from 'antd';
import { NavLink, useLocation } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './SideBar.module.css';
import { MenuItemType, sidebarType } from '@base/types/menu';
import { useIcons } from '@base/hooks/useIcons';
const { Text } = Typography;
const cx = classNames.bind(styles);
export interface SideBarProps {}

export default function SideBar(props: SideBarProps) {
  const { pathname } = useLocation();
  const { activeSidebar, activeMenu } = useMenus();
  const { getIconByKey } = useIcons();
  const isActiveSidebar = (key: string) => {
    const [menuKey, sideBarKey] = key.split('_');
    return pathname.includes(menuKey) && pathname.includes(sideBarKey);
  };
  return (
    <div className={cx('wrapper')} style={{ width: SIDE_BAR_WIDTH, top: APP_BAR_HEIGHT }}>
      <Flex justify="center" align="center" gap={12}>
        {getIconByKey(activeMenu.key, { width: 40, height: 40 })}
        <Text style={{ fontSize: 20 }} strong>
          {activeMenu.title}
        </Text>
      </Flex>
      <Flex className={cx('sidebar-wrapper')} vertical gap={16} align="center">
        {activeSidebar?.map((item: MenuItemType, index: number) => (
          <NavLink key={index} to={item.url} className={cx('sidebar-item', { active: isActiveSidebar(item.key) })}>
            {item.title}
          </NavLink>
        ))}
      </Flex>
    </div>
  );
}
