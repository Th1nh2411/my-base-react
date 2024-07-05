import CustomButton from '@base/components/CustomButton/CustomButton';
import SectionWrapper from '@base/components/SectionWrapper';
import { DatePicker, Flex, Form, Radio, Select } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import Title from 'antd/es/typography/Title';
import * as React from 'react';

export interface ISendKakaoProps {}

export default function SendKakao(props: ISendKakaoProps) {
  return (
    <Flex vertical align="center" gap={20} style={{ padding: 30 }}>
      <Form
        labelCol={{
          span: 3
        }}
        colon={false}
        style={{ width: '100%' }}
      >
        <Title level={5} style={{ color: 'var(--primary-color)', marginBottom: 15, marginLeft: 20 }}>
          카카오톡 알림 발송
        </Title>
        <SectionWrapper
          wrapperStyle={{ backgroundColor: '#F9F9F9', border: 'none' }}
          children={[
            {
              colNum: 1,
              content: (
                <Flex vertical gap={30}>
                  <Form.Item label="발송 항목">
                    <Select
                      defaultValue={1}
                      style={{ maxWidth: 120 }}
                      options={[
                        { value: 1, label: '선택' },
                        { value: 2, label: '2' }
                      ]}
                    />
                  </Form.Item>
                  <Form.Item label="발송 내용">
                    <TextArea rows={8} />
                  </Form.Item>
                  <Form.Item label="예약 발송">
                    <Radio.Group defaultValue={0} size="large">
                      <Radio value={0}>
                        예
                        <DatePicker style={{ marginLeft: 12 }} showTime showMinute showHour />
                      </Radio>

                      <Radio style={{ marginLeft: 32 }} value={1}>
                        아니오
                      </Radio>
                    </Radio.Group>
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
