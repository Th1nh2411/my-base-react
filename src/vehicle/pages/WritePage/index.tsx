import { useMemo } from 'react';
import Body from './Body';
import { ConfigProvider } from 'antd';
const WritePage = () => {
  const renderBody = useMemo(() => {
    return (
      <ConfigProvider
        theme={{
          components: {}
        }}
      >
        <Body />
      </ConfigProvider>
    );
  }, []);

  return <div>{renderBody}</div>;
};

export default WritePage;
