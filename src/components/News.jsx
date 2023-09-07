import React, { useEffect } from 'react';
import { Tabs } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

const News = () => {
  const blogState1 = useSelector((state) => state.blog.blog);
  const items = [
    {
      key: '1',
      label: 'Mới nhất',
      children: (
        <>
          <div className="grid grid-cols-2 w-full py-5 border-underline">
            {/* Left */}
            <div className="podcast-left mr-5 border-right ">
              <article className="item-news">
                <div className="image max-w-[250px] h-[140px] flex-2">
                  <Link to={`${blogState1[5]?._id}`}>
                    <img src={blogState1[5]?.image} alt="" className="rounded-md object-cover h-full w-full" />
                  </Link>
                </div>
                <div className="title-news flex flex-col flex-1">
                  <Link
                    to={`${blogState1[5]?._id}`}
                    className="text-base font-merri font-semibold text-primary hover:text-[#1677ff] cursor-pointer mb-4"
                  >
                    {blogState1[5]?.title}
                  </Link>
                  <p className="text-sm text-[#4f4f4f] font-merri line-clamp-3">{blogState1[5]?.description[0]}</p>
                </div>
              </article>
            </div>
            {/* Right */}
            <div className="podcast-right">
              <article className="item-news">
                <div className="image max-w-[250px] h-[140px] flex-2">
                  <Link to={`${blogState1[6]?._id}`}>
                    <img src={blogState1[6]?.image} alt="" className="rounded-md object-cover h-full w-full" />
                  </Link>
                </div>
                <div className="title-news flex flex-col flex-1">
                  <Link
                    to={`${blogState1[6]?._id}`}
                    className="text-base font-merri font-semibold text-primary hover:text-[#1677ff] cursor-pointer mb-4"
                  >
                    {blogState1[6]?.title}
                  </Link>
                  <p className="text-sm text-[#4f4f4f] font-merri line-clamp-3">{blogState1[6]?.description[0]}</p>
                </div>
              </article>
            </div>
          </div>
          <div className="grid grid-cols-3 w-full py-5 border-underline">
            {/* first */}
            <div className="mr-5 border-right pr-5 flex flex-col">
              <Link
                to={`${blogState1[7]?.id}`}
                className="text-base font-merri font-semibold text-primary  hover:text-[#1677ff] cursor-pointer mb-2"
              >
                {blogState1[7]?.title}
              </Link>
              <p className="text-sm text-[#4f4f4f] font-merri">{blogState1[7]?.description[0]}</p>
            </div>
            {/* second */}
            <div className="mr-5 border-right pr-5 flex flex-col">
              <Link
                to={`${blogState1[8]?.id}`}
                className="text-base font-merri font-semibold text-primary  hover:text-[#1677ff] cursor-pointer mb-2"
              >
                {blogState1[8]?.title}
              </Link>
              <p className="text-sm text-[#4f4f4f] font-merri line-clamp-2">{blogState1[8]?.description[0]}</p>
            </div>
            {/* third */}
            <div className="mr-5 border-right pr-5 flex flex-col">
              <Link
                to={`${blogState1[9]?.id}`}
                className="text-base font-merri font-semibold text-primary  hover:text-[#1677ff] cursor-pointer mb-2"
              >
                {blogState1[9]?.title}
              </Link>
              <p className="text-sm text-[#4f4f4f] font-merri line-clamp-3">{blogState1[9]?.description[0]}</p>
            </div>
          </div>
        </>
      )
    },
    {
      key: '2',
      label: 'Express Hôm Nay',
      children: (
        <>
          <div className="mr-5 border-right pr-5 flex flex-col mb-2">
            <Link
              to={`${blogState1[10]?.id}`}
              className="text-base font-merri font-semibold text-primary  hover:text-[#1677ff] cursor-pointer mb-2"
            >
              {blogState1[10]?.title}
            </Link>
            <p className="text-sm text-[#4f4f4f] font-merri line-clamp-3">{blogState1[10]?.description[0]}</p>
          </div>
          <div className="mr-5 border-right pr-5 flex flex-col">
            <Link
              to={`${blogState1[11]?.id}`}
              className="text-base font-merri font-semibold text-primary  hover:text-[#1677ff] cursor-pointer mb-2"
            >
              {blogState1[11]?.title}
            </Link>
            <p className="text-sm text-[#4f4f4f] font-merri line-clamp-3">{blogState1[11]?.description[0]}</p>
          </div>
        </>
      )
    }
  ];
  return (
    <div className="max-w-6xl mx-auto py-5 hidden lg:block">
      <div className="mx-auto max-w-2xl text-center"></div>
      <Tabs defaultActiveKey="1" items={items}  />
    </div>
  );
};

export default News;
