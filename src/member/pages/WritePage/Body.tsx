import { useState } from 'react';
import styles from './style.module.css';
import { SearchOutlined } from '@ant-design/icons';
import { Input, Button, Flex, Form, Select, Row, Col, DatePicker, Divider } from 'antd';
import Text from 'antd/es/typography/Text';
import classNames from 'classnames';
import Title from 'antd/es/typography/Title';
import SectionWrapper from '@base/components/SectionWrapper';
import TextArea from 'antd/es/input/TextArea';
import Link from 'antd/es/typography/Link';
import CustomButton from '@base/components/CustomButton/CustomButton';
import RegisterPaymentMethod from './RegisterPaymentMethod';
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
      <Flex vertical gap={20}>
        <SectionWrapper
          title="계약 등록"
          children={[
            {
              colNum: 3,
              content: (
                <>
                  <div style={{ marginBottom: 20 }}>
                    <Text type="danger">* </Text>
                    <Link>기본 정보</Link>
                  </div>
                  <Row gutter={[20, 24]}>
                    <Col md={6}>
                      <Form.Item label="이름">
                        <Input style={{ maxWidth: 200 }} />
                      </Form.Item>
                    </Col>
                    <Col md={6}>
                      <Form.Item label="성별">
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
                      <Form.Item label="전화번호">
                        <Flex gap={5} align="center">
                          <Input style={{ maxWidth: 40 }} />
                          <Text>-</Text>
                          <Input style={{ maxWidth: 100 }} />
                          <Text>-</Text>
                          <Input style={{ maxWidth: 100 }} />
                        </Flex>
                      </Form.Item>
                    </Col>
                    <Col md={6}></Col>
                    <Col md={6}>
                      <Form.Item label="고객 이메일">
                        <Input style={{ maxWidth: 200 }} />
                      </Form.Item>
                    </Col>
                    <Col md={7}>
                      <Form.Item labelCol={{ span: 5 }} label="고객 주소">
                        <Flex gap={10}>
                          <Button
                            type="text"
                            icon={<SearchOutlined />}
                            iconPosition="end"
                            style={{ backgroundColor: 'var(--bg-color)', borderColor: 'var(--border-color)' }}
                            onClick={() => setOpenCustomerRegister(!openCustomerRegister)}
                          >
                            <Text style={{ width: 80, textAlign: 'start' }}>검색</Text>
                          </Button>
                          <Input style={{ maxWidth: 200 }} />
                        </Flex>
                      </Form.Item>
                    </Col>
                    <Col md={8}>
                      <Form.Item label="최종 담당자">
                        <Input style={{ maxWidth: 200 }} />
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
                    <Text type="danger">* </Text>
                    <Link>계약 정보 불러오기</Link>
                  </div>
                  <RegisterPaymentMethod />
                </Flex>
              )
            },
            {
              colNum: 3,
              content: (
                <>
                  <div style={{ marginBottom: 20 }}>
                    <Text type="danger">* </Text>
                    <Link>면허 등록</Link>
                  </div>
                  <Row gutter={[20, 24]}>
                    <Col md={8}>
                      <Form.Item label="면허 종류">
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
                      <Form.Item label="면허 발급일">
                        <DatePicker />
                      </Form.Item>
                    </Col>
                    <Col md={8}></Col>
                    <Col md={8}>
                      <Form.Item label="면허 번호">
                        <Flex gap={10}>
                          <Input style={{ maxWidth: 100 }} />
                          <Input style={{ maxWidth: 200 }} />
                        </Flex>
                      </Form.Item>
                    </Col>
                    <Col md={8}>
                      <Form.Item label="적성 만료일">
                        <DatePicker />
                      </Form.Item>
                    </Col>
                    <Col md={8}>
                      <Form.Item label="면허 사진">
                        <Link underline>파일첨부</Link>
                      </Form.Item>
                    </Col>
                  </Row>
                </>
              )
            },
            {
              colNum: 3,
              content: (
                <>
                  <div style={{ marginBottom: 20 }}>
                    <Text type="danger">* </Text>
                    <Link>상담 등록</Link>
                  </div>
                  <Row gutter={[20, 24]}>
                    <Col md={6}>
                      <Form.Item label="상담 분류">
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
                      <Form.Item label="관리자">
                        <Input style={{ maxWidth: 200 }} />
                      </Form.Item>
                    </Col>
                    <Col md={6}>
                      <Form.Item label="상담 일자">
                        <DatePicker />
                      </Form.Item>
                    </Col>
                    <Col md={6}></Col>

                    <Col md={22}>
                      <Form.Item labelCol={{ span: '' }} label="상담 내용">
                        <TextArea rows={4} />
                      </Form.Item>
                    </Col>
                  </Row>
                </>
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
