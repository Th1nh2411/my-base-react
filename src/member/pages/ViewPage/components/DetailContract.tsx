import styles from '../style.module.css';
import { CaretUpOutlined, EditFilled } from '@ant-design/icons';
import SectionWrapper from '@base/components/SectionWrapper';
import { Button, Col, ConfigProvider, DatePicker, Divider, Flex, Form, Input, Modal, Radio, Row, Select } from 'antd';
import Text from 'antd/es/typography/Text';
import Title from 'antd/es/typography/Title';
import Link from 'antd/es/typography/Link';
import { useState } from 'react';
import classNames from 'classnames/bind';
import TextArea from 'antd/es/input/TextArea';
import CustomButton from '@base/components/CustomButton/CustomButton';
const { RangePicker } = DatePicker;
const cx = classNames.bind(styles);

export interface IDetailContractProps {}

export default function DetailContract(props: IDetailContractProps) {
  return (
    <>
      <SectionWrapper
        children={[
          {
            content: (
              <Flex vertical gap={12}>
                <Flex justify="space-between">
                  <Flex align="center" gap={12} style={{ paddingInline: '18px' }}>
                    <Title type="secondary" level={5}>
                      <span style={{ color: 'var(--primary-color)' }}>총 3대</span> ㅣ 정비 내역
                    </Title>
                    <Button type="text" icon={<CaretUpOutlined />} iconPosition="end">
                      닫기
                    </Button>
                  </Flex>
                  <Button onClick={() => {}}>계약 등록</Button>
                </Flex>
                <SectionWrapper
                  action={
                    <Button style={{ color: 'var(--secondary-color)' }} type="text" icon={<EditFilled />}>
                      수정하기
                    </Button>
                  }
                  wrapperStyle={{ borderColor: 'var(--border-strong-color)' }}
                  size="small"
                  children={[
                    {
                      content: (
                        <Row gutter={[0, 10]}>
                          <Col md={4}>
                            <Form.Item labelCol={{ span: '' }} label="계약번호">
                              <Link>82647</Link>
                            </Form.Item>
                          </Col>
                          <Col md={4}>
                            <Form.Item labelCol={{ span: '' }} label="담당자">
                              홍길동
                            </Form.Item>
                          </Col>
                          <Col md={6}>
                            <Form.Item labelCol={{ span: '' }} label="계약 일시">
                              <Flex gap={32}>
                                <Text>2024-06-25 16:45</Text>
                                <Link underline>상세보기</Link>
                              </Flex>
                            </Form.Item>
                          </Col>
                          <Col md={10}></Col>
                          <Col md={6}>
                            <Form.Item labelCol={{ span: '' }} label="차량 번호">
                              125하1561
                            </Form.Item>
                          </Col>
                          <Col md={6}>
                            <Form.Item labelCol={{ span: '' }} label="차량 모델">
                              X3 20i XDrive M Spt
                            </Form.Item>
                          </Col>
                          <Col md={6}>
                            <Form.Item labelCol={{ span: '' }} label="계약 상태">
                              이용중
                            </Form.Item>
                          </Col>
                          <Col md={6}>
                            <Form.Item labelCol={{ span: '' }} label="계약 기간">
                              2024-06-26 18:00 ~ 2024-06-30 12:00
                            </Form.Item>
                          </Col>
                        </Row>
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
                  wrapperStyle={{ borderColor: 'var(--border-strong-color)' }}
                  size="small"
                  children={[
                    {
                      content: (
                        <Row gutter={[0, 10]}>
                          <Col md={4}>
                            <Form.Item labelCol={{ span: '' }} label="계약번호">
                              <Link>82647</Link>
                            </Form.Item>
                          </Col>
                          <Col md={4}>
                            <Form.Item labelCol={{ span: '' }} label="담당자">
                              홍길동
                            </Form.Item>
                          </Col>
                          <Col md={6}>
                            <Form.Item labelCol={{ span: '' }} label="계약 일시">
                              <Flex gap={32}>
                                <Text>2024-06-25 16:45</Text>
                                <Link underline>상세보기</Link>
                              </Flex>
                            </Form.Item>
                          </Col>
                          <Col md={10}></Col>
                          <Col md={6}>
                            <Form.Item labelCol={{ span: '' }} label="차량 번호">
                              125하1561
                            </Form.Item>
                          </Col>
                          <Col md={6}>
                            <Form.Item labelCol={{ span: '' }} label="차량 모델">
                              X3 20i XDrive M Spt
                            </Form.Item>
                          </Col>
                          <Col md={6}>
                            <Form.Item labelCol={{ span: '' }} label="계약 상태">
                              이용중
                            </Form.Item>
                          </Col>
                          <Col md={6}>
                            <Form.Item labelCol={{ span: '' }} label="계약 기간">
                              2024-06-26 18:00 ~ 2024-06-30 12:00
                            </Form.Item>
                          </Col>
                        </Row>
                      )
                    }
                  ]}
                />
              </Flex>
            )
          }
        ]}
      />
    </>
  );
}
