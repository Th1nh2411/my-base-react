import styles from './style.module.css';
import { ButtonProps } from 'antd/lib/button';
import { Flex, Form, Row, Col, DatePicker, Tabs, TabsProps, Button } from 'antd';
import Text from 'antd/es/typography/Text';
import classNames from 'classnames';
import Title from 'antd/es/typography/Title';
import SectionWrapper from '@base/components/SectionWrapper';
import DetailView from './TabComponents/DetailView';
import MaintenanceHistory from './TabComponents/MaintenanceHistory';
import AccidentHistory from './TabComponents/AccidentHistory';
import ContractInformation from './TabComponents/ContractInfomation';
import { EditFilled } from '@ant-design/icons';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { MENU_VEHICLE_URL } from '@vehicle/constants/menu';
const cx = classNames.bind(styles);
type Props = {};

const Body = (props: Props) => {
  const navigate = useNavigate();
  const items: TabsProps['items'] = [
    {
      key: '1',
      label: '세부 정보',
      children: <DetailView />
    },
    {
      key: '2',
      label: '계약 정보',
      children: (
        <SectionWrapper
          children={[
            {
              content: <ContractInformation />
            }
          ]}
        />
      )
    },
    {
      key: '3',
      label: '차량 위치',
      children: (
        <SectionWrapper
          children={[
            {
              content: (
                <div>
                  <Flex gap={36} style={{ padding: '0px 40px 20px' }}>
                    <Text type="secondary">현재 위치</Text>
                    <Flex vertical>
                      <Text>경기 하남시 학암동 676-2 인근</Text>
                      <Text>반납위치로부터 + 0km (시내 평균 주행속도 30km/h로 운행 가정시 반납 위치까지 0분 소요 예상)</Text>
                    </Flex>
                  </Flex>
                  <Flex vertical align="center">
                    <iframe
                      title="map"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12664.056951976467!2d127.14448967098583!3d37.483990380200645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357caf0e2fb81281%3A0x87a2b4bf7b23e8cd!2zSMOgbiBRdeG7kWMsIEd5ZW9uZ2dpLCBIYW5hbSwg7JyE66GA64-Z!5e0!3m2!1svi!2s!4v1719305850083!5m2!1svi!2s"
                      width="100%"
                      height="400"
                      loading="lazy"
                      style={{ border: 0 }}
                    ></iframe>
                  </Flex>
                </div>
              )
            }
          ]}
        />
      )
    },
    {
      key: '4',
      label: '정비 내역',
      children: (
        <SectionWrapper
          children={[
            {
              content: <MaintenanceHistory />
            }
          ]}
        />
      )
    },
    {
      key: '5',
      label: '사고 내역',
      children: (
        <SectionWrapper
          children={[
            {
              content: <AccidentHistory />
            }
          ]}
        />
      )
    }
  ];

  return (
    <Form
      colon={false}
      labelCol={{
        span: 8
      }}
    >
      <Flex vertical gap={25}>
        <SectionWrapper
          title="기본 정보"
          children={[
            {
              content: (
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
                    <Form.Item label="차량 번호">85하1561</Form.Item>
                  </Col>
                  <Col md={6}></Col>
                  <Col md={6}>
                    <Form.Item label="차량 등록일">23-03-31</Form.Item>
                  </Col>
                  <Col md={6}>
                    <Form.Item label="DB 등록일">23-04-26</Form.Item>
                  </Col>
                </Row>
              )
            }
          ]}
        />

        <SectionWrapper
          title="운영 정보"
          children={[
            {
              content: (
                <>
                  <Row gutter={[0, 10]}>
                    <Col md={6}>
                      <Form.Item label="운영 상태">운영</Form.Item>
                    </Col>
                  </Row>
                  <Button
                    className="top-right-corner"
                    style={{ color: 'var(--secondary-color' }}
                    icon={<EditFilled />}
                    type="text"
                    onClick={() => navigate(`/${MENU_VEHICLE_URL}/write/all/1`)}
                  >
                    수정하기
                  </Button>
                </>
              )
            }
          ]}
        />

        <Tabs defaultActiveKey="1" items={items} tabBarStyle={{ marginLeft: 35 }} />
      </Flex>
    </Form>
  );
};

export default Body;
