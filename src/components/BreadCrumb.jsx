import React from 'react';
import { Breadcrumb } from 'antd';
import { Link } from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai';
const BreadCrumb = (props) => {
  const { title } = props;
  return (
    <div className="py-4 bg-white shadow-sm">
      <div className="max-w-[1200px] mx-auto md:pl-1 xl:pl-0">
        <Breadcrumb
          className="font-sans"
          items={[
            {
              title: (
                <Link to="/">
                  <span className="flex items-center gap-x-2">
                    <AiFillHome />
                    Trang chủ
                  </span>
                </Link>
              )
            },
            
            {
              title: title
            }
          ]}
        ></Breadcrumb>
      </div>
    </div>
  );
};

export default BreadCrumb;
