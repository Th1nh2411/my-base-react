import React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './style.module.css';
import { ButtonProps } from 'antd/lib/button';
import { CaretDownOutlined, DownloadOutlined } from '@ant-design/icons';
import {
  Input,
  Button,
  Flex,
  Dropdown,
  Space,
  Radio,
  RadioChangeEvent,
  Form,
  Select,
  Row,
  Col,
  Typography,
  DatePicker,
  Divider
} from 'antd';
import Text from 'antd/es/typography/Text';
import classNames from 'classnames';
import Title from 'antd/es/typography/Title';
import SectionWrapper from '@base/components/SectionWrapper';
import TextArea from 'antd/es/input/TextArea';
import CustomButton from '@base/components/CustomButton/CustomButton';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);
const { RangePicker } = DatePicker;
type Props = {};

const Body = (props: Props) => {
  return (
    <Form
      colon={false}
      wrapperCol={{
        span: 12
      }}
      labelCol={{
        span: 3
      }}
    >
      <Flex vertical gap={22}>
        <SectionWrapper
          
          title="계정 등록"
          children={[
            {
              content: (
                <Flex gap={27} vertical >
                  <Form.Item label="관리자 ID">
                    <Flex gap={20} align='center' >
                      <Input style={{ maxWidth: 277, marginLeft: 50 }} />
                      <Link to="/account/write/1" style={{ textDecoration: 'underline' }}>
                        중복검사
                      </Link>
                    </Flex>
                  </Form.Item>
                  <Form.Item label="비밀번호">
                    <Input style={{ maxWidth: 366, marginLeft: 50 }} />
                  </Form.Item>
                  <Form.Item label="비밀번호 확인">
                    <Input style={{ maxWidth: 366, marginLeft: 50 }} />
                  </Form.Item>
                  <Form.Item label="관리자명">
                    <Input style={{ maxWidth: 277, marginLeft: 50 }} />
                  </Form.Item>
                  <Form.Item label="연락처">
                    <Input style={{ maxWidth: 277, marginLeft: 50 }} />
                  </Form.Item>
                  <Form.Item label="이메일">
                    <Input style={{ maxWidth: 366, marginLeft: 50 }} />
                  </Form.Item>
                </Flex>
              )
            }
          ]}
        />
        <Flex justify='center' style={{ marginTop: '14px' }} >
          <CustomButton round size="large" type="primary" htmlType="submit" >
          등록하기
          </CustomButton>
        </Flex>
      </Flex>
    </Form>
  );
};

export default Body;
