import Title from 'antd/es/typography/Title';
import styles from './SectionWrapper.module.css';
import classNames from 'classnames/bind';
import { Button, ConfigProvider, Divider, Flex } from 'antd';
import { CSSProperties, ReactNode, useEffect, useRef, useState } from 'react';
import { EditFilled } from '@ant-design/icons';
const cx = classNames.bind(styles);
export interface SectionChildrenProps {
  colNum?: number;
  content: ReactNode;
}
export interface ISectionWrapperProps {
  title?: string;
  titleAction?: ReactNode;
  isRequired?: boolean;
  children: Array<SectionChildrenProps>;
  childrenWrapperStyle?: CSSProperties;
  wrapperStyle?: CSSProperties;
  action?: ReactNode;
  size?: 'small' | 'large';
}

export default function SectionWrapper(props: ISectionWrapperProps) {
  const actionRef = useRef<HTMLDivElement>(null);
  const [widthContent, setWidthContent] = useState<string>('100%');
  const contentStyle: CSSProperties = {
    padding: props.size === 'small' ? '12px 20px 12px' : '24px 40px 24px',
    ...props.childrenWrapperStyle
  };
  useEffect(() => {
    if (actionRef.current) {
      const actionWidth = actionRef.current.offsetWidth;
      if (actionWidth) {
        const calcWidthContent = `calc(100% - ${actionWidth}px - 40px)`;
        setWidthContent(calcWidthContent);
      }
    }
  }, [props.action]);
  return (
    <div style={{ height: '100%', width: '100%' }}>
      {props.title && (
        <Flex justify="space-between" align="center" className={cx('title-wrapper')}>
          <Title type="secondary" level={5} className={cx('title')}>
            {props.title} {props.isRequired && <span style={{ color: 'red' }}>*</span>}
          </Title>
          {props.titleAction}
        </Flex>
      )}
      <div className={cx('content-wrapper')} style={props.wrapperStyle}>
        {props?.children?.map((item, index) => (
          <ConfigProvider
            theme={{
              components: {
                Form: { labelColonMarginInlineEnd: item.colNum === 2 || item.colNum === 1 ? 44 : 22, itemMarginBottom: 0 }
              }
            }}
            key={index}
          >
            <div ref={actionRef} className={cx('actions-wrapper', { small: props.size === 'small' })}>
              {props.action}
            </div>
            {index !== 0 && <Divider style={{ margin: 0 }} />}
            <div style={{ ...contentStyle, width: widthContent }}>{item?.content}</div>
          </ConfigProvider>
        ))}
      </div>
    </div>
  );
}
