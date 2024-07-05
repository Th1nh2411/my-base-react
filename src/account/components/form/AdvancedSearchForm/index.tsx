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
                        <Flex>
                            <Form.Item
                                label="관리자 번호"
                                style={{flex:'1'}}
                                wrapperCol={{ span: 15 }}
                            >
                                <div className={cx('ml-25')} >
                                    <Input />
                                </div>
                            </Form.Item>


                            <Form.Item
                                label="관리자 ID"
                                style={{flex:'1'}}
                                wrapperCol={{ span: 15 }}
                            >
                                <div className={cx('ml-25')} >
                                    <Input />
                                </div>
                            </Form.Item>


                            <Form.Item
                                label="관리자명"
                                style={{flex:'1'}}
                                wrapperCol={{ span: 15 }}
                            >
                                <div className={cx('ml-25')} >
                                    <Input />
                                </div>
                            </Form.Item>
                        </Flex>

                        <Form.Item
                            label="연락처"
                            style={{marginLeft:'21px'}}
                            labelCol={{span: 1}}
                            wrapperCol={{ span: 5 }}
                        >
                            <div className={cx('ml-25')} >
                                <Input />
                            </div>
                        </Form.Item>
                    </Form>
                </ConfigProvider>
            </div>
            <Flex justify='center' style={{ marginTop: '14px' }} >
                <CustomButton round size="large" type="primary" htmlType="submit" >
                    검색
                </CustomButton>
            </Flex>
        </>
    )
}

export default AdvancedSearchForm