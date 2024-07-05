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
                        labelAlign='right'
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                    >
                        <Flex >
                            {/* left */}
                            <div className={cx('advance-search-form__item_left')} >
                                <Form.Item
                                    label="아이디"
                                >
                                    <div className={cx('ml-25')} >
                                        <Input />
                                    </div>
                                </Form.Item>

                                <Form.Item
                                    label="발송 내용"
                                    layout='horizontal'
                                    labelCol={{ span: 4 }}
                                    wrapperCol={{ span: 7 }}
                                >
                                    <div className={cx('ml-25')} >
                                        <Select
                                            defaultValue='male'
                                            allowClear
                                            className={cx('select-input')}
                                        >
                                            <Option value="male">선택</Option>
                                            <Option value="female">선택</Option>
                                            <Option value="other">선택</Option>
                                        </Select>
                                    </div>

                                </Form.Item>
                            </div>

                            {/* right */}
                            <div className={cx('advance-search-form__item_right')} >
                                <Form.Item
                                    label="휴대폰번호"
                                    labelCol={{ span: 3 }}
                                    wrapperCol={{ span: 12 }}
                                >
                                    <div className={cx('ml-25')} >
                                        <Input />
                                    </div>
                                </Form.Item>

                                <Flex>
                                    <Form.Item
                                        style={{ flex: '1' }}
                                        labelCol={{ span: 6 }}
                                        wrapperCol={{ span: 12 }}
                                        label="발송 일시"
                                    >
                                        <div className={cx('ml-25')} >
                                            <Input />
                                        </div>
                                    </Form.Item>

                                    <Form.Item
                                        style={{ flex: '1' }}
                                        wrapperCol={{ span: 12 }}
                                        label="발신자"
                                    >
                                        <div className={cx('ml-25')} >
                                            <Input />
                                        </div>
                                    </Form.Item>
                                </Flex>
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