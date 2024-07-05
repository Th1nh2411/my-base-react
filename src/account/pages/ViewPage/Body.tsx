import styles from './style.module.css';
import { ButtonProps } from 'antd/lib/button';
import { Flex, Form, Row, Col, DatePicker, Tabs, TabsProps, Button, Modal } from 'antd';
import Text from 'antd/es/typography/Text';
import classNames from 'classnames';
import Title from 'antd/es/typography/Title';
import SectionWrapper from '@base/components/SectionWrapper';
import { EditOutlined } from '@ant-design/icons';
import { useState } from 'react';
import MemberDeletionForm from '@account/components/form/MemberDeletionForm';
const cx = classNames.bind(styles);
type Props = {};

const Body = (props: Props) => {
  const [isMemberDeletionFormOpen, setIsMemberDeletionFormOpen] = useState<boolean>(false)

  const showMemberDeletionForm = () => {
    setIsMemberDeletionFormOpen(true)
  }

  const handleCancelMemberDeletionForm = () => {
    setIsMemberDeletionFormOpen(false)
  }

  return (
    <Form
      colon={false}
      wrapperCol={{
        span: 12
      }}
      labelCol={{
        span: 2
      }}
    >
      <Modal width={1000} centered footer={false} open={isMemberDeletionFormOpen} onCancel={handleCancelMemberDeletionForm}>
        <MemberDeletionForm/>
      </Modal>
      <SectionWrapper
        title="기본 정보"
        titleAction={
          <Flex gap={10}>
            <Button onClick={showMemberDeletionForm} >회원 삭제 처리</Button>
          </Flex>
        }
        wrapperStyle={{ position: 'relative' }}
        children={[
          {
            content: (
              <>
                <Flex vertical gap={22} >
                  <Form.Item label="관리자 번호"> <span style={{ marginLeft: 50 }}  >50826</span> </Form.Item>
                  <Form.Item label="관리자 ID"> <span style={{ marginLeft: 50 }}  >taehokim6</span> </Form.Item>
                  <Form.Item label="관리자명"> <span style={{ marginLeft: 50 }}  >김태호</span> </Form.Item>
                  <Form.Item label="연락처"> <span style={{ marginLeft: 50 }}  >01020508800</span> </Form.Item>
                  <Form.Item label="이메일"> <span style={{ marginLeft: 50 }}  >taeho_kim@koion.com</span> </Form.Item>
                </Flex>

                <Button type="link" icon={<EditOutlined />} style={{ position: 'absolute', top: 10, right: 10, color: 'var(--gray-scorpion)' }} >
                  수정하기
                </Button>
              </>
            )
          }
        ]}
      />
    </Form >
  );
};

export default Body;
