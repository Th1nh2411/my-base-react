import React, { ReactNode, useState } from 'react';
import style from './style.module.css';
import { Input, Flex, Button } from 'antd';
import OutlineButton from '@base/components/Button/OutlineButton';
import TextButtonDropdown from '@base/components/Button/TextButtonDropdown';
import ListTripTable from '@base/components/List/ListTripTable';
import AdvancedSearchForm from '@notification/components/form/AdvancedSearchForm';
import classNames from 'classnames/bind';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { SearchPlusIcon } from '@base/assets/icons';
const cx = classNames.bind(style);

type Props = {};
type kakaoType = {
  receiver: string;
  customerNumber: string;
  phoneNumber: string;
  messageSubject: string;
  Caller: string;
  ReservationDateAndTime: string;
  ShippingDateAndTime: string;
  ShippingStatus: string;
};

type settingType = {
  messageSubject:string,
  messageContent:string,
  use:string,
  RegistrationDate:string,
}

const Body = (props: Props) => {
  const [searchFormDisplay, setSearchFormDisplay] = useState<boolean>(false);
  const navigate = useNavigate();
  const {subParam} = useParams()

  let column: string[] = [];
  let data: kakaoType[] | settingType[]  = []
  let renderItem

  if(subParam == 'kakao'){
    column = [
      'No.',
      '수신자',
      '고객번호',
      '휴대폰번호',
      '메시지 제목',
      '발신자',
      '예약 일시',
      '발송 일시',
      '발송 상태',
      '상세보기'
    ];

    data = [
      {
        receiver: '박세라',
        customerNumber: '82647',
        phoneNumber: '010-8359-5789',
        messageSubject: '예약정보확인',
        Caller: '홍길동',
        ReservationDateAndTime: '-',
        ShippingDateAndTime: '22-04-11 10:30',
        ShippingStatus: '성공',
      },
      {
        receiver: '박세라',
        customerNumber: '82647',
        phoneNumber: '010-8359-5789',
        messageSubject: '예약정보확인',
        Caller: '홍길동',
        ReservationDateAndTime: '-',
        ShippingDateAndTime: '22-04-11 10:30',
        ShippingStatus: '성공',
      },
    ];

    renderItem = (item: kakaoType, index: number) => (
      <tr key={index}>
        <td>
          <span> {index + 1} </span>
        </td>
        <td>
          <span> {item.receiver} </span>
        </td>
        <td>
          <span> {item.customerNumber} </span>
        </td>
        <td>
          <span> {item.phoneNumber} </span>
        </td>
        <td>
          <span> {item.messageSubject} </span>
        </td>
        <td>
          <span> {item.Caller} </span>
        </td>
        <td>
          <span> {item.ReservationDateAndTime} </span>
        </td>
        <td>
          <span> {item.ShippingDateAndTime} </span>
        </td>
        <td>
          <span> {item.ShippingStatus} </span>
        </td>
        <td>
          <Link to={`/notification/view/${subParam}/${index + 1}`} style={{ textDecoration: 'underline' }}>
            상세보기
          </Link>
        </td>
      </tr>
    );
  }else{ // default: setting
    column= [
      '메시지 제목',
      '메시지 내용',
      '사용 여부',
      '등록일',
      '수정하기'
    ]

    data = [
      {
        messageSubject: '예약정보확인',
        messageContent: '82647',
        use: '010-8359-5789',
        RegistrationDate: '예약정보확인',
      },
      {
        messageSubject: '박세라',
        messageContent: '82647',
        use: '010-8359-5789',
        RegistrationDate: '예약정보확인',
      },
    ];

    renderItem = (item: settingType, index: number) => (
      <tr key={index}>
        <td>
          <span> {index + 1} </span>
        </td>
        <td>
          <span> {item.messageSubject} </span>
        </td>
        <td>
          <span> {item.messageContent} </span>
        </td>
        <td>
          <span> {item.use} </span>
        </td>
        <td>
          <span> {item.RegistrationDate} </span>
        </td>
        <td>
          <Link to={`/notification/view/${subParam}/${index + 1}`} style={{ textDecoration: 'underline' }}>
            상세보기
          </Link>
        </td>
      </tr>
    );
  }

  const toggleSearchForm = () => {
    setSearchFormDisplay((prev) => !prev);
  };

  const navigate2WritePage = () => {
    navigate(`/notification/write/${subParam}`);
  };

  return (
    <div>
      <Flex align="center" gap={10}>
        <Input className={cx('wid-50')} size="large" placeholder="통합검색" prefix={<SearchPlusIcon />} />
        <TextButtonDropdown text="필터" onPress={toggleSearchForm} rotateIcon={searchFormDisplay} />
      </Flex>

      {searchFormDisplay && <AdvancedSearchForm />}

      <Flex justify="space-between" align="center" className={cx('mt-20', 'pr-30')}>
        <h5>
          <span className={cx('text-gray-scorpion')} > 카카오 알림톡 발송 내역</span>
          <span className={cx('text-primary')}>ㅣ총 2건 </span>
        </h5>
        <Button onClick={navigate2WritePage} > 차량 등록 </Button>
      </Flex>

      <ListTripTable column={column} data={data} renderItem={renderItem} />

      <Flex justify="flex-end" className={cx('mt-10', 'pr-30')}>
        <Button> 엑셀 다운로드 </Button>
      </Flex>
    </div>
  );
};

export default Body;
