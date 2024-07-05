import React from 'react'
import { Input, Button, Flex, Select, Form, ConfigProvider } from 'antd';
import type { FormProps } from 'antd';
import classNames from 'classnames/bind'
import style from './style.module.css'
import CustomButton from '@base/components/CustomButton/CustomButton';
const cx = classNames.bind(style)

type Props = {}

const AdvancedSearchForm = (props: Props) => {
    const { Option } = Select;
    type FieldType = {
        username?: string;
        password?: string;
        remember?: string;
    };

    const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <>
            <div className={cx('advance-search-form')} >
                <ConfigProvider
                    theme={{
                        components: {
                            Select: {
                                selectorBg: '#F1F1F1'
                            },
                        },
                    }}
                >
                    <Form
                        name="basic"
                        layout='horizontal'
                        labelCol={{ span: 4 }}
                        wrapperCol={{ span: 10 }}
                        labelAlign='right'
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                    >
                        <Flex>
                            {/* left */}
                            <div className={cx('advance-search-form__item')} >
                                <Form.Item
                                    label="이름"
                                // name="username"
                                // rules={[{ required: true, message: 'Please input here!' }]}
                                >
                                    <div className={cx('ml-10')} >
                                        <Input className={cx('bg-gray-2')} />
                                    </div>
                                </Form.Item>

                                <Form.Item
                                    label="등록차량"
                                >
                                    <div className={cx('ml-10')} >
                                        <Input />
                                    </div>
                                </Form.Item>

                                <Form.Item
                                    label="계약 기간"
                                >
                                    <div className={cx('ml-10')} >
                                        <Input />
                                    </div>
                                </Form.Item>
                            </div>

                            {/* right */}
                            <div className={cx('advance-search-form__item')} >
                                <Form.Item label="전화번호">
                                    <div className={cx('ml-10')} >
                                        <Input />
                                    </div>
                                </Form.Item>

                                <Form.Item
                                    label="계약 등록일"
                                    // name="password"
                                    layout="horizontal"
                                    wrapperCol={{ span: 6 }}
                                // rules={[{ required: true, message: 'Please input your password!' }]}
                                >
                                    <div className={cx('ml-10')}>
                                        <Select
                                            defaultValue="male"
                                            // onChange={onGenderChange}
                                            allowClear
                                        >
                                            <Option value="male">선택</Option>
                                            <Option value="female">선택</Option>
                                            <Option value="other">선택</Option>
                                        </Select>
                                    </div>
                                </Form.Item>

                                <Form.Item
                                    label="계약 상태"
                                    wrapperCol={{ span: 10 }}
                                >
                                    <Flex align='center' gap={10} className={cx('ml-10')}>
                                        <Input className={cx('bg-gray-2')} />
                                        <div>~</div>
                                        <Input className={cx('bg-gray-2')} />
                                    </Flex>
                                </Form.Item>
                            </div>
                        </Flex>
                    </Form>
                </ConfigProvider>
            </div>
            <Flex justify='center' style={{ marginTop: '14px' }} >
                <CustomButton round size="large" type="primary" htmlType="submit">
                    검색
                </CustomButton>
            </Flex>

        </>
    )
}

export default AdvancedSearchForm