import { Button, Checkbox, Col, ConfigProvider, Flex, Form, List, Row } from 'antd';
import Text from 'antd/es/typography/Text';
import styles from './AccidentHistory.module.css';
import classNames from 'classnames/bind';
import { DownOutlined, EditFilled } from '@ant-design/icons';
import { useState } from 'react';
import Title from 'antd/es/typography/Title';
import Link from 'antd/es/typography/Link';
const cx = classNames.bind(styles);

export interface IAccidentItemProps {
  data: any;
  isHeader: boolean;
}

export default function AccidentItem(props: IAccidentItemProps) {
  const { data, isHeader } = props;
  const [isOpenDetail, setIsOpenDetail] = useState<boolean>(false);
  return (
    <div className={cx('accident-item', { header: isHeader })}>
      <Row style={{ width: '100%', textAlign: 'center', alignItems: 'center' }}>
        <Col style={{ textAlign: 'end' }} md={1}>
          <Checkbox style={{ borderColor: '#000' }} />
        </Col>
        <Col md={4}>
          <Text type={isHeader ? 'secondary' : undefined}>{data.status}</Text>
        </Col>
        <Col md={4}>
          <Text type={isHeader ? 'secondary' : undefined}>{data.contNo}</Text>
        </Col>
        <Col md={6}>
          <Text type={isHeader ? 'secondary' : undefined}>{data.accidentTime}</Text>
        </Col>
        <Col md={4}>
          <Text type={isHeader ? 'secondary' : undefined}>{data.operator}</Text>
        </Col>
        <Col md={1}>
          {!isHeader && (
            <Button type="text" onClick={() => setIsOpenDetail(!isOpenDetail)}>
              <DownOutlined />
            </Button>
          )}
        </Col>
        <Col md={3}>
          {!isHeader && (
            <Button type="text" icon={<EditFilled />} style={{ color: 'var(--secondary-color)' }}>
              수정하기
            </Button>
          )}
        </Col>
      </Row>
      {isOpenDetail && (
        <div className={cx('accident-detail')}>
          <Title level={5} style={{ fontWeight: 500 }} type="secondary">
            고객 정보
          </Title>
          <Form labelCol={{ span: 12 }} colon={false} className={cx('detail-item')}>
            <Row>
              <Col md={4}>
                <Form.Item label="고객 정보">82447</Form.Item>
              </Col>
              <Col md={4}>
                <Form.Item label="이름">박세라</Form.Item>
              </Col>
              <Col md={4}>
                <Form.Item label="성별">여자</Form.Item>
              </Col>
              <Col md={4}>
                <Form.Item label="자기부담금">n원</Form.Item>
              </Col>
              <Col md={8}></Col>
              <Col md={4}>
                <Form.Item label="고객 전화번호">010-8359-5789</Form.Item>
              </Col>
              <Col md={7}>
                <Form.Item label="고객 이메일">sarah3012@naver.com</Form.Item>
              </Col>
              <Col md={7}>
                <Form.Item label="고객 주소">서울특별시 중구 다산로29길 30</Form.Item>
              </Col>
            </Row>
          </Form>
          <Title level={5} style={{ fontWeight: 500 }} type="secondary">
            사고 내용
          </Title>
          <Flex vertical gap={5} className={cx('detail-item')}>
            <Text>사고 발생 장소:</Text>
            <Text>사고 내용: </Text>
            <Text>차량 파손 정보:</Text>
            <Text>인적 피해:</Text>
            <Text>과실 비율:</Text>
            <Text>보험사:</Text>
            <Text>보험사 사고 접수번호:</Text>
            <Text>보험사 담당자:</Text>
            <Text>보험사 담당자 연락처:</Text>
            <Text>기타:</Text>
          </Flex>
          <Title level={5} style={{ fontWeight: 500 }} type="secondary">
            상대 차량
          </Title>
          <Flex vertical gap={5} className={cx('detail-item')}>
            <Text>차량 번호:</Text>
            <Text>차량 모델:</Text>
            <Text>차량 파손 정보:</Text>
            <Text>인적 피해:</Text>
            <Text>과실 비율:</Text>
            <Text>차량 소유주:</Text>
            <Text>차량 소유주 연락처:</Text>
            <Text>보험사:</Text>
            <Text>보험사 사고 접수번호:</Text>
            <Text>보험사 담당자:</Text>
            <Text>보험사 담당자 연락처:</Text>
          </Flex>
          <Flex gap={15} className={cx('detail-item')}>
            <Text type="secondary">첨부파일</Text>
            <Link>attached_file_name</Link>
          </Flex>
        </div>
      )}
    </div>
  );
}
