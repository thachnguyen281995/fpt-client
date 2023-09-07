import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Tooltip } from 'antd';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import './styles.css';

// import required modules
import { Navigation, Thumbs, Autoplay } from 'swiper/modules';

export default function SwipperBanner() {
  const data = [
    {
      id: 1,
      image:
        'https://images.fpt.shop/unsafe/fit-in/800x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/7/26/638259855915172744_F-H1_800x300.png',
      title: 'Đặt Z Fold5 | Z Flip5 nhận quà đến 14 triệu'
    },
    {
      id: 2,
      image:
        'https://images.fpt.shop/unsafe/fit-in/800x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/8/2/638265883405551397_F-H1_800x300.png',
      title: 'Đặt trước Reno10 ưu đãi 2.5 triệu'
    },
    {
      id: 3,
      image:
        'https://images.fpt.shop/unsafe/fit-in/800x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/8/4/638267627370843676_F-H1_800x300up.png',
      title: 'iPhone 14 Pro Max giảm đến 5.6 triệu'
    },
    {
      id: 4,
      image:
        'https://images.fpt.shop/unsafe/fit-in/800x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/8/7/638270239746134769_F-H1_800x300.png',
      title: 'Sắm Robot hút bụi Ecovacs ngay'
    },
    {
      id: 5,
      image:
        'https://images.fpt.shop/unsafe/fit-in/800x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/8/4/638267555609171626_F-H1_800x300.png',
      title: 'Redmi Note 12 giá sốc 3.890.000đ'
    },
    {
      id: 6,
      image:
        'https://images.fpt.shop/unsafe/fit-in/800x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/7/18/638252716354326328_F-H1_800x300.png',
      title: 'Sắm Smartwatch GTR 4 ngày'
    },
    {
      id: 7,
      image:
        'https://images.fpt.shop/unsafe/fit-in/800x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/8/7/638269646975545786_F-H1_800x300.png',
      title: 'HONOR X8a độc quyền từ 4.490.000đ'
    },
    {
      id: 8,
      image:
        'https://images.fpt.shop/unsafe/fit-in/800x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/7/1/638237691192351614_F-H1_800x300.png',
      title: 'TV Xiaomi chỉ từ 3.890.000đ'
    }
  ];

  const boxSwiper = (
    <>
      <Swiper className="rounded-md cursor-pointer mySwiper box-tooltip">
        <SwiperSlide>
          <img
            srcSet="https://res.cloudinary.com/dgh2j7n1e/image/upload/v1691492505/replicate-prediction-fg6ob2rbvxlx4rniiaqse4bneq_elojah.webp "
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="box-swiper-tooltip">
          <img
            srcSet="https://images.fpt.shop/unsafe/fit-in/243x160/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/images/2015/PhuongMT5/Slide%202(11).png 2x"
            alt=""
            className=""
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
  const boxSwiper1 = (
    <>
      <Swiper className="rounded-md cursor-pointer mySwiper box-tooltip">
        <SwiperSlide>
          <img
            src="https://images.fpt.shop/unsafe/fit-in/243x160/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/images/2015/PhuongMT5/Slide%201(14).png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="box-swiper-tooltip">
          <img
            srcSet="https://images.fpt.shop/unsafe/fit-in/243x160/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/images/2015/PhuongMT5/Slide%202(15).png 2x"
            alt=""
            className=""
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
  const [activeThumb, setActiveThumb] = useState();
  return (
    <>
      <div className="relative flex p-2 bg-white container box-container mx-auto gap-x-2">
        <div className="flex flex-col banner-left">
          <Swiper
            navigation={true}
            modules={[Navigation, Thumbs, Autoplay]}
            className="mySwiper product-images-slider"
            grabCursor={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false
            }}
            thumbs={{ swiper: activeThumb }}
          >
            {data.map((item) => {
              return (
                <SwiperSlide key={item.id} className="w-[800px] h-[300px]">
                  <img src={item.image} alt="" className="object-cover" />
                </SwiperSlide>
              );
            })}
          </Swiper>
          <Swiper
            onSwiper={setActiveThumb}
            slidesPerView={5}
            modules={[Navigation, Thumbs]}
            className="product-images-slider-thumbs "
          >
            {data.map((item) => {
              return (
                <SwiperSlide key={item.id}>
                  <div className="mb-2 text-sm cursor-pointer hover:font-medium title-active">{item.title}</div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        <div className="banner-right">
          <div className="box-right-ads">
            <div className="box-right-ads-sl">
              <img
                src="https://res.cloudinary.com/dgh2j7n1e/image/upload/v1691492667/replicate-prediction-5zhjhibblo6hvf37mvrkhbk35m_yjwl0e.webp"
                alt=""
              />
            </div>
            <div className="box-right-ads-sl">
              <img
                src="https://res.cloudinary.com/dgh2j7n1e/image/upload/v1691492780/replicate-prediction-cui4gybbqdd2qqk2qdmvlmpcia_g0mdng.webp"
                alt=""
              />
            </div>
          </div>
          <div className="box-right-news">
            <h3 className="text-[#6c757d] font-medium text-[15px]">Tin khuyến mãi</h3>
            <article className="news-item mt-[10px]">
              <Tooltip title={boxSwiper} placement="left" arrow>
                <Link to="#" className="flex">
                  <span className="picture">
                    <img
                      src="https://images.fpt.shop/unsafe/fit-in/70x40/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/images/2015/PhuongMT5/Tin%20KM%20main(10).png"
                      alt=""
                    />
                  </span>
                  <div className="news-item-if">
                    <p className="text-[#1f1f1f] text-[15px] font-medium">Samsung giảm thêm đến 5% cho HSSV</p>
                  </div>
                </Link>
              </Tooltip>
            </article>
            <div className="news-item1 mt-[10px]">
              <Tooltip title={boxSwiper1} placement="left" arrow>
                <Link to="#" className="flex">
                  <span className="picture1">
                    <img
                      src="https://images.fpt.shop/unsafe/fit-in/70x40/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/images/2015/PhuongMT5/Tin%20KM%20main(15).png"
                      alt=""
                    />
                  </span>
                  <div className="news-item-if1">
                    <p className="text-[#1f1f1f] text-[15px] font-medium"> Top điện thoại chụp ảnh đẹp 2023</p>
                  </div>
                </Link>
              </Tooltip>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
