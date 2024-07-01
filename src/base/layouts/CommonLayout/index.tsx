import { ConfigProvider } from 'antd';
import { lazy, Suspense } from 'react';
import { Outlet } from 'react-router-dom';

// material-ui

// ==============================|| Loader ||============================== //

export interface LoaderProps {}

const Loader = () => <div>...</div>;

// ==============================|| MINIMAL LAYOUT ||============================== //

const CommonLayout = () => (
  <ConfigProvider
    theme={{
      // algorithm: state.theme === 'dark' ? darkAlgorithm : defaultAlgorithm,
      token: {
        // fontFamily: 'Inter',
        boxShadow: '0px 1px 3px 0 var(--box-shadow-color), 0 3px 8px 0px var(--box-shadow-color), 0px 2px 3px 0px var(--box-shadow-color)'
      },
      components: {
        Layout: {
          headerBg: '#f5f5f5',
          colorBgLayout: '#f5f5f5'
          // headerBg: state.theme === 'dark' ? '#001529' : '#f5f5f5',
        },
        Form: {
          marginLG: 20,
          fontSizeLG: 20
        },
        Input: {
          borderRadiusLG: 8,
          controlHeightLG: 68,
          paddingInlineLG: 20,
          inputFontSizeLG: 20
        },
        Button: {
          controlHeightLG: 68,
          fontSizeLG: 20,
          colorPrimary: 'var(--primary-color)'
        }
      }
    }}
  >
    <Suspense fallback={<Loader />}>
      <Outlet />
    </Suspense>
  </ConfigProvider>
);

export default CommonLayout;
