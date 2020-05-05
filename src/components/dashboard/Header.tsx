import React from 'react';
import {PageHeader, Button} from 'antd';

const App = (props: {
  handleDash: any;
  dashState: any;
  handleCreate: any;
  handleSelectionType: any;
}) => {
  const {dashState} = props;

  return (
    <div className="site-page-header-ghost-wrapper">
      <PageHeader
        ghost={false}
        onBack={() => props.handleDash()}
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
            onClick={() => props.handleCreate(true)}
            disabled={dashState.create || dashState.edit}
          >
            Create Market
          </Button>,
          <Button
            key="3"
            onClick={() => props.handleSelectionType()}
            disabled={dashState.edit || dashState.create}
          >
            Edit
          </Button>,
          <Button key="2">Logout</Button>,
        ]}
      ></PageHeader>
    </div>
  );
};

export default App;
