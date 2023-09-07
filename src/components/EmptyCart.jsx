import React from 'react';
import { Link } from 'react-router-dom';
const EmptyCart = () => {
  return (
    <div>
      <div className="max-w-xl mx-auto">
        <div className="flex flex-col items-center justify-center p-20">
          <img src="https://res.cloudinary.com/dgh2j7n1e/image/upload/v1693746849/empty-cart_oznnhg.png" alt="" />
          <p className="mb-4 text-sm text-[#444b52]">Không có sản phẩm nào trong giỏ hàng</p>
          <Link to="/" className="p-3 text-base text-white uppercase rounded-md bg-redcb hover:bg-[#bd1319]">
            Về trang chủ
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EmptyCart;
