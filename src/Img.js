import React from 'react';

const Img = (props) => {
  return (
    <img
      className={'img'}
      src={'img/' + props.name + '/' + props.number + '.jpg'}
      alt="img"
    />
  );
};

export default Img;
