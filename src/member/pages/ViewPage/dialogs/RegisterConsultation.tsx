import CustomButton from '@base/components/CustomButton/CustomButton';
import SectionWrapper from '@base/components/SectionWrapper';
import { Col, DatePicker, Flex, Form, Input, Radio, Row, Select } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import Title from 'antd/es/typography/Title';
import * as React from 'react';

export interface IRegisterConsultationProps {}

export default function RegisterConsultation(props: IRegisterConsultationProps) {
  return (
    <Flex vertical align="center" gap={20} style={{ padding: 30 }}>
      <Form colon={false} style={{ width: '100%' }}>
        <Title level={5} style={{ color: 'var(--primary-color)', marginBottom: 15, marginLeft: 20 }}>
          상담 등록
        </Title>
        <SectionWrapper
          wrapperStyle={{ backgroundColor: '#F9F9F9', border: 'none' }}
          children={[
            {
              colNum: 1,
              content: (
                <Flex vertical gap={30}>
                  <Row gutter={20}>
                    <Col md={8}>
                      <Form.Item label="계약번호">
                        <Input disabled style={{ maxWidth: 150 }} />
                      </Form.Item>
                    </Col>
                    <Col md={8}>
                      <Form.Item label="고객번호">
                        <Input disabled style={{ maxWidth: 150 }} />
                      </Form.Item>
                    </Col>
                    <Col md={8}>
                      <Form.Item label="발송 항목">
                        <Input disabled style={{ maxWidth: 150 }} />
                      </Form.Item>
                    </Col>
                  </Row>

                  <Row gutter={20}>
                    <Col md={8}>
                      <Form.Item label="예약 발송">
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
                      <Form.Item label="발송 항목">
                        <Input disabled style={{ maxWidth: 150 }} />
                      </Form.Item>
                    </Col>
                  </Row>
                  <Form.Item label="발송 내용">
                    <TextArea rows={8} />
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
  );
}
