import {
  Input,
  Button,
  Flex,
  Dropdown,
  Space,
  Radio,
  RadioChangeEvent,
  Form,
  Select,
  Row,
  Col,
  Typography,
  DatePicker,
  Divider
} from 'antd';
import { PlusCircleIcon } from '@base/assets/icons';
import { CloseOutlined } from '@ant-design/icons';
import Text from 'antd/es/typography/Text';
import SectionWrapper from '@base/components/SectionWrapper';
import CustomButton from '@base/components/CustomButton/CustomButton';
import { PAYMENT_URL } from '@member/constants';
import CustomSelect from '@base/components/CustomSelect/CustomSelect';
import { useState } from 'react';
export interface IRegisterPaymentMethodProps {}
type CardPaymentType = {
  id: number;
  name: string;
  phone: string;
  address: string;
  email: string;
};
type BankAccountType = {
  id: number;
  accountNum: string;
};
export default function RegisterPaymentMethod(props: IRegisterPaymentMethodProps) {
  const initCardPayment: CardPaymentType = {
    id: 1,
    name: '-',
    phone: '-',
    address: '-',
    email: '-'
  };
  const initBankAccount: BankAccountType = {
    id: 1,
    accountNum: ''
  };
  const [cardPaymentList, setCardPaymentList] = useState<Array<CardPaymentType>>([initCardPayment]);
  const [bankAccountList, setBankAccountList] = useState<Array<BankAccountType>>([initBankAccount]);
  const handleDeleteCard = (indexCard: number) => {
    const newCardList = cardPaymentList.slice();
    newCardList.splice(indexCard, 1);
    setCardPaymentList(newCardList);
  };
  const handleDeleteAccount = (indexAccount: number) => {
    const newAccountList = bankAccountList.slice();
    newAccountList.splice(indexAccount, 1);
    setBankAccountList(newAccountList);
  };
  const getNextId = (list: { id: number }[]) => {
    return list.length ? Math.max(...list.map((item) => item.id)) + 1 : 1;
  };
  return (
    <>
      <Flex gap={20} align="start">
        <Flex gap={8} vertical align="end">
          <Text style={{ whiteSpace: 'nowrap' }} type="secondary">
            카드
          </Text>
          <PlusCircleIcon
            className="hovered"
            onClick={() => setCardPaymentList((prev) => [...prev, { ...initCardPayment, id: getNextId(cardPaymentList) }])}
          />
        </Flex>
        <Flex vertical gap={15} style={{ width: '100%' }}>
          {cardPaymentList.map((item, index) => (
            <CardPayment key={index} handleDeleteItem={() => handleDeleteCard(index)} data={item} />
          ))}
        </Flex>
      </Flex>
      <Flex gap={20} align="start">
        <Flex gap={8} vertical align="end">
          <Text style={{ whiteSpace: 'nowrap' }} type="secondary">
            계좌
          </Text>
          <PlusCircleIcon
            className="hovered"
            onClick={() => setBankAccountList((prev) => [...prev, { ...initBankAccount, id: getNextId(bankAccountList) }])}
          />
        </Flex>
        <Flex vertical gap={15} style={{ width: '100%' }}>
          {bankAccountList.map((item, index) => (
            <BankAccount key={index} handleDeleteItem={() => handleDeleteAccount(index)} data={item} />
          ))}
        </Flex>
      </Flex>
    </>
  );
}
interface CardPaymentProps {
  data: CardPaymentType;
  handleDeleteItem: VoidFunction;
  [key: string]: any;
}
function CardPayment({ data, handleDeleteItem }: CardPaymentProps) {
  const [isPay, setIsPay] = useState<boolean>();
  const handlePayment = () => {
    window.open(PAYMENT_URL, '_blank');
    setIsPay(true);
  };
  return (
    <SectionWrapper
      size="small"
      wrapperStyle={{ borderColor: '#b4b4b4' }}
      children={[
        {
          content: (
            <div>
              <Button type="text" className="top-right-corner-sm" onClick={handleDeleteItem}>
                <CloseOutlined />
              </Button>
              <CustomButton active={isPay} onClick={handlePayment} style={{ marginBottom: 10 }}>
                카드 추가
              </CustomButton>
              <Row gutter={[20, 24]}>
                <Col md={6}>
                  <Form.Item name={`name_${data.id}`} labelCol={{ span: '' }} label="계약자 이름">
                    {data.name}
                  </Form.Item>
                </Col>
                <Col md={6}>
                  <Form.Item name={`phone_${data.id}`} labelCol={{ span: '' }} label="계약자 전화번호">
                    {data.phone}
                  </Form.Item>
                </Col>
                <Col md={6}>
                  <Form.Item name={`address_${data.id}`} labelCol={{ span: '' }} label="계약자 주소">
                    {data.address}
                  </Form.Item>
                </Col>
                <Col md={6}>
                  <Form.Item name={`email_${data.id}`} labelCol={{ span: '' }} label="계약자 이메일">
                    {data.email}
                  </Form.Item>
                </Col>
              </Row>
            </div>
          )
        }
      ]}
    />
  );
}
interface BankAccountProps {
  data: BankAccountType;
  handleDeleteItem: VoidFunction;
  [key: string]: any;
}
function BankAccount({ data, handleDeleteItem }: BankAccountProps) {
  return (
    <SectionWrapper
      size="small"
      wrapperStyle={{ borderColor: '#b4b4b4' }}
      children={[
        {
          content: (
            <>
              <Button type="text" className="top-right-corner-sm" onClick={handleDeleteItem}>
                <CloseOutlined />
              </Button>
              <Flex gap={20}>
                <Form.Item name={`bankCode_${data.id}`}>
                  <CustomSelect
                    type="primary"
                    placeholder="은행"
                    style={{ width: 150 }}
                    options={[
                      { value: 1, label: 'NH 농협' },
                      { value: 2, label: 'NH 농협2' }
                    ]}
                  />
                </Form.Item>
                <Form.Item name={`accountNum_${data.id}`} label="계좌번호">
                  <Flex gap={5} align="center">
                    <Input style={{ maxWidth: 100 }} />
                    <Text>-</Text>
                    <Input style={{ maxWidth: 150 }} />
                    <Text>-</Text>
                    <Input style={{ maxWidth: 150 }} />
                    <Text>-</Text>
                    <Input style={{ maxWidth: 100 }} />
                  </Flex>
                </Form.Item>
              </Flex>
            </>
          )
        }
      ]}
    />
  );
}
