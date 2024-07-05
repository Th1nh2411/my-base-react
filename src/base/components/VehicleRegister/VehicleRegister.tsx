import styles from './VehicleRegister.module.css';
import { Button, Col, ConfigProvider, DatePicker, Flex, Form, Input, Row, Table, TableColumnsType } from 'antd';
import Title from 'antd/es/typography/Title';
import Text from 'antd/es/typography/Text';
import { CaretDownFilled, CaretDownOutlined, CaretUpFilled, DownloadOutlined, LeftOutlined, RightOutlined } from '@ant-design/icons';
import { useState } from 'react';
import classNames from 'classnames/bind';
import SectionWrapper from '@base/components/SectionWrapper';
import { SearchPlusIcon } from '@base/assets/icons';
import CustomTree from '@base/components/CustomTree';
import CustomButton from '@base/components/CustomButton/CustomButton';
const cx = classNames.bind(styles);
export interface IVehicleRegisterProps {}

export default function VehicleRegister(props: IVehicleRegisterProps) {
  const [openAdvanceSearch, setOpenAdvanceSearch] = useState(false);
  interface DataType {
    key: React.Key;
    name: string;
    class: string;
    color: string;
  }

  const columns: TableColumnsType<DataType> = [
    {
      title: '이름',
      dataIndex: 'name',
      align: 'center'
    },
    {
      title: '전화번호',
      dataIndex: 'class',
      align: 'center'
    },
    {
      title: '가입일시',
      dataIndex: 'color',
      align: 'center'
    }
  ];

  const data: DataType[] = [
    {
      key: '1',
      name: '125하1561',
      class: 'R2.0 2WD 프리미엄',
      color: '블랙'
    },
    {
      key: '2',
      name: '125하1561',
      class: 'R2.0 2WD 프리미엄',
      color: '블랙'
    },
    {
      key: '3',
      name: '125하1561',
      class: 'R2.0 2WD 프리미엄',
      color: '블랙'
    },
    {
      key: '4',
      name: '125하1561',
      class: 'R2.0 2WD 프리미엄',
      color: '블랙'
    }
  ];
  return (
    <ConfigProvider
      theme={{
        components: {
          Table: {
            headerBg: '#fff',
            headerSplitColor: 'none',
            fontWeightStrong: 500,
            borderColor: 'var(--border-color)',
            headerColor: '#5d5d5d'
          }
        }
      }}
    >
      <Flex vertical gap={15} style={{ padding: '20px 32px ' }}>
        <Title style={{ marginInline: 20, color: 'var(--primary-color)' }} level={4}>
          고객 등록
        </Title>
        <Input
          style={{ minWidth: 700 }}
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
                        <Col md={8}>
                          <Form.Item label="차량 번호">
                            <Input />
                          </Form.Item>
                        </Col>
                        <Col md={8}>
                          <Form.Item label="차량 등급">
                            <Input />
                          </Form.Item>
                        </Col>
                        <Col md={8}>
                          <Form.Item label="차량 색상">
                            <Input />
                          </Form.Item>
                        </Col>
                      </Row>
                      <Form.Item>
                        <CustomButton round size="large" type="primary">
                          검색
                        </CustomButton>
                      </Form.Item>
                    </Flex>
                  </Form>
                )
              }
            ]}
          />
        )}
        <Row gutter={12}>
          <Col md={12}>
            <SectionWrapper
              wrapperStyle={{ height: '100%' }}
              childrenWrapperStyle={{ paddingInline: 24 }}
              children={[
                {
                  content: (
                    <CustomTree
                      data={[
                        { children: [], label: '기아' },
                        {
                          children: [
                            {
                              children: [
                                { children: [], label: '싼타페' },
                                { children: null, label: '쏘나타' }
                              ],
                              label: '싼타페'
                            },
                            { children: [], label: '쏘나타' }
                          ],
                          label: '현대'
                        }
                      ]}
                    />
                  )
                }
              ]}
            />
          </Col>
          <Col md={12}>
            <Flex vertical gap={12} style={{ border: '1px solid var(--border-color)', borderRadius: 8, padding: 12 }}>
              <Table
                rowClassName={cx('customer-row')}
                rowSelection={{ columnWidth: 70 }}
                columns={columns}
                dataSource={data}
                pagination={false}
              />
              <Flex justify="space-between" style={{ borderRadius: 5, padding: '8px 20px', backgroundColor: '#F1F7FF' }}>
                <Text>총 3건 </Text>
                <Flex gap={5} align="center">
                  <Button type="text">
                    <LeftOutlined />
                  </Button>
                  <Input maxLength={2} size="small" variant="outlined" style={{ width: 40 }} defaultValue={'1'} />
                  <Text type="secondary"> /1</Text>
                  <Button type="text">
                    <RightOutlined />
                  </Button>
                </Flex>
              </Flex>
            </Flex>
          </Col>
        </Row>
        <div style={{ textAlign: 'center' }}>
          <CustomButton round type="primary" size="large" active>
            등록하기
          </CustomButton>
        </div>
      </Flex>
    </ConfigProvider>
  );
}
