import Text from 'antd/es/typography/Text';
import styles from './CustomTree.module.css';
import classNames from 'classnames/bind';
import { Button, ConfigProvider, Divider, Flex } from 'antd';
import { CSSProperties, ReactNode, useState } from 'react';
import { EditFilled } from '@ant-design/icons';
import { FolderIcon, FolderOpenedIcon } from '@base/assets/icons';
const cx = classNames.bind(styles);
export interface TreeType {
  children: Array<TreeType> | null;
  label: string;
}
export interface ICustomTreeProps {
  data: Array<{ label: string; children?: Array<any> }>;
}

export default function CustomTree(props: ICustomTreeProps) {
  const renderTreeNodes = (nodes: Array<any>, isChild = true) => {
    return nodes.map((node, index) => (
      <TreeNode key={index} isChild={isChild} label={node.label}>
        {node.children && renderTreeNodes(node.children)}
      </TreeNode>
    ));
  };

  return (
    <Flex vertical gap={15}>
      {renderTreeNodes(props.data, false)}
    </Flex>
  );
}
interface TreeNodeProps {
  isChild?: boolean;
  label: string;
  children?: any;
}
const TreeNode: React.FC<TreeNodeProps> = ({ isChild, label, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    if (children?.length) {
      setIsOpen(!isOpen);
    }
  };

  return (
    <div>
      <Flex align="center" className={cx('node', { isChild, hasChild: children?.length })} gap={10} onClick={handleToggle}>
        {isOpen ? <FolderOpenedIcon /> : <FolderIcon />}
        <Text>{label}</Text>
      </Flex>
      {isOpen && (
        <Flex vertical gap={12} style={{ marginLeft: '74px', marginTop: 15 }}>
          {children}
        </Flex>
      )}
    </div>
  );
};
