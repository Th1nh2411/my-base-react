import styles from './ContractInformation.module.css';
import { CaretDownFilled, CaretUpFilled, EditFilled } from '@ant-design/icons';
import { SearchPlusIcon } from '@base/assets/icons';
import CustomButton from '@base/components/CustomButton/CustomButton';
import SectionWrapper from '@base/components/SectionWrapper';
import { Button, Col, DatePicker, Flex, Form, Input, Row } from 'antd';
import Link from 'antd/es/typography/Link';
import Text from 'antd/es/typography/Text';
import Title from 'antd/es/typography/Title';
import classNames from 'classnames/bind';
import { useState } from 'react';
const { RangePicker } = DatePicker;
const cx = classNames.bind(styles);

export interface IContractInformationProps {}

export default function ContractInformation(props: IContractInformationProps) {
  const [openAdvanceSearch, setOpenAdvanceSearch] = useState(false);
  return (
    <Flex vertical>
      <Text>
        <Link>전체</Link>ㅣ계약완료ㅣ이용중ㅣ계약취소ㅣ이용완료ㅣ반납지연
      </Text>
      <Input
        style={{ width: 700, margin: '15px 0' }}
        size="large"
        placeholder="통합검색"
        prefix={<SearchPlusIcon style={{ fontSize: 20 }} />}
        suffix={
          !openAdvanceSearch ? (
            <CaretDownFilled style={{ fontSize: 20 }} onClick={() => setOpenAdvanceSearch(true)} />
          ) : (
            <CaretUpFilled style={{ fontSize: 20 }} onClick={() => setOpenAdvanceSearch(false)} />
          )
        }
        allowClear
      />
      {openAdvanceSearch && (
        <SectionWrapper
          children={[
            {
              content: (
                <Form colon={false}>
                  <Flex vertical align="center" gap={20}>
                    <Row gutter={[24, 10]}>
                      <Col md={4}>
                        <Form.Item label="담당자">
                          <Input />
                        </Form.Item>
                      </Col>
                      <Col md={4}>
                        <Form.Item label="계약 일시">
                          <Input />
                        </Form.Item>
                      </Col>
                      <Col md={7} offset={2}>
                        <Form.Item label="계약 상태">
                          <RangePicker />
                        </Form.Item>
                      </Col>
                      <Col md={7}>
                        <Form.Item label="계약 상태">
                          <RangePicker />
                        </Form.Item>
                      </Col>
                    </Row>
                    <Form.Item>
                      <CustomButton round size="large" type="primary">
                        검색하기
                      </CustomButton>
                    </Form.Item>
                  </Flex>
                </Form>
              )
            }
          ]}
        />
      )}
      <Flex align="center" gap={20} style={{ marginBlock: 20 }}>
        <Title type="secondary" level={5}>
          <span style={{ color: 'var(--primary-color)' }}>총 2건</span> ㅣ 계약 정보
        </Title>
        <Button>사고 등록</Button>
      </Flex>
      <Row gutter={50}>
        <Col md={12}>
          <SectionWrapper
            wrapperStyle={{ borderColor: '#b4b4b4' }}
            action={
              <Button style={{ color: 'var(--secondary-color)' }} type="text" icon={<EditFilled />}>
                수정하기
              </Button>
            }
            children={[
              {
                content: (
                  <Form colon={false}>
                    <Row gutter={[0, 10]}>
                      <Col md={12}>
                        <Form.Item label="담당자">
                          <Text>홍길동</Text>
                        </Form.Item>
                      </Col>
                      <Col md={12}>
                        <Form.Item label="계약 일시" rules={[{ type: 'email' }, { required: true }]}>
                          <Text>2024-06-05 17:35</Text>
                        </Form.Item>
                      </Col>
                      <Col md={12}>
                        <Form.Item label="계약 상태" rules={[{ type: 'email' }, { required: true }]}>
                          <Link>계약완료</Link>
                        </Form.Item>
                      </Col>
                    </Row>
                  </Form>
                )
              },
              {
                content: (
                  <Form colon={false}>
                    <Row gutter={[0, 10]}>
                      <Col md={12}>
                        <Form.Item label="계약자 이름">
                          <Text>박세라</Text>
                        </Form.Item>
                      </Col>
                      <Col md={12}>
                        <Form.Item label="계약자 전화번호" rules={[{ type: 'email' }, { required: true }]}>
                          <Text>010-8359-5789</Text>
                        </Form.Item>
                      </Col>
                      <Col md={16}>
                        <Form.Item label="계약 기간" rules={[{ type: 'email' }, { required: true }]}>
                          <Text>2024-06-06 17:00 ~ 2026-06-06 17:00</Text>
                        </Form.Item>
                      </Col>
                    </Row>
                    <Button type="link" className={cx('bottom-right-corner')}>
                      <Link underline>상세보기</Link>
                    </Button>
                  </Form>
                )
              }
            ]}
          />
        </Col>
        <Col md={12}>
          <SectionWrapper
            wrapperStyle={{ borderColor: '#b4b4b4' }}
            action={
              <Button style={{ color: 'var(--secondary-color)' }} type="text" icon={<EditFilled />}>
                수정하기
              </Button>
            }
            children={[
              {
                content: (
                  <Form colon={false}>
                    <Row gutter={[0, 10]}>
                      <Col md={12}>
                        <Form.Item label="담당자">
                          <Text>홍길동</Text>
                        </Form.Item>
                      </Col>
                      <Col md={12}>
                        <Form.Item label="계약 일시" rules={[{ type: 'email' }, { required: true }]}>
                          <Text>2024-06-05 17:35</Text>
                        </Form.Item>
                      </Col>
                      <Col md={12}>
                        <Form.Item label="계약 상태" rules={[{ type: 'email' }, { required: true }]}>
                          <Link>계약완료</Link>
                        </Form.Item>
                      </Col>
                    </Row>
                  </Form>
                )
              },
              {
                content: (
                  <Form colon={false}>
                    <Row gutter={[0, 10]}>
                      <Col md={12}>
                        <Form.Item label="계약자 이름">
                          <Text>박세라</Text>
                        </Form.Item>
                      </Col>
                      <Col md={12}>
                        <Form.Item label="계약자 전화번호" rules={[{ type: 'email' }, { required: true }]}>
                          <Text>010-8359-5789</Text>
                        </Form.Item>
                      </Col>
                      <Col md={16}>
                        <Form.Item label="계약 기간" rules={[{ type: 'email' }, { required: true }]}>
                          <Text>2024-06-06 17:00 ~ 2026-06-06 17:00</Text>
                        </Form.Item>
                      </Col>
                    </Row>
                    <Button type="link" className={cx('bottom-right-corner')}>
                      <Link underline>상세보기</Link>
                    </Button>
                  </Form>
                )
              }
            ]}
          />
        </Col>
      </Row>
    </Flex>
  );
}
