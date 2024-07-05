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
import Paragraph from 'antd/es/typography/Paragraph';
import { getDefaultKakaoDesc } from '@notification/constants';
import Link from 'antd/es/typography/Link';
const cx = classNames.bind(styles);
const { RangePicker } = DatePicker;
type Props = {};

const Body = (props: Props) => {
  return (
    <Form colon={false} labelCol={{ span: 4 }}>
      <Flex vertical gap={20} align="center">
        <SectionWrapper
          title="카카오 알림톡 발송 정보"
          children={[
            {
              content: (
                <Row gutter={[20, 20]}>
                  <Col md={12}>
                    <Form.Item label="예약 일시">-</Form.Item>
                  </Col>
                  <Col md={12}>
                    <Form.Item label="발송 일시">22-04-11 10:30</Form.Item>
                  </Col>
                  <Col md={12}>
                    <Form.Item label="발송 내용">
                      <Paragraph style={{ whiteSpace: 'pre-line' }}>
                        {getDefaultKakaoDesc('Lee', 'X3 20i XDrive M Spt 125하1563', '22-05-11 10:30', '22-05-11 10:30')}
                      </Paragraph>
                    </Form.Item>
                  </Col>
                  <Col md={12}></Col>
                  <Col md={12}>
                    <Form.Item label="발신자">홍길동</Form.Item>
                  </Col>
                  <Col md={12}>
                    <Form.Item label="수신자">
                      <Flex gap={12}>
                        <Text>박세라</Text>
                        <Link underline>상세보기</Link>
                      </Flex>
                    </Form.Item>
                  </Col>
                  <Col md={12}>
                    <Form.Item label="발신번호">0283595789</Form.Item>
                  </Col>
                  <Col md={12}>
                    <Form.Item label="수신번호">01083595789</Form.Item>
                  </Col>
                  <Col md={12}>
                    <Form.Item label="발신 경로">
                      <Link underline>상세보기</Link>
                    </Form.Item>
                  </Col>
                  <Col md={12}>
                    <Form.Item label="발송 상태">
                      <Link strong>성공</Link>
                    </Form.Item>
                  </Col>
                </Row>
              )
            }
          ]}
        />
      </Flex>
    </Form>
  );
};

export default Body;
