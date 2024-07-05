import styles from './CustomTabs.module.css';
import React, { useEffect, useState } from 'react';
import { Flex, TabsProps } from 'antd';
import classNames from 'classnames/bind';
import Text from 'antd/es/typography/Text';
const cx = classNames.bind(styles);

interface CustomTabsProps extends TabsProps {}

const CustomTabs: React.FC<CustomTabsProps> = ({ style, ...props }) => {
  const [activeTab, setActiveTab] = useState(Number(props.defaultActiveKey));
  const [activeContent, setActiveContent] = useState<any>();
  useEffect(() => {
    const activeContent = props.items?.find((tab) => Number(tab.key) === activeTab);
    setActiveContent(activeContent?.children);
  }, [activeTab]);
  const customStyle = {
    ...style
  };

  return (
    <div>
      <Flex className={cx('tabs-wrapper')}>
        {props.items?.map((tab, index) => (
          <Text type="secondary" className={cx('tab', { active: activeTab === index + 1 })} onClick={() => setActiveTab(index + 1)}>
            {tab.label}
          </Text>
        ))}
      </Flex>
      {activeContent}
    </div>
  );
};

export default CustomTabs;
