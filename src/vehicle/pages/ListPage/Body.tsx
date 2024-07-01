import React, { useState } from 'react'
import style from './style.module.css'
import { CaretDownOutlined, CaretUpOutlined, SearchOutlined, UserOutlined } from '@ant-design/icons';
import { Input, Button, Flex, Space, Select, Form, Checkbox, ConfigProvider } from 'antd';
import type { FormProps } from 'antd';


type Props = {}
type DumyData = {
  operatingStatus: string,
  carType: string,
  vehicalModel: string,
  vehicalClass: string,
  vehicalColor: string,
  carNumber: string,
  modelYear: string,
  vehicleRegisRrationDate: string,
  DBRegistrationDate: string,
}

const Body = (props: Props) => {
  const [showSearchBar, setshowSearchBar] = useState<boolean>(false)

  const column = ['No.', '운영 상태', '차종', '차량 모델', '차량 등급', '차량 색상', '차량 번호', '연식', '차량 등록일', 'DB 등록일', '차량정보']
  const data: DumyData[] = [
    {
      operatingStatus: '운영',
      carType: '320i',
      vehicalModel: 'M Spt',
      vehicalClass: 'R2.0 2WD 프리미엄',
      vehicalColor: '블루',
      carNumber: '125하1561',
      modelYear: '2016 / 8',
      vehicleRegisRrationDate: '23-03-31',
      DBRegistrationDate: '23-04-26'
    },
    {
      operatingStatus: '운영',
      carType: '320i',
      vehicalModel: 'M Spt',
      vehicalClass: 'R2.0 2WD 프리미엄',
      vehicalColor: '블루',
      carNumber: '125하1561',
      modelYear: '2016 / 8',
      vehicleRegisRrationDate: '23-03-31',
      DBRegistrationDate: '23-04-26'
    },
    {
      operatingStatus: '미운영',
      carType: '320i',
      vehicalModel: 'M Spt',
      vehicalClass: 'R2.0 2WD 프리미엄',
      vehicalColor: '블루',
      carNumber: '125하1561',
      modelYear: '2016 / 8',
      vehicleRegisRrationDate: '23-03-31',
      DBRegistrationDate: '23-04-26'
    },
  ]

  const togleShowSearchBar = ()=>{
    setshowSearchBar(prev => !prev)
  }

  const SearchInput = () => <Input className={style['wid-50']} size="large" placeholder="통합검색" prefix={<SearchOutlined />} />
  
  const MyTextButtonDropdown = ({ text, callback, iconMock }: { text: string, callback?:()=>void, iconMock ?: boolean }) => {
    return (
      <Button type="text" className={style['my-text-button']} icon={iconMock ?  <CaretUpOutlined /> : <CaretDownOutlined />}  iconPosition='end' onClick={callback} >
        {text}
      </Button>
    )
  }

  const MyOutlineButton = ({ text }: { text: string }) => <Button className={style['my-outline-button']} >{text}</Button>

  const ListView = ({ column, data }: { column: string[], data: any[] }) => {
    return (
      <table >
        <thead>
          <tr>
            {
              column.map((item,index) => <th key={index} > {item} </th>)
            }
          </tr>
        </thead>
        <tbody>
          {
            data.map((item: DumyData, index: number) => (
              <tr key={index} >
                <td> <span> {index + 1} </span> </td>
                <td> <span> {item.operatingStatus} </span> </td>
                <td> <span> {item.carType} </span> </td>
                <td> <span> {item.vehicalModel} </span> </td>
                <td> <span> {item.vehicalClass} </span> </td>
                <td> <span> {item.vehicalColor} </span> </td>
                <td> <span> {item.carNumber} </span> </td>
                <td> <span> {item.modelYear} </span> </td>
                <td> <span> {item.vehicleRegisRrationDate} </span> </td>
                <td> <span> {item.DBRegistrationDate} </span> </td>
                <td><Button type="link" style={{ textDecoration: 'underline' }} >상세보기</Button></td>
              </tr>
            ))
          }
        </tbody>
      </table>
    )
  }

  const AdvantageSearch = () => {
    const { Option } = Select;
    type FieldType = {
      username?: string;
      password?: string;
      remember?: string;
    };

    const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
      console.log('Success:', values);
    };

    const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
      console.log('Failed:', errorInfo);
    };

    return (
      <div className={style['my-advantageSearch']} >
        <ConfigProvider
          theme={{
            components: {
              Select: {
                selectorBg: '#F1F1F1'
              },
            },
          }}
        >
          <Form
            name="basic"
            layout='horizontal'
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 10 }}
            // style={{ maxWidth: 1000 }}
            labelAlign='right'
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Flex>
              {/* left */}
              <div className={style['my-advantageSearch__item']} >
                <Form.Item
                  label="운영 상태"
                  // name="password"
                  layout='horizontal'
                  wrapperCol={{ span: 6 }}
                // rules={[{ required: true, message: 'Please input your password!' }]}
                >
                  <div className={style['ml-10']} >
                    <Select
                      defaultValue='male'
                      // onChange={onGenderChange}
                      allowClear
                    >
                      <Option value="male">선택</Option>
                      <Option value="female">선택</Option>
                      <Option value="other">선택</Option>
                    </Select>
                  </div>

                </Form.Item>

                <Form.Item
                  label="차량 모델"
                // name="username"
                // rules={[{ required: true, message: 'Please input here!' }]}
                >
                  <div className={style['ml-10']} >
                    <Input />
                  </div>
                </Form.Item>

                <Form.Item
                  label="차량 색상"
                // name="username"
                // rules={[{ required: true, message: 'Please input here!' }]}
                >
                  <div className={style['ml-10']} >
                    <Input />
                  </div>
                </Form.Item>

                <Form.Item
                  label="연식"
                  // name="password"
                  layout='horizontal'
                  wrapperCol={{ span: 13 }}
                  rules={[{ required: true, message: 'Please input your password!' }]}
                >
                  <Flex align='center' gap={10} className={style['ml-10']} >
                    <Select
                      defaultValue='male'
                      // onChange={onGenderChange}
                      allowClear
                    >
                      <Option value="male">선택</Option>
                      <Option value="female">선택</Option>
                      <Option value="other">선택</Option>
                    </Select>

                    <Select
                      defaultValue='male'
                      // onChange={onGenderChange}
                      allowClear
                    >
                      <Option value="male">선택</Option>
                      <Option value="female">선택</Option>
                      <Option value="other">선택</Option>
                    </Select>
                  </Flex>
                </Form.Item>

                <Form.Item
                  label="DB 등록일"
                  wrapperCol={{ span: 12 }}
                // name="username"
                // rules={[{ required: true, message: 'Please input here!' }]}
                >
                  <Flex align='center' gap={10} className={style['ml-10']}>
                    <Input className={style['bg-gray-2']} />
                    <div>~</div>
                    <Input className={style['bg-gray-2']} />
                  </Flex>
                </Form.Item>
              </div>

              {/* right */}
              <div className={style['my-advantageSearch__item']} >
                <Form.Item label="차종">
                  <div className={style['ml-10']} >
                    <Input />
                  </div>
                </Form.Item>

                <Form.Item label="차량 등급">
                  <div className={style['ml-10']} >
                    <Input />
                  </div>
                </Form.Item>

                <Form.Item label="차량 번호">
                  <div className={style['ml-10']} >
                    <Input />
                  </div>
                </Form.Item>

                <Form.Item
                  label="DB 등록일"
                  wrapperCol={{ span: 12 }}
                >
                  <Flex align='center' gap={10} className={style['ml-10']}>
                    <Input className={style['bg-gray-2']} />
                    <div>~</div>
                    <Input className={style['bg-gray-2']} />
                  </Flex>
                </Form.Item>
              </div>
            </Flex>
          </Form>
        </ConfigProvider>
      </div>
    )
  }

  return (
    <div>
      {/* toolbar */}
      <div className={style['flex-mid']} >
        <SearchInput />
        <MyTextButtonDropdown text='필터' callback={togleShowSearchBar} iconMock={showSearchBar} />
      </div>

      {/* advantage search */}
      <div>
        {showSearchBar && <AdvantageSearch />}
      </div>

      {/* title */}
      <Flex justify='space-between' align='center' className={style['mt-20'] + ' ' + style['pr-30']} >
        <h5> <span className={style['text-myBlue']} >총 3대</span> ㅣ 전체 차량 목록</h5>
        <MyOutlineButton text='차량 등록' />
      </Flex>

      {/* list view */}
      <div className={style['my-table']} >
        <ListView column={column} data={data} />
        <div className={style['div-center']} >1</div>
      </div>

      <Flex justify='flex-end' className={style['mt-10'] + ' ' + style['pr-30']} >
        <MyOutlineButton text='엑셀 다운로드' />
      </Flex>
    </div>
  )
}

export default Body