import React from 'react';
import MoonLoader from 'react-spinners/MoonLoader';
import CSS from 'csstype';

const style: CSS.Properties = {
  position: 'fixed',
  top: '50%',
  left: ' 50%',
  transform: 'translate(-50%, -50%)',
};

const App: React.FC = () => {
  return (
    <div style={style}>
      <MoonLoader size={30} />
    </div>
  );
};

export default App;
