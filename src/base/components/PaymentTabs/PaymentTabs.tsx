import styles from './PaymentTabs.module.css';
import classNames from 'classnames/bind';
import { CaretUpFilled } from '@ant-design/icons';
import CustomTabs from '@base/components/CustomTabs/CustomTabs';
import { Flex, Form, Row, Col, DatePicker, Tabs, TabsProps, Button, Divider } from 'antd';
import Text from 'antd/es/typography/Text';
import SectionWrapper from '../SectionWrapper';
import Link from 'antd/es/typography/Link';
const cx = classNames.bind(styles);

export interface IPaymentTabsProps {}

export default function PaymentTabs(props: IPaymentTabsProps) {
  const paymentTabs: TabsProps['items'] = [
    {
      key: '1',
      label: '보증금',
      children: (
        <Form colon={false}>
          <Flex align="center" gap={10} style={{ paddingInline: 32, marginBottom: 10 }}>
            <Text strong style={{ color: 'var(--primary-color)' }}>
              총 1건
            </Text>
            <Button type="text" icon={<CaretUpFilled />} iconPosition="end">
              <Text type="secondary">닫기</Text>
            </Button>
          </Flex>
          <SectionWrapper
            wrapperStyle={{ backgroundColor: 'var(--bg-color)', border: 'none' }}
            size="small"
            children={[
              {
                content: (
                  <Row gutter={[0, 0]}>
                    <Col md={4}>
                      <Form.Item label="계약 번호">82447</Form.Item>
                    </Col>
                    <Col md={4}>
                      <Form.Item label="결제번호">187230</Form.Item>
                    </Col>
                    <Col md={4}>
                      <Form.Item label="결제일시">2024-04-24 18:02</Form.Item>
                    </Col>
                    <Col md={4}>
                      <Form.Item label="결제담당자">홍길동</Form.Item>
                    </Col>
                  </Row>
                )
              },
              {
                content: (
                  <Row gutter={[0, 0]}>
                    <Col md={8}>
                      <Form.Item label="결제수단">카드 우리MASTER 53873300****329*</Form.Item>
                    </Col>
                    <Col md={4}>
                      <Form.Item label="결제금액">150,000</Form.Item>
                    </Col>
                  </Row>
                )
              }
            ]}
          />
        </Form>
      )
    },
    {
      key: '2',
      label: '선수금',
      children: (
        <Form colon={false}>
          <Flex align="center" gap={10} style={{ paddingInline: 32, marginBottom: 10 }}>
            <Text strong style={{ color: 'var(--primary-color)' }}>
              총 1건
            </Text>
            <Button type="text" icon={<CaretUpFilled />} iconPosition="end">
              <Text type="secondary">닫기</Text>
            </Button>
          </Flex>
          <SectionWrapper
            wrapperStyle={{ backgroundColor: 'var(--bg-color)', border: 'none' }}
            size="small"
            children={[
              {
                content: (
                  <Row gutter={[0, 0]}>
                    <Col md={4}>
                      <Form.Item label="계약 번호">82447</Form.Item>
                    </Col>
                    <Col md={4}>
                      <Form.Item label="결제번호">187230</Form.Item>
                    </Col>
                    <Col md={4}>
                      <Form.Item label="결제일시">2024-04-24 18:02</Form.Item>
                    </Col>
                    <Col md={4}>
                      <Form.Item label="결제담당자">홍길동</Form.Item>
                    </Col>
                  </Row>
                )
              },
              {
                content: (
                  <Row gutter={[0, 0]}>
                    <Col md={8}>
                      <Form.Item label="결제수단">카드 우리MASTER 53873300****329*</Form.Item>
                    </Col>
                    <Col md={4}>
                      <Form.Item label="결제금액">150,000</Form.Item>
                    </Col>
                  </Row>
                )
              }
            ]}
          />
        </Form>
      )
    },
    {
      key: '3',
      label: '월요금',
      children: (
        <Form colon={false}>
          <Flex align="center" gap={10} style={{ paddingInline: 32, marginBottom: 10 }}>
            <Text strong style={{ color: 'var(--primary-color)' }}>
              총 2건
            </Text>
            <Button type="text" icon={<CaretUpFilled />} iconPosition="end">
              <Text type="secondary">닫기</Text>
            </Button>
          </Flex>
          <Flex vertical gap={20}>
            <SectionWrapper
              wrapperStyle={{ backgroundColor: 'var(--bg-color)', border: 'none' }}
              size="small"
              children={[
                {
                  content: (
                    <Row gutter={[0, 0]}>
                      <Col md={4}>
                        <Form.Item label="계약 번호">82447</Form.Item>
                      </Col>
                      <Col md={4}>
                        <Form.Item label="결제번호">187230</Form.Item>
                      </Col>
                      <Col md={4}>
                        <Form.Item label="회차">
                          <Link>2회차</Link>
                        </Form.Item>
                      </Col>
                      <Col md={4}>
                        <Form.Item label="결제일시">2024-07-26 18:02</Form.Item>
                      </Col>
                    </Row>
                  )
                },
                {
                  content: (
                    <Row gutter={[0, 0]}>
                      <Col md={4}>
                        <Form.Item label="결제담당자">홍길동</Form.Item>
                      </Col>
                      <Col md={8}>
                        <Form.Item label="결제수단">
                          <Flex gap={10}>
                            <Text>카드</Text>
                            <Text>우리MASTER 53673300****329*</Text>
                          </Flex>
                        </Form.Item>
                      </Col>
                      <Col md={6}>
                        <Form.Item label="결제금액">
                          <Flex gap={10}>
                            <Text>150,000</Text>
                            <Link>자동결제</Link>
                          </Flex>
                        </Form.Item>
                      </Col>
                    </Row>
                  )
                }
              ]}
            />
            <SectionWrapper
              wrapperStyle={{ backgroundColor: 'var(--bg-color)', border: 'none' }}
              size="small"
              children={[
                {
                  content: (
                    <Row gutter={[0, 0]}>
                      <Col md={4}>
                        <Form.Item label="계약 번호">82447</Form.Item>
                      </Col>
                      <Col md={4}>
                        <Form.Item label="결제번호">187230</Form.Item>
                      </Col>
                      <Col md={4}>
                        <Form.Item label="회차">
                          <Link>2회차</Link>
                        </Form.Item>
                      </Col>
                      <Col md={4}>
                        <Form.Item label="결제일시">2024-07-26 18:02</Form.Item>
                      </Col>
                    </Row>
                  )
                },
                {
                  content: (
                    <Row gutter={[0, 0]}>
                      <Col md={4}>
                        <Form.Item label="결제담당자">홍길동</Form.Item>
                      </Col>
                      <Col md={8}>
                        <Form.Item label="결제수단">
                          <Flex gap={10}>
                            <Text>카드</Text>
                            <Text>우리MASTER 53673300****329*</Text>
                          </Flex>
                        </Form.Item>
                      </Col>
                      <Col md={6}>
                        <Form.Item label="결제금액">
                          <Flex gap={10}>
                            <Text>150,000</Text>
                            <Link>자동결제</Link>
                          </Flex>
                        </Form.Item>
                      </Col>
                    </Row>
                  )
                }
              ]}
            />
          </Flex>
        </Form>
      )
    }
  ];
  return <CustomTabs defaultActiveKey="1" items={paymentTabs} tabBarStyle={{ marginLeft: 35 }} />;
}
