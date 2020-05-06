import React from 'react';
import {CaretRightOutlined, CaretLeftOutlined} from '@ant-design/icons';

import './style.css';
import img from '../../static/images/dummy.jpg';

const App = () => {
  const next = () => {};
  const back = () => {};

  return (
    <div className="main-image">
      <img src={img} alt="a man wearing goggles" />

      <div>
        <CaretLeftOutlined className="carousel-icon" />
        <CaretRightOutlined className="carousel-icon" />
      </div>
    </div>
  );
};

export default App;
