import { Button } from 'antd'
import React from 'react'
import classNames from 'classnames/bind'
import style from './style.module.css'
const cx = classNames.bind(style)

type Props = { text: string, onPress?: ()=>void }

const OutlineButton = ({ text,onPress }: Props) => {
  return (
    <Button className={cx('outline-button')} onClick={onPress} >{text}</Button>
  )
}

export default OutlineButton