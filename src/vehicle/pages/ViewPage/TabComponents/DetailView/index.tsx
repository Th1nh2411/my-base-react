import SectionWrapper from '@base/components/SectionWrapper';
import { Col, Form, Row } from 'antd';
import Text from 'antd/es/typography/Text';

export interface IDetailViewProps {}

export default function DetailView(props: IDetailViewProps) {
  return (
    <SectionWrapper
      childrenWrapperStyle={{ width: '90%' }}
      children={[
        {
          colNum: 3,
          content: (
            <Row gutter={[0, 10]}>
              <Col md={6}>
                <Form.Item label="등록증차명">싼타페(SANTAFE)</Form.Item>
              </Col>
              <Col md={6}>
                <Form.Item label="차대번호">KMHS281BBLU221488</Form.Item>
              </Col>
              <Col md={6}>
                <Form.Item labelCol={{ span: 14 }} label="국산/외산여부(1:국산 2:수입)">
                  국산
                </Form.Item>
              </Col>
              <Col md={6}></Col>
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
                <Form.Item label="연식">2016 / 8</Form.Item>
              </Col>
            </Row>
          )
        },
        {
          colNum: 3,
          content: (
            <Row gutter={[0, 10]}>
              <Col md={6}>
                <Form.Item label="차량 모델">싼타페</Form.Item>
              </Col>
              <Col md={6}>
                <Form.Item label="차종">신형 싼타페</Form.Item>
              </Col>
              <Col md={6}></Col>
              <Col md={6}></Col>
              <Col md={6}>
                <Form.Item label="차종">R2.0 2WD</Form.Item>
              </Col>
              <Col md={6}>
                <Form.Item label="차종">프리미엄</Form.Item>
              </Col>
              <Col md={6}>
                <Form.Item label="차종">R2.0 2WD 프리미엄</Form.Item>
              </Col>
            </Row>
          )
        },
        {
          colNum: 4,
          content: (
            <Row gutter={[0, 10]}>
              <Col md={6}>
                <Form.Item label="차량 모델">5</Form.Item>
              </Col>
              <Col md={6}>
                <Form.Item label="차종">110</Form.Item>
              </Col>
              <Col md={6}>
                <Form.Item label="차종">110</Form.Item>
              </Col>
              <Col md={6}>
                <Form.Item label="차종">110</Form.Item>
              </Col>
              <Col md={6}>
                <Form.Item label="차종">110</Form.Item>
              </Col>
              <Col md={6}>
                <Form.Item label="차종">110</Form.Item>
              </Col>
              <Col md={6}>
                <Form.Item label="차종">110</Form.Item>
              </Col>
            </Row>
          )
        },
        {
          colNum: 4,
          content: (
            <Row gutter={[0, 10]}>
              <Col md={6}>
                <Form.Item label="차량 모델">일반</Form.Item>
              </Col>
              <Col md={6}>
                <Form.Item label="차종">SUV</Form.Item>
              </Col>
              <Col md={6}>
                <Form.Item label="차종">1995</Form.Item>
              </Col>
              <Col md={6}>
                <Form.Item label="차종">디젤</Form.Item>
              </Col>
              <Col md={6}>
                <Form.Item label="차종">디젤</Form.Item>
              </Col>
              <Col md={6}>
                <Form.Item label="차종">13.9km/L(2등급)</Form.Item>
              </Col>
              <Col md={6}>
                <Form.Item label="차종">29500000</Form.Item>
              </Col>
              <Col md={6}>
                <Form.Item label="차종">29500000</Form.Item>
              </Col>
              <Col md={6}>
                <Form.Item label="차종">29500000</Form.Item>
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
                  5
                </Form.Item>
              </Col>
              <Col md={8}>
                <Form.Item labelCol={{ span: 12 }} label="파워트레인보증주행거리(km)">
                  100000
                </Form.Item>
              </Col>
              <Col md={8}>
                <Form.Item labelCol={{ span: 12 }} label="배출가스보증기간(년)">
                  5
                </Form.Item>
              </Col>
              <Col md={8}>
                <Form.Item labelCol={{ span: 12 }} label="배출가스보증주행거리(km)">
                  80000
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
                <Form.Item label="차량 모델">1690</Form.Item>
              </Col>
              <Col md={6}>
                <Form.Item label="차종">1690</Form.Item>
              </Col>
              <Col md={6}>
                <Form.Item label="차종">1690</Form.Item>
              </Col>
              <Col md={6}>
                <Form.Item label="차종">1690</Form.Item>
              </Col>
            </Row>
          )
        },
        {
          content: (
            <Row>
              <Col md={12}>
                <Form.Item label="모델 대표이미지 url">
                  https://code2.car2b.com/data/_NewCarDB/FrontImage/20140517/5cde17a72e6ab_1.png
                </Form.Item>
              </Col>
              <Col md={12}></Col>
              <Col md={12}>
                <Form.Item label="옵션메모">
                  <Text>
                    멀티미디어 라이트 플러스 - 7인치 디스플레이 오디오 + 후방 모니터(주행 중 후방 모니터 포함) + 하이패스 시스템 멀티미디어
                    내비 플러스1 - 8인치 내비게이션, 블루링크
                  </Text>
                </Form.Item>
              </Col>
            </Row>
          )
        }
      ]}
    />
  );
}
