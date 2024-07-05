import CustomButton from '@base/components/CustomButton/CustomButton';
import SectionWrapper from '@base/components/SectionWrapper';
import { DatePicker, Flex, Form, Radio, Select } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import Title from 'antd/es/typography/Title';
import Text from 'antd/es/typography/Text';
import Paragraph from 'antd/es/typography/Paragraph';

export interface IDeleteCustomerProps {}

export default function DeleteCustomer(props: IDeleteCustomerProps) {
  return (
    <Flex vertical align="center" gap={20} style={{ padding: 30 }}>
      <Form
        labelCol={{
          span: 3
        }}
        colon={false}
        style={{ width: '100%' }}
      >
        <div style={{ marginLeft: 15 }}>
          <Title level={5} style={{ color: 'var(--primary-color)' }}>
            고객 삭제 처리
          </Title>
          <Flex vertical style={{ margin: '10px 0' }}>
            <Text type="secondary">000님을 삭제 처리하시겠습니까?</Text>
            <Text type="secondary">삭제 시 모든 정보가 파기됩니다.</Text>
            <Text type="secondary">삭제 전 회원에게 재확인 부탁드립니다.</Text>
          </Flex>
        </div>
        <SectionWrapper
          wrapperStyle={{ backgroundColor: '#F9F9F9', border: 'none' }}
          children={[
            {
              colNum: 1,
              content: (
                <Flex vertical gap={30}>
                  <Form.Item label="삭제 사유">
                    <Select
                      placeholder="삭제 사유를 선택하세요"
                      style={{ maxWidth: 220 }}
                      options={[
                        { value: 1, label: '선택' },
                        { value: 2, label: '2' }
                      ]}
                    />
                  </Form.Item>
                  <Form.Item label="기타 사유">
                    <TextArea rows={6} placeholder="사유를 입력하시오 (최대 100자)" maxLength={100} />
                  </Form.Item>
                </Flex>
              )
            }
          ]}
        />
      </Form>
      <CustomButton round size="large" type="primary">
        등록하기
      </CustomButton>
    </Flex>
  );
}
