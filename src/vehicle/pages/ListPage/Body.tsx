import React, { useState } from 'react';
import style from './style.module.css';
import { Input, Flex } from 'antd';
import OutlineButton from '@base/components/Button/OutlineButton';
import TextButtonDropdown from '@base/components/Button/TextButtonDropdown';
import ListTripTable from '@base/components/List/ListTripTable';
import AdvancedSearchForm from '@vehicle/components/form/AdvancedSearchForm';
import classNames from 'classnames/bind';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import { SearchPlusIcon } from '@base/assets/icons';
const cx = classNames.bind(style);

type Props = {};
type DummyData = {
  id: string;
  operatingStatus: string;
  carType: string;
  vehicleModel: string;
  vehicleClass: string;
  vehicleColor: string;
  carNumber: string;
  modelYear: string;
  vehicleRegistrationDate: string;
  DBRegistrationDate: string;
};

const Body = (props: Props) => {
  const [searchFormDisplay, setSearchFormDisplay] = useState<boolean>(false);
  const navigate = useNavigate();
  const {subParam} = useParams()

  const column = [
    'No.',
    '운영 상태',
    '차종',
    '차량 모델',
    '차량 등급',
    '차량 색상',
    '차량 번호',
    '연식',
    '차량 등록일',
    'DB 등록일',
    '차량정보'
  ];
  const data: DummyData[] = [
    {
      id: 'item001',
      operatingStatus: '운영',
      carType: '320i',
      vehicleModel: 'M Spt',
      vehicleClass: 'R2.0 2WD 프리미엄',
      vehicleColor: '블루',
      carNumber: '125하1561',
      modelYear: '2016 / 8',
      vehicleRegistrationDate: '23-03-31',
      DBRegistrationDate: '23-04-26'
    },
    {
      id: 'item002',
      operatingStatus: '운영',
      carType: '320i',
      vehicleModel: 'M Spt',
      vehicleClass: 'R2.0 2WD 프리미엄',
      vehicleColor: '블루',
      carNumber: '125하1561',
      modelYear: '2016 / 8',
      vehicleRegistrationDate: '23-03-31',
      DBRegistrationDate: '23-04-26'
    },
    {
      id: 'item003',
      operatingStatus: '미운영',
      carType: '320i',
      vehicleModel: 'M Spt',
      vehicleClass: 'R2.0 2WD 프리미엄',
      vehicleColor: '블루',
      carNumber: '125하1561',
      modelYear: '2016 / 8',
      vehicleRegistrationDate: '23-03-31',
      DBRegistrationDate: '23-04-26'
    }
  ];

  const toggleSearchForm = () => {
    setSearchFormDisplay((prev) => !prev);
  };

  const navigate2WritePage = () => {
    navigate(`/vehicle/write/${subParam}`);
  };

  const renderItem = (item: DummyData, index: number) => (
    <tr key={index}>
      <td>
        <span> {index + 1} </span>
      </td>
      <td>
        <span> {item.operatingStatus} </span>
      </td>
      <td>
        <span> {item.carType} </span>
      </td>
      <td>
        <span> {item.vehicleModel} </span>
      </td>
      <td>
        <span> {item.vehicleClass} </span>
      </td>
      <td>
        <span> {item.vehicleColor} </span>
      </td>
      <td>
        <span> {item.carNumber} </span>
      </td>
      <td>
        <span> {item.modelYear} </span>
      </td>
      <td>
        <span> {item.vehicleRegistrationDate} </span>
      </td>
      <td>
        <span> {item.DBRegistrationDate} </span>
      </td>
      <td>
        <Link to={`/vehicle/view/${subParam}/${index + 1}`} style={{ textDecoration: 'underline' }}>
          상세보기
        </Link>
      </td>
    </tr>
  );

  return (
    <div>
      {/* toolbar */}
      <Flex align="center" gap={10}>
        <Input className={cx('wid-50')} size="large" placeholder="통합검색" prefix={<SearchPlusIcon />} />
        <TextButtonDropdown text="필터" onPress={toggleSearchForm} rotateIcon={searchFormDisplay} />
      </Flex>

      {/* Advanced Search Form*/}
      {searchFormDisplay && <AdvancedSearchForm />}

      {/* title */}
      <Flex justify="space-between" align="center" className={cx('mt-20', 'pr-30')}>
        <h5>
          {' '}
          <span className={cx('text-primary')}>총 3대</span> 
          <span className={cx('text-gray-scorpion')} > ㅣ 전체 차량 목록 </span>
        </h5>
        <OutlineButton text="차량 등록" onPress={navigate2WritePage} />
      </Flex>

      {/* list view */}
      <ListTripTable column={column} data={data} renderItem={renderItem} />

      <Flex justify="flex-end" className={cx('mt-10', 'pr-30')}>
        <OutlineButton text="엑셀 다운로드" />
      </Flex>
    </div>
  );
};

export default Body;
