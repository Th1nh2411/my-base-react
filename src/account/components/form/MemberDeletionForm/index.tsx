import React from 'react'
import SectionWrapper from '@base/components/SectionWrapper'
import { DatePicker, Flex, Form, Radio, Select } from 'antd'
import TextArea from 'antd/es/input/TextArea'
import Title from 'antd/es/typography/Title';
import CustomButton from '@base/components/CustomButton/CustomButton';

type Props = {}

const MemberDeletionForm = (props: Props) => {
    const messages = [
        '000님(ID:00000)을 삭제 처리하시겠습니까?',
        '삭제 시 모든 정보가 파기됩니다.',
        '삭제 전 회원에게 재확인 부탁드립니다.'
    ]


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
                    회원 삭제 처리
                </Title>
                <div style={{marginBottom:14, marginLeft:20}} >
                    {messages && messages.map( (message:string) => <p style={{color:'var(--gray-scorpion)'}} > {message} </p> )}
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
                                            defaultValue={1}
                                            style={{ maxWidth: 200 }}
                                            options={[
                                                { value: 1, label: '삭제 사유를 선택하세요' },
                                                { value: 2, label: '2' }
                                            ]}
                                        />
                                    </Form.Item>
                                    <Form.Item label="기타 사유">
                                        <TextArea rows={8} />
                                    </Form.Item>
                                </Flex>
                            )
                        }
                    ]}
                />
            </Form>
            <CustomButton round size="large" active>
                등록하기
            </CustomButton>
        </Flex>
    )
}

export default MemberDeletionForm