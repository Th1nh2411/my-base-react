import { HEADER_HEIGHT, HEADER_PADDING, TOP_MENU_HEIGHT } from '@base/configs/layoutConfig';
import { useIcons } from '@base/hooks/useIcons';
import useMenus from '@base/hooks/useMenus';
import { Avatar, Badge, Flex, Input, Layout, Space, Typography } from 'antd';
import { NavLink, useLocation } from 'react-router-dom';
const { Text } = Typography;
export interface TopMenuProps {}

export default function TopMenu(props: TopMenuProps) {
  const { listMenuDisplay, listMenuDisplayMore, allMenus } = useMenus();
  const { getIconByKey } = useIcons();
  const topMenuStyle: React.CSSProperties = {
    height: TOP_MENU_HEIGHT,
    padding: `0 ${HEADER_PADDING}px`,
    borderBottom: '1px solid var(--border-color)',
    borderTop: '1px solid var(--border-color)',
    position: 'sticky',
    top: HEADER_HEIGHT,
    left: 0,
    backgroundColor: 'white',
    zIndex: '999'
  };
  return (
    <Flex style={topMenuStyle} align="center" gap={32}>
      {listMenuDisplay?.map((item) => (
        <NavLink key={item.key} to={item.url}>
          {({ isActive }) => {
            const textColor = { color: isActive ? '#fff' : 'var(--secondary-color)' };
            const bgColor = { backgroundColor: isActive ? '#000' : 'transparent' };
            return (
              <Flex
                vertical
                align="center"
                justify="center"
                style={{
                  width: 93,
                  height: 74,
                  borderRadius: 12,
                  border: '1px solid var(--secondary-color)',
                  ...bgColor
                }}
                gap={4}
              >
                <Flex style={{ width: 24, height: 24, ...textColor }} align="center" justify="center">
                  {getIconByKey(item.key, { width: 40, height: 40 })}
                </Flex>
                <Text style={textColor} strong>
                  {item.title}
                </Text>
              </Flex>
            );
          }}
        </NavLink>
      ))}
    </Flex>
  );
}
