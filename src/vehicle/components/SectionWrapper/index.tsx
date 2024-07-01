import Title from 'antd/es/typography/Title';
import styles from './SectionWrapper.module.css';
import classNames from 'classnames/bind';
import { ConfigProvider, Divider } from 'antd';
import { ReactNode } from 'react';
const cx = classNames.bind(styles);
export interface SectionChildrenProps {
  colNum?: number;
  content: ReactNode;
}
export interface ISectionWrapperProps {
  title?: string;
  isRequired?: boolean;
  children: Array<SectionChildrenProps>;
}

export default function SectionWrapper(props: ISectionWrapperProps) {
  return (
    <div>
      {props.title && (
        <Title level={4} className={cx('title')}>
          {props.title} {props.isRequired && <span style={{ color: 'red' }}>*</span>}
        </Title>
      )}
      <div className={cx('content-wrapper')}>
        {props?.children?.map((item, index) => (
          <ConfigProvider
            theme={{
              components: {
                Form: { labelColonMarginInlineEnd: item.colNum === 2 ? 44 : 22, itemMarginBottom: 0 }
              }
            }}
            key={index}
          >
            {index !== 0 && <Divider style={{ margin: 0 }} />}
            <div style={{ padding: '28px 36px 28px' }}>{item?.content}</div>
          </ConfigProvider>
        ))}
      </div>
    </div>
  );
}
