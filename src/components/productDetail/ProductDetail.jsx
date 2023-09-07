import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { BsImageFill, BsInfoCircle, BsCpuFill, BsDeviceSsd } from 'react-icons/bs';
import { BsFillCheckCircleFill, BsCollectionPlayFill } from 'react-icons/bs';
import { AiFillCamera, AiOutlineDropbox, AiOutlineMobile, AiOutlineVideoCameraAdd } from 'react-icons/ai';
import { Tooltip, Spin } from 'antd';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Divider } from 'antd';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import BottomSale from './BottomSale';
import { useDispatch, useSelector } from 'react-redux';
import { getAProduct, getAllProducts } from '../../features/products/productSlice';
import { addToCart, getCart } from '../../features/user/userSlice';
export default function ProductDetail() {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigation = useNavigate();
  const [alreadyAdded, setAlreadyAdded] = useState(false);
  const getAProductId = location.pathname.split('/')[2];
  const productState = useSelector((state) => state.product.product);
  const optionProduct = useSelector((state) => state?.product?.singleProduct);
  const cartState = useSelector((state) => state?.auth.getCart);
  useEffect(() => {
    getSingleProduct();
    dispatch(getCart());
    dispatch(getAllProducts());
  }, [dispatch]);
  const getSingleProduct = () => {
    dispatch(getAProduct(getAProductId));
  };
  const uploadCart = (cart) => {
    dispatch(addToCart(cart));
    dispatch(getCart());
    navigation('/cart');
  };
  let VNDong = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND'
  });

  useEffect(() => {
    for (let index = 0; index < cartState?.length; index++) {
      if (getAProductId === cartState[index]?.productId?._id) {
        setAlreadyAdded(true);
      }
    }
  });
  const items = [
    {
      id: 1,
      ram: '128 GB',
      price: 26.58,
      oldPrice: 29.58
    },
    {
      id: 2,
      ram: '256 GB',
      price: 29.48,
      oldPrice: 32.99
    },
    {
      id: 3,
      ram: '512 GB',
      price: 35.99,
      oldPrice: 37.99
    },
    {
      id: 4,
      ram: '1TB',
      price: 41.99,
      oldPrice: 43.99
    }
  ];
  const productImage = [
    {
      id: 1,
      image: optionProduct?.images[0].url
    }
  ];
  const productColor = [
    {
      id: 1,
      img: 'https://images.fpt.shop/unsafe/fit-in/38x38/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/11/30/638054218956629637_ip-14-pro-max-den-1.jpg',
      name: 'Đen'
    },
    {
      id: 2,
      img: 'https://images.fpt.shop/unsafe/fit-in/38x38/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/11/30/638054220350691584_ip-14-pro-max-tim-1.jpg',
      name: 'Tím'
    },
    {
      id: 3,
      img: 'https://images.fpt.shop/unsafe/fit-in/38x38/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/11/30/638054222139728415_ip-14-pro-max-vang-1.jpg',
      name: 'Vàng'
    },
    {
      id: 4,
      img: 'https://images.fpt.shop/unsafe/fit-in/38x38/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/11/30/638054217303176240_ip-14-pro-max-bac-1.jpg',
      name: 'Bạc'
    }
  ];
  const promoProduct = [
    {
      id: 1,
      name: productState[0]?.title,
      price: productState[0]?.price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' }),
      oldPrice: productState[0]?.strikePrice.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' }),
      image: productState[0]?.images[0].url
    },
    {
      id: 2,
      name: productState[1]?.title.slice(0, 22),
      price: productState[1]?.price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' }),
      oldPrice: productState[1]?.strikePrice.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' }),
      image: productState[1]?.images[0].url
    },
    {
      id: 3,
      name: productState[2]?.title,
      price: productState[2]?.price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' }),
      oldPrice: productState[2]?.strikePrice.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' }),
      image: productState[2]?.images[0].url
    },
    {
      id: 4,
      name: productState[3]?.title,
      price: productState[3]?.price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' }),
      oldPrice: productState[3]?.strikePrice.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' }),
      image: productState[3]?.images[0].url
    }
  ];

  const [activeColor, setActiveColor] = useState(productColor[0].id);
  const [textColor, setTextColor] = useState(productColor[0].name);
  const [selectedOption, setSelectedOption] = useState('option1');

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const buttonHover = () => {
    return (
      <div className="btn-loyalty tooltip tooltip-right">
        <span className="font-sans text-sm">
          Điểm thưởng nhận được khi mua hàng. Quý khách có thể sử dụng đổi thành Voucher khi thanh toán. Lưu ý, không áp
          dụng Trả góp.
        </span>
        <strong></strong>
      </div>
    );
  };

  return items ? (
    <>
      <div className="container mx-auto">
        <div className="pt-[10px] 1-pd-top flex justify-between">
          <h1 className="font-sans text-2xl font-medium text-primary">{optionProduct?.title}</h1>
          <div className="flex items-center text-sm text-blue-500 gap-x-2"></div>
        </div>
        <Divider />
        <div className="grid grid-cols-2 gap-x-10 pd-header">
          {/* Left */}
          <div className="row-span-1 st-slider product-sale">
            <div className="st-slider__promo-box">
              <img
                src="https://images.fpt.shop/unsafe/fit-in/585x429/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/7/17/638252151175822366_frame-detail-585x428.png"
                alt=""
                className=""
              />
              <p className="relative text-center left-[50%] top-[-40px] translate-x-[-50%] text-white uppercase text-4xl">
                Giảm
                <span className="font-medium text-[#fbee35] text-4xl ml-2">
                  {VNDong.format(optionProduct?.disCount).slice(0, -1)}
                </span>
              </p>
            </div>
            <Swiper
              cssMode={true}
              navigation={true}
              pagination={true}
              mousewheel={true}
              keyboard={true}
              modules={[Navigation, Pagination, Mousewheel, Keyboard]}
              className="mySwiper3 swiperCard"
            >
              {productImage.map((item) => {
                return (
                  <SwiperSlide className="product-slider" key={item.id}>
                    {activeColor === 1 && <img src={item.image} alt="" />}
                  </SwiperSlide>
                );
              })}
            </Swiper>
            
            <div className="flex justify-center my-5 mt-12 st-slider__feature gap-x-2">
              <Link className="px-5 text-center st-slider__feature__item">
                <span>
                  <BsImageFill size={40} />
                </span>
                <p className="font-sans text-sm text-[#495057]">Xem thêm ảnh</p>
              </Link>
              <Link className="px-5 text-center st-slider__feature__item">
                <span>
                  <BsCollectionPlayFill size={40} />
                </span>
                <p className="font-sans text-sm text-[#495057]">Video trên tay</p>
              </Link>
              <Link className="px-5 text-center st-slider__feature__item">
                <span>
                  <AiOutlineDropbox size={40} />
                </span>
                <p className="font-sans text-sm text-[#495057]">Trong hộp có gì</p>
              </Link>
            </div>
            <div className="st-param">
              <ul className="">
                <li className="flex items-center mb-2">
                  <span className="mr-2">
                    <AiOutlineMobile style={{ color: '#b6bfc7' }} size={20} />
                  </span>
                  <p className="text-[#495057]">{optionProduct?.description}</p>
                </li>
                <li className="flex items-center mb-2">
                  <span className="mr-2">
                    <AiFillCamera style={{ color: '#b6bfc7' }} size={20} />
                  </span>
                  <p className="text-[#495057]">48.0 MP + 12.0 MP + 12.0 MP </p>
                </li>
                <li className="flex items-center mb-2">
                  <span className="mr-2">
                    <AiOutlineVideoCameraAdd style={{ color: '#b6bfc7' }} size={20} />
                  </span>
                  <p className="text-[#495057]">12.0 MP </p>
                </li>
                <li className="flex items-center mb-2">
                  <span className="mr-2">
                    <BsCpuFill style={{ color: '#b6bfc7' }} size={20} />
                  </span>
                  <p className="text-[#495057]">Apple A16 Bionic</p>
                </li>
                <li className="flex items-center mb-2">
                  <span className="mr-2">
                    <BsDeviceSsd style={{ color: '#b6bfc7' }} size={20} />
                  </span>
                  <p className="text-[#495057]">128 GB</p>
                </li>
              </ul>
              <Link className="font-sans text-sm re-link">Xem chi tiết thông số kỹ thuật</Link>
            </div>
            <div className="st-policy">
              <div className="mr-5 st-policy__item">
                <img
                  src="https://res.cloudinary.com/dgh2j7n1e/image/upload/v1690446491/t-gear-ecom/quality.8529b3fec89f77c472ea_xefzbh.png"
                  alt=""
                  className="w-6 h-6"
                />
                <span className="text-sm text-[#444b52]">Hàng chính hãng - Bảo hành 12 Tháng</span>
              </div>
              <div className="st-policy__item">
                <img
                  src="https://res.cloudinary.com/dgh2j7n1e/image/upload/v1690446837/t-gear-ecom/delivery.fcff17afe667d3ab88c4_qiha2k.png"
                  alt=""
                  className="w-6 h-6"
                />
                <span className="text-sm text-[#444b52]">Giao hàng toàn quốc</span>
              </div>
            </div>
          </div>
          {/* Right */}
          <div className="row-span-3 product-info">
            <div className="flex justify-between st-price">
              <div className="flex items-center st-price-left">
                <div className="mr-2 text-3xl font-medium st-price-main text-redcb">
                  {VNDong.format(optionProduct?.price)}
                </div>
                <div className="text-xl st-price-sub">
                  <strike className="text-[#99a2aa]">{VNDong.format(optionProduct?.strikePrice)}</strike>
                </div>
              </div>
              <div className="st-price-right flex flex-col text-[#555]">
                <span className="text-sm text-end">Trả góp chỉ từ </span>
                <span>
                  <strong className="text-sm">1.960.500₫/</strong>
                  tháng
                </span>
              </div>
            </div>
            <div className="mb-4 loyalty">
              <Tooltip title={buttonHover} placement="right">
                <span className="items-center gap-x-1 bg-[#fefae8] inline-flex py-[3px] px-1 rounded-[100px] border-[1px] border-[#fdf1ba]">
                  <span className="w-4 h-4 rounded-full bg-[#f6c743] text-white flex justify-center items-center font-sans text-[11px] border-[#efb140] border-[1px]">
                    F
                  </span>
                  <span className="text-[#b7791f] text-sm font-sans font-semibold">+6607 điểm thưởng dự kiến</span>
                  <BsInfoCircle className="text-[#efb140] cursor-pointer" />
                </span>
              </Tooltip>
            </div>

            <div className="st-boxPromo">
              <div className="title">Chọn 1 trong 2 khuyến mãi sau</div>
              <ul className="st-boxPromo__list">
                <li>
                  <div className="radio">
                    <input
                      type="radio"
                      name="promotion1"
                      id="promotion1_1"
                      value="option1"
                      checked={selectedOption === 'option1'}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    <label htmlFor="promotion1_1" className={`${selectedOption === 'option1' ? 'font-medium' : ''}`}>
                      Giảm ngay 3.410.000đ áp dụng khi mua màu {textColor} đến 27/07
                    </label>
                  </div>
                </li>
                <li>
                  <div className="radio">
                    <input
                      type="radio"
                      name="promotion2"
                      id="promotion1_2"
                      value="option2"
                      checked={selectedOption === 'option2'}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    <label htmlFor="promotion1_2" className={`${selectedOption === 'option2' ? 'font-medium' : ''}`}>
                      {' '}
                      Trả góp 0%
                    </label>
                  </div>
                </li>
              </ul>
              <div className="title title--more">
                <span>Ưu đãi thêm</span>
              </div>
              <ul className="st-boxPromo__list st st-boxPromo__list--more">
                <li className="flex items-center mb-2">
                  <BsFillCheckCircleFill className="mr-1 text-green-500" size={16} />
                  <div>
                    <span className="mr-1">Giảm đến 30% hệ sinh thái Apple</span>
                    <Link to="/" className="text-blue-500 re-link">
                      {' '}
                      Xem chi tiết
                    </Link>
                  </div>
                </li>
                <li className="flex items-center">
                  <BsFillCheckCircleFill className="mr-1 text-green-500 re-link" size={16} />
                  <div>
                    <span className="mr-1">Thu cũ đổi mới trợ giá ngay đến 2 triệu (SmartExchange)</span>
                    <Link to="/" className="text-blue-500 re-link">
                      Xem chi tiết
                    </Link>
                  </div>
                </li>
              </ul>
            </div>
            <div className="mb-4 st-boxFeature">
              <ul>
                <li className="flex items-center mb-2">
                  <label htmlFor="check2" className="img">
                    <img
                      src="https://images.fpt.shop/unsafe/fit-in/48x48/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/4/4/637846629514363952_ic-tp-bank.jpg"
                      alt=""
                      className="w-12 h-12"
                    />
                    <div className="e-label-pos">
                      <div className="checkbox">
                        <input
                          type="checkbox"
                          name="promotion3"
                          className="w-4 h-4 form-check-input"
                          id="check2"
                          value="77096"
                        />
                      </div>
                    </div>
                  </label>
                  <div>
                    <p className="title text-sm font-sans text-[#444b52] font-medium">EVO</p>
                    <span className="text-sm font-sans text-[#444b52]">
                      Giảm ngay 20% tối đa 1.000.000đ khi mở thẻ đồng thương hiệu TPBANK EVO
                    </span>
                    <Link to="/" className="text-sm re-link">
                      Xem chi tiết
                    </Link>
                  </div>
                </li>
                <li className="flex items-center">
                  <label htmlFor="check2" className="img">
                    <img
                      src="https://images.fpt.shop/unsafe/fit-in/48x48/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/3/14/637828748513420662_Kredio.jpg"
                      alt=""
                      className="w-12 h-12"
                    />
                    <div className="e-label-pos">
                      <div className="checkbox">
                        <input
                          type="checkbox"
                          name="promotion3"
                          className="w-4 h-4 form-check-input"
                          id="check2"
                          value="77096"
                        />
                      </div>
                    </div>
                  </label>
                  <div>
                    <p className="title text-sm font-sans text-[#444b52] font-medium">Thanh toán Kredivo</p>
                    <span className="text-sm font-sans text-[#444b52]">
                      Giảm ngay 5% tối đa 500.000 đồng khi thanh toán trả góp 6/12 tháng qua Kredivo
                    </span>
                    <Link to="/" className="text-sm re-link">
                      Xem chi tiết
                    </Link>
                  </div>
                </li>
              </ul>
            </div>
            <div className="mb-4 st-pd-btn">
              <button className="bg-red-600 hover:bg-red-800 w-full rounded-[4px] py-[10px] px-[32px] mb-1">
                <div
                  className="text-xl text-white uppercase"
                  onClick={() => {
                    alreadyAdded
                      ? navigation('/cart')
                      : uploadCart({
                          productId: optionProduct?._id,
                          price: optionProduct?.price,
                          quantity: optionProduct?.quantity
                        });
                  }}
                >
                  {alreadyAdded === false ? 'Mua ngay' : 'Đến giỏ hàng'}
                </div>
                <p className="text-white text-[13px]">Giao hàng miễn phí hoặc nhận tại shop</p>
              </button>
              <div className="flex gap-x-2">
                <div className="bg-blue-600 cursor-pointer btn-half hover:bg-blue-800">
                  <div className="text-xl text-white uppercase">TRẢ GÓP 0%</div>
                  <p className="text-white text-[13px]">Duyệt nhanh qua điện thoại</p>
                </div>
                <div className="bg-blue-600 cursor-pointer btn-half hover:bg-blue-800">
                  <div className="text-xl text-white uppercase">TRẢ GÓP QUA THẺ</div>
                  <p className="text-white text-[13px]">Visa, Master Card, JCB, AMEX</p>
                </div>
              </div>
            </div>
            <div className="flex justify-between mb-4 st-pd-normal">
              <div className="hotline text-sm text-[#444b52] font-sans ">
                Gọi
                <Link to="#" className="text-sm font-medium text-redcb">
                  {' '}
                  1800-6601{' '}
                </Link>
                để được tư vấn mua hàng (Miễn phí)
              </div>
              <Link to="/" className="text-sm text-blue-500">
                Tìm shop có hàng gần nhất
              </Link>
            </div>
            <div className="text-sm st-oldProduct">
              <p className="cursor-pointer hover:text-blue-500">Mua hàng cũ: iPhone 14 Pro Max 128GB</p>
              <p>
                Giá từ:
                <span className="text-sm text-redcb"> 23.612.000₫</span>
              </p>
            </div>
            <div className="st-promoProduct">
              <div className="mb-2 text-sm font-medium title">Gợi ý sản phẩm khác</div>
              <div className="flex flex-col st-promoProduct__wrapper">
                {promoProduct.map((item) => {
                  return (
                    <div key={item?.id}>
                      <div className="flex items-center justify-between">
                        <div className="flex gap-x-2">
                          <div className="flex mb-2 img">
                            <span>
                              <Link>
                                <img src={item.image} alt="" className="object-cover mr-2 w-16 h-16" />
                              </Link>
                            </span>
                          </div>
                          <div className="flex-1 mt-2 info">
                            <div className="top text-sm mb-2 text-[#495057] line-clamp-1">{item.name}</div>
                            <div className="flex gap-x-2">
                              <div className="text-sm font-medium re-price text-redcb">{item.price}</div>

                              <strike className="re-price-strike text-[#99a2aa] text-sm">
                                {`${item.oldPrice === null ? '' : item.oldPrice}`}
                              </strike>
                            </div>
                          </div>
                        </div>
                        <div className="addToCart text-xs border border-[#ccc] py-1 px-2 rounded-md text-[#495057] cursor-pointer hover:bg-[#e9ecef]">
                          Thêm vào giỏ hàng
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <BottomSale />
    </>
  ) : (
    <div className="container flex items-center justify-center h-screen mx-auto">
      <Spin size="large" />
    </div>
  );
}
