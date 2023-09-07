import React from 'react';
import BreadCrumb from '../../components/BreadCrumb';
import Meta from '../../components/Meta';
import './styles.css';
const Checkout = () => {
  return (
    <>
      <Meta title={'Phương thức thanh toán'} />
      <BreadCrumb title="Phương thức thanh toán" titleSecond = "Giỏ hàng" />
      <div className='flex h-screen items-center justify-center'>
          <div className='container mx-auto'>
            <div className="grid grid-cols-2">
                <div className=''>
                    
                </div>
                <div></div>
            </div>
          </div>
      </div>
    </>
  );
};

export default Checkout;
