import styles from './AccidentHistory.module.css';
import SectionWrapper from '@base/components/SectionWrapper';
import { Button, Flex, Modal } from 'antd';
import Title from 'antd/es/typography/Title';
import { useState } from 'react';
import classNames from 'classnames/bind';
import AccidentItem from './AccidentItem';
import TextArea from 'antd/es/input/TextArea';
import DetailAccidentRegister from '../../dialogs/DetailAccidentRegister';
const cx = classNames.bind(styles);

export interface IAccidentHistoryProps {}

export default function AccidentHistory(props: IAccidentHistoryProps) {
  const [openDetail, setOpenDetail] = useState(false);

  const data = [
    {
      key: '0',
      status: '처리 상태',
      contNo: '계약번호',
      accidentTime: '사고 발생일시',
      operator: '운전자'
    },
    {
      key: '1',
      status: '접수',
      contNo: 82647,
      accidentTime: '2024-03-12 18:20',
      operator: '박세라'
    },
    {
      key: '2',
      status: '접수',
      contNo: 82647,
      accidentTime: '2024-03-12 18:20',
      operator: '박세라'
    },
    {
      key: '3',
      status: '접수',
      contNo: 82647,
      accidentTime: '2024-03-12 18:20',
      operator: '박세라'
    }
  ];
  return (
    <>
      <Modal width={1200} footer={false} centered open={openDetail} onCancel={() => setOpenDetail(false)}>
        <DetailAccidentRegister />
      </Modal>
      <Flex vertical gap={32}>
        <Flex align="center" gap={20} style={{ paddingInline: '18px' }}>
          <Title type="secondary" level={5}>
            <span style={{ color: 'var(--primary-color)' }}>총 1건</span> ㅣ 사고 내역
          </Title>
          <Button onClick={() => setOpenDetail(true)}>사고 등록</Button>
        </Flex>
        <ul className={cx('accident-wrapper')}>
          {data?.map((item, index) => (
            <AccidentItem key={index} data={item} isHeader={index === 0} />
          ))}
          <p style={{ textAlign: 'center' }}>1</p>
        </ul>
      </Flex>
    </>
  );
}
