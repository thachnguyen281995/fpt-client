import React, { useState } from 'react';
import BreadCrumb from '../../components/BreadCrumb';
import Meta from '../../components/Meta';
import QuantityButton from '../../components/QuantityButton';
import { BsFillTrash3Fill } from 'react-icons/bs';
import { Link, useNavigate } from 'react-router-dom';
import { Divider, Skeleton, Spin } from 'antd';
import './styles.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { createCashOrder, deleteCartProduct, getCart } from '../../features/user/userSlice';
import { useFormik } from 'formik';
import * as yup from 'yup';
import EmptyCart from '../../components/emptyCart';
const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const [subtotal, setSubTotal] = useState(null);
  const [total, setTotal] = useState(null);
  const [shippingInfo, setShippingInfo] = useState(null);
  const [orderItems, setOrderItems] = useState(null);
  const [cartProductState,setCartProductState] = useState([])
  useEffect(() => {
    setTimeout(() => {
      dispatch(getCart);
    }, 300);
  }, [dispatch]);
  const stateCart = useSelector((state) => state.auth.getCart);
  const deleteACartProduct = (id) => {
    dispatch(deleteCartProduct(id));
    setTimeout(() => {
      dispatch(getCart());
    }, 300);
  };
  const [discount, setDiscount] = useState(5);
  useEffect(() => {
    // Calculate subtotal
    const subtotalWithNotDiscount = stateCart?.reduce((acc, cur) => acc + cur.price, 0);
    setSubTotal(subtotalWithNotDiscount);
    // Calculate subtotal including discount
    const subtotalWithDiscount = stateCart?.reduce((acc, cur) => acc + cur.price, 0) * (1 - discount / 100);

    // Update the subtotal state
    setTotal(subtotalWithDiscount);
  let item = []
  for(let index = 0 ; index < stateCart?.length;index++){
    item.push({product:stateCart[index].productId._id,price:stateCart[index].price})
    setCartProductState(item)
  }  
  }, [stateCart]);
  const shippingSchema = yup.object({
    fullName: yup.string().required('Yêu cầu nhập họ và tên'),
    address: yup.string().required('Yêu cầu nhập địa chỉ'),
    city: yup.string().required('Yêu cầu nhập thành phố')
  });
  const formik = useFormik({
    initialValues: {
      fullName: '',
      address: '',
      city: ''
    },
    validationSchema: shippingSchema,
    onSubmit: (values) => {
      dispatch(createCashOrder({shippingInfo:values,totalPrice:subtotal,totalPriceAfterDicount:total,orderItems:cartProductState}))
      navigate('/my-orders')
    }
  });
  if (stateCart === undefined) {
    return (
      <div className="container mx-auto">
        <div className="grid grid-cols-12 py-5 gap-x-5">
          <div className="col-span-7">
            <Skeleton />
          </div>
          <div className="col-span-5">
            <Skeleton />
          </div>
        </div>
      </div>
    );
  } else if (stateCart?.length <= 0) {
    return <EmptyCart />;
  } else {
    return (
      <div className="max-w-[1200px] mx-auto">
        <form onSubmit={formik.handleSubmit}>
          <div className="grid grid-cols-12 py-5 gap-x-5">
            {/* Left */}
            <div className="col-span-12 lg:col-span-5">
              <h3 className="mb-4 font-sans uppercase pl-2 lg:pl-0">Thông tin giao hàng</h3>
              <div className="p-4 bg-white rounded-md wrapper-info">
                <div className="grid grid-cols- gap-x-3">
                  <div className="flex flex-col">
                    <label htmlFor="fullName" className="mb-2 text-sm font-medium">
                      Họ và tên
                    </label>
                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      placeholder="Họ và tên"
                      className="px-2 py-2 mb-2 border"
                      value={formik.values.fullName}
                      onChange={formik.handleChange('fullName')}
                      onBlur={formik.handleBlur('fullName')}
                    />
                    <div className="text-sm text-red-500 error ">
                      {formik.touched.fullName && formik.errors.fullName}
                    </div>
                    <label htmlFor="address" className="mb-2 text-sm font-medium">
                      Địa chỉ
                    </label>
                    <input
                      id="address"
                      type="text"
                      placeholder="108 Lê Thánh Tôn"
                      className="px-2 py-2 mb-2 border"
                      name="address"
                      value={formik.values.address}
                      onChange={formik.handleChange('address')}
                      onBlur={formik.handleBlur('address')}
                    />
                    <div className="text-sm text-red-500 error ">{formik.touched.address && formik.errors.address}</div>

                    <div className="flex flex-col">
                      <label htmlFor="name2" className="mb-2 text-sm font-medium">
                        Thành phố
                      </label>
                      <input
                        type="text"
                        id="city"
                        name="city"
                        value={formik.values.city}
                        onChange={formik.handleChange('city')}
                        onBlur={formik.handleBlur('city')}
                        placeholder="Quảng Ngãi"
                        className="px-2 py-2 mb-2 border"
                      />
                      <div className="text-sm text-red-500 error ">{formik.touched.city && formik.errors.city}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Right */}
            <div className="col-span-12 lg:col-span-7 pt-2">
              <h3 className="mb-4 font-sans uppercase pl-2 lg:pl-0">Đơn hàng</h3>
              <div className="bg-white rounded-md wrapper-info">
                {stateCart?.map((item) => {
                  return (
                    <div className="flex items-center px-4 cart-item" key={item._id}>
                      <div className="flex mt-4 gap-x-2">
                        <img src={item.productId.images[0].url} alt="" className="object-contain w-12 h-12" />
                        <div>
                          <h3 className="max-w-xs font-sans text-sm font-medium line-clamp-1">
                            {item?.productId?.title}
                          </h3>

                          <p className="font-medium">
                            {item.price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}
                          </p>
                        </div>
                      </div>
                      <button
                        className="p-1 ml-auto text-gray-700 rounded-md hover:text-gray-500 button-quantity"
                        onClick={() => {
                          deleteACartProduct(item?._id);
                        }}
                      >
                        <BsFillTrash3Fill />
                      </button>
                    </div>
                  );
                })}
                <Divider className="" />

                <div className="subtotal">
                  <div className="flex justify-between px-4">
                    <h3 className="font-sans text-base text-grayf5">Tạm tính</h3>
                    <div className="flex flex-col">
                      <p className="font-medium">
                        {subtotal?.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}
                      </p>
                      <div className="flex items-center">
                        <div className="px-2 py-1 mr-2 text-sm font-semibold text-white rounded-md bg-redcb">
                          Discount
                        </div>
                        <p className="font-medium">{discount}%</p>
                      </div>
                    </div>
                  </div>
                </div>
                <Divider className="" />
                <div className="pb-4 totalPrice">
                  <div className="flex justify-between px-4">
                    <h3 className="font-sans text-base text-grayf5">Tổng tiền</h3>
                    <p className="font-medium">
                      {total?.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}
                    </p>
                  </div>
                  <div className="flex justify-center px-4 mt-4">
                    <button
                      type="submit"
                      className="w-full px-4 py-2 text-center text-white uppercase rounded-sm bg-redcb hover:bg-red-700"
                    >
                      Đặt Hàng
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
};

export default Cart;
