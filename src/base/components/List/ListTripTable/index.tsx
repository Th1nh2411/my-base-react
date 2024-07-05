import React, { ReactNode } from 'react'
import { Flex } from 'antd'
import classNames from 'classnames/bind'
import style from './style.module.css'
const cx = classNames.bind(style)

type Props = {
    column: string[],
    data: any[],
    renderItem: (item: any, index: number) => ReactNode,
    title?: string,
    headerAction?: JSX.Element[],
    footerAction?: JSX.Element[],
    footerPosition?: 'mid' | 'left' | 'right'
}

const ListTripTable = ({ column, data, renderItem, title, headerAction, footerAction, footerPosition }: Props) => {


    const renderHeaderAction = () => {
        return headerAction?.map(element => element)
    }

    const renderFooterAction = () => {
        return footerAction?.map(element => element)
    }

    const getPosition = (footerPosition: 'mid' | 'left' | 'right' = 'right') => {
        switch (footerPosition) {
            case 'mid':
                return 'center'
            case 'left':
                return 'flex-start'
            default:
                return 'flex-end'
        }
    }

    return (
        <div>
            <Flex justify="space-between" align="center" className={cx('mt-20', 'pr-30')}>
                <h5>
                    {title && <span className={cx('text-gray-scorpion')} > title</span>}
                    {title && <span className={cx('text-primary')}>ㅣ총 2건 </span>}
                </h5>
                {headerAction && <Flex gap={8}> { renderHeaderAction()} </Flex> }
            </Flex>
            <div className={cx('list-trip-table')} >
                <table >
                    <thead>
                        <tr>
                            {column.map((item, index) => <th key={index} > {item} </th>)}
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(renderItem)}
                    </tbody>
                </table>
                <div className={cx('div-center')} >1</div>
            </div>
            {
                footerAction && <Flex justify={getPosition(footerPosition)} gap={8} className={cx('mt-10', 'pr-30')}>
                    {renderFooterAction()}
                </Flex>
            }
        </div>

    )
}

export default ListTripTable