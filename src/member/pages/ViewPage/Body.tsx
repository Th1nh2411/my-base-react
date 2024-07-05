import styles from './style.module.css';
import { ButtonProps } from 'antd/lib/button';
import { Flex, Form, Row, Col, DatePicker, Tabs, TabsProps, Button, Modal } from 'antd';
import Text from 'antd/es/typography/Text';
import classNames from 'classnames';
import Title from 'antd/es/typography/Title';
import SectionWrapper from '@base/components/SectionWrapper';
import Link from 'antd/es/typography/Link';
import { DeleteFilled, DownOutlined, EditFilled } from '@ant-design/icons';
import DetailContract from './components/DetailContract';
import LicenseInformation from './components/LicenseInformation';
import DetailConsultation from './components/DetailConsultation';
import { useState } from 'react';
import SendKakao from './dialogs/SendKakao';
import DeleteCustomer from './dialogs/DeleteCustomer';
import ContractItem from './components/ContractItem';
const cx = classNames.bind(styles);
type Props = {};

const Body = (props: Props) => {
  const [openKakao, setOpenKakao] = useState(false);
  const [openDeleteCustomer, setOpenDeleteCustomer] = useState(false);
  const items: TabsProps['items'] = [
    {
      key: '1',
      label: '계약 내역',
      children: <DetailContract />
    },
    {
      key: '2',
      label: '면허 정보',
      children: <LicenseInformation />
    },
    {
      key: '3',
      label: '상담 내역',
      children: <DetailConsultation />
    }
  ];
  return (
    <Form
      colon={false}
      labelCol={{
        span: 8
      }}
    >
      <Modal width={1000} footer={false} centered open={openKakao} onCancel={() => setOpenKakao(false)}>
        <SendKakao />
      </Modal>
      <Modal width={700} footer={false} centered open={openDeleteCustomer} onCancel={() => setOpenDeleteCustomer(false)}>
        <DeleteCustomer />
      </Modal>
      <Flex vertical gap={25}>
        <SectionWrapper
          titleAction={
            <Flex gap={10}>
              <Button onClick={() => setOpenDeleteCustomer(true)}>고객 삭제 처리</Button>
              <Button onClick={() => setOpenKakao(true)}>카카오톡 알림 발송</Button>
            </Flex>
          }
          title="고객 기본정보"
          action={
            <Button style={{ color: 'var(--secondary-color)' }} type="text" icon={<EditFilled />}>
              수정하기
            </Button>
          }
          children={[
            {
              colNum: 3,
              content: (
                <Row gutter={[0, 10]}>
                  <Col md={4}>
                    <Form.Item labelCol={{ span: 12 }} label="고객번호">
                      82447
                    </Form.Item>
                  </Col>
                  <Col md={4}>
                    <Form.Item labelCol={{ span: 12 }} label="이름">
                      박세라
                    </Form.Item>
                  </Col>
                  <Col md={4}>
                    <Form.Item labelCol={{ span: 12 }} label="성별">
                      여자
                    </Form.Item>
                  </Col>
                </Row>
              )
            },
            {
              colNum: 3,
              content: (
                <Row gutter={[0, 10]}>
                  <Col md={6}>
                    <Form.Item label="전화번호">010-8359-5789</Form.Item>
                  </Col>
                  <Col md={6}>
                    <Form.Item label="고객 이메일">sarah3012@naver.com</Form.Item>
                  </Col>
                  <Col md={6}>
                    <Form.Item label="고객 주소">서울특별시 중구 다산로29길 30</Form.Item>
                  </Col>
                  <Col md={6}></Col>
                  <Col md={6}>
                    <Form.Item label="고객 등록일시">2024-06-24 17:08</Form.Item>
                  </Col>
                  <Col md={6}>
                    <Form.Item label="최종 담당자">홍길동</Form.Item>
                  </Col>
                </Row>
              )
            },
            {
              content: (
                <Flex gap={22}>
                  <Flex vertical gap={5}>
                    <Text style={{ whiteSpace: 'nowrap' }} type="secondary">
                      현재 계약정보
                    </Text>
                    <Link>총 2건</Link>
                  </Flex>
                  <SectionWrapper
                    wrapperStyle={{ borderColor: 'var(--border-strong-color)' }}
                    size="small"
                    children={[
                      {
                        content: (
                          <Row gutter={[0, 10]}>
                            <Col md={24}>
                              <Form.Item labelCol={{ span: '' }} label="계약번호">
                                <Flex gap={15}>
                                  <Text>82647</Text>
                                  <Link underline>상세보기</Link>
                                </Flex>
                              </Form.Item>
                            </Col>
                            <Col md={12}>
                              <Form.Item labelCol={{ span: '' }} label="차량번호">
                                125하1563
                              </Form.Item>
                            </Col>
                            <Col md={12}>
                              <Form.Item labelCol={{ span: '' }} label="계약 상태">
                                예약완료
                              </Form.Item>
                            </Col>
                          </Row>
                        )
                      }
                    ]}
                  />
                  <SectionWrapper
                    wrapperStyle={{ borderColor: 'var(--border-strong-color)' }}
                    size="small"
                    children={[
                      {
                        content: (
                          <Row gutter={[0, 10]}>
                            <Col md={24}>
                              <Form.Item labelCol={{ span: '' }} label="계약번호">
                                <Flex gap={15}>
                                  <Text>82647</Text>
                                  <Link underline>상세보기</Link>
                                </Flex>
                              </Form.Item>
                            </Col>
                            <Col md={12}>
                              <Form.Item labelCol={{ span: '' }} label="차량번호">
                                125하1563
                              </Form.Item>
                            </Col>
                            <Col md={12}>
                              <Form.Item labelCol={{ span: '' }} label="계약 상태">
                                예약완료
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

        <SectionWrapper
          title="고객 결제정보"
          children={[
            {
              content: (
                <Row gutter={32}>
                  <Col md={3}>
                    <p style={{ textAlign: 'end' }}>
                      <Text type="secondary">등록 결제수단</Text>
                    </p>
                  </Col>
                  <Col md={21}>
                    <Flex vertical gap={20}>
                      <SectionWrapper
                        action={
                          <Flex gap={5}>
                            <Button style={{ color: 'var(--secondary-color)' }} type="text" icon={<DeleteFilled />}>
                              수정하기
                            </Button>
                            <Button style={{ color: 'var(--secondary-color)' }} type="text" icon={<EditFilled />}>
                              수정하기
                            </Button>
                          </Flex>
                        }
                        wrapperStyle={{ backgroundColor: '#F1F7FF', border: 'none' }}
                        size="small"
                        children={[
                          {
                            content: (
                              <Row gutter={[0, 10]}>
                                <Col md={8}>
                                  <Form.Item labelCol={{ span: '' }} label="카드">
                                    우리MASTER 53873300****329*
                                  </Form.Item>
                                </Col>
                                <Col md={7}>
                                  <Form.Item labelCol={{ span: '' }} label="개인/법인">
                                    개인카드
                                  </Form.Item>
                                </Col>
                                <Col md={7}>
                                  <Form.Item labelCol={{ span: '' }} label="카드사">
                                    우리MASTER
                                  </Form.Item>
                                </Col>
                                <Col md={6}>
                                  <Form.Item labelCol={{ span: '' }} label="카드 종류">
                                    신용카드
                                  </Form.Item>
                                </Col>
                                <Col md={6}>
                                  <Form.Item labelCol={{ span: '' }} label="카드 유효기간">
                                    2028-09
                                  </Form.Item>
                                </Col>
                                <Col md={6}>
                                  <Form.Item labelCol={{ span: '' }} label="카드 상태">
                                    승인(기본결제수단)
                                  </Form.Item>
                                </Col>
                                <Col md={6}>
                                  <Form.Item labelCol={{ span: '' }} label="PG">
                                    토스페이먼츠
                                  </Form.Item>
                                </Col>
                                <Col md={6}>
                                  <Form.Item labelCol={{ span: '' }} label="카드 등록일시">
                                    2024-06-24 17:13
                                  </Form.Item>
                                </Col>
                              </Row>
                            )
                          }
                        ]}
                      />
                      <SectionWrapper
                        action={
                          <Flex gap={5}>
                            <Button style={{ color: 'var(--secondary-color)' }} type="text" icon={<DeleteFilled />}>
                              수정하기
                            </Button>
                            <Button style={{ color: 'var(--secondary-color)' }} type="text" icon={<EditFilled />}>
                              수정하기
                            </Button>
                          </Flex>
                        }
                        wrapperStyle={{ backgroundColor: '#F1F7FF', border: 'none' }}
                        size="small"
                        children={[
                          {
                            content: (
                              <Row gutter={[0, 10]}>
                                <Col md={6}>
                                  <Form.Item labelCol={{ span: '' }} label="계좌">
                                    YYY-ZZZZZZZC-XXX
                                  </Form.Item>
                                </Col>
                                <Col md={6}>
                                  <Form.Item labelCol={{ span: '' }} label="개인/법인">
                                    개인계좌
                                  </Form.Item>
                                </Col>
                                <Col md={6}>
                                  <Form.Item labelCol={{ span: '' }} label="은행">
                                    우리은행
                                  </Form.Item>
                                </Col>
                                <Col md={6}></Col>
                                <Col md={6}>
                                  <Form.Item labelCol={{ span: '' }} label="계좌 등록일시">
                                    2024-06-24 17:13
                                  </Form.Item>
                                </Col>
                              </Row>
                            )
                          }
                        ]}
                      />
                    </Flex>
                  </Col>
                </Row>
              )
            },
            {
              content: (
                <Row gutter={32}>
                  <Col md={3}>
                    <p style={{ textAlign: 'end' }}>
                      <Text type="secondary">계약건 결제정보ㅣ</Text>
                      <Link>총 2건</Link>
                    </p>
                  </Col>
                  <Col md={21}>
                    <Flex vertical gap={20}>
                      <ContractItem />
                      <ContractItem />
                    </Flex>
                  </Col>
                </Row>
              )
            }
          ]}
        />
        <div>
          <Title type="secondary" level={5} style={{ marginLeft: 22, marginBottom: 10 }}>
            ㅣ기타 상세정보
          </Title>
          <Tabs defaultActiveKey="1" items={items} tabBarStyle={{ marginLeft: 28 }} />
        </div>
      </Flex>
    </Form>
  );
};

export default Body;
