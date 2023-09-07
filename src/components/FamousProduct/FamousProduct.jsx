import React from 'react';
import './styles.css'
const FamousProduct = () => {
  return (
        <div className=" hidden lg:grid grid-cols-4 gap-x-4 ">
          <div className="p-5 bg-black rounded-md shadow-md">
            <div className="relative flex flex-col">
              <div className="flex flex-col gap-y-2 card-content">
                <div className="flex items-center gap-x-2">
                  <div className="w-8 h-8">
                    <img
                      src="https://res.cloudinary.com/dgh2j7n1e/image/upload/v1689604390/t-gear-ecom/razer-ths-logo_rvpmr7.svg"
                      alt=""
                      className="w-full h-full"
                    />
                  </div>
                  <span className="text-green-700">Razer</span>
                </div>
                <h3 className="text-lg font-semibold text-white ">Razer Cobra Pro + Mouse Dock Pro Bundle</h3>
                <p className="text-base text-grayf5 ">Bộ thu phát Razer ™ HyperPolling 4K Hz</p>
              </div>
              <div className="flex-1 flex-shrink-0 w-64 mx-auto">
                <img
                  src="https://res.cloudinary.com/dgh2j7n1e/image/upload/v1689604309/t-gear-ecom/https_3A_2F_2Fhybrismediaprod.blob.core.windows.net_2Fsys-master-phoenix-images-container_2Fhd6_2Fhad_2F9592950161438_2Fcobra-pro-mouse-dock-pro-500x500_h3nach.png"
                  alt=""
                  className="object-contain w-full h-full"
                />
              </div>
            </div>
          </div>

          <div className="p-5 bg-white rounded-md shadow-md">
            <div className="relative flex flex-col h-full">
              <div className="flex flex-col gap-y-2 card-content">
                <div className="flex items-center gap-x-2">
                  <div className="">
                    <img
                      src="https://res.cloudinary.com/dgh2j7n1e/image/upload/v1689605127/t-gear-ecom/pxngqajan0gvvdx1drzt.png"
                      alt=""
                    />
                  </div>
                  <span className=" text-secondary">Dell</span>
                </div>
                <h3 className="text-lg font-semibold text-black ">Latitude Laptops & 2-in-1 PCs</h3>
                <p className="text-base text-grayf5 ">Các máy tính này được thiết kế để đáp ứng nhu cầu của người dùng doanh nghiệp, từ nhân viên văn phòng đến các chuyên gia sáng tạo.</p>
              </div>
              <div className="flex-1 flex-shrink-0 w-64 mx-auto">
                <img
                  src="https://i.dell.com/das/dih.ashx/1000w/sites/csimages/App-Merchandizing_Images/all/laptop-latitude-family-franchise-page-hero-module_1940x1440.png"
                  alt=""
                  className="object-contain w-full h-full "
                />
              </div>
            </div>
          </div>
          <div className="p-5 bg-white rounded-md shadow-md">
            <div className="relative flex flex-col h-full">
              <div className="flex flex-col gap-y-2 card-content">
                <div className="flex items-center gap-x-2">
                  <div className="">
                    <img
                      src="https://res.cloudinary.com/dgh2j7n1e/image/upload/v1689604403/t-gear-ecom/zgjbmxykljp4jlqjnl03.png"
                      alt=""
                    />
                  </div>
                  <span className=" text-secondary">Logitech</span>
                </div>
                <h3 className="text-lg font-semibold text-black ">MX KEYS S COMBO</h3>
                <p className="text-base text-grayf5 ">Kết hợp hiệu suất: MX Master 3S, MX Keys S & MX Palm Rest</p>
              </div>
              <div className="flex-1 flex-shrink-0 w-64 mx-auto">
                <img
                  src="https://res.cloudinary.com/dgh2j7n1e/image/upload/v1689604336/t-gear-ecom/mx-keys-s-combo-keyboard-top-view-graphite-us_ka4qbf.png"
                  alt=""
                  className="object-contain w-full h-full "
                />
              </div>
            </div>
          </div>
          <div className="p-5 bg-white rounded-md shadow-md">
            <div className="relative flex flex-col h-full">
              <div className="flex flex-col gap-y-2 card-content">
                <div className="flex items-center gap-x-2">
                  <div className="">
                    <img
                      src="https://res.cloudinary.com/dgh2j7n1e/image/upload/v1689604411/t-gear-ecom/utaustdfcravemppepvt.png"
                      alt=""
                    />
                  </div>
                  <span className=" text-secondary">Corsair</span>
                </div>
                <h3 className="text-lg font-semibold text-black ">Ghế Corsair T3 RUSH Grey/Charcoal</h3>
                <p className="text-base text-grayf5 ">Vải mềm cao cấp (bọt đệm ghế Polyurethane)</p>
              </div>
              <div className="flex-1 flex-shrink-0 w-64 mx-auto">
                <img
                  src="https://res.cloudinary.com/corsair-pwa/image/upload/c_pad,q_auto,h_1024,w_1024/products/Gaming-Chairs/CF-9010056-WW/T3-RUSH-Fabric-Gaming-Chair-_2023_---Grey_Charcoal-0.webp?width=1080&quality=85&auto=webp&format=pjpg"
                  alt=""
                  className="object-contain w-full h-full "
                />
              </div>
            </div>
          </div>
    </div>
  );
};

export default FamousProduct;
