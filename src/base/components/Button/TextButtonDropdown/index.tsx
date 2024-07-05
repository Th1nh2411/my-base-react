import React from 'react'
import classNames from 'classnames'
import { CaretDownOutlined, CaretUpOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import style from './style.module.css'
const cx = classNames.bind(style)

type Props =  { 
    text: string, 
    onPress?: () => void, 
    rotateIcon?: boolean 
}

const TextButtonDropdown = ({ text, onPress, rotateIcon }: Props) => {
  return (
    <Button type="text" icon={rotateIcon ? <CaretUpOutlined /> : <CaretDownOutlined />} iconPosition='end' onClick={onPress} >
    {text}
  </Button>
  )
}

export default TextButtonDropdown