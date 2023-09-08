import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCart, getMyOrders } from '../features/user/userSlice';
import { Divider,Spin } from 'antd';
import BreadCrumb from './BreadCrumb';
import Meta from './Meta';
import EmptyCart from './EmptyCart';
const Order = () => {
  const orderState = useSelector((state) => state.auth.getMyOrders);
  const stateCart = useSelector((state) => state.auth.getCart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMyOrders());
    dispatch(getCart());
  }, [dispatch]);
  const options = { timeZone: 'Asia/Ho_Chi_Minh' };
  return (
    <>
      <Meta title={'Tin Tức'} />
      <BreadCrumb title="Đơn đặt hàng của bạn" />
     {orderState  ?  (<div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-12 py-5 gap-x-5">
          {/* Left */}
          <div className="col-span-12 lg:col-span-5">
            <div className="flex justify-between p-4 bg-white rounded-md wrapper-info">
              <div className="info-left">
                <p className="text-textInfo">{orderState?.shippingInfo.fullName}</p>
                <p className="text-textInfo">{orderState?.shippingInfo.address}</p>
                <p className="text-textInfo">{orderState?.shippingInfo.city}</p>
              </div>
              <div className="info-right">
                <div  className="flex flex-col text-textInfo">
                  Ngày đặt
                  <span className="text-sm">{new Date(orderState?.createdAt).toLocaleString('vi-VN', options)}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-12 mt-5 lg:col-span-7 lg:mt-0">
            <div className="bg-white rounded-md wrapper-info">
              {stateCart?.map((item) => {
                return (
                  <div className="flex items-center justify-between px-4 cart-item" key={item._id}>
                    <div className="p-2">
                      <img src={item.productId.images[0].url} alt="" className="object-contain w-20 h-20" />
                    </div>
                      <div className="max-w-xs font-sans text-base font-medium line-clamp-1">{item?.productId?.title}</div>
  
                      <p className="text-base font-medium">
                        {item.price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}
                      </p>
                  </div>
                );
              })}
              <Divider className="" />
  
              <div className="subtotal">
                <div className="flex justify-between px-4">
                  <h3 className="font-sans text-base text-grayf5">Tạm tính</h3>
                  <div className="flex flex-col">
                    <p className="text-base font-medium">
                      {orderState?.totalPrice?.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}
                    </p>
                    <div className="flex items-center">
                      <div className="px-2 py-1 mr-2 text-sm font-semibold text-white rounded-md bg-redcb">Discount</div>
                      <p className="font-medium">5%</p>
                    </div>
                  </div>
                </div>
              </div>
              <Divider className="" />
              <div className="pb-4 totalPrice">
                <div className="flex justify-between px-4">
                  <h3 className="font-sans text-base text-grayf5">Tổng tiền</h3>
                  <p className="text-base font-medium">
                    {orderState?.totalPriceAfterDicount?.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>) :<div className='container mx-auto'>
        <div className="flex items-center justify-center p-20">
        <EmptyCart/>
        </div>
      </div> }
    </>
  );
};

export default Order;
