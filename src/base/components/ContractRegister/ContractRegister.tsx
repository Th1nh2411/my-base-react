import styles from './ContractRegister.module.css';
import { Button, Col, ConfigProvider, DatePicker, Flex, Form, Input, Row, Table, TableColumnsType } from 'antd';
import Title from 'antd/es/typography/Title';
import Text from 'antd/es/typography/Text';
import { CaretDownFilled, CaretDownOutlined, CaretUpFilled, DownloadOutlined, LeftOutlined, RightOutlined } from '@ant-design/icons';
import { useState } from 'react';
import classNames from 'classnames/bind';
import SectionWrapper from '@base/components/SectionWrapper';
import { SearchPlusIcon } from '@base/assets/icons';
import CustomButton from '@base/components/CustomButton/CustomButton';
const { RangePicker } = DatePicker;
const cx = classNames.bind(styles);

export interface IContractRegisterProps {}

export default function ContractRegister(props: IContractRegisterProps) {
  const [openAdvanceSearch, setOpenAdvanceSearch] = useState(false);
  interface DataType {
    key: React.Key;
    name: string;
    customerId: number;
    phoneNumber: string;
    registerDate: string;
  }

  const columns: TableColumnsType<DataType> = [
    {
      title: '고객번호',
      dataIndex: 'customerId',
      align: 'center'
    },
    {
      title: '이름',
      dataIndex: 'name',
      align: 'center'
    },
    {
      title: '전화번호',
      dataIndex: 'phoneNumber',
      align: 'center'
    },
    {
      title: '가입일시',
      dataIndex: 'registerDate',
      align: 'center'
    }
  ];

  const data: DataType[] = [
    {
      key: '1',
      name: 'John Brown',
      customerId: 32,
      phoneNumber: '010-8359-5789',
      registerDate: '2024-06-24 17:13'
    },
    {
      key: '2',
      name: 'Jim Green',
      customerId: 42,
      phoneNumber: '010-8359-5789',
      registerDate: '2024-06-24 17:13'
    },
    {
      key: '3',
      name: 'Joe Black',
      customerId: 32,
      phoneNumber: '010-8359-5789',
      registerDate: '2024-06-24 17:13'
    },
    {
      key: '4',
      name: 'Disabled User',
      customerId: 99,
      phoneNumber: '010-8359-5789',
      registerDate: '2024-06-24 17:13'
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
          계약번호 등록
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
                      <Row gutter={[24, 24]}>
                        <Col md={7}>
                          <Form.Item label="계약번호">
                            <Input />
                          </Form.Item>
                        </Col>
                        <Col md={7}>
                          <Form.Item label="계약자 이름">
                            <Input />
                          </Form.Item>
                        </Col>
                        <Col md={7}>
                          <Form.Item label="계약 상태">
                            <Input />
                          </Form.Item>
                        </Col>
                        <Col md={8}>
                          <Form.Item label="가입일시">
                            <RangePicker />
                          </Form.Item>
                        </Col>
                      </Row>
                      <Form.Item>
                        <CustomButton style={{ width: 100 }} round size="large" type="primary">
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
        <Flex vertical gap={12} style={{ border: '1px solid var(--border-color)', borderRadius: 8, paddingBottom: 16 }}>
          <Table
            rowClassName={cx('customer-row')}
            style={{ fontWeight: 500 }}
            rowSelection={{ columnWidth: 70 }}
            columns={columns}
            dataSource={data}
            pagination={false}
          />
          <Flex justify="space-between" style={{ padding: '8px 20px', backgroundColor: '#F1F7FF' }}>
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
          <div style={{ textAlign: 'center' }}>
            <CustomButton round type="primary" size="large" active>
              등록하기
            </CustomButton>
          </div>
        </Flex>
      </Flex>
    </ConfigProvider>
  );
}
