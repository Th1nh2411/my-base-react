import * as React from 'react';
import { useMemo } from 'react';
import Body from './Body';
import { ConfigProvider } from 'antd';
export interface IViewPageProps {}
const ViewPage = () => {
  const renderBody = useMemo(() => {
    return (
      <ConfigProvider
        theme={{
          components: {
            Tabs: { itemSelectedColor: '#5d5d5d', itemHoverColor: '#5d5d5d' }
          }
        }}
      >
        <Body />
      </ConfigProvider>
    );
  }, []);

  return <div>{renderBody}</div>;
};

export default ViewPage;
