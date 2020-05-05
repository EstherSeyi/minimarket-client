import React, {useState} from 'react';
import {Table} from 'antd';
import {DeleteTwoTone, EditTwoTone, LoadingOutlined} from '@ant-design/icons';

import {Container} from '../../components/container';

const columns = [
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
    title: 'Category',
    dataIndex: 'category',
  },
];

const data: any = [];
for (let i = 0; i < 20; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    age: 32,
    address: `London, Park Lane no. ${i}`,
  });
}

const App = () => {
  const [loading, setLoading] = useState(false);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  const start = () => {
    setLoading(true);
    // ajax request after empty completing
    setTimeout(() => {
      setSelectedRowKeys([]);

      setLoading(false);
    }, 1000);
  };

  const onSelectChange = (selectedRowKeys: any) => {
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    setSelectedRowKeys(selectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  const hasSelected = selectedRowKeys.length > 0;
  return (
    <Container>
      <div style={{marginBottom: 16}}>
        {loading ? (
          <LoadingOutlined />
        ) : (
          <DeleteTwoTone onClick={start} disabled={!hasSelected} />
        )}

        <EditTwoTone onClick={start} disabled={!hasSelected} />
        <span style={{marginLeft: 8}}>
          {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
        </span>
      </div>
      <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
    </Container>
  );
};

export default App;
