import React, { useState } from 'react';
import Meta from '../../components/Meta';
import BreadCrumb from '../../components/BreadCrumb';
import ProductDetail from '../../components/productDetail/ProductDetail';
import { useSelector } from 'react-redux';
import ProductDetailMobile from '../../components/productDetail/ProductDetailMobile';
const SingleProduct = () => {
  const stateProduct = useSelector((state) => state.product.singleProduct);
  return (
    <div>
      <Meta title={'Apple'} />
      <BreadCrumb title={stateProduct?.brand} />
      <div className="max-w-[1200px] mx-auto hidden lg:block">
        <ProductDetail />
      </div>
      <div className=" mx-auto block lg:hidden">
        <ProductDetailMobile />
      </div>
    </div>
  );
};

export default SingleProduct;
