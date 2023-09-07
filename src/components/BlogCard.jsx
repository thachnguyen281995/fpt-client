import React from 'react';
import { useSelector } from 'react-redux';
import moment from 'moment';
import { Link } from 'react-router-dom';
const BlogCard = () => {
  const blogState1 = useSelector((state) => state.blog.blog);
  return (
    <div className="container mx-auto hidden lg:block">
      <div className="grid grid-cols-12 gap-x-5">
        {/* Left */}
        <div className="bg-white rounded-md flex p-5 gap-4 col-span-9">
          <Link to={`${blogState1[0]?._id}`} className="flex flex-col flex-[60%]">
            <div>
              <img
                src={blogState1.length > 0 ? blogState1[0].image : null}
                alt="null"
                className="mb-2 oject-cover rounded-md"
              />
              <div>
                <h1 className="text-xl font-sans font-semibold text-[#3d3d3d]">
                  {blogState1.length > 0 && blogState1[0].title}
                </h1>
                <p className="text-[13px] text-[#9b9b9b]">
                  {moment(blogState1.length > 0 ? blogState1[0].updatedAt : null).format('MM-DD-YYYY')}
                </p>
              </div>
            </div>
          </Link>
          <div className="flex flex-col gap-y-4 flex-[40%]">
            <div className="flex items-center">
              <img
                src={blogState1.length > 0 ? blogState1[1].image : null}
                alt=""
                className="mr-2 max-w-[120px] max-h-[80px] h-full rounded-md"
              />
              <div>
                <Link to={`${blogState1[1]?._id}`}>
                  <h3 className="text-[#3d3d3d] font-sans text-[15px] font-medium">
                    {blogState1.length > 0 && blogState1[1].title}
                  </h3>
                </Link>
                <p className="text-[13px] text-[#9b9b9b]">
                  {moment(blogState1.length > 0 ? blogState1[1].updatedAt : null).format('MM-DD-YYYY')}
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <img
                src={blogState1.length > 0 ? blogState1[2].image : null}
                alt=""
                className="mr-2 max-w-[120px] max-h-[80px] h-full rounded-md"
              />
              <div>
                <Link to={`${blogState1[2]?._id}`}>
                  <h3 className="text-[#3d3d3d] font-sans text-[15px] font-medium line-clamp-3">
                    {blogState1.length > 0 && blogState1[2].title}
                  </h3>
                </Link>
                <p className="text-[13px] text-[#9b9b9b]">
                  {moment(blogState1.length > 0 ? blogState1[2].updatedAt : null).format('MM-DD-YYYY')}
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <img
                src={blogState1.length > 0 ? blogState1[3].image : null}
                alt=""
                className="mr-2 max-w-[120px] max-h-[80px] h-full rounded-md"
              />
              <div>
                <Link to={`${blogState1[3]?._id}`}>
                  <h3 className="text-[#3d3d3d] font-sans text-[15px] font-medium ">
                    {blogState1.length > 0 && blogState1[3].title}
                  </h3>
                </Link>
                <p className="text-[13px] text-[#9b9b9b]">
                  {moment(blogState1.length > 0 ? blogState1[3].updatedAt : null).format('MM-DD-YYYY')}
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <img
                src={blogState1.length > 0 ? blogState1[4].image : null}
                alt=""
                className="mr-2 max-w-[120px] max-h-[80px] h-full rounded-md"
              />
              <div>
                <Link to={`${blogState1[4]?._id}`}>
                  <h3 className="text-[#3d3d3d] font-sans text-[15px] font-medium line-clamp-3">
                    {blogState1.length > 0 && blogState1[4].title}
                  </h3>
                </Link>
                <p className="text-[13px] text-[#9b9b9b]">
                  {moment(blogState1.length > 0 ? blogState1[4].updatedAt : null).format('MM-DD-YYYY')}
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Right */}
        <div className="bg-white rounded-md py-[10px] px-[15px] shadow-sm col-span-3">
          <div className="border-b-[1px]">
            <h3 className="text-primary font-medium font-sans pb-2 text-lg">Xem nhiều</h3>
          </div>
          <div className="mt-4">
            <ul className="text-sm flex gap-7 flex-col">
              <li className="flex items-center">
                <span className="w-10 h-10 bg-redcb rounded-full text-white mr-2 border-circle">1</span>
                <a className="line-clamp-2" href="/blog/:id">
                  Tổng hợp 5 cách tra cứu điểm thi tốt nghiệp THPT Quốc gia 2023 cực nhanh và chính xác
                </a>
              </li>
              <li className="flex items-center">
                <span className="w-10 h-10 bg-[#99a2aa] rounded-full text-white mr-2 border-circle">2</span>
                <a className="line-clamp-2" href="/blog/:id">
                  Nokia C32: Siêu phẩm giá rẻ với camera 50MP, chống nước tốt, pin “trâu” đến 3 ngày
                </a>
              </li>
              <li className="flex items-center">
                <span className="w-10 h-10 bg-[#ced4da] rounded-full text-white mr-2 border-circle">3</span>
                <a className="line-clamp-2" href="/blog/:id">
                  Honor Play 40C ra mắt: Màn hình 90Hz, chip Snapdragon 480 Plus
                </a>
              </li>
              <li className="flex items-center">
                <span className="w-10 h-10 bg-[#ced4da] rounded-full text-white mr-2 border-circle">4</span>
                <a className="line-clamp-2" href="/blog/:id">
                  Trên tay OPPO A78: Sạc nhanh 67W, bộ nhớ “khủng” 256GB, thiết kế đẹp, giá “mềm”
                </a>
              </li>
              <li className="flex items-center">
                <span className="w-10 h-10 bg-[#ced4da] rounded-full text-white mr-2 border-circle">5</span>
                <a className="line-clamp-2" href="/blog/:id">
                  Top 5 laptop cho giáo viên tốt nhất 2023: Đẹp, gọn nhẹ, pin trâu, giá rẻ
                </a>
              </li>
              <li className="flex items-center">
                <span className="w-10 h-10 bg-[#ced4da] rounded-full text-white mr-2 border-circle">6</span>
                <a className="line-clamp-2" href="/blog/:id">
                  Mong chờ gì từ sự kiện Galaxy Unpacked ngày 26/7 của Samsung?
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
