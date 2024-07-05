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
import { useForm } from 'antd/es/form/Form';
import { getDefaultKakaoDesc } from '@notification/constants';
const cx = classNames.bind(styles);
const { RangePicker } = DatePicker;
type Props = {};

const Body = (props: Props) => {
  const form = useForm();
  const onSave = (values: any) => {
    console.log(values);
  };
  return (
    <Form
      colon={false}
      labelCol={{
        span: 2
      }}
      onFinish={onSave}
    >
      <Flex vertical gap={20} align="center">
        <SectionWrapper
          title="카카오 알림톡 메시지 등록"
          children={[
            {
              content: (
                <Flex vertical gap={20}>
                  <Form.Item name="title" label="메시지 제목">
                    <Input style={{ maxWidth: 400 }} />
                  </Form.Item>
                  <Form.Item name="desc" label="메시지 내용">
                    <TextArea
                      rows={16}
                      defaultValue={getDefaultKakaoDesc('Lee', 'X3 20i XDrive M Spt 125하1563', '22-05-11 10:30', '22-05-11 10:30')}
                    />
                  </Form.Item>
                  <Form.Item name="usage" label="사용 여부">
                    <Radio.Group>
                      <Radio value={1}>사용</Radio>
                      <Radio value={2}>미사용</Radio>
                    </Radio.Group>
                  </Form.Item>
                </Flex>
              )
            }
          ]}
        />
        <CustomButton round size="large" type="primary" htmlType="submit">
          등록하기
        </CustomButton>
        <SectionWrapper
          title="Reference codes"
          children={[
            {
              content: (
                <Flex vertical gap={20}>
                  <Form.Item label="차량정보">model_name_number</Form.Item>
                  <Form.Item label="예약일자">reservation_date</Form.Item>
                  <Form.Item label="반납일자">return_date</Form.Item>
                </Flex>
              )
            }
          ]}
        />
      </Flex>
    </Form>
  );
};

export default Body;
