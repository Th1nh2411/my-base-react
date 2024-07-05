import React, { useState } from 'react';
import style from './style.module.css';
import { Input, Flex } from 'antd';
import OutlineButton from '@base/components/Button/OutlineButton';
import TextButtonDropdown from '@base/components/Button/TextButtonDropdown';
import ListTripTable from '@base/components/List/ListTripTable';
import AdvancedSearchForm from '@planning/components/form/AdvancedSearchForm';
import classNames from 'classnames/bind';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { SearchPlusIcon } from '@base/assets/icons';
const cx = classNames.bind(style);

type Props = {};
type DummyData = {
  manager: string;
  contractDateAndTime: string;
  vehicleModel: string;
  carNumber: string;
  contractStatus: string;
  contractorName: string;
  Term: string;
};

const Body = (props: Props) => {
  const [searchFormDisplay, setSearchFormDisplay] = useState<boolean>(false);
  const navigate = useNavigate();
  const {subParam} = useParams()

  const column = [
    'No.',
    '담당자',
    '계약 일시',
    '차량 모델',
    '차량 번호',
    '계약 상태',
    '계약자 이름',
    '계약 기간',
    '상세보기',
  ];
  const data: DummyData[] = [
    {
      manager: '홍길동',
      contractDateAndTime: '2024-06-25 16:45',
      vehicleModel: 'X3 20i XDrive M Spt',
      carNumber: '125하1561',
      contractStatus: '이용중',
      contractorName: '박세라',
      Term: '2024-06-25~2026-06-30',
    },
    {
      manager: '홍길동',
      contractDateAndTime: '2024-06-25 16:45',
      vehicleModel: 'X3 20i XDrive M Spt',
      carNumber: '125하1561',
      contractStatus: '이용중',
      contractorName: '박세라',
      Term: '2024-06-25~2026-06-30',
    },
    {
      manager: '홍길동',
      contractDateAndTime: '2024-06-25 16:45',
      vehicleModel: 'X3 20i XDrive M Spt',
      carNumber: '125하1561',
      contractStatus: '이용중',
      contractorName: '박세라',
      Term: '2024-06-25~2026-06-30',
    }
  ];

  const toggleSearchForm = () => {
    setSearchFormDisplay((prev) => !prev);
  };

  const navigate2WritePage = () => {
    navigate(`/planning/write/${subParam}`);
  };
  const renderItem = (item: DummyData, index: number) => (
    <tr key={index}>
      <td>
        <span> {index + 1} </span>
      </td>
      <td>
        <span> {item.manager} </span>
      </td>
      <td>
        <span> {item.contractDateAndTime} </span>
      </td>
      <td>
        <span> {item.vehicleModel} </span>
      </td>
      <td>
        <span> {item.carNumber} </span>
      </td>
      <td>
        <span> {item.contractStatus} </span>
      </td>
      <td>
        <span> {item.contractorName} </span>
      </td>
      <td>
        <span> {item.Term} </span>
      </td>
      <td>
        <Link to={`/planning/view/${subParam}/${index + 1}`} style={{ textDecoration: 'underline' }}>
          상세보기
        </Link>
      </td>
    </tr>
  )
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
          <span className={cx('text-gray-scorpion')}> ㅣ 전체 차량 목록 </span>
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
