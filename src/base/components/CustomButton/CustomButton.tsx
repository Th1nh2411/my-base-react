import React from 'react';
import { Button, ButtonProps } from 'antd';

interface CustomButtonProps extends ButtonProps {
  customColor?: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({ customColor, style, ...props }) => {
  const customStyle = {
    backgroundColor: customColor,
    fontWeight: props.size === 'large' ? 600 : 500,
    padding: props.size === 'large' ? '12px 24px' : '6px 10px',
    ...style
  };

  return <Button style={customStyle} {...props} />;
};

export default CustomButton;
