import styles from '../style.module.css';
import { CaretUpOutlined, EditFilled } from '@ant-design/icons';
import SectionWrapper from '@base/components/SectionWrapper';
import { Button, Col, ConfigProvider, DatePicker, Divider, Flex, Form, Input, Modal, Row, Select } from 'antd';
import Text from 'antd/es/typography/Text';
import Title from 'antd/es/typography/Title';
import Link from 'antd/es/typography/Link';
import { useState } from 'react';
import classNames from 'classnames/bind';
import TextArea from 'antd/es/input/TextArea';
import CustomButton from '@base/components/CustomButton/CustomButton';
const { RangePicker } = DatePicker;
const cx = classNames.bind(styles);

export interface ILicenseInformationProps {}

export default function LicenseInformation(props: ILicenseInformationProps) {
  const [openDetailInfo, setOpenDetailInfo] = useState(false);
  return (
    <>
      <Modal width={800} footer={false} centered open={openDetailInfo} onCancel={() => setOpenDetailInfo(false)}>
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
                면허 등록
              </Title>
              <SectionWrapper
                wrapperStyle={{ backgroundColor: '#F9F9F9', border: 'none' }}
                children={[
                  {
                    colNum: 1,
                    content: (
                      <Flex vertical gap={30}>
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
                        <Form.Item label="면허 번호">
                          <Flex gap={16}>
                            <Input style={{ maxWidth: 60 }} />
                            <Input style={{ maxWidth: 240 }} />
                          </Flex>
                        </Form.Item>
                        <Form.Item label="면허 발급일">
                          <Input disabled style={{ maxWidth: 200 }} />
                        </Form.Item>
                        <Form.Item label="적성 만료일">
                          <Input disabled style={{ maxWidth: 200 }} />
                        </Form.Item>
                        <Form.Item label="면허 사진">
                          <Link underline> 파일첨부</Link>
                        </Form.Item>
                      </Flex>
                    )
                  }
                ]}
              />
            </Form>
            <CustomButton round size="large" type="primary">
              발송하기
            </CustomButton>
          </Flex>
        </ConfigProvider>
      </Modal>

      <SectionWrapper
        action={
          <Flex gap={5}>
            <Button onClick={() => setOpenDetailInfo(true)}>면허 등록</Button>
            <Button style={{ color: 'var(--secondary-color)' }} type="text" icon={<EditFilled />}>
              수정하기
            </Button>
          </Flex>
        }
        children={[
          {
            content: (
              <Flex vertical gap={10}>
                <Row gutter={[0, 10]}>
                  <Col md={4}>
                    <Form.Item labelCol={{ span: 12 }} label="면허 상태">
                      승인
                    </Form.Item>
                  </Col>
                  <Col md={4}>
                    <Form.Item labelCol={{ span: 12 }} label="면허 종류">
                      1종 보통
                    </Form.Item>
                  </Col>
                  <Col md={4}>
                    <Form.Item labelCol={{ span: 12 }} label="면허 번호">
                      <Flex gap={10}>
                        <Text>22</Text>
                        <Text>1234547890</Text>
                      </Flex>
                    </Form.Item>
                  </Col>
                </Row>
                <Row>
                  <Col md={4}>
                    <Form.Item labelCol={{ span: 12 }} label="면허 발급일">
                      2016-06-01
                    </Form.Item>
                  </Col>
                  <Col md={6}>
                    <Form.Item labelCol={{ span: 12 }} label="적성 만료일">
                      2026-12-31
                    </Form.Item>
                  </Col>
                  <Col md={6}>
                    <Form.Item labelCol={{ span: 12 }} label="면허증/운전경력증명">
                      <Link underline>attatched_file</Link>
                    </Form.Item>
                  </Col>
                  <Col md={6}>
                    <Form.Item labelCol={{ span: 12 }} label="면허 등록일시">
                      2026-06-24
                    </Form.Item>
                  </Col>
                </Row>
              </Flex>
            )
          }
        ]}
      />
    </>
  );
}
