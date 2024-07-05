import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './style.module.css';
import { ButtonProps } from 'antd/lib/button';
import { SearchOutlined } from '@ant-design/icons';
import { Input, Button, Flex, Radio, Form, Select, Row, Col, Typography, DatePicker, Divider, Modal } from 'antd';
import Text from 'antd/es/typography/Text';
import classNames from 'classnames/bind';
import Title from 'antd/es/typography/Title';
import SectionWrapper from '@base/components/SectionWrapper';
import TextArea from 'antd/es/input/TextArea';
import Link from 'antd/es/typography/Link';
import CustomerRegister from '@base/components/CustomerRegister/CustomerRegister';
import VehicleRegister from '@base/components/VehicleRegister/VehicleRegister';
import CustomButton from '@base/components/CustomButton/CustomButton';
import CustomSelect from '@base/components/CustomSelect/CustomSelect';
const cx = classNames.bind(styles);
const { RangePicker } = DatePicker;
type Props = {};

const Body = (props: Props) => {
  const [openCustomerRegister, setOpenCustomerRegister] = useState<boolean>(false);
  const [openVehicleRegister, setOpenVehicleRegister] = useState<boolean>(false);
  return (
    <Form
      colon={false}
      labelCol={{
        span: 6
      }}
    >
      <Modal width={'auto'} footer={false} centered open={openCustomerRegister} onCancel={() => setOpenCustomerRegister(false)}>
        <CustomerRegister />
      </Modal>
      <Modal width={1200} footer={false} centered open={openVehicleRegister} onCancel={() => setOpenVehicleRegister(false)}>
        <VehicleRegister />
      </Modal>
      <Flex vertical gap={20}>
        <SectionWrapper
          title="계약 등록"
          children={[
            {
              colNum: 3,
              content: (
                <>
                  <div style={{ marginBottom: 20 }}>
                    <Link>기본 정보</Link>
                  </div>
                  <Row gutter={[20, 24]}>
                    <Col md={6}>
                      <Form.Item label="담당자">
                        <Input style={{ maxWidth: 200 }} />
                      </Form.Item>
                    </Col>
                    <Col md={6}>
                      <Form.Item label="계약 일시">
                        <DatePicker />
                      </Form.Item>
                    </Col>
                    <Col md={6}>
                      <Form.Item label="계약 기간">
                        <RangePicker />
                      </Form.Item>
                    </Col>
                    <Col md={6}></Col>
                    <Col md={6}>
                      <Form.Item label="대여 지점">
                        <Select
                          defaultValue={1}
                          style={{ maxWidth: 120 }}
                          options={[
                            { value: 1, label: '선택' },
                            { value: 2, label: '2' }
                          ]}
                        />
                      </Form.Item>
                    </Col>
                    <Col md={6}>
                      <Form.Item label="반납 지점">
                        <Select
                          defaultValue={1}
                          style={{ maxWidth: 120 }}
                          options={[
                            { value: 1, label: '선택' },
                            { value: 2, label: '2' }
                          ]}
                        />
                      </Form.Item>
                    </Col>
                  </Row>
                </>
              )
            },
            {
              colNum: 3,
              content: (
                <Flex vertical gap={20}>
                  <div style={{}}>
                    <Link>계약 정보 불러오기</Link>
                  </div>
                  <Flex gap={20} align="center">
                    <Text type="secondary">고객 등록</Text>
                    <Button
                      type="text"
                      icon={<SearchOutlined />}
                      iconPosition="end"
                      style={{ backgroundColor: 'var(--bg-color)', borderColor: 'var(--border-color)' }}
                      onClick={() => setOpenCustomerRegister(!openCustomerRegister)}
                    >
                      <Text style={{ width: 80, textAlign: 'start' }}>검색</Text>
                    </Button>
                  </Flex>
                  <SectionWrapper
                    size="small"
                    wrapperStyle={{ borderColor: '#b4b4b4' }}
                    children={[
                      {
                        content: (
                          <Row gutter={[20, 24]}>
                            <Col md={6}>
                              <Form.Item
                                labelCol={{
                                  span: 8
                                }}
                                label="계약자 이름"
                              >
                                -
                              </Form.Item>
                            </Col>
                            <Col md={6}>
                              <Form.Item
                                labelCol={{
                                  span: 8
                                }}
                                label="계약자 전화번호"
                              >
                                -
                              </Form.Item>
                            </Col>
                            <Col md={6}>
                              <Form.Item
                                labelCol={{
                                  span: 8
                                }}
                                label="계약자 주소"
                              >
                                -
                              </Form.Item>
                            </Col>
                            <Col md={6}>
                              <Form.Item
                                labelCol={{
                                  span: 8
                                }}
                                label="계약자 이메일"
                              >
                                -
                              </Form.Item>
                            </Col>
                          </Row>
                        )
                      }
                    ]}
                  />
                  <Flex gap={20} align="center">
                    <Text type="secondary">차량 등록</Text>
                    <Button
                      type="text"
                      icon={<SearchOutlined />}
                      iconPosition="end"
                      style={{ backgroundColor: 'var(--bg-color)', borderColor: 'var(--border-color)' }}
                      onClick={() => setOpenVehicleRegister(!openVehicleRegister)}
                    >
                      <Text style={{ width: 80, textAlign: 'start' }}>검색</Text>
                    </Button>
                  </Flex>
                  <SectionWrapper
                    size="small"
                    wrapperStyle={{ borderColor: '#b4b4b4' }}
                    children={[
                      {
                        content: (
                          <Row gutter={[20, 24]}>
                            <Col md={6}>
                              <Form.Item
                                labelCol={{
                                  span: 8
                                }}
                                label="차량"
                              >
                                -
                              </Form.Item>
                            </Col>
                            <Col md={6}>
                              <Form.Item
                                labelCol={{
                                  span: 8
                                }}
                                label="차량 번호"
                              >
                                -
                              </Form.Item>
                            </Col>
                          </Row>
                        )
                      }
                    ]}
                  />
                </Flex>
              )
            },
            {
              colNum: 3,
              content: (
                <Flex vertical gap={20}>
                  <div style={{}}>
                    <Link>결제 정보 등록하기</Link>
                  </div>
                  <CustomSelect
                    type="primary"
                    placeholder="수단 추가"
                    style={{ width: 120 }}
                    options={[
                      { value: 1, label: 'NH 농협' },
                      { value: 2, label: 'NH 농협2' }
                    ]}
                  />
                  <SectionWrapper
                    size="small"
                    wrapperStyle={{ borderColor: '#b4b4b4' }}
                    children={[
                      {
                        content: (
                          <Row gutter={[20, 24]}>
                            <Col md={6}>
                              <Form.Item
                                labelCol={{
                                  span: 8
                                }}
                                label="결제수단 카드"
                              >
                                우리MASTER 53873300****329*
                              </Form.Item>
                            </Col>
                          </Row>
                        )
                      }
                    ]}
                  />
                  <Row gutter={[20, 24]}>
                    <Col md={8}>
                      <Form.Item label="총 결제금액">
                        <Input style={{ maxWidth: 200 }} />
                      </Form.Item>
                    </Col>
                    <Col md={16}></Col>
                    <Col md={8}>
                      <Form.Item label="보증금">
                        <Input style={{ maxWidth: 200 }} />
                      </Form.Item>
                    </Col>
                    <Col md={8}>
                      <Form.Item label="결제일시">
                        <Input disabled style={{ maxWidth: 200 }} />
                      </Form.Item>
                    </Col>
                    <Col md={8}>
                      <Form.Item label="결제수단">
                        <Select
                          defaultValue={1}
                          style={{ maxWidth: 120 }}
                          options={[
                            { value: 1, label: '선택' },
                            { value: 2, label: '2' }
                          ]}
                        />
                      </Form.Item>
                    </Col>
                    <Col md={8}>
                      <Form.Item label="선수금">
                        <Input style={{ maxWidth: 200 }} />
                      </Form.Item>
                    </Col>
                    <Col md={8}>
                      <Form.Item label="결제일시">
                        <Input disabled style={{ maxWidth: 200 }} />
                      </Form.Item>
                    </Col>
                    <Col md={8}>
                      <Form.Item label="결제수단">
                        <Select
                          defaultValue={1}
                          style={{ maxWidth: 120 }}
                          options={[
                            { value: 1, label: '선택' },
                            { value: 2, label: '2' }
                          ]}
                        />
                      </Form.Item>
                    </Col>
                    <Col md={8}>
                      <Form.Item label="월요금">
                        <Input style={{ maxWidth: 200 }} />
                      </Form.Item>
                    </Col>
                    <Col md={8}>
                      <Form.Item label="결제일시(매월)">
                        <Input disabled style={{ maxWidth: 200 }} />
                      </Form.Item>
                    </Col>
                    <Col md={8}>
                      <Form.Item label="결제수단(매월)">
                        <Select
                          defaultValue={1}
                          style={{ maxWidth: 120 }}
                          options={[
                            { value: 1, label: '선택' },
                            { value: 2, label: '2' }
                          ]}
                        />
                      </Form.Item>
                    </Col>
                  </Row>
                </Flex>
              )
            }
          ]}
        />

        <Form.Item style={{ textAlign: 'center' }}>
          <CustomButton round size="large" type="primary" htmlType="submit">
            등록하기
          </CustomButton>
        </Form.Item>
      </Flex>
    </Form>
  );
};

export default Body;
