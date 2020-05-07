import React, {useState} from 'react';
import {CaretRightOutlined, CaretLeftOutlined} from '@ant-design/icons';

import './style.css';
import img from '../../static/images/dummy.jpg';

const App = (props: any) => {
  const [num, setNum] = useState(0);

  // console.log(props.images);

  const next = () => {
    console.log('clicked');
    if (num < 2) {
      setNum(prevState => prevState + 1);
    } else {
      setNum(0);
    }
  };
  const prev = () => {
    if (num > 0) {
      setNum(prevState => prevState - 1);
    } else {
      setNum(2);
    }
  };

  return (
    <div className="main-image">
      <div className="carousel-image">
        <img src={props.images ? props.images[num] : img} alt="market photos" />
      </div>

      <div className="carets">
        <CaretLeftOutlined className="carousel-icon" onClick={() => prev()} />
        <CaretRightOutlined className="carousel-icon" onClick={() => next()} />
      </div>
    </div>
  );
};

export default App;
