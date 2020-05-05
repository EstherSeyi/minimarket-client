import React from 'react';
import {PageHeader, Button} from 'antd';

const App = (props: {handleForm: any; showForm: any}) => {
  return (
    <div className="site-page-header-ghost-wrapper">
      <PageHeader
        ghost={false}
        onBack={() => props.handleForm()}
        title={props.showForm ? 'Create Market' : 'Dashboard'}
        subTitle="This is a subtitle"
        extra={[
          <Button
            key="1"
            type="primary"
            onClick={() => props.handleForm()}
            disabled={props.showForm}
          >
            Create Market
          </Button>,
          <Button key="3">Edit</Button>,
          <Button key="2">Logout</Button>,
        ]}
      ></PageHeader>
    </div>
  );
};

export default App;
