import React, { useEffect } from 'react';
import BannerProduct from '../BannerProduct/BannerProduct';
import TableInfo from './TableInfo';
import { Link } from 'react-router-dom';
import { Input, Divider } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { getAllBlogs } from '../../features/blogs/blogSlice';
const { TextArea } = Input;
const BottomSale = () => {
  const dispatch = useDispatch();
  const getallBlogs = () => {
    dispatch(getAllBlogs());
  };
  useEffect(() => {
    getallBlogs();
  }, [dispatch]);
  const { blog } = useSelector((state) => state.blog);
  const stateSingleProduct = useSelector((state) => state.product.singleProduct);
  const productCarousel = [];
  for (let i = 0; i < 5; i++) {
    productCarousel.push(stateSingleProduct?.slideImage[i]?.url);
  }
  const newsInfo = [
    {
      id: blog[0]?.id,
      title: blog[0]?.title,
      image: blog[0]?.image
    },
    {
      id: blog[1]?.id,
      title: blog[1]?.title,
      image: blog[1]?.image
    },
    {
      id: blog[2]?.id,
      title: blog[2]?.title,
      image: blog[2]?.image
    },
    {
      id: blog[3]?.id,
      title: blog[3]?.title,
      image: blog[3]?.image
    },
    {
      id: blog[4]?.id,
      title: blog[4]?.title,
      image: blog[4]?.image
    }
  ];
  return (
    <div className=" pb-5 mx-auto">
      <div className="grid grid-cols-12 mx-auto pd-bottom gap-x-5">
        {/* Left */}
        <div className="col-span-7 mt-5 pd-bottom__left bg-white">
          <div className="px-5 pt-4 card re-card">
            <h2 className="title">Đặc điểm nổi bật của {stateSingleProduct?.title}</h2>
            <div className="card-body">
              <BannerProduct imageCarousel={productCarousel} />
            </div>
            <h2 className="mt-4 text-center st-pd-contentTitle title">Đánh giá chi tiết {stateSingleProduct?.title}</h2>
            <p className="mb-3 font-medium">
              {stateSingleProduct?.danhGiaChiTiet}
            </p>
            <div className="p-2">
              <img src={stateSingleProduct?.descImage[0]} alt="" className="rounded-md" />
            </div>
          </div>
        </div>
        {/* Right Table */}
        <div className="col-span-5 mt-5 pd-bottom__right bg-white">
          <div className="px-5 pt-4 card re-card">
            <h2 className="title">Thông số kỹ thuật</h2>
            <table className="st-pd-table">
              <TableInfo />
            </table>
          </div>
          <div className="px-5 pt-4 card re-card">
            <h2 className="title">Tin tức công nghệ mới nhất</h2>
            <div className="card-body-news">
              {newsInfo?.map((item, index) => {
                return (
                  <div className="mb-5 c-news" key={index}>
                    <div className="flex-[20%]">
                      <img src={item.image} alt="" className="object-cover" />
                    </div>
                    <div className="flex-[80%] c-news-info">
                      <Link to={`/blog/${item.id}`} className="font-sans text-[15px] text-textInfo hover:text-blue-500">
                        {item.title}
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      {/* Comment */}
     
    </div>
  );
};

export default BottomSale;
