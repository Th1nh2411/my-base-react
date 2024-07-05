import styles from './style.module.css';
import { ButtonProps } from 'antd/lib/button';
import { Flex, Form, Row, Col, DatePicker, Tabs, TabsProps, Button, Divider } from 'antd';
import Text from 'antd/es/typography/Text';
import classNames from 'classnames/bind';
import SectionWrapper from '@base/components/SectionWrapper';
import { CaretUpFilled, DownOutlined, EditFilled, UpOutlined } from '@ant-design/icons';
import TextArea from 'antd/es/input/TextArea';
import { useState } from 'react';
import CustomTabs from '@base/components/CustomTabs/CustomTabs';
import Paragraph from 'antd/es/typography/Paragraph';
import Link from 'antd/es/typography/Link';
import PaymentTabs from '../../../base/components/PaymentTabs/PaymentTabs';
const cx = classNames.bind(styles);
type Props = {};

const Body = (props: Props) => {
  const [openDetailPayment, setOpenDetailPayment] = useState<boolean>(false);
  const [openDetailContract, setOpenDetailContract] = useState<boolean>(false);
  const [openDetailCustomer, setOpenDetailCustomer] = useState<boolean>(false);

  return (
    <Flex vertical gap={25}>
      <Form colon={false}>
        <SectionWrapper
          title="계약 상세정보"
          children={[
            {
              content: (
                <Flex vertical gap={20}>
                  <SectionWrapper
                    action={
                      <Button style={{ color: 'var(--secondary-color)' }} type="text" icon={<EditFilled />}>
                        수정하기
                      </Button>
                    }
                    wrapperStyle={{ borderColor: '#b4b4b4' }}
                    children={[
                      {
                        content: (
                          <Row gutter={[0, 10]}>
                            <Col md={6}>
                              <Form.Item label="계약 번호">82647</Form.Item>
                            </Col>
                            <Col md={6}>
                              <Form.Item label="담당자">홍길동</Form.Item>
                            </Col>
                            <Col md={6}>
                              <Form.Item label="계약 일시">2024-06-24 17:25</Form.Item>
                            </Col>
                          </Row>
                        )
                      }
                    ]}
                  />
                  <SectionWrapper
                    wrapperStyle={{ borderColor: '#b4b4b4' }}
                    children={[
                      {
                        content: (
                          <>
                            <Flex justify="space-between" align="end">
                              <Row align="middle" gutter={[0, 10]} style={{ width: '100%' }}>
                                <Col md={5}>
                                  <Form.Item label="차량">X3 20i XDrive M Spt</Form.Item>
                                </Col>
                                <Col md={5}>
                                  <Form.Item label="차량 번호">125하1563</Form.Item>
                                </Col>
                                <Col md={6} offset={6}></Col>
                                <Col md={5}>
                                  <Form.Item label="계약 상태">이용중</Form.Item>
                                </Col>
                                <Col md={6}>
                                  <Form.Item labelCol={{ span: 6 }} label="계약 기간">
                                    2024-06-26 18:00 ~ 2024-06-30 12:00
                                  </Form.Item>
                                </Col>
                                <Col md={5}>
                                  <Form.Item label="대여 지점">서울 BMW 삼성전시장</Form.Item>
                                </Col>
                                <Col md={5}>
                                  <Form.Item label="반납 지점">서울 BMW 삼성전시장</Form.Item>
                                </Col>
                              </Row>
                              <Button type="text" onClick={() => setOpenDetailContract(!openDetailContract)}>
                                {!openDetailContract ? <DownOutlined style={{ fontSize: 18 }} /> : <UpOutlined style={{ fontSize: 18 }} />}
                              </Button>
                            </Flex>
                            {openDetailContract && (
                              <>
                                <Divider />
                                <div className={cx('info-wrapper', 'active')}>
                                  <Row gutter={[0, 10]}>
                                    <Col md={6}>
                                      <Form.Item label="제조사명">현대</Form.Item>
                                    </Col>
                                    <Col md={6}>
                                      <Form.Item label="대표모델명">싼타페</Form.Item>
                                    </Col>
                                    <Col md={6}>
                                      <Form.Item label="대표등급명">R2.0 2WD</Form.Item>
                                    </Col>
                                    <Col md={6}>
                                      <Form.Item label="세부등급명">프리미엄</Form.Item>
                                    </Col>
                                    <Col md={6}>
                                      <Form.Item label="차량 색상">블루</Form.Item>
                                    </Col>
                                    <Col md={6}>
                                      <Form.Item label="차량 등급">R2.0 2WD 프리미엄</Form.Item>
                                    </Col>
                                    <Col md={6}>
                                      <Form.Item label="차량 번호">125하1561</Form.Item>
                                    </Col>
                                    <Col md={6}></Col>
                                    <Col md={6}>
                                      <Form.Item label="차량 등록일">23-03-31</Form.Item>
                                    </Col>
                                    <Col md={6}>
                                      <Form.Item label="DB 등록일">23-04-26</Form.Item>
                                    </Col>
                                    <Col md={6}>
                                      <Form.Item label="차량 운영상태">운영</Form.Item>
                                    </Col>
                                  </Row>
                                </div>
                                <SectionWrapper
                                  wrapperStyle={{ marginTop: 20, backgroundColor: 'var(--bg-color)', border: 'none' }}
                                  children={[
                                    {
                                      colNum: 3,
                                      content: (
                                        <Row gutter={[0, 10]}>
                                          <Col md={6}>
                                            <Form.Item label="등록증차명">싼타페(SANTAFE)</Form.Item>
                                          </Col>
                                          <Col md={6}>
                                            <Form.Item label="차대번호">KMHS261BBLU221466</Form.Item>
                                          </Col>
                                          <Col md={8}>
                                            <Form.Item labelCol={{ span: 12 }} label="국산/외산여부(1:국산 2:수입)">
                                              국산
                                            </Form.Item>
                                          </Col>
                                          <Col md={4}></Col>
                                          <Col md={6}>
                                            <Form.Item label="제조사명">현대</Form.Item>
                                          </Col>
                                          <Col md={6}>
                                            <Form.Item label="차량 모델">M Spt</Form.Item>
                                          </Col>
                                          <Col md={6}>
                                            <Form.Item label="차종">320i</Form.Item>
                                          </Col>
                                          <Col md={6}>
                                            <Form.Item label="연식">2016 / 6</Form.Item>
                                          </Col>
                                        </Row>
                                      )
                                    },
                                    {
                                      colNum: 3,
                                      content: (
                                        <Row gutter={[0, 10]}>
                                          <Col md={8}>
                                            <Form.Item label="대표모델명">싼타페</Form.Item>
                                          </Col>
                                          <Col md={8}>
                                            <Form.Item label="세부모델명">신형 싼타페</Form.Item>
                                          </Col>
                                          <Col md={8}></Col>
                                          <Col md={8}>
                                            <Form.Item label="대표등급명">R2.0 2WD</Form.Item>
                                          </Col>
                                          <Col md={8}>
                                            <Form.Item label="세부등급명">프리미엄</Form.Item>
                                          </Col>
                                          <Col md={8}>
                                            <Form.Item label="신차등급명">R2.0 2WD 프리미엄</Form.Item>
                                          </Col>
                                        </Row>
                                      )
                                    },
                                    {
                                      colNum: 4,
                                      content: (
                                        <Row gutter={[0, 10]}>
                                          <Col md={6}>
                                            <Form.Item labelCol={{ span: 8 }} label="제조사키">
                                              5
                                            </Form.Item>
                                          </Col>
                                          <Col md={6}>
                                            <Form.Item labelCol={{ span: 8 }} label="대표모델키">
                                              110
                                            </Form.Item>
                                          </Col>
                                          <Col md={6}>
                                            <Form.Item labelCol={{ span: 8 }} label="세부모델키">
                                              2666
                                            </Form.Item>
                                          </Col>
                                          <Col md={6}>
                                            <Form.Item labelCol={{ span: 8 }} label="대표등급키">
                                              11778
                                            </Form.Item>
                                          </Col>
                                          <Col md={6}>
                                            <Form.Item labelCol={{ span: 8 }} label="세부등급키">
                                              35622
                                            </Form.Item>
                                          </Col>
                                          <Col md={6}>
                                            <Form.Item labelCol={{ span: 8 }} label="신차등급키">
                                              45112
                                            </Form.Item>
                                          </Col>
                                          <Col md={6}>
                                            <Form.Item labelCol={{ span: 8 }} label="차종키">
                                              11
                                            </Form.Item>
                                          </Col>
                                        </Row>
                                      )
                                    },
                                    {
                                      colNum: 4,
                                      content: (
                                        <Row gutter={[0, 10]}>
                                          <Col md={6}>
                                            <Form.Item labelCol={{ span: 8 }} label="용도">
                                              일반
                                            </Form.Item>
                                          </Col>
                                          <Col md={6}>
                                            <Form.Item labelCol={{ span: 8 }} label="차형">
                                              SUV
                                            </Form.Item>
                                          </Col>
                                          <Col md={6}>
                                            <Form.Item labelCol={{ span: 8 }} label="배기량">
                                              1995
                                            </Form.Item>
                                          </Col>
                                          <Col md={6}>
                                            <Form.Item labelCol={{ span: 8 }} label="연료">
                                              디젤
                                            </Form.Item>
                                          </Col>
                                          <Col md={6}>
                                            <Form.Item labelCol={{ span: 8 }} label="변속기">
                                              오토
                                            </Form.Item>
                                          </Col>
                                          <Col md={6}>
                                            <Form.Item labelCol={{ span: 8 }} label="연비">
                                              13.8km/L(2등급)
                                            </Form.Item>
                                          </Col>
                                          <Col md={6}>
                                            <Form.Item labelCol={{ span: 8 }} label="신차가격">
                                              110
                                            </Form.Item>
                                          </Col>
                                          <Col md={6}>
                                            <Form.Item labelCol={{ span: 8 }} label="출고가격">
                                              110
                                            </Form.Item>
                                          </Col>
                                          <Col md={6}>
                                            <Form.Item labelCol={{ span: 8 }} label="승차인원">
                                              110
                                            </Form.Item>
                                          </Col>
                                        </Row>
                                      )
                                    },
                                    {
                                      colNum: 3,
                                      content: (
                                        <Row gutter={[0, 10]}>
                                          <Col md={8}>
                                            <Form.Item labelCol={{ span: 12 }} label="기본보증기간(년)">
                                              2/3/4
                                            </Form.Item>
                                          </Col>
                                          <Col md={8}>
                                            <Form.Item labelCol={{ span: 12 }} label="파워트레인보증기간(년)">
                                              110
                                            </Form.Item>
                                          </Col>
                                          <Col md={8}>
                                            <Form.Item labelCol={{ span: 12 }} label="파워트레인보증주행거리(km)">
                                              110
                                            </Form.Item>
                                          </Col>
                                          <Col md={8}>
                                            <Form.Item labelCol={{ span: 12 }} label="배출가스보증기간(년)">
                                              110
                                            </Form.Item>
                                          </Col>
                                          <Col md={8}>
                                            <Form.Item labelCol={{ span: 12 }} label="배출가스보증주행거리(km)">
                                              110
                                            </Form.Item>
                                          </Col>
                                        </Row>
                                      )
                                    },
                                    {
                                      colNum: 4,
                                      content: (
                                        <Row gutter={[0, 10]}>
                                          <Col md={6}>
                                            <Form.Item labelCol={{ span: 8 }} label="전장(mm)">
                                              1890
                                            </Form.Item>
                                          </Col>
                                          <Col md={6}>
                                            <Form.Item labelCol={{ span: 8 }} label="전폭(mm)">
                                              1890
                                            </Form.Item>
                                          </Col>
                                          <Col md={6}>
                                            <Form.Item labelCol={{ span: 8 }} label="전고(mm)">
                                              1890
                                            </Form.Item>
                                          </Col>
                                          <Col md={6}>
                                            <Form.Item labelCol={{ span: 8 }} label="축간거리(mm)">
                                              1890
                                            </Form.Item>
                                          </Col>
                                        </Row>
                                      )
                                    },

                                    {
                                      content: (
                                        <Row gutter={[0, 20]}>
                                          <Col md={24}>
                                            <Form.Item labelCol={{ span: 4 }} label="모델 대표이미지">
                                              <div style={{ width: 500, height: 210, background: '#D9D9D9' }}></div>
                                            </Form.Item>
                                          </Col>
                                          <Col md={24}>
                                            <Form.Item labelCol={{ span: 4 }} label="옵션메모">
                                              <Paragraph style={{ maxWidth: 550 }}>
                                                멀티미디어 라이트 플러스 - 7인치 디스플레이 오디오 + 후방 모니터(주행 중 후방 모니터 포함) +
                                                하이패스 시스템 멀티미디어 내비 플러스1 - 8인치 내비게이션, 블루링크
                                              </Paragraph>
                                            </Form.Item>
                                          </Col>
                                        </Row>
                                      )
                                    }
                                  ]}
                                />
                              </>
                            )}
                          </>
                        )
                      }
                    ]}
                  />
                  <SectionWrapper
                    wrapperStyle={{ borderColor: '#b4b4b4' }}
                    children={[
                      {
                        content: (
                          <>
                            <Flex justify="space-between">
                              <Row gutter={[0, 10]} style={{ width: '100%' }}>
                                <Col md={5}>
                                  <Form.Item label="계약자 이름">박세라</Form.Item>
                                </Col>
                                <Col md={6}>
                                  <Form.Item label="계약자 전화번호">010-8359-5789</Form.Item>
                                </Col>
                                <Col md={6}>
                                  <Form.Item label="계약자 주소">서울특별시 중구 다산로29길 30</Form.Item>
                                </Col>
                                <Col md={6}>
                                  <Form.Item label="계약자 이메일">sarah3012@naver.com</Form.Item>
                                </Col>
                              </Row>
                              <Button type="text" onClick={() => setOpenDetailCustomer(!openDetailCustomer)}>
                                {!openDetailCustomer ? <DownOutlined style={{ fontSize: 18 }} /> : <UpOutlined style={{ fontSize: 18 }} />}
                              </Button>
                            </Flex>
                            {openDetailCustomer && (
                              <>
                                <Divider />
                                <div className={cx('info-wrapper')}>
                                  <Flex gap={32}>
                                    <Text>
                                      <Text strong>박세라</Text>
                                      <Text type="secondary"> (고객번호:12345)</Text>
                                    </Text>
                                    <Flex gap={20}>
                                      <Text type="secondary">고객 성별</Text>
                                      <Text>여자</Text>
                                    </Flex>
                                  </Flex>
                                  <Row gutter={[0, 10]}>
                                    <Col md={6}>
                                      <Form.Item label="고객 전화번호">010-8359-5789</Form.Item>
                                    </Col>
                                    <Col md={6}>
                                      <Form.Item label="고객 이메일">sarah3012@naver.com</Form.Item>
                                    </Col>
                                    <Col md={6}>
                                      <Form.Item label="고객 주소">서울특별시 중구 다산로29길 30</Form.Item>
                                    </Col>
                                    <Col md={6}>
                                      <Form.Item label="고객 가입일시">2024-06-24 17:08</Form.Item>
                                    </Col>
                                  </Row>
                                </div>
                                <div className={cx('info-wrapper')}>
                                  <Flex gap={32}>
                                    <Flex gap={20}>
                                      <Text type="secondary">면허 상태</Text>
                                      <Text>승인</Text>
                                    </Flex>
                                    <Flex gap={20}>
                                      <Text type="secondary">면허 종류</Text>
                                      <Text>1종 보통</Text>
                                    </Flex>
                                    <Flex gap={20}>
                                      <Text type="secondary">면허 번호</Text>
                                      <Text>22</Text>
                                      <Text>1234567890</Text>
                                    </Flex>
                                  </Flex>
                                  <Flex gap={32}>
                                    <Flex gap={20}>
                                      <Text type="secondary">면허 발급일</Text>
                                      <Text>2016-06-01</Text>
                                    </Flex>
                                    <Flex gap={20}>
                                      <Text type="secondary">적성 만료일</Text>
                                      <Text>2026-12-31</Text>
                                    </Flex>
                                    <Flex gap={20}>
                                      <Text type="secondary">면허증/운전경력증명</Text>
                                      <Link underline>attatched_file</Link>
                                    </Flex>
                                  </Flex>
                                  <Flex gap={20}>
                                    <Text type="secondary">면허 등록일시</Text>
                                    <Text>2024-06-24</Text>
                                  </Flex>
                                </div>
                              </>
                            )}
                          </>
                        )
                      }
                    ]}
                  />
                </Flex>
              )
            }
          ]}
        />
      </Form>

      <SectionWrapper
        title="계약 결제정보"
        children={[
          {
            content: (
              <SectionWrapper
                wrapperStyle={{ borderColor: '#b4b4b4' }}
                childrenWrapperStyle={{ paddingInline: 20 }}
                children={[
                  {
                    content: (
                      <div>
                        <Flex style={{ paddingInline: 25 }} align="center" gap={24}>
                          <Text type="secondary">카드</Text>
                          <Text>우리MASTER 53873300****329*</Text>
                          <Button type="primary" size="small" style={{ backgroundColor: 'var(--primary-color)' }}>
                            사용
                          </Button>
                        </Flex>
                        <Divider />
                        <Flex style={{ paddingInline: 25 }} align="center" justify="space-between">
                          <Flex gap={32}>
                            <Flex gap={20}>
                              <Text type="secondary">결제 방법</Text>
                              <Text>자동결제(월)</Text>
                            </Flex>
                            <Flex gap={20}>
                              <Text type="secondary">총 결제금액</Text>
                              <Text>1,500,000원</Text>
                            </Flex>
                            <Flex gap={20}>
                              <Text type="secondary">첫 결제생성일</Text>
                              <Text>2024-06-24 17:25</Text>
                            </Flex>
                          </Flex>
                          <Flex gap={20} align="center">
                            <Text type="secondary">결제 발생건</Text>
                            <Button type="text" onClick={() => setOpenDetailPayment(!openDetailPayment)}>
                              {!openDetailPayment ? <DownOutlined style={{ fontSize: 18 }} /> : <UpOutlined style={{ fontSize: 18 }} />}
                            </Button>
                          </Flex>
                        </Flex>

                        {openDetailPayment && <PaymentTabs />}
                      </div>
                    )
                  }
                ]}
              />
            )
          }
        ]}
      />
      <SectionWrapper
        title="상담 내역"
        children={[
          {
            content: (
              <div>
                <Flex justify="space-between" style={{ margin: '0 20px 12px' }}>
                  <Flex align="center" gap={10}>
                    <Text strong style={{ color: 'var(--primary-color)' }}>
                      총 1건
                    </Text>
                    <Button type="text" icon={<CaretUpFilled />} iconPosition="end">
                      <Text type="secondary">닫기</Text>
                    </Button>
                  </Flex>
                  <Button>상담 등록</Button>
                </Flex>
                <SectionWrapper
                  action={
                    <Button style={{ color: 'var(--secondary-color)' }} type="text" icon={<EditFilled />}>
                      수정하기
                    </Button>
                  }
                  wrapperStyle={{ borderColor: '#b4b4b4' }}
                  childrenWrapperStyle={{ width: '100%' }}
                  children={[
                    {
                      content: (
                        <div>
                          <Flex gap={32}>
                            <Flex gap={20}>
                              <Text type="secondary">상담 일자</Text>
                              <Text>24-06-22 11:40</Text>
                            </Flex>
                            <Flex gap={20}>
                              <Text type="secondary">상담 분류</Text>
                              <Text>차량문의</Text>
                            </Flex>
                            <Flex gap={20}>
                              <Text type="secondary">관리자</Text>
                              <Text>홍길동</Text>
                            </Flex>
                          </Flex>
                          <Text type="secondary">상담 내용</Text>
                          <TextArea rows={4} />
                        </div>
                      )
                    }
                  ]}
                />
              </div>
            )
          }
        ]}
      />

      {/* <CustomTabs defaultActiveKey="1" items={items} tabBarStyle={{ marginLeft: 35 }} /> */}
    </Flex>
  );
};

export default Body;
