import React from 'react';
import FamousProduct from '../components/FamousProduct/FamousProduct';
import ProductHotSale from '../components/HotSale/ProductHotSale';
import Meta from '../components/Meta';
import BannerSwiper from '../components/BannerSwiper/BannerSwiper';
import CategoryBox from '../components/CategoryBox/CategoryBox';
import SaleCd from '../components/SaleCd';
import BannerProduct from '../components/BannerProduct/BannerProduct';
import { productCarousel } from '../assets/data';
const Home = () => {
  return (
    <div className="home-wrapper">
      <Meta title={'Trang chủ'} />
      {/* Sale CD */}
      <section className="py-5 hidden xl:flex">
        <SaleCd />
      </section>
      {/* Banner Main for PC*/}
      <section className="py-5 hidden xl:flex">
        <BannerSwiper />
      </section>
      {/* Banner Main for Tablet -> Mobile */}
      <section className="xl:hidden">
        <img src="https://fptshop.com.vn/Uploads/Originals/2023/8/28/638288187105178344_mb-header.png" alt="" />
      </section>
      <section className="lg:hidden slick-home">
        <BannerProduct imageCarousel={productCarousel} />
      </section>
      <section className="">
        <CategoryBox />
      </section>
      {/* Product Feature */}

      <section className="py-5">
        <div className="container mx-auto">
          <div className="mb-5">
            <img
              src="https://images.fpt.shop/unsafe/fit-in/1200x100/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/8/31/638291069689086336_H7_1200x100.png"
              alt=""
              className="rounded-md hidden lg:block w-full"
            />
            <img src="https://images.fpt.shop/unsafe/fit-in/640x107/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/8/31/638291069688148792_M2_360x60.png" alt="" className='block w-full lg:hidden' />
          </div>
          <div className="">
            <ProductHotSale />
          </div>
        </div>
      </section>
      <section className="py-5">
        <div className="container mx-auto">
          <div className="mb-5">
            <img
              src="https://res.cloudinary.com/dgh2j7n1e/image/upload/v1690002578/t-gear-ecom/638254013559401153_H7_1200x100_qy0owh.webp"
              alt=""
              className='w-full hidden lg:block'
            />
            <img
              src="https://res.cloudinary.com/dgh2j7n1e/image/upload/v1694010992/638295964141190831_M1_vokjrc.png"
              alt=""
              className='w-full sm:block lg:hidden'
            />
          </div>
          <FamousProduct />
        </div>
      </section>
    </div>
  );
};

export default Home;
