import React, { CSSProperties, useState } from 'react';
import { ConfigProvider, Select, SelectProps } from 'antd';
import Text from 'antd/es/typography/Text';

interface CustomSelectProps extends SelectProps {
  customBgColor?: string;
  type?: 'primary' | 'active' | 'default';
}

const CustomSelect: React.FC<CustomSelectProps> = ({ customBgColor, style, type, ...props }) => {
  const [isSelect, setIsSelect] = useState<boolean>(false);
  const customStyle: CSSProperties = {
    ...style
  };

  return (
    <ConfigProvider
      theme={{
        components: {
          Select: {
            colorBgContainer: isSelect && type === 'primary' ? 'var(--primary-color)' : type === 'primary' ? 'white' : customBgColor,
            colorText: isSelect && type === 'primary' ? 'white' : type === 'primary' ? 'var(--primary-color)' : customBgColor,
            colorTextQuaternary: isSelect && type === 'primary' ? 'white' : type === 'primary' ? 'var(--primary-color)' : customBgColor,
            colorBorder: type === 'primary' ? 'var(--primary-color)' : '#d9d9d9',
            colorTextPlaceholder: isSelect && type === 'primary' ? 'white' : type === 'primary' ? 'var(--primary-color)' : customBgColor
          }
        }
      }}
    >
      <Select onSelect={() => setIsSelect(true)} optionRender={({ label }) => <Text>{label}</Text>} style={customStyle} {...props} />
    </ConfigProvider>
  );
};

export default CustomSelect;
