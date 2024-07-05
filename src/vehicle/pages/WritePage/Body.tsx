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
const cx = classNames.bind(styles);
const { RangePicker } = DatePicker;
type Props = {};

const Body = (props: Props) => {
  const [openDetail, setOpenDetail] = useState<boolean>(false);
  return (
    <Flex vertical gap={25}>
      <SectionWrapper
        title="차량 등록"
        children={[
          {
            content: (
              <Form colon={false} labelCol={{}} size="large" onFinish={({ values: any }) => setOpenDetail(true)}>
                <Row gutter={[0, 10]} align={'top'}>
                  <Col md={8}>
                    <Form.Item name="carNum" rules={[{ required: true }]} label="차량 번호">
                      <Input style={{ maxWidth: 280 }} />
                    </Form.Item>
                  </Col>
                  <Col md={8}>
                    <Form.Item name="owner" rules={[{ required: true }]} label="소유주">
                      <Input style={{ maxWidth: 280 }} />
                    </Form.Item>
                  </Col>
                  <Col md={8}>
                    <CustomButton round type="primary" htmlType="submit" size="large">
                      검색하기
                    </CustomButton>
                  </Col>
                </Row>
              </Form>
            )
          }
        ]}
      />
      {openDetail && (
        <Form
          colon={false}
          labelCol={{
            span: 8
          }}
          size="large"
        >
          <Flex gap={25} vertical>
            <SectionWrapper
              title="기본 정보"
              children={[
                {
                  content: (
                    <Row gutter={[0, 10]}>
                      <Col md={6}>
                        <Form.Item label="제조사명">현대</Form.Item>
                      </Col>
                      <Col md={6}>
                        <Form.Item label="대표모델명">싼타페</Form.Item>
                      </Col>
                      <Col md={6}>
                        <Form.Item label="대표등급명">싼타페</Form.Item>
                      </Col>
                      <Col md={6}>
                        <Form.Item label="세부등급명">싼타페</Form.Item>
                      </Col>
                      <Col md={6}>
                        <Form.Item label="차량 색상">블루</Form.Item>
                      </Col>
                      <Col md={6}>
                        <Form.Item label="차량 등급">R2.0 2WD 프리미엄</Form.Item>
                      </Col>
                      <Col md={6}>
                        <Form.Item label="차량 번호">65하1561</Form.Item>
                      </Col>
                      <Col md={6}></Col>
                      <Col md={6}>
                        <Form.Item label="차량 등록일">23-03-31</Form.Item>
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
                      <Col md={6}>
                        <Form.Item label="등록증차명">싼타페(SANTAFE)</Form.Item>
                      </Col>
                      <Col md={6}>
                        <Form.Item label="차대번호">KMHS261BBLU221466</Form.Item>
                      </Col>
                      <Col md={8}>
                        <Form.Item labelCol={{ span: 12 }} label="국산/외산여부(1:국산 2:수입)">
                          국산
                        </Form.Item>
                      </Col>
                      <Col md={4}></Col>
                      <Col md={6}>
                        <Form.Item label="제조사명">현대</Form.Item>
                      </Col>
                      <Col md={6}>
                        <Form.Item label="차량 모델">M Spt</Form.Item>
                      </Col>
                      <Col md={6}>
                        <Form.Item label="차종">320i</Form.Item>
                      </Col>
                      <Col md={6}>
                        <Form.Item label="연식">2016 / 6</Form.Item>
                      </Col>
                    </Row>
                  )
                },
                {
                  colNum: 3,
                  content: (
                    <Row gutter={[0, 10]}>
                      <Col md={8}>
                        <Form.Item label="대표모델명">싼타페</Form.Item>
                      </Col>
                      <Col md={8}>
                        <Form.Item label="세부모델명">신형 싼타페</Form.Item>
                      </Col>
                      <Col md={8}></Col>
                      <Col md={8}>
                        <Form.Item label="대표등급명">R2.0 2WD</Form.Item>
                      </Col>
                      <Col md={8}>
                        <Form.Item label="세부등급명">프리미엄</Form.Item>
                      </Col>
                      <Col md={8}>
                        <Form.Item label="신차등급명">R2.0 2WD 프리미엄</Form.Item>
                      </Col>
                    </Row>
                  )
                },
                {
                  colNum: 4,
                  content: (
                    <Row gutter={[0, 10]}>
                      <Col md={6}>
                        <Form.Item labelCol={{ span: 8 }} label="제조사키">
                          5
                        </Form.Item>
                      </Col>
                      <Col md={6}>
                        <Form.Item labelCol={{ span: 8 }} label="대표모델키">
                          110
                        </Form.Item>
                      </Col>
                      <Col md={6}>
                        <Form.Item labelCol={{ span: 8 }} label="세부모델키">
                          2666
                        </Form.Item>
                      </Col>
                      <Col md={6}>
                        <Form.Item labelCol={{ span: 8 }} label="대표등급키">
                          11778
                        </Form.Item>
                      </Col>
                      <Col md={6}>
                        <Form.Item labelCol={{ span: 8 }} label="세부등급키">
                          35622
                        </Form.Item>
                      </Col>
                      <Col md={6}>
                        <Form.Item labelCol={{ span: 8 }} label="신차등급키">
                          45112
                        </Form.Item>
                      </Col>
                      <Col md={6}>
                        <Form.Item labelCol={{ span: 8 }} label="차종키">
                          11
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
                        <Form.Item labelCol={{ span: 8 }} label="용도">
                          일반
                        </Form.Item>
                      </Col>
                      <Col md={6}>
                        <Form.Item labelCol={{ span: 8 }} label="차형">
                          SUV
                        </Form.Item>
                      </Col>
                      <Col md={6}>
                        <Form.Item labelCol={{ span: 8 }} label="배기량">
                          1995
                        </Form.Item>
                      </Col>
                      <Col md={6}>
                        <Form.Item labelCol={{ span: 8 }} label="연료">
                          디젤
                        </Form.Item>
                      </Col>
                      <Col md={6}>
                        <Form.Item labelCol={{ span: 8 }} label="변속기">
                          오토
                        </Form.Item>
                      </Col>
                      <Col md={6}>
                        <Form.Item labelCol={{ span: 8 }} label="연비">
                          13.8km/L(2등급)
                        </Form.Item>
                      </Col>
                      <Col md={6}>
                        <Form.Item labelCol={{ span: 8 }} label="신차가격">
                          110
                        </Form.Item>
                      </Col>
                      <Col md={6}>
                        <Form.Item labelCol={{ span: 8 }} label="출고가격">
                          110
                        </Form.Item>
                      </Col>
                      <Col md={6}>
                        <Form.Item labelCol={{ span: 8 }} label="승차인원">
                          110
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
                          2/3/4
                        </Form.Item>
                      </Col>
                      <Col md={8}>
                        <Form.Item labelCol={{ span: 12 }} label="파워트레인보증기간(년)">
                          110
                        </Form.Item>
                      </Col>
                      <Col md={8}>
                        <Form.Item labelCol={{ span: 12 }} label="파워트레인보증주행거리(km)">
                          110
                        </Form.Item>
                      </Col>
                      <Col md={8}>
                        <Form.Item labelCol={{ span: 12 }} label="배출가스보증기간(년)">
                          110
                        </Form.Item>
                      </Col>
                      <Col md={8}>
                        <Form.Item labelCol={{ span: 12 }} label="배출가스보증주행거리(km)">
                          110
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
                        <Form.Item labelCol={{ span: 8 }} label="전장(mm)">
                          1890
                        </Form.Item>
                      </Col>
                      <Col md={6}>
                        <Form.Item labelCol={{ span: 8 }} label="전폭(mm)">
                          1890
                        </Form.Item>
                      </Col>
                      <Col md={6}>
                        <Form.Item labelCol={{ span: 8 }} label="전고(mm)">
                          1890
                        </Form.Item>
                      </Col>
                      <Col md={6}>
                        <Form.Item labelCol={{ span: 8 }} label="축간거리(mm)">
                          1890
                        </Form.Item>
                      </Col>
                    </Row>
                  )
                },

                {
                  content: (
                    <Flex gap={32} style={{ marginLeft: 40 }}>
                      <Text type="secondary">모델 대표이미지</Text>
                      <div style={{ width: 500, height: 210, background: '#D9D9D9' }}></div>
                    </Flex>
                  )
                }
              ]}
            />
            <SectionWrapper
              children={[
                {
                  content: (
                    <Row gutter={[0, 10]} align={'middle'}>
                      <Col md={6}>
                        <Form.Item label="운영 상태">
                          <Select
                            defaultValue={'1'}
                            options={[
                              { value: '1', label: '선택' },
                              { value: '2', label: '선택2' }
                            ]}
                          />
                        </Form.Item>
                      </Col>
                      <Col md={18}>
                        <Form.Item labelCol={{ span: 4 }} label="옵션메모">
                          <Input />
                        </Form.Item>
                      </Col>
                    </Row>
                  )
                }
              ]}
            />
            <Form.Item style={{ textAlign: 'center' }}>
              <CustomButton round size="large" type="primary" htmlType="submit">
                수정하기
              </CustomButton>
            </Form.Item>
          </Flex>
        </Form>
      )}
    </Flex>
  );
};

export default Body;
