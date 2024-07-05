import { SearchOutlined } from '@ant-design/icons';
import { Button, Col, ConfigProvider, DatePicker, Divider, Form, Input, Modal, Radio, Row } from 'antd';
import Title from 'antd/es/typography/Title';
import Text from 'antd/es/typography/Text';
import TextArea from 'antd/es/input/TextArea';
import Link from 'antd/es/typography/Link';
import { useState } from 'react';
import ContractRegister from '@base/components/ContractRegister/ContractRegister';

export interface IDetailAccidentRegisterProps {}

export default function DetailAccidentRegister(props: IDetailAccidentRegisterProps) {
  const [openRegisterContract, setOpenRegisterContract] = useState<boolean>(false);
  return (
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
      <Modal width={1200} footer={false} centered open={openRegisterContract} onCancel={() => setOpenRegisterContract(false)}>
        <ContractRegister />
      </Modal>
      <div style={{ padding: 30 }}>
        <Title level={5} style={{ color: 'var(--primary-color)', marginBottom: 20, marginLeft: 20 }}>
          사고 내역 등록
        </Title>
        <Form
          labelCol={{
            span: 6
          }}
          colon={false}
          style={{ borderRadius: 24, backgroundColor: '#F9F9F9' }}
        >
          <Row style={{ padding: '20px 40px 0' }}>
            <Col md={12}>
              <Form.Item required label="사고 처리 상태">
                <Radio.Group>
                  <Radio value={1}>접수</Radio>
                  <Radio value={2}>완결</Radio>
                  <Radio value={3}>보류</Radio>
                </Radio.Group>
              </Form.Item>
            </Col>
            <Col md={12}>
              <Form.Item required label="사고 발생일시">
                <DatePicker style={{ marginLeft: 12 }} showTime showMinute showHour />
              </Form.Item>
            </Col>
            <Col md={12}>
              <Form.Item required label="계약번호">
                <Button
                  type="text"
                  icon={<SearchOutlined />}
                  iconPosition="end"
                  style={{ backgroundColor: 'var(--bg-color)', borderColor: 'var(--border-color)' }}
                  onClick={() => setOpenRegisterContract(true)}
                >
                  <Text style={{ width: 80, textAlign: 'start' }}>검색</Text>
                </Button>
              </Form.Item>
            </Col>
            <Col md={12}>
              <Form.Item label="운전자">
                <Input style={{ width: 180 }} />
              </Form.Item>
            </Col>
          </Row>
          <Divider style={{ margin: 0 }} />
          <div style={{ padding: '20px  40px 0' }}>
            <Form.Item
              labelCol={{
                span: 3
              }}
              label="부품 가격"
            >
              <TextArea
                rows={10}
                defaultValue={
                  '사고 발생 장소:\n사고 내용:\n차량 파손 정보:\n인적 피해:\n과실 비율:\n보험사:\n보험사 담당자:\n보험사 담당자 연락처:\n보험사 사고 접수번호:\n기타:'
                }
              />
            </Form.Item>
            <Form.Item
              labelCol={{
                span: 3
              }}
              label="부품 가격"
            >
              <TextArea
                rows={10}
                defaultValue={
                  '차량 번호:\n차량 모델:\n차량 파손 정보:\n인적 피해:\n과실 비율:\n차량 소유주:\n보험사:\n보험사 사고 접수번호:\n보험사 담당자:\n보험사 담당자 연락처:'
                }
              />
            </Form.Item>
          </div>
          <Divider />
          <div style={{ padding: '0 40px 5px' }}>
            <Form.Item
              labelCol={{
                span: 3
              }}
              label="첨부파일"
            >
              <Link underline>첨부하기</Link>
            </Form.Item>
          </div>
        </Form>
      </div>
    </ConfigProvider>
  );
}
