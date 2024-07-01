import { BellOutlined, SearchOutlined } from '@ant-design/icons';
import { MainLogo, UserIcon } from '@base/assets/icons';
import { Avatar, Badge, Button, ConfigProvider, Dropdown, Flex, Form, Input, Layout, MenuProps, Space, Typography } from 'antd';
import { HEADER_HEIGHT, HEADER_PADDING } from '@base/configs/layoutConfig';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { maskAtom } from '@base/store/atoms';
import useUserActions from '@base/hooks/useUserActions';
import { useEffect, useState } from 'react';
import { useForm } from 'antd/es/form/Form';
import ProfileForm from './ProfileForm';
const { Text, Title } = Typography;

export interface HeaderProps {}
const headerStyle: React.CSSProperties = {
  position: 'sticky',
  top: 0,
  left: 0,
  zIndex: 999
};
export default function Header(props: HeaderProps) {
  const setShowMask = useSetRecoilState(maskAtom);
  const { logout } = useUserActions();
  const [openDropdown, setOpenDropdown] = useState<boolean | undefined>(false);
  const defaultOptions: MenuProps['items'] = [
    {
      label: <Text>내 프로필 수정</Text>,
      key: '0',
      onClick: () => {
        setDropdownContent(profileContent);
      }
    },
    {
      label: <Text>로그아웃</Text>,
      key: '1',
      onClick: logout
    }
  ];
  const profileContent: MenuProps['items'] = [
    {
      label: (
        <ProfileForm
          handleClose={() => {
            setOpenDropdown(false);
            setDropdownContent(defaultOptions);
          }}
        />
      ),
      key: '2',
      type: 'group'
    }
  ];

  const [dropdownContent, setDropdownContent] = useState<MenuProps['items']>(defaultOptions);

  useEffect(() => {
    setShowMask(openDropdown);
  }, [openDropdown]);

  return (
    <ConfigProvider
      theme={{
        components: {
          Layout: { headerPadding: `0 ${HEADER_PADDING}px`, headerBg: '#1C69D4', headerHeight: HEADER_HEIGHT, colorText: '#fff' },
          Input: { borderRadiusLG: 12, paddingInlineLG: 16, paddingBlockLG: 10, colorText: '#333' },
          Badge: { lineWidth: 0 },
          Form: {
            labelColonMarginInlineEnd: 24,
            itemMarginBottom: 12
          }
        }
      }}
    >
      <Layout.Header style={headerStyle}>
        <Flex style={{ height: '100%' }} align="center" justify="space-between">
          <MainLogo />
          <Flex align="center" gap={32}>
            <Input
              style={{ width: 515 }}
              size="large"
              placeholder="예약 검색(이름, 휴대폰, 차량 번호, 예약번호)"
              prefix={<SearchOutlined style={{ fontSize: 20 }} />}
              allowClear
            />
            <Badge count={9} size="small" color="var(--primary-color)">
              <BellOutlined style={{ fontSize: 28, color: '#fff' }}></BellOutlined>
            </Badge>
            <Flex gap={10} align="center">
              <Dropdown
                align={{ offset: [40, 10] }}
                placement="bottomRight"
                menu={{ items: dropdownContent, style: { minWidth: 200, maxWidth: 700 } }}
                trigger={['click']}
                open={openDropdown}
                onOpenChange={(open, info) => {
                  if (info.source === 'trigger' || open) {
                    setOpenDropdown(open);
                    setDropdownContent(defaultOptions);
                  }
                }}
              >
                <Avatar size={48} style={{ backgroundColor: '#fff', cursor: 'pointer' }} icon={<UserIcon />} />
              </Dropdown>
              <Flex vertical>
                <Text style={{ color: '#fff' }}>부서</Text>
                <Text style={{ color: '#fff' }} strong>
                  이름 직함
                </Text>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Layout.Header>
    </ConfigProvider>
  );
}
