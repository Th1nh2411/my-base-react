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
import SectionWrapper from '@vehicle/components/SectionWrapper';
import TextArea from 'antd/es/input/TextArea';
const cx = classNames.bind(styles);
const { RangePicker } = DatePicker;
type Props = {};

const Body = (props: Props) => {
  return (
    <Form
      colon={false}
      labelCol={{
        span: 6
      }}
    >
      <Flex vertical gap={25}>
        <Title level={4} style={{ marginLeft: 35 }}>
          차량 등록
        </Title>
        <SectionWrapper
          title="기본 정보"
          isRequired
          children={[
            {
              colNum: 2,
              content: (
                <Row gutter={[0, 10]}>
                  <Col md={12}>
                    <Form.Item label="차량 모델">
                      <Input style={{ maxWidth: 220 }} />
                    </Form.Item>
                  </Col>
                  <Col md={12}>
                    <Form.Item label="차종">
                      <Input style={{ maxWidth: 220 }} />
                    </Form.Item>
                  </Col>
                  <Col md={12}>
                    <Form.Item label="차량 색상">
                      <Input style={{ maxWidth: 220 }} />
                    </Form.Item>
                  </Col>
                  <Col md={12}>
                    <Form.Item label="차량 등급">
                      <Input style={{ maxWidth: 220 }} />
                    </Form.Item>
                  </Col>
                  <Col md={12}>
                    <Form.Item label="연식">
                      <Flex gap={10} style={{ width: 220 }}>
                        <Select
                          options={[
                            { value: 'lucy', label: 'Lucy' },
                            { value: 'jack', label: 'Jack' }
                          ]}
                        />
                        <Select
                          options={[
                            { value: 'lucy', label: 'Lucy' },
                            { value: 'jack', label: 'Jack' }
                          ]}
                        />
                      </Flex>
                    </Form.Item>
                  </Col>
                  <Col md={12}>
                    <Form.Item label="차량 번호">
                      <Input style={{ maxWidth: 220 }} />
                    </Form.Item>
                  </Col>
                  <Col md={12}>
                    <Form.Item label="DB 등록일">
                      <RangePicker />
                    </Form.Item>
                  </Col>
                  <Col md={12}>
                    <Form.Item label="차량 등록일">
                      <RangePicker />
                    </Form.Item>
                  </Col>
                </Row>
              )
            }
          ]}
        />
        <SectionWrapper
          title="운영 정보"
          isRequired
          children={[
            {
              colNum: 2,
              content: (
                <Row gutter={[0, 10]}>
                  <Col md={12}>
                    <Form.Item label="차량 모델">
                      <Select
                        options={[
                          { value: 'lucy', label: 'Lucy' },
                          { value: 'jack', label: 'Jack' }
                        ]}
                        style={{ maxWidth: 120 }}
                      />
                    </Form.Item>
                  </Col>
                  <Col md={12}>
                    <Form.Item label="차종">
                      <Radio.Group>
                        <Radio value={0}>21세</Radio>
                        <Radio value={1}>26세</Radio>
                      </Radio.Group>
                    </Form.Item>
                  </Col>
                </Row>
              )
            }
          ]}
        />
        <SectionWrapper
          title="세부 정보"
          children={[
            {
              colNum: 3,
              content: (
                <Row gutter={[0, 10]}>
                  <Col md={8}>
                    <Form.Item label="차량 모델">
                      <Input style={{ maxWidth: 220 }} />
                    </Form.Item>
                  </Col>
                  <Col md={8}>
                    <Form.Item label="차종">
                      <Input style={{ maxWidth: 220 }} />
                    </Form.Item>
                  </Col>
                  <Col md={8}>
                    <Form.Item labelCol={{ span: 12 }} label="국산/외산여부(1:국산 2:수입)">
                      <Select
                        options={[
                          { value: 'lucy', label: 'Lucy' },
                          { value: 'jack', label: 'Jack' }
                        ]}
                        style={{ maxWidth: 120 }}
                      />
                    </Form.Item>
                  </Col>
                  <Col md={8}>
                    <Form.Item label="차종">
                      <Input style={{ maxWidth: 220 }} />
                    </Form.Item>
                  </Col>
                </Row>
              )
            },
            {
              colNum: 3,
              content: (
                <Row gutter={[0, 10]}>
                  <Col md={8}>
                    <Form.Item label="차량 모델">
                      <Input style={{ maxWidth: 220 }} />
                    </Form.Item>
                  </Col>
                  <Col md={8}>
                    <Form.Item label="차종">
                      <Input style={{ maxWidth: 220 }} />
                    </Form.Item>
                  </Col>
                  <Col md={8}></Col>
                  <Col md={8}>
                    <Form.Item label="차종">
                      <Input style={{ maxWidth: 220 }} />
                    </Form.Item>
                  </Col>
                  <Col md={8}>
                    <Form.Item label="차종">
                      <Input style={{ maxWidth: 220 }} />
                    </Form.Item>
                  </Col>
                  <Col md={8}>
                    <Form.Item label="차종">
                      <Input style={{ maxWidth: 220 }} />
                    </Form.Item>
                  </Col>
                </Row>
              )
            },
            {
              colNum: 4,
              content: (
                <Row gutter={[0, 10]}>
                  <Col md={6}>
                    <Form.Item labelCol={{ span: 8 }} label="차량 모델">
                      <Input style={{ maxWidth: 120 }} />
                    </Form.Item>
                  </Col>
                  <Col md={6}>
                    <Form.Item labelCol={{ span: 8 }} label="차종">
                      <Input style={{ maxWidth: 120 }} />
                    </Form.Item>
                  </Col>
                  <Col md={6}>
                    <Form.Item labelCol={{ span: 8 }} label="차종">
                      <Input style={{ maxWidth: 120 }} />
                    </Form.Item>
                  </Col>
                  <Col md={6}>
                    <Form.Item labelCol={{ span: 8 }} label="차종">
                      <Input style={{ maxWidth: 120 }} />
                    </Form.Item>
                  </Col>
                  <Col md={6}>
                    <Form.Item labelCol={{ span: 8 }} label="차종">
                      <Input style={{ maxWidth: 120 }} />
                    </Form.Item>
                  </Col>
                  <Col md={6}>
                    <Form.Item labelCol={{ span: 8 }} label="차종">
                      <Input style={{ maxWidth: 120 }} />
                    </Form.Item>
                  </Col>
                  <Col md={6}>
                    <Form.Item labelCol={{ span: 8 }} label="차종">
                      <Input style={{ maxWidth: 120 }} />
                    </Form.Item>
                  </Col>
                </Row>
              )
            },
            {
              colNum: 4,
              content: (
                <Row gutter={[0, 10]}>
                  <Col md={6}>
                    <Form.Item labelCol={{ span: 8 }} label="차량 모델">
                      <Input style={{ maxWidth: 120 }} />
                    </Form.Item>
                  </Col>
                  <Col md={6}>
                    <Form.Item labelCol={{ span: 8 }} label="차종">
                      <Input style={{ maxWidth: 120 }} />
                    </Form.Item>
                  </Col>
                  <Col md={6}>
                    <Form.Item labelCol={{ span: 8 }} label="차종">
                      <Input style={{ maxWidth: 120 }} />
                    </Form.Item>
                  </Col>
                  <Col md={6}>
                    <Form.Item labelCol={{ span: 8 }} label="차종">
                      <Input style={{ maxWidth: 120 }} />
                    </Form.Item>
                  </Col>
                  <Col md={6}>
                    <Form.Item labelCol={{ span: 8 }} label="차종">
                      <Input style={{ maxWidth: 120 }} />
                    </Form.Item>
                  </Col>
                  <Col md={6}>
                    <Form.Item labelCol={{ span: 8 }} label="차종">
                      <Input style={{ maxWidth: 120 }} />
                    </Form.Item>
                  </Col>
                  <Col md={6}>
                    <Form.Item labelCol={{ span: 8 }} label="차종">
                      <Input style={{ maxWidth: 120 }} />
                    </Form.Item>
                  </Col>
                  <Col md={6}>
                    <Form.Item labelCol={{ span: 8 }} label="차종">
                      <Input style={{ maxWidth: 120 }} />
                    </Form.Item>
                  </Col>
                  <Col md={6}>
                    <Form.Item labelCol={{ span: 8 }} label="차종">
                      <Input style={{ maxWidth: 120 }} />
                    </Form.Item>
                  </Col>
                </Row>
              )
            },
            {
              colNum: 3,
              content: (
                <Row gutter={[0, 10]}>
                  <Col md={8}>
                    <Form.Item labelCol={{ span: 12 }} label="기본보증기간(년)">
                      <Input style={{ maxWidth: 120 }} />
                    </Form.Item>
                  </Col>
                  <Col md={8}>
                    <Form.Item labelCol={{ span: 12 }} label="파워트레인보증기간(년)">
                      <Input style={{ maxWidth: 120 }} />
                    </Form.Item>
                  </Col>
                  <Col md={8}>
                    <Form.Item labelCol={{ span: 12 }} label="파워트레인보증주행거리(km)">
                      <Input style={{ maxWidth: 120 }} />
                    </Form.Item>
                  </Col>
                  <Col md={8}>
                    <Form.Item labelCol={{ span: 12 }} label="배출가스보증기간(년)">
                      <Input style={{ maxWidth: 120 }} />
                    </Form.Item>
                  </Col>
                  <Col md={8}>
                    <Form.Item labelCol={{ span: 12 }} label="배출가스보증주행거리(km)">
                      <Input style={{ maxWidth: 120 }} />
                    </Form.Item>
                  </Col>
                </Row>
              )
            },
            {
              colNum: 4,
              content: (
                <Row gutter={[0, 10]}>
                  <Col md={6}>
                    <Form.Item labelCol={{ span: 8 }} label="차량 모델">
                      <Input style={{ maxWidth: 120 }} />
                    </Form.Item>
                  </Col>
                  <Col md={6}>
                    <Form.Item labelCol={{ span: 8 }} label="차종">
                      <Input style={{ maxWidth: 120 }} />
                    </Form.Item>
                  </Col>
                  <Col md={6}>
                    <Form.Item labelCol={{ span: 8 }} label="차종">
                      <Input style={{ maxWidth: 120 }} />
                    </Form.Item>
                  </Col>
                  <Col md={6}>
                    <Form.Item labelCol={{ span: 8 }} label="차종">
                      <Input style={{ maxWidth: 120 }} />
                    </Form.Item>
                  </Col>
                </Row>
              )
            },

            {
              colNum: 1,
              content: (
                <Row gutter={[0, 10]}>
                  <Col md={24}>
                    <Form.Item labelCol={{ span: 4 }} label="모델 대표이미지 url">
                      <Input style={{ maxWidth: 320 }} />
                    </Form.Item>
                  </Col>
                  <Col md={24}>
                    <Form.Item labelCol={{ span: 4 }} label="옵션메모">
                      <TextArea rows={4} style={{ maxWidth: 620 }} />
                    </Form.Item>
                  </Col>
                </Row>
              )
            }
          ]}
        />
        <Form.Item style={{ textAlign: 'center', marginTop: 30 }}>
          <Button size="large" type="primary" htmlType="submit">
            등록하기
          </Button>
        </Form.Item>
      </Flex>
    </Form>
  );
};

export default Body;
