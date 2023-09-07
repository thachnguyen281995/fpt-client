import React from 'react';
import { Link } from 'react-router-dom';
import Countdown from '../../Helmet/CountDown/CountDown';

const ProductCardMobile = ({ data }) => {
  let VNDong = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND'
  });
  return (
    <div className="grid grid-cols-2 lg:hidden">
      {data.length > 0 &&
        data?.map((item, index) => {
          const targetDate = new Date(item.targetDate);
          return (
            <div key={index} className="">
              <div className="product-card rounded-sm m-0 p-1">
                <div className="product-wrapper">
                  <Link to={`/product/${item._id}`}>
                    <img src={item.images[0].url} alt="" className="object-cover mx-auto h-20 w-20 md:w-32 md:h-32" />
                  </Link>
                </div>

                <div className="product-card__content">
                  <div className="product-card__top">
                    <Link to="/product/:id" className="product-title text-sm line-clamp-2 md:text-base">
                      {item.title}
                    </Link>
                    <div className="product-card-bottom">
                      <div className="price">
                        <div className="progress">
                          {VNDong.format(item.price)}
                          <div className="progress-bar"></div>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 items-center strike-price place-items-center">
                        <strike className="text-[#919191] text-[13px] md:text-sm self-end">
                          {VNDong.format(item.strikePrice)}
                        </strike>
                        <span className="text-[#a7a7b1] text-[13px] text-sm self-end">
                          <Countdown targetDate={targetDate} />
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="product-card__config bg-[#f8f9fa] rounded-sm">
                    <div className="product-card__lazyload">
                      <img
                        src="https://images.fpt.shop/unsafe/fit-in/45x45/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/6/1/638212059275222181_nganhangvib.png"
                        alt=""
                        className="object-cover w-10 h-10 rounded-full"
                      />
                      <img
                        src="https://images.fpt.shop/unsafe/fit-in/45x45/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/4/5/637847745475943329_637846629514363952_ic-tp-bank.jpg"
                        className="object-cover w-10 h-10 rounded-full"
                        alt=""
                      />
                    </div>
                    <span className="text-[12px] text-[#555] mb-5">Giảm ngay 600.000đ khi mở thẻ TPBANK EVO</span>
                  </div>
                  <div className="cdt-product__btn">
                    <Link to={`/product/${item?._id}`} className="btn-main text-[11px]">
                      Mua ngay
                    </Link>

                    <div className="btn-sub text-[11px]">So sánh</div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default ProductCardMobile;
