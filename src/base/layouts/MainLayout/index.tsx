import { lazy, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import { useRecoilValue } from 'recoil';

import Loadable from '@base/components/Loadable';
import { APP_BAR_HEIGHT, HEADER_HEIGHT, SIDE_BAR_WIDTH } from '@base/configs/layoutConfig';
import { authAtom } from '@base/store/atoms/auth';

import Header from './Header';
import { ConfigProvider, Layout } from 'antd';
import TopMenu from './TopMenu';
import SideBar from './SideBar';
import { maskAtom } from '@base/store/atoms';

// ==============================|| MAIN LAYOUT ||============================== //

const MainLayout = () => {
  const showMask = useRecoilValue(maskAtom);
  const auth = useRecoilValue(authAtom);

  return (
    <ConfigProvider
      theme={{
        token: {
          colorText: '#000'
        },
        components: {
          Button: {
            defaultColor: 'var(--primary-color)',
            defaultBorderColor: 'var(--primary-color)',
            colorPrimary: 'var(--button-bg-color)',
            paddingBlockLG: 22,
            paddingInlineLG: 36,
            borderRadiusLG: 44
          },
          Typography: {
            colorTextDescription: '#5D5D5D',
            colorTextHeading: '#5D5D5D',
            titleMarginBottom: 0
          },
          Form: {
            labelColor: '#5D5D5D'
          },
          Tabs: {
            margin: 0,
            itemColor: '#989898'
          }
        }
      }}
    >
      {showMask && <div className="mask"></div>}
      <Header />
      <TopMenu />
      <SideBar />
      {auth.isLoggedIn && (
        <Layout.Content style={{ backgroundColor: 'var(--bg-dark-color)', marginLeft: SIDE_BAR_WIDTH, height: '200vh', padding: 40 }}>
          <Outlet />
        </Layout.Content>
      )}
    </ConfigProvider>
  );
};

export default MainLayout;
