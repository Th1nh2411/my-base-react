import styles from './MaintenanceHistory.module.css';
import { CaretUpOutlined, EditFilled } from '@ant-design/icons';
import SectionWrapper from '@base/components/SectionWrapper';
import { Button, Col, ConfigProvider, DatePicker, Divider, Flex, Form, Input, Modal, Row } from 'antd';
import Text from 'antd/es/typography/Text';
import Title from 'antd/es/typography/Title';
import Link from 'antd/es/typography/Link';
import { useState } from 'react';
import classNames from 'classnames/bind';
import TextArea from 'antd/es/input/TextArea';
import CustomButton from '@base/components/CustomButton/CustomButton';
const { RangePicker } = DatePicker;
const cx = classNames.bind(styles);

export interface IMainternanceHistoryProps {}

export default function MaintenanceHistory(props: IMainternanceHistoryProps) {
  const [openPhotoInfo, setOpenPhotoInfo] = useState(false);
  const [openDetailInfo, setOpenDetailInfo] = useState(false);
  return (
    <>
      <Modal width={1200} footer={false} centered open={openDetailInfo} onCancel={() => setOpenDetailInfo(false)}>
        <ConfigProvider
          theme={{
            components: {
              Form: { itemMarginBottom: 28, labelColonMarginInlineEnd: 40 },
              Divider: {
                colorSplit: 'var(--border-color)'
              }
            }
          }}
        >
          <Flex vertical align="center" gap={20} style={{ padding: 30 }}>
            <Form
              labelCol={{
                span: 3
              }}
              colon={false}
              style={{ width: '100%' }}
            >
              <Title level={5} style={{ color: 'var(--primary-color)', marginBottom: 15, marginLeft: 20 }}>
                정비 내역 등록
              </Title>
              <SectionWrapper
                wrapperStyle={{ backgroundColor: '#F9F9F9', border: 'none' }}
                children={[
                  {
                    colNum: 1,
                    content: (
                      <Flex vertical gap={30}>
                        <Form.Item required label="관리자">
                          <Input style={{ width: 180 }} />
                        </Form.Item>
                        <Form.Item required label="정비 기간">
                          <RangePicker />
                        </Form.Item>
                        <Form.Item label="정비소">
                          <Input style={{ width: 180 }} />
                        </Form.Item>
                        <Form.Item label="정비 내용">
                          <TextArea />
                        </Form.Item>
                      </Flex>
                    )
                  },
                  {
                    colNum: 1,
                    content: (
                      <Flex vertical gap={30}>
                        <Form.Item label="부품 가격">
                          <Input style={{ width: 180 }} />
                        </Form.Item>
                        <Form.Item label="공임료" rules={[{ type: 'email' }, { required: true }]}>
                          <Input style={{ width: 180 }} />
                        </Form.Item>
                        <Form.Item label="총 비용">
                          <Input style={{ width: 180 }} />
                        </Form.Item>
                      </Flex>
                    )
                  },
                  {
                    colNum: 1,
                    content: (
                      <Flex vertical gap={30}>
                        <Form.Item label="부품 가격">
                          <Link underline>파일 첨부</Link>
                        </Form.Item>
                        <Form.Item label="공임료" rules={[{ type: 'email' }, { required: true }]}>
                          <Link underline>파일 첨부</Link>
                        </Form.Item>
                      </Flex>
                    )
                  }
                ]}
              />
            </Form>
            <CustomButton round size="large" type="primary">
              등록하기
            </CustomButton>
          </Flex>
        </ConfigProvider>
      </Modal>
      <Modal width={'auto'} footer={false} centered open={openPhotoInfo} onCancel={() => setOpenPhotoInfo(false)}>
        <div style={{ padding: '20px 60px 15px' }}>
          <Title style={{ marginBottom: 20 }} level={5}>
            차량 125하1561
          </Title>
          <Flex gap={28}>
            <Text style={{ width: '10%', textAlign: 'end', whiteSpace: 'nowrap' }} type="secondary">
              정비 기간
            </Text>
            <Text>2024-03-12 18:20 ~ 2024-03-19 15:55</Text>
          </Flex>
        </div>
        <Divider style={{ margin: 0 }} />
        <Flex vertical gap={28} style={{ padding: '25px 60px 40px' }}>
          <Flex gap={28}>
            <Text style={{ width: '10%', textAlign: 'end', whiteSpace: 'nowrap' }} type="secondary">
              정비 전
            </Text>
            <div style={{ width: 480, height: 200, backgroundColor: '#D9D9D9' }}></div>
          </Flex>
          <Flex gap={28}>
            <Text style={{ width: '10%', textAlign: 'end', whiteSpace: 'nowrap' }} type="secondary">
              정비 후
            </Text>
            <div style={{ width: 480, height: 200, backgroundColor: '#D9D9D9' }}></div>
          </Flex>
        </Flex>
      </Modal>
      <Flex vertical gap={32}>
        <Flex align="center" gap={12} style={{ paddingInline: '18px' }}>
          <Title type="secondary" level={5}>
            <span style={{ color: 'var(--primary-color)' }}>총 3대</span> ㅣ 정비 내역
          </Title>
          <Button type="text" icon={<CaretUpOutlined />} iconPosition="end">
            닫기
          </Button>
          <Button onClick={() => setOpenDetailInfo(true)}>정비 등록</Button>
        </Flex>
        <SectionWrapper
          action={
            <Button style={{ color: 'var(--secondary-color)' }} type="text" icon={<EditFilled />}>
              수정하기
            </Button>
          }
          wrapperStyle={{ border: '1px solid #B4B4B4' }}
          children={[
            {
              content: (
                <Row gutter={[0, 10]}>
                  <Col md={6}>
                    <Form.Item label="관리자">관리자(홍윤기)</Form.Item>
                  </Col>
                  <Col md={8}>
                    <Form.Item label="정비 기간">2024-03-12 18:20 ~ 2024-03-19 15:55</Form.Item>
                  </Col>
                </Row>
              )
            },
            {
              content: (
                <Flex vertical gap={10}>
                  <Row gutter={[0, 10]}>
                    <Col md={6}>
                      <Form.Item label="정비소">자체</Form.Item>
                    </Col>
                    <Col md={6}>
                      <Form.Item label="정비 기간">배터리 점검</Form.Item>
                    </Col>
                  </Row>
                  <Row gutter={[0, 10]}>
                    <Col md={6}>
                      <Form.Item label="정비 기간">0원</Form.Item>
                    </Col>
                    <Col md={6}>
                      <Form.Item label="정비 기간">0원</Form.Item>
                    </Col>
                    <ConfigProvider theme={{ components: { Form: { labelColor: '#1677ff' } } }}>
                      <Col md={6}>
                        <Form.Item label="총 비용">0원</Form.Item>
                      </Col>
                    </ConfigProvider>
                  </Row>
                </Flex>
              )
            },
            {
              content: (
                <div style={{ paddingInline: 30 }}>
                  <Flex gap={60}>
                    <Flex gap={10}>
                      <Text type="secondary">정비 전</Text>
                      <Text type="secondary">정비 후</Text>
                      <Link onClick={() => setOpenPhotoInfo(true)} underline>
                        상세보기
                      </Link>
                    </Flex>
                  </Flex>
                </div>
              )
            }
          ]}
        />
        <SectionWrapper
          action={
            <Button style={{ color: 'var(--secondary-color)' }} type="text" icon={<EditFilled />}>
              수정하기
            </Button>
          }
          wrapperStyle={{ border: '1px solid #B4B4B4' }}
          children={[
            {
              content: (
                <Row gutter={[0, 10]}>
                  <Col md={6}>
                    <Form.Item label="관리자">관리자(홍윤기)</Form.Item>
                  </Col>
                  <Col md={8}>
                    <Form.Item label="정비 기간">2024-03-12 18:20 ~ 2024-03-19 15:55</Form.Item>
                  </Col>
                </Row>
              )
            },
            {
              content: (
                <Flex vertical gap={10}>
                  <Row gutter={[0, 10]}>
                    <Col md={6}>
                      <Form.Item label="정비소">자체</Form.Item>
                    </Col>
                    <Col md={6}>
                      <Form.Item label="정비 기간">배터리 점검</Form.Item>
                    </Col>
                  </Row>
                  <Row gutter={[0, 10]}>
                    <Col md={6}>
                      <Form.Item label="정비 기간">0원</Form.Item>
                    </Col>
                    <Col md={6}>
                      <Form.Item label="정비 기간">0원</Form.Item>
                    </Col>
                    <ConfigProvider theme={{ components: { Form: { labelColor: '#1677ff' } } }}>
                      <Col md={6}>
                        <Form.Item label="총 비용">0원</Form.Item>
                      </Col>
                    </ConfigProvider>
                  </Row>
                </Flex>
              )
            },
            {
              content: (
                <div style={{ paddingInline: 30 }}>
                  <Flex gap={60}>
                    <Flex gap={10}>
                      <Text type="secondary">정비 전</Text>
                      <Text type="secondary">정비 후</Text>
                      <Link onClick={() => setOpenPhotoInfo(true)} underline>
                        상세보기
                      </Link>
                    </Flex>
                  </Flex>
                </div>
              )
            }
          ]}
        />
      </Flex>
    </>
  );
}
