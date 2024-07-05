import styles from '../style.module.css';
import { CaretDownOutlined, CaretUpOutlined, EditFilled } from '@ant-design/icons';
import SectionWrapper from '@base/components/SectionWrapper';
import { Button, Col, ConfigProvider, DatePicker, Divider, Flex, Form, Input, Modal, Row } from 'antd';
import Text from 'antd/es/typography/Text';
import Title from 'antd/es/typography/Title';
import Link from 'antd/es/typography/Link';
import { useState } from 'react';
import classNames from 'classnames/bind';
import TextArea from 'antd/es/input/TextArea';
import RegisterConsultation from '../dialogs/RegisterConsultation';
const { RangePicker } = DatePicker;
const cx = classNames.bind(styles);

export interface IDetailConsultationProps {}

export default function DetailConsultation(props: IDetailConsultationProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [openDetailInfo, setOpenDetailInfo] = useState(false);
  return (
    <>
      <Modal width={1200} footer={false} centered open={openDetailInfo} onCancel={() => setOpenDetailInfo(false)}>
        <RegisterConsultation />
      </Modal>
      <SectionWrapper
        children={[
          {
            content: (
              <Flex vertical gap={12}>
                <Flex justify="space-between">
                  <Flex align="center" gap={12} style={{ paddingInline: '18px' }}>
                    <Title type="secondary" level={5}>
                      <span style={{ color: 'var(--primary-color)' }}>총 1건</span> ㅣ 상담 내역
                    </Title>
                    <Button
                      type="text"
                      icon={isExpanded ? <CaretUpOutlined /> : <CaretDownOutlined />}
                      iconPosition="end"
                      onClick={() => setIsExpanded(!isExpanded)}
                    >
                      닫기
                    </Button>
                  </Flex>
                  <Button onClick={() => setOpenDetailInfo(true)}>상담 등록</Button>
                </Flex>
                {isExpanded && (
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
                          <Flex vertical gap={10}>
                            <Row>
                              <Col md={4}>
                                <Form.Item labelCol={{ span: '' }} label="상담 일자">
                                  24-06-22 11:40
                                </Form.Item>
                              </Col>
                              <Col md={4}>
                                <Form.Item labelCol={{ span: '' }} label="상담 분류">
                                  차량문의
                                </Form.Item>
                              </Col>
                              <Col md={6}>
                                <Form.Item labelCol={{ span: '' }} label="관리자">
                                  홍길동
                                </Form.Item>
                              </Col>
                            </Row>
                            <Flex vertical gap={5}>
                              <Text type="secondary">상담 내용</Text>
                              <TextArea rows={3} />
                            </Flex>
                          </Flex>
                        )
                      }
                    ]}
                  />
                )}
              </Flex>
            )
          }
        ]}
      />
    </>
  );
}
