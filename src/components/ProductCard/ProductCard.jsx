import React, { useEffect, useState } from 'react';
import './styles.css';
import { Link, useLocation } from 'react-router-dom';
import Countdown from '../../Helmet/CountDown/CountDown';
import { useSelector, useDispatch } from 'react-redux';
import { addToWishlist } from '../../features/products/productSlice';
import { addToCart, getCart } from '../../features/user/userSlice';
const ProductCard = (props) => {
  const { grid, data } = props;
  let VNDong = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND'
  });

  return (
    <div className={`${grid === 1 ? `grid grid-cols-${grid}` : `grid grid-cols-${grid}`} gap-4 hidden lg:grid`}>
      {data.length > 0 &&
        data?.map((item, index) => {
          const targetDate = new Date(item.targetDate);
          return (
            <div key={index}>
              <div className={`${grid === 1 ? `grid grid-cols-2` : `grid grid-cols-1`} product-card rounded-sm m-0`}>
                <div className="product-wrapper">
                  <Link to={`/product/${item._id}`}>
                    <img
                      src={item.images[0].url}
                      alt=""
                      className={`${grid === 1 ? 'w-40 h-40' : 'w-40 h-40'} object-cover mx-auto`}
                    />
                  </Link>
                </div>

                <div className="product-card__content">
                  <div className="product-card__top">
                    <Link to="/product/:id" className="product-title">
                      {item.title}
                    </Link>
                    <div className="product-card-bottom">
                      <div className="price">
                        <div className="progress">
                          {VNDong.format(item.price)}
                          <div className="progress-bar"></div>
                        </div>
                        <div className="flex flex-col strike-price">
                          <strike className="text-[#919191] text-sm self-end">{VNDong.format(item.strikePrice)}</strike>
                          <span className="text-[#a7a7b1] text-[11px] self-end">
                            <Countdown targetDate={targetDate} />
                          </span>
                        </div>
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
                    {/* ! chua them tinh nang nay */}
                    <Link to={`/product/${item?._id}`} className="btn-main">
                      Mua ngay
                    </Link>
                    {/* <div className="btn-main">
                      Mua ngay
                    </div> */}
                    <div className="btn-sub">So sánh</div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default ProductCard;
