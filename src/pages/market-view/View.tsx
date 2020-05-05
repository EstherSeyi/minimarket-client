import React, {useState, useEffect} from 'react';
import Table from 'antd/lib/table';
import {DeleteTwoTone, LoadingOutlined, LinkOutlined} from '@ant-design/icons';
import {connect, useSelector} from 'react-redux';
import Tag from 'antd/lib/tag';

import {Container} from '../../components/container';
import getMarkets, {deleteMarkets} from '../../redux/actions/market.action';
import Header from '../../components/dashboard/Header';
import CreateMarket from '../../components/dashboard/CreateMarket';

//EditTwoTone,

const App = (props: {getMarkets: any; deleteMarkets: any}) => {
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

  const {markets} = useSelector(
    (markets: {markets: {loading: boolean; data: any}}) => markets,
  );
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const handleForm = () => {
    setShowForm(prevState => !prevState);
  };

  const {data, loading} = markets;

  useEffect(() => {
    props.getMarkets();
  }, [props]);

  const del = async () => {
    await props.deleteMarkets(selectedRowKeys);
  };

  const onSelectChange = (selectedRowKeys: any) => {
    setSelectedRowKeys(selectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  const hasSelected = selectedRowKeys.length > 0;
  return (
    <Container>
      <Header handleForm={handleForm} showForm={showForm} />

      {!showForm ? (
        <>
          <div style={{marginBottom: 16}}>
            {loading ? (
              <LoadingOutlined />
            ) : (
              <DeleteTwoTone onClick={del} disabled={!hasSelected} />
            )}

            <span style={{marginLeft: 8}}>
              {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
            </span>
          </div>
          <Table
            rowSelection={rowSelection}
            columns={columns}
            dataSource={data.map((item: any) => {
              return {
                key: item._id,
                description: item.description,
                foodCategory: item.foodCategory,
                name: item.name,
                address: item.address,
                images: item.images[0],
              };
            })}
          />
        </>
      ) : (
        <CreateMarket />
      )}
    </Container>
  );
};

const mapDispatchToProps = {
  getMarkets,
  deleteMarkets,
};

export default connect(null, mapDispatchToProps)(App);
