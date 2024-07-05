import React from 'react';
import { Input, Button, Flex, Select, Form, ConfigProvider, DatePicker } from 'antd';
import type { FormProps } from 'antd';
import classNames from 'classnames/bind';
import style from './style.module.css';
import CustomButton from '@base/components/CustomButton/CustomButton';
const cx = classNames.bind(style);

type Props = {};

const AdvancedSearchForm = (props: Props) => {
  const { Option } = Select;
  type FieldType = {
    username?: string;
    password?: string;
    remember?: string;
  };

  const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <>
      <div className={cx('advance-search-form')}>
        <ConfigProvider
          theme={{
            components: {
              Select: {
                selectorBg: '#F1F1F1'
              }
            }
          }}
        >
          <Form
            name="basic"
            layout="horizontal"
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 10 }}
            labelAlign="right"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Flex>
              {/* left */}
              <div className={cx('advance-search-form__item')}>
                <Form.Item
                  label="계약 일시"
                  // name="password"
                  layout="horizontal"
                  wrapperCol={{ span: 6 }}
                >
                  <div className={cx('ml-10')}>
                    <DatePicker className={cx('text-black-placeholder','bg-gray-2')} placeholder="yyyy-mmdd" />
                  </div>
                </Form.Item>

                <Form.Item
                  label="차량 번호"
                >
                  <div className={cx('ml-10')}>
                    <Input />
                  </div>
                </Form.Item>

                <Form.Item
                  label="계약자 이름"
                >
                  <div className={cx('ml-10')}>
                    <Input />
                  </div>
                </Form.Item>
              </div>

              {/* right */}
              <div className={cx('advance-search-form__item')}>
                <Form.Item label="차량 모델">
                  <div className={cx('ml-10')}>
                    <Input />
                  </div>
                </Form.Item>

                <Form.Item
                  label="계약 상태"
                  layout="horizontal"
                  wrapperCol={{ span: 6 }}
                >
                  <div className={cx('ml-10')}>
                    <Select
                      defaultValue="male"
                      allowClear
                    >
                      <Option value="male">선택</Option>
                      <Option value="female">선택</Option>
                      <Option value="other">선택</Option>
                    </Select>
                  </div>
                </Form.Item>

                <Form.Item label="계약 기간" wrapperCol={{ span: 10 }}>
                  <Flex align="center" gap={10} className={cx('ml-10')}>
                    <DatePicker className={cx('text-black-placeholder','bg-gray-2')} placeholder="yyyy-mmdd" />
                    <div>~</div>
                    <DatePicker className={cx('text-black-placeholder','bg-gray-2')} placeholder="yyyy-mmdd" />
                  </Flex>
                </Form.Item>
              </div>
            </Flex>
          </Form>
        </ConfigProvider>
      </div>
      <Flex justify="center" style={{ marginTop: '14px' }}>
        <CustomButton round size="large" type="primary" htmlType="submit">
          검색
        </CustomButton>
      </Flex>
    </>
  );
};

export default AdvancedSearchForm;
