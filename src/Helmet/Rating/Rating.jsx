import React, { useState } from 'react';
import { Rate } from 'antd';
import './styles.css';
// disabled defaultValue={2}
const Rating = ({customSize}) => {
  return <Rate className='text-base' />;
};

export default Rating;
