import { useMemo } from 'react';
import Body from './Body';
import { ConfigProvider } from 'antd';
const WritePage = () => {
  const renderBody = useMemo(() => {
    return (
      <ConfigProvider
        theme={{
          components: {
            Select: { colorBgContainer: 'var(--bg-color)' }
          }
        }}
      >
        <Body />
      </ConfigProvider>
    );
  }, []);

  return <div>{renderBody}</div>;
};

export default WritePage;
