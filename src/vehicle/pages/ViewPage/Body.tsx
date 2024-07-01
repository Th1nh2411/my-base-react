import React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './style.module.css';
import { ButtonProps } from 'antd/lib/button';
import { CaretDownOutlined, DownloadOutlined, EditFilled } from '@ant-design/icons';
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
  Divider,
  Tabs,
  TabsProps
} from 'antd';
import Text from 'antd/es/typography/Text';
import classNames from 'classnames';
import Title from 'antd/es/typography/Title';
import SectionWrapper from '@vehicle/components/SectionWrapper';
import TextArea from 'antd/es/input/TextArea';
import Link from 'antd/es/typography/Link';
const cx = classNames.bind(styles);
const { RangePicker } = DatePicker;
type Props = {};

const Body = (props: Props) => {
  const items: TabsProps['items'] = [
    {
      key: '1',
      label: '세부 정보',
      children: (
        <SectionWrapper
          children={[
            {
              colNum: 3,
              content: (
                <Row gutter={[0, 10]}>
                  <Col md={6}>
                    <Form.Item label="등록증차명">싼타페(SANTAFE)</Form.Item>
                  </Col>
                  <Col md={6}>
                    <Form.Item label="차대번호">KMHS281BBLU221488</Form.Item>
                  </Col>
                  <Col md={6}>
                    <Form.Item labelCol={{ span: 14 }} label="국산/외산여부(1:국산 2:수입)">
                      국산
                    </Form.Item>
                  </Col>
                  <Col md={2} offset={4}>
                    <Button style={{ color: 'var(--secondary-color)' }} type="text" icon={<EditFilled />}>
                      수정하기
                    </Button>
                  </Col>
                  <Col md={6}>
                    <Form.Item label="차종">현대</Form.Item>
                  </Col>
                </Row>
              )
            },
            {
              colNum: 3,
              content: (
                <Row gutter={[0, 10]} style={{ width: '85%' }}>
                  <Col md={6}>
                    <Form.Item labelCol={{ span: 9 }} label="차량 모델">
                      싼타페
                    </Form.Item>
                  </Col>
                  <Col md={6}>
                    <Form.Item labelCol={{ span: 9 }} label="차종">
                      신형 싼타페
                    </Form.Item>
                  </Col>
                  <Col md={6}></Col>
                  <Col md={6}></Col>
                  <Col md={6}>
                    <Form.Item labelCol={{ span: 9 }} label="차종">
                      R2.0 2WD
                    </Form.Item>
                  </Col>
                  <Col md={6}>
                    <Form.Item labelCol={{ span: 9 }} label="차종">
                      프리미엄
                    </Form.Item>
                  </Col>
                  <Col md={6}>
                    <Form.Item labelCol={{ span: 9 }} label="차종">
                      R2.0 2WD 프리미엄
                    </Form.Item>
                  </Col>
                </Row>
              )
            },
            {
              colNum: 4,
              content: (
                <Row gutter={[0, 10]} style={{ width: '85%' }}>
                  <Col md={6}>
                    <Form.Item labelCol={{ span: 9 }} label="차량 모델">
                      5
                    </Form.Item>
                  </Col>
                  <Col md={6}>
                    <Form.Item labelCol={{ span: 9 }} label="차종">
                      110
                    </Form.Item>
                  </Col>
                  <Col md={6}>
                    <Form.Item labelCol={{ span: 9 }} label="차종">
                      110
                    </Form.Item>
                  </Col>
                  <Col md={6}>
                    <Form.Item labelCol={{ span: 9 }} label="차종">
                      110
                    </Form.Item>
                  </Col>
                  <Col md={6}>
                    <Form.Item labelCol={{ span: 9 }} label="차종">
                      110
                    </Form.Item>
                  </Col>
                  <Col md={6}>
                    <Form.Item labelCol={{ span: 9 }} label="차종">
                      110
                    </Form.Item>
                  </Col>
                  <Col md={6}>
                    <Form.Item labelCol={{ span: 9 }} label="차종">
                      110
                    </Form.Item>
                  </Col>
                </Row>
              )
            },
            {
              colNum: 4,
              content: (
                <Row gutter={[0, 10]} style={{ width: '85%' }}>
                  <Col md={6}>
                    <Form.Item labelCol={{ span: 9 }} label="차량 모델">
                      일반
                    </Form.Item>
                  </Col>
                  <Col md={6}>
                    <Form.Item labelCol={{ span: 9 }} label="차종">
                      SUV
                    </Form.Item>
                  </Col>
                  <Col md={6}>
                    <Form.Item labelCol={{ span: 9 }} label="차종">
                      1995
                    </Form.Item>
                  </Col>
                  <Col md={6}>
                    <Form.Item labelCol={{ span: 9 }} label="차종">
                      디젤
                    </Form.Item>
                  </Col>
                  <Col md={6}>
                    <Form.Item labelCol={{ span: 9 }} label="차종">
                      디젤
                    </Form.Item>
                  </Col>
                  <Col md={6}>
                    <Form.Item labelCol={{ span: 9 }} label="차종">
                      13.9km/L(2등급)
                    </Form.Item>
                  </Col>
                  <Col md={6}>
                    <Form.Item labelCol={{ span: 9 }} label="차종">
                      29500000
                    </Form.Item>
                  </Col>
                  <Col md={6}>
                    <Form.Item labelCol={{ span: 9 }} label="차종">
                      29500000
                    </Form.Item>
                  </Col>
                  <Col md={6}>
                    <Form.Item labelCol={{ span: 9 }} label="차종">
                      29500000
                    </Form.Item>
                  </Col>
                </Row>
              )
            },
            {
              colNum: 3,
              content: (
                <Row gutter={[0, 10]} style={{ width: '85%' }}>
                  <Col md={8}>
                    <Form.Item labelCol={{ span: 12 }} label="기본보증기간(년)">
                      2/3/4
                    </Form.Item>
                  </Col>
                  <Col md={8}>
                    <Form.Item labelCol={{ span: 12 }} label="파워트레인보증기간(년)">
                      5
                    </Form.Item>
                  </Col>
                  <Col md={8}>
                    <Form.Item labelCol={{ span: 12 }} label="파워트레인보증주행거리(km)">
                      100000
                    </Form.Item>
                  </Col>
                  <Col md={8}>
                    <Form.Item labelCol={{ span: 12 }} label="배출가스보증기간(년)">
                      5
                    </Form.Item>
                  </Col>
                  <Col md={8}>
                    <Form.Item labelCol={{ span: 12 }} label="배출가스보증주행거리(km)">
                      80000
                    </Form.Item>
                  </Col>
                </Row>
              )
            },
            {
              colNum: 4,
              content: (
                <Row gutter={[0, 10]} style={{ width: '85%' }}>
                  <Col md={6}>
                    <Form.Item labelCol={{ span: 9 }} label="차량 모델">
                      1690
                    </Form.Item>
                  </Col>
                  <Col md={6}>
                    <Form.Item labelCol={{ span: 9 }} label="차종">
                      1690
                    </Form.Item>
                  </Col>
                  <Col md={6}>
                    <Form.Item labelCol={{ span: 9 }} label="차종">
                      1690
                    </Form.Item>
                  </Col>
                  <Col md={6}>
                    <Form.Item labelCol={{ span: 9 }} label="차종">
                      1690
                    </Form.Item>
                  </Col>
                </Row>
              )
            },
            {
              colNum: 1,
              content: (
                <Row>
                  <Col md={12}>
                    <Form.Item label="모델 대표이미지 url">
                      https://code2.car2b.com/data/_NewCarDB/FrontImage/20140517/5cde17a72e6ab_1.png
                    </Form.Item>
                  </Col>
                  <Col md={12}></Col>
                  <Col md={12}>
                    <Form.Item label="옵션메모">
                      <Text>
                        멀티미디어 라이트 플러스 - 7인치 디스플레이 오디오 + 후방 모니터(주행 중 후방 모니터 포함) + 하이패스 시스템
                        멀티미디어 내비 플러스1 - 8인치 내비게이션, 블루링크
                      </Text>
                    </Form.Item>
                  </Col>
                </Row>
              )
            }
          ]}
        />
      )
    },
    {
      key: '2',
      label: '계약 정보',
      children: 'content2'
    },
    {
      key: '3',
      label: '차량 위치',
      children: (
        <SectionWrapper
          children={[
            {
              colNum: 1,
              content: (
                <div>
                  <Flex gap={36} style={{ padding: '0px 40px 20px' }}>
                    <Text type="secondary">현재 위치</Text>
                    <Flex vertical>
                      <Text>경기 하남시 학암동 676-2 인근</Text>
                      <Text>반납위치로부터 + 0km (시내 평균 주행속도 30km/h로 운행 가정시 반납 위치까지 0분 소요 예상)</Text>
                    </Flex>
                  </Flex>
                  <Flex vertical align="center">
                    <iframe
                      title="map"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12664.056951976467!2d127.14448967098583!3d37.483990380200645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357caf0e2fb81281%3A0x87a2b4bf7b23e8cd!2zSMOgbiBRdeG7kWMsIEd5ZW9uZ2dpLCBIYW5hbSwg7JyE66GA64-Z!5e0!3m2!1svi!2s!4v1719305850083!5m2!1svi!2s"
                      width="100%"
                      height="400"
                      loading="lazy"
                      style={{ border: 0 }}
                    ></iframe>
                  </Flex>
                </div>
              )
            }
          ]}
        />
      )
    },
    {
      key: '4',
      label: '정비 내역',
      children: (
        <SectionWrapper
          children={[
            {
              content: (
                <div>
                  <Flex align="center" gap={30} style={{ padding: '0 18px 20px' }}>
                    <Title level={5}>
                      <span style={{ color: 'var(--primary-color)' }}>총 3대</span> ㅣ 정비 내역
                    </Title>
                    <Button>정비 등록</Button>
                  </Flex>
                  <Row>
                    <Col md={12}>
                      <SectionWrapper
                        children={[
                          {
                            content: (
                              <Flex>
                                <div style={{ width: '85%' }}></div>
                              </Flex>
                            )
                          }
                        ]}
                      />
                    </Col>
                  </Row>
                </div>
              )
            }
          ]}
        />
      )
    },
    {
      key: '5',
      label: '사고 내역',
      children: 'Content of Tab Pane 5'
    }
  ];
  return (
    <Form
      colon={false}
      labelCol={{
        span: 8
      }}
    >
      <Flex vertical gap={25}>
        <Title level={4} style={{ marginLeft: 35, marginBottom: 0 }}>
          차량 등록
        </Title>

        <SectionWrapper
          title="기본 정보"
          children={[
            {
              colNum: 2,
              content: (
                <Row gutter={[0, 10]}>
                  <Col md={12}>
                    <Form.Item label="차량 모델">M Spt</Form.Item>
                  </Col>
                  <Col md={12}>
                    <Form.Item label="차종">320i</Form.Item>
                  </Col>
                  <Col md={12}>
                    <Form.Item label="차량 색상">블루</Form.Item>
                  </Col>
                  <Col md={12}>
                    <Form.Item label="차량 등급">R2.0 2WD 프리미엄</Form.Item>
                  </Col>
                  <Col md={12}>
                    <Form.Item label="연식">2016 / 8</Form.Item>
                  </Col>
                  <Col md={12}>
                    <Form.Item label="차량 번호">125하1561</Form.Item>
                  </Col>
                  <Col md={12}>
                    <Form.Item label="DB 등록일">23-04-26</Form.Item>
                  </Col>
                  <Col md={12}>
                    <Form.Item label="차량 등록일">23-03-31</Form.Item>
                  </Col>
                </Row>
              )
            }
          ]}
        />
        <SectionWrapper
          title="운영 정보"
          children={[
            {
              colNum: 2,
              content: (
                <Row gutter={[0, 10]}>
                  <Col md={12}>
                    <Form.Item label="차량 모델">운영</Form.Item>
                  </Col>
                  <Col md={12}>
                    <Form.Item label="차종">21세</Form.Item>
                  </Col>
                </Row>
              )
            }
          ]}
        />

        <Tabs defaultActiveKey="1" items={items} tabBarStyle={{ marginLeft: 35 }} />
      </Flex>
    </Form>
  );
};

export default Body;
