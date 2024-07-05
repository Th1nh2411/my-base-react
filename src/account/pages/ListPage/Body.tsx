import React, { useState } from 'react'
import style from './style.module.css'
import { SearchOutlined } from '@ant-design/icons';
import { Input, Flex } from 'antd';
import OutlineButton from '@base/components/Button/OutlineButton';
import TextButtonDropdown from '@base/components/Button/TextButtonDropdown';
import ListTripTable from '@base/components/List/ListTripTable';
import AdvancedSearchForm from '@account/components/form/AdvancedSearchForm';
import classNames from 'classnames/bind'
import { Link, useNavigate, useParams } from 'react-router-dom';
const cx = classNames.bind(style)

type Props = {}
type DummyData = {
  administratorNumber: string,
  AdministratorID: string,
  AdministratorName: string,
  contact: string,
}

const Body = (props: Props) => {
  const [searchFormDisplay, setSearchFormDisplay] = useState<boolean>(false)
  const navigate = useNavigate();
  const {subParam} = useParams();

  const column = ['No.', '관리자 번호', '관리자 ID', '관리자명', '연락처', '상세보기']
  const data: DummyData[] = [
    {
      administratorNumber: '50826',
      AdministratorID: 'taehokim6',
      AdministratorName: '김태호',
      contact: '010-1111-2222',
    },
    {
      administratorNumber: '50826',
      AdministratorID: 'hoyongshin',
      AdministratorName: '신호용',
      contact: '010-3333-4444',
    }
  ]

  const toggleSearchForm = () => {
    setSearchFormDisplay(prev => !prev)
  }

  const navigate2WritePage=()=>{
    navigate(`/account/write/${subParam}`)
  }

  const renderItem = (item:DummyData ,index: number) => (
    <tr key={index} >
        <td> <span> {index + 1} </span> </td>
        <td> <span> {item.administratorNumber} </span> </td>
        <td> <span> {item.AdministratorID} </span> </td>
        <td> <span> {item.AdministratorName} </span> </td>
        <td> <span> {item.contact} </span> </td>
        <td><Link to={`/account/view/${subParam}/${index + 1}`} style={{ textDecoration: 'underline' }} >상세보기</Link></td>
    </tr>
)

  return (
    <div>
      {/* toolbar */}
      <Flex align='center' gap={10} >
        <Input 
          className={cx('wid-50')} 
          size="large" 
          placeholder="통합검색" 
          prefix={<SearchOutlined />} 
        />
        <TextButtonDropdown 
          text='필터' 
          onPress={toggleSearchForm} 
          rotateIcon={searchFormDisplay} 
        />
      </Flex>

      {/* Advanced Search Form*/}
      {searchFormDisplay && <AdvancedSearchForm />}

      {/* title */}
      <Flex justify='space-between' align='center' className={cx('mt-20','pr-30')} >
        <h5> 
          <span className={style['text-primary']} >총 2건</span> 
          <span className={cx('text-gray-scorpion')} > ㅣ 전체 차량 목록 </span>
        </h5>
        <OutlineButton text='차량 등록' onPress={navigate2WritePage} />
      </Flex>

      {/* list view */}
      <ListTripTable column={column} data={data} renderItem={renderItem} />

      <Flex justify='flex-end' className={cx('mt-10','pr-30')} >
        <OutlineButton text='엑셀 다운로드' />
      </Flex>
    </div>
  )
}

export default Body