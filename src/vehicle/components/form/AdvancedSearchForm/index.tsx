import React from 'react';
import { Input, Button, Flex, Select, Form, ConfigProvider } from 'antd';
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
                  label="운영 상태"
                  // name="password"
                  layout="horizontal"
                  wrapperCol={{ span: 6 }}
                  // rules={[{ required: true, message: 'Please input your password!' }]}
                >
                  <div className={cx('ml-10')}>
                    <Select
                      defaultValue="male"
                      // onChange={onGenderChange}
                      allowClear
                    >
                      <Option value="male">선택</Option>
                      <Option value="female">선택</Option>
                      <Option value="other">선택</Option>
                    </Select>
                  </div>
                </Form.Item>

                <Form.Item
                  label="차량 모델"
                  // name="username"
                  // rules={[{ required: true, message: 'Please input here!' }]}
                >
                  <div className={cx('ml-10')}>
                    <Input />
                  </div>
                </Form.Item>

                <Form.Item
                  label="차량 색상"
                  // name="username"
                  // rules={[{ required: true, message: 'Please input here!' }]}
                >
                  <div className={cx('ml-10')}>
                    <Input />
                  </div>
                </Form.Item>

                <Form.Item
                  label="연식"
                  // name="password"
                  layout="horizontal"
                  wrapperCol={{ span: 13 }}
                  rules={[{ required: true, message: 'Please input your password!' }]}
                >
                  <Flex align="center" gap={10} className={cx('ml-10')}>
                    <Select
                      defaultValue="male"
                      // onChange={onGenderChange}
                      allowClear
                    >
                      <Option value="male">선택</Option>
                      <Option value="female">선택</Option>
                      <Option value="other">선택</Option>
                    </Select>

                    <Select
                      defaultValue="male"
                      // onChange={onGenderChange}
                      allowClear
                    >
                      <Option value="male">선택</Option>
                      <Option value="female">선택</Option>
                      <Option value="other">선택</Option>
                    </Select>
                  </Flex>
                </Form.Item>

                <Form.Item
                  label="DB 등록일"
                  wrapperCol={{ span: 12 }}
                  // name="username"
                  // rules={[{ required: true, message: 'Please input here!' }]}
                >
                  <Flex align="center" gap={10} className={cx('ml-10')}>
                    <Input className={cx('bg-gray-2')} />
                    <div>~</div>
                    <Input className={cx('bg-gray-2')} />
                  </Flex>
                </Form.Item>
              </div>

              {/* right */}
              <div className={cx('advance-search-form__item')}>
                <Form.Item label="차종">
                  <div className={cx('ml-10')}>
                    <Input />
                  </div>
                </Form.Item>

                <Form.Item label="차량 등급">
                  <div className={cx('ml-10')}>
                    <Input />
                  </div>
                </Form.Item>

                <Form.Item label="차량 번호">
                  <div className={cx('ml-10')}>
                    <Input />
                  </div>
                </Form.Item>

                <Form.Item label="DB 등록일" wrapperCol={{ span: 12 }}>
                  <Flex align="center" gap={10} className={cx('ml-10')}>
                    <Input className={cx('bg-gray-2')} />
                    <div>~</div>
                    <Input className={cx('bg-gray-2')} />
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
