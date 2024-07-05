import { DownOutlined, EditFilled } from '@ant-design/icons';
import PaymentTabs from '@base/components/PaymentTabs/PaymentTabs';
import SectionWrapper from '@base/components/SectionWrapper';
import { Button, Col, Flex, Form, Row } from 'antd';
import Link from 'antd/es/typography/Link';
import * as React from 'react';

export interface IContractItemProps {}

export default function ContractItem(props: IContractItemProps) {
  const [openContractPayment, setContractPayment] = React.useState<boolean>(false);
  return (
    <SectionWrapper
      wrapperStyle={{ borderColor: 'var(--border-strong-color)' }}
      size="small"
      children={[
        {
          content: (
            <>
              <Button className="top-right-corner-sm" style={{ color: 'var(--secondary-color)' }} type="text" icon={<EditFilled />}>
                수정하기
              </Button>
              <Flex justify="space-between" align="end">
                <Row gutter={[0, 10]} style={{ width: '100%' }}>
                  <Col md={24}>
                    <Form.Item labelCol={{ span: '' }} label="계약번호">
                      <Link>82647</Link>
                    </Form.Item>
                  </Col>
                  <Col md={6}>
                    <Form.Item labelCol={{ span: '' }} label="총 결제금액">
                      1,500,000원
                    </Form.Item>
                  </Col>
                  <Col md={6}>
                    <Form.Item labelCol={{ span: '' }} label="첫 결제생성일">
                      2024-06-24 17:25
                    </Form.Item>
                  </Col>
                </Row>
                <Button
                  type="text"
                  style={{ color: 'var(--secondary-color)' }}
                  icon={<DownOutlined />}
                  iconPosition="end"
                  onClick={() => setContractPayment(!openContractPayment)}
                >
                  결제 발생건
                </Button>
              </Flex>
              {openContractPayment && <PaymentTabs />}
            </>
          )
        }
      ]}
    />
  );
}
