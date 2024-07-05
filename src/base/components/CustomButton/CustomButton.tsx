import React, { CSSProperties } from 'react';
import { Button, ButtonProps } from 'antd';

interface CustomButtonProps extends ButtonProps {
  customBgColor?: string;
  active?: boolean;
  round?: boolean;
}

const CustomButton: React.FC<CustomButtonProps> = ({ customBgColor, style, active, round, ...props }) => {
  const customStyle: CSSProperties = {
    backgroundColor: active ? 'var(--primary-color)' : customBgColor,
    color: active ? 'white' : customBgColor,
    fontWeight: props.size === 'large' ? 600 : 500,
    padding: props.size === 'large' ? '20px 24px' : props.size === 'middle' ? '16px 10px' : '6px 10px',
    borderRadius: round ? 44 : undefined,
    ...style
  };

  return <Button style={customStyle} {...props} />;
};

export default CustomButton;
