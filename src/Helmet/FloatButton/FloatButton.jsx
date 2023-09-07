import React from 'react';
import { FloatButton } from 'antd';
const FloatButtonTop = () => {
  return (
    <>
      <FloatButton.Group
        shape="circle"
        style={{
          right: 24
        }}
      >
        <FloatButton.BackTop visibilityHeight={100} />
      </FloatButton.Group>
     
    </>
  );
};

export default FloatButtonTop;
