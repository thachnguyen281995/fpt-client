import React, { useState } from 'react';
import './styles.css';
const Promo = () => {
  const [isNumberVisible, setNumberVisibility] = useState(true);
  const [isActiveButton, setActiveButton] = useState(false);
  const handleNumberClick = () => {
    setNumberVisibility(true);
    setActiveButton(false);
  };

  const handleActiveClick = () => {
    setActiveButton(true);
    setNumberVisibility(false);
  };
  return (
    <div className="product-promo bg-[#f8f9fa] p-2 rounded-md mt-auto">
      <div className="flex mb-3">
        <div className={`${isNumberVisible ? 'active-promo' : ''} mr-2 `}>
          <div onMouseEnter={handleNumberClick}>
            <img
              src="https://images.fpt.shop/unsafe/fit-in/45x45/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/11/2/638029984985744443_tpbank-icon.png"
              alt=""
              className="h-10 w-10 object-contain rounded-full align-top"
            />
          </div>
        </div>
        <div className={`${isActiveButton ? 'active-promo' : ''} `}>
          <div onMouseEnter={handleActiveClick}>
            <img
              src="https://images.fpt.shop/unsafe/fit-in/45x45/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/2/1/638108715966954351_download.png"
              alt=""
              className="h-10 w-10 object-contain rounded-full"
            />
          </div>
        </div>
      </div>
      {isNumberVisible && <div className="text-promo">Giảm đến 1 triệu khi mở thẻ TPBANK EVO</div>}
      {isActiveButton && <div className="text-promo">Giảm ngay 5% qua Kredivo</div>}
    </div>
  );
};

export default Promo;
