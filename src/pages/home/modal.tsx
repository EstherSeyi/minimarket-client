import React from 'react';
import {Modal} from 'antd';

import './modal.css';

interface ModalProps extends React.Props<HTMLDivElement> {
  btnText: string;
}

export function FormModal(props: ModalProps) {
  const [open, toggleModal] = React.useState(false);

  const showModal = () => toggleModal(true);
  const handleOk = () => toggleModal(false);
  const handleCancel = () => toggleModal(false);

  return (
    <>
      <button className="btn hero-btn" onClick={showModal}>
        {props.btnText}
      </button>
      <Modal
        title={props.btnText}
        visible={open}
        onOk={handleOk}
        onCancel={handleCancel}
        centered
      >
        {props.children}
      </Modal>
    </>
  );
}
