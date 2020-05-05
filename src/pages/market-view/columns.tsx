import React from 'react';
import Tag from 'antd/lib/tag';
import LinkOutlined from '@ant-design/icons/LinkOutlined';

export const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Description',
    dataIndex: 'description',
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
  {
    title: 'Food Category',
    dataIndex: 'foodCategory',
    key: 'foodCategory',
    render: (text: string) => <Tag color={'geekblue'}>{text}</Tag>,
  },
  {
    title: 'Images',
    dataIndex: 'images',
    key: 'image',
    render: (text: string) => (
      <a href={text}>
        <LinkOutlined />
      </a>
    ),
  },
];
