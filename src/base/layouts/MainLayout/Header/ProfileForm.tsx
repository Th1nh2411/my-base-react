import { Button, Flex, Form, Input, Radio } from 'antd';
import { FormProps, useForm } from 'antd/es/form/Form';
import Title from 'antd/es/typography/Title';
import Text from 'antd/es/typography/Text';
import * as React from 'react';
import useAuth from '@base/hooks/useAuth';
import { CloseOutlined } from '@ant-design/icons';
import useToast from '@base/hooks/useToast';

export interface IProfileFormProps {
  handleClose: VoidFunction;
}

export default function ProfileForm(props: IProfileFormProps) {
  const { user } = useAuth();
  const { showToast } = useToast();
  const [profileForm] = useForm();
  const onSubmit = (values: any) => {
    console.log('Success:', values);
    showToast({ content: 'Success updating user information', type: 'success' });
  };

  return (
    <div style={{ padding: '15px 20px' }}>
      <Flex justify="space-between" align="center" style={{ marginBottom: 15 }}>
        <Title level={5} style={{ color: '#6D6D6D' }}>
          내 프로필 수정
        </Title>
        <Button type="text" onClick={props.handleClose}>
          <CloseOutlined />
        </Button>
      </Flex>
      <Form
        form={profileForm}
        onFinish={onSubmit}
        labelCol={{
          span: 8
        }}
        colon={false}
        initialValues={{
          name: user?.firstName,
          phoneNumber: user?.phoneNumber || '0920240624',
          email: user?.email,
          notificationOption: user?.notificationOption || '0'
        }}
      >
        <Flex justify="center" align="center" vertical>
          <div style={{ width: 500, padding: '15px 40px', backgroundColor: '#F9F9F9', borderRadius: 20 }}>
            <Form.Item label="ID" name="ID">
              <Text>{user?.username}</Text>
            </Form.Item>
            <Form.Item label="비밀번호" name="password">
              <Input.Password name="pw" placeholder="비밀번호" />
            </Form.Item>
            <Form.Item
              dependencies={['password']}
              rules={[
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if ((getFieldValue('password') || value) && getFieldValue('password') !== value) {
                      return Promise.reject(new Error('Confirm password do not match!'));
                    }
                    return Promise.resolve();
                  }
                })
              ]}
              label="비밀번호 확인"
              name="confirmPassword"
            >
              <Input.Password placeholder="비밀번호 확인" />
            </Form.Item>
            <Form.Item label="이름" name="name" rules={[{ required: true }]}>
              <Input placeholder="이름" />
            </Form.Item>
            <Form.Item
              label="휴대폰 번호"
              name="phoneNumber"
              rules={[{ pattern: /^[0-9]+$/, message: 'Phone number only contains number' }, { required: true }]}
            >
              <Input placeholder="휴대폰 번호" />
            </Form.Item>
            <Form.Item label="이메일" name="email" rules={[{ type: 'email' }, { required: true }]}>
              <Input placeholder="이메일" />
            </Form.Item>
            <Form.Item label="법인 가입 알림" name="notificationOption">
              <Radio.Group>
                <Radio value={'0'}>받지 않음</Radio>
                <Radio value={'kakao'}>카카오톡</Radio>
              </Radio.Group>
            </Form.Item>
          </div>
          <Button size="large" type="primary" style={{ marginTop: 12 }} htmlType="submit">
            수정하기
          </Button>
        </Flex>
      </Form>
    </div>
  );
}
