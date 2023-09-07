import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { AiOutlineStar } from 'react-icons/ai';
import { featureProduct } from '../../assets/data/index';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';
const ProductFeature = () => {
  return (
    <>
      <Swiper
        slidesPerView={4}
        // centeredSlides={true}
        spaceBetween={30}
        navigation={true}
        modules={[Pagination, Navigation]}
        
        className="mySwiperFeature"
      >
        {featureProduct.map((item) => {
          return (
              <SwiperSlide key={item.id} className='shadow-md w-full h-full'>
                <div className="card">
                  <div className=''>
                    <h3 className="text-text1d font-sans font-semibold">{item.name}</h3>
                  </div>
                  <div className="card-image max-w-[300px] h-[250px] p-5">
                    <img src={item.imgFeature} alt="" />
                  </div>
                </div>
              </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};
export default ProductFeature;
