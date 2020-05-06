import React from 'react';

import {PageHeader, Button} from 'antd';
import {useDispatch} from 'react-redux';

import {signout} from '../../redux/actions/login.action';

const App = ({
  handleDash,
  dashState,
  handleCreate,
  handleSelectionType,
}: {
  handleDash: any;
  dashState: any;
  handleCreate: any;
  handleSelectionType: any;
}) => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(signout());
  };

  return (
    <div className="site-page-header-ghost-wrapper">
      <PageHeader
        ghost={false}
        onBack={() => handleDash()}
        title={
          dashState.create
            ? 'Create Market'
            : dashState.edit
            ? 'Edit Market'
            : 'Dashboard'
        }
        subTitle="This is a subtitle"
        extra={[
          <Button
            key="1"
            type="primary"
            onClick={() => handleCreate(true)}
            disabled={dashState.create || dashState.edit}
          >
            Create Market
          </Button>,
          <Button
            key="3"
            onClick={() => handleSelectionType()}
            disabled={dashState.edit || dashState.create}
          >
            Edit
          </Button>,
          <Button key="2" onClick={handleLogout}>
            Logout
          </Button>,
        ]}
      ></PageHeader>
    </div>
  );
};

export default App;
