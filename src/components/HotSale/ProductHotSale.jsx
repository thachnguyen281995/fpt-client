import React from 'react';
import { FaHotjar } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Countdown from '../../Helmet/CountDown/CountDown';
import { Link, useLocation } from 'react-router-dom';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
// Import Swiper styles
import './styles.css';
import Promo from '../../Helmet/Promo/Promo';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getAllProducts } from '../../features/products/productSlice';
const ProductHotSale = () => {
  const targetDate = new Date('2023-07-25T23:59:59');
  const targetDate1 = new Date('2023-07-21T23:59:59');
  const targetDate2 = new Date('2023-07-20T23:59:59');
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);
  const stateProduct = useSelector((state) => state.product.product);
  if (stateProduct.length > 0) {
    var hotSaleProduct = stateProduct.filter((item) => item.tags === 'hot-sale');
  }
  let VNDong = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND'
  });
  return (
    <div className="bg-white rounded-md shadow-md flex flex-col p-4">
      <div className="title flex items-center gap-x-2 mb-5">
        <FaHotjar className="text-red-600" size={30} />
        <h3 className="uppercase text-redcb font-semibold text-xl">Khuyến Mãi Hot</h3>
      </div>
      <Swiper
        slidesPerView={4}
        spaceBetween={20}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={{
          clickable: true
        }}
        modules={[Navigation,Autoplay, Pagination]}
        className="mySwiper1"
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          400:{
            slidesPerView:1,
          },
          639: {
            slidesPerView: 3,
          },
          865:{
            slidesPerView:3
          },
          1000:{
            slidesPerView:4
          },
          1500:{  
            slidesPerView:4
          },
          
        }}
      >
      
        {stateProduct.length > 0 &&
          hotSaleProduct.reverse().map((item) => {
            const targetDate = new Date(item.targetDate);
            return (
              <SwiperSlide key={item._id}>
                <div className="product-container flex flex-col gap-y-5">
                  <div className="product-card-top relative p-8">
                    <div className="product-image w-[168px] mx-auto">
                      <Link to={`/product/${item._id}`}>
                        <img
                          src={item.images[0].url}
                          alt=""
                          className="w-full h-full object-contain"
                        />
                      </Link>
                    </div>
                    <div className="badge absolute left-0 bottom-4 flex flex-col gap-y-2">
                      <span className="bg-yellow-500 text-white text-[13px] px-2 py-1 rounded-r-md text-start w-fit">
                        Trả góp 0%
                      </span>
                      <span className="bg-redcb text-white px-2 py-1 rounded-r-md text-[13px]">Giảm {VNDong.format(item.disCount)}</span>
                    </div>
                  </div>
                  <div className="product-card-bottom">
                    <div className="product-content">
                      <Link to="/product/:id">
                        <h3 className="product-title font-sans text-secondary font-semibold mb-2 line-clamp-1">{item.title}</h3>
                      </Link>
                      <div className="price flex justify-between">
                        <div className="progress basis-[130px] w-[130px] h-[28px] rounded-2xl bg-[#ef8573] text-center text-lg font-semibold overflow-hidden relative z-10 text-white">
                        {VNDong.format(item.price)}<div className="w-[89%] absolute -z-10 top-0 bottom-0 bg-redcb"></div>
                        </div>
                        <div>
                          <strike className="text-[#919191] text-sm">{VNDong.format(item.strikePrice)}</strike>
                          <Countdown targetDate={targetDate} />
                        </div>
                      </div>
                    </div>
                    <Promo />
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
      </Swiper>
    </div>
  );
};

export default ProductHotSale;
