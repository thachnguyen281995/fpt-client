import React, { useEffect } from 'react';
import { Select, Space } from 'antd';

const SelectDropDown = ({ setSort }) => {
  const handleChange = (value) => {
    setSort(value);
  };
  useEffect(() => {
    handleChange('price');
  }, []);
  return (
    <Space wrap>
      <Select
        defaultValue="Giá thấp đến cao"
        style={{
          width: 150
        }}
        onChange={handleChange}
        options={[
          {
            value: 'price',
            label: 'Giá thấp đến cao'
          },
          {
            value: '-price',
            label: 'Giá cao đến thấp'
          },
          {
            value: 'createdAt',
            label: 'Bán chạy nhất'
          }
        ]}
      />
    </Space>
  );
};
export default SelectDropDown;
