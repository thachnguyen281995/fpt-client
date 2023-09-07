import React from 'react';
import { BsArrowLeft } from 'react-icons/bs';
import { Link, useLocation } from 'react-router-dom';
import { FloatButton } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getABlog } from '../features/blogs/blogSlice';
const BlogSingle = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const getBlogId = location.pathname.split('/')[2];
  useEffect(() => {
    getBlog();
  }, [dispatch]);
  const getBlog = () => {
    dispatch(getABlog(getBlogId));
  };
  const blogState = useSelector((state) => state?.blog.singleBlog);
  return (
    <>
      <div className="bg-blogsingle">
        <div className="container grid grid-cols-12 gap-4 mx-auto p-5">
          <div className="col-span-4 hidden lg:block">
            <div className="bg-white rounded-md py-[10px] px-[15px] mb-4 shadow-sm">
              <div className="border-b-[1px]">
                <h3 className="text-primary font-medium font-sans pb-2 text-lg">Xem nhiều</h3>
              </div>
              <div className="mt-4">
                <ul className="text-sm flex gap-y-4 flex-col">
                  <li className="flex items-center">
                    <span className="w-10 h-10 bg-redcb rounded-full text-white mr-2 border-circle">1</span>
                    <Link className="line-clamp-2">
                      Tổng hợp 5 cách tra cứu điểm thi tốt nghiệp THPT Quốc gia 2023 cực nhanh và chính xác
                    </Link>
                  </li>
                  <li className="flex items-center">
                    <span className="w-10 h-10 bg-[#99a2aa] rounded-full text-white mr-2 border-circle">2</span>
                    <Link className="line-clamp-2">
                      Nokia C32: Siêu phẩm giá rẻ với camera 50MP, chống nước tốt, pin “trâu” đến 3 ngày
                    </Link>
                  </li>
                  <li className="flex items-center">
                    <span className="w-10 h-10 bg-[#ced4da] rounded-full text-white mr-2 border-circle">3</span>
                    <Link className="line-clamp-2">Honor Play 40C ra mắt: Màn hình 90Hz, chip Snapdragon 480 Plus</Link>
                  </li>
                  <li className="flex items-center">
                    <span className="w-10 h-10 bg-[#ced4da] rounded-full text-white mr-2 border-circle">4</span>
                    <Link className="line-clamp-2">
                      Trên tay OPPO A78: Sạc nhanh 67W, bộ nhớ “khủng” 256GB, thiết kế đẹp, giá “mềm”
                    </Link>
                  </li>
                  <li className="flex items-center">
                    <span className="w-10 h-10 bg-[#ced4da] rounded-full text-white mr-2 border-circle">5</span>
                    <Link className="line-clamp-2">
                      Top 5 laptop cho giáo viên tốt nhất 2023: Đẹp, gọn nhẹ, pin trâu, giá rẻ
                    </Link>
                  </li>
                  <li className="flex items-center">
                    <span className="w-10 h-10 bg-[#ced4da] rounded-full text-white mr-2 border-circle">6</span>
                    <Link className="line-clamp-2">Mong chờ gì từ sự kiện Galaxy Unpacked ngày 26/7 của Samsung?</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-8">
            <div className="bg-white rounded-md py-[10px] px-[15px] mb-4 shadow-sm">
              <div className="blogsingle-top font-merri">
                <h1 className="text-3xl mb-4 font-semibold">{blogState?.title}</h1>
                <p className="text-[#222] leading-8 py-2">{blogState?.description[0]}</p>
                <p className="text-[#222] leading-8 py-2">{blogState?.description[1]}</p>
                <div className="mt-4">
                  <img src={blogState?.images[0]?.url} alt={blogState?._id} />
              
                </div>
                <p className="text-[#222] leading-8 py-2">{blogState?.description[2]}</p>
                <p className="text-[#222] leading-8 py-2">{blogState?.description[3]}</p>
                {blogState?.description[4] === true ? (
                  <p className="text-red-500 leading-8 py-2">neu co thi hien</p>
                ) : null}
                {blogState?.images.length > 1 && (
                  <div className="wrapper">
                    <div className="mt-4">
                      <img src={blogState?.images[1].url} alt={blogState?._id} />
                    </div>
                    <p className="text-[#222] font-semibold leading-8 py-2">{blogState?.listDesc[0].subTitle}</p>
                    {blogState?.listDesc[0].subDesc && (
                      <div>
                        <ul>
                          {blogState?.listDesc[0].subDesc &&
                            blogState?.listDesc[0].subDesc.map((item, index) => (
                              <li key={index} className="list-disc ml-4 mb-4">
                                {item}
                              </li>
                            ))}
                        </ul>
                      </div>
                    )}
                    <p className="text-[#222] font-semibold leading-8 py-2">{blogState?.listDesc[1]?.subTitle}</p>
                    <div className="mt-4">
                      <img src={blogState?.images[2].url} alt={blogState?._id} />
                      <p className="text-[#222]  leading-8 py-2">{blogState?.listDesc[1].subDesc}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="footer-content flex justify-start">
              <div className="border p-2 rounded-md bg-white">
                <Link to="/blog">
                  <BsArrowLeft size={25} />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <FloatButton.BackTop />
      </div>
    </>
  );
};

export default BlogSingle;
