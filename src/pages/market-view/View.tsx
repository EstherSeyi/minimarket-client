import React, {useState, useEffect} from 'react';
import Table from 'antd/lib/table';
import {DeleteTwoTone, LoadingOutlined} from '@ant-design/icons';
import {connect, useSelector} from 'react-redux';

import {Container} from '../../components/container';
import getMarkets, {deleteMarkets} from '../../redux/actions/market.action';
import Header from '../../components/dashboard/Header';
import CreateMarket from '../../components/dashboard/CreateMarket';
import {columns} from './columns';
import UpdateMarket from '../../components/dashboard/UpdateMarket';

const App = (props: {getMarkets: any; deleteMarkets: any}) => {
  const {markets} = useSelector(
    (markets: {markets: {loading: boolean; data: any}}) => markets,
  );

  const [dashState, setDashState] = useState({
    create: false,
    edit: false,
    dash: true,
  });

  const handleCreate = () => {
    setDashState(prevState => ({
      ...prevState,
      create: true,
      edit: false,
      dash: false,
    }));
  };

  const handleEdit = () => {
    setDashState(prevState => ({
      ...prevState,
      create: false,
      edit: true,
      dash: false,
    }));
  };

  const handleDash = () => {
    setDashState(prevState => ({
      ...prevState,
      create: false,
      edit: false,
      dash: true,
    }));
  };

  const [updateMarket, setUpdateMarket] = useState({});
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  const [selectionType, setSelectionType] = useState<any>('checkbox');

  const handleSelectionType = () => {
    setSelectionType('radio');
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

    if (selectionType === 'radio') {
      setUpdateMarket(
        data.find((item: any) => item._id === selectedRowKeys[0]),
      );

      handleEdit();
      return;
    }
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  const hasSelected = selectedRowKeys.length > 0;
  return (
    <Container>
      <Header
        handleSelectionType={handleSelectionType}
        handleDash={handleDash}
        handleCreate={handleCreate}
        dashState={dashState}
      />

      {dashState.dash ? (
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
            rowSelection={{
              type: selectionType,
              ...rowSelection,
            }}
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
      ) : dashState.create ? (
        <CreateMarket />
      ) : (
        <UpdateMarket data={updateMarket} />
      )}
    </Container>
  );
};

const mapDispatchToProps = {
  getMarkets,
  deleteMarkets,
};

export default connect(null, mapDispatchToProps)(App);
