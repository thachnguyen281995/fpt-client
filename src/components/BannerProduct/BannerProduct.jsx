import React from 'react';
import { Carousel } from 'antd';
import './styles.css';
const contentStyle = {
  height: '160px',
  lineHeight: '160px',
  textAlign: 'center'
};
const BannerProduct = ({imageCarousel}) => {
  return (
    <div className="max-w-2xl lg:container py-3 mx-auto">
      <div className="rounded-md">
        <Carousel autoplay>
         {imageCarousel.map((item,index) => (
           <div style={contentStyle} key={index}>
           <img
             src={item}
             alt=""
           />
         </div>
         ))}
        </Carousel>
      </div>
    </div>
  );
};

export default BannerProduct;
