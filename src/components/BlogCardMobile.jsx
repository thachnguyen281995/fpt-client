import React from 'react';
import { useSelector } from 'react-redux';
import moment from 'moment';
import { Link } from 'react-router-dom';
const BlogCardMobile = () => {
  const blogState1 = useSelector((state) => state.blog.blog);
  return (
    <>
      <div className="lg:hidden">
        <div className="wrapper-blog">
          <Link className="img-blog" to={`${blogState1[1]?._id}`}>
            <img src={blogState1[1]?.image} alt={blogState1[1]?.id} />
          </Link>
          <div className="mt-3">
            <h1 className="text-base font-sans font-semibold text-[#3d3d3d]">{blogState1[1]?.title}</h1>
            <p className="text-sm text-[#9b9b9b]">
              {moment(blogState1.length > 0 ? blogState1[1].updatedAt : null).format('MM-DD-YYYY')}
            </p>
          </div>
        </div>
        <div className="wrapper-blog">
          <Link className="img-blog" to={`${blogState1[2]?._id}`}>
            <img src={blogState1[2]?.images[0].url} alt={blogState1[2]?.id} />
          </Link>
          <div className="mt-3">
            <h1 className="text-base font-sans font-semibold text-[#3d3d3d]">{blogState1[2]?.title}</h1>
            <p className="text-sm text-[#9b9b9b]">
              {moment(blogState1.length > 0 ? blogState1[2].updatedAt : null).format('MM-DD-YYYY')}
            </p>
          </div>
        </div>
        <div className="wrapper-blog">
          <Link className="img-blog" to={`${blogState1[3]?._id}`}>
            <img src={blogState1[3]?.images[0].url} alt={blogState1[2]?.id} />
          </Link>
          <div className="mt-3">
            <h1 className="text-base font-sans font-semibold text-[#3d3d3d]">{blogState1[3]?.title}</h1>
            <p className="text-sm text-[#9b9b9b]">
              {moment(blogState1.length > 0 ? blogState1[3].updatedAt : null).format('MM-DD-YYYY')}
            </p>
          </div>
        </div>
        <div className="wrapper-blog">
          <Link className="img-blog" to={`${blogState1[4]?._id}`}>
            <img src={blogState1[4]?.images[0].url} alt={blogState1[4]?.id} />
          </Link>
          <div className="mt-3">
            <h1 className="text-base font-sans font-semibold text-[#3d3d3d]">{blogState1[4]?.title}</h1>
            <p className="text-sm text-[#9b9b9b]">
              {moment(blogState1.length > 0 ? blogState1[4].updatedAt : null).format('MM-DD-YYYY')}
            </p>
          </div>
        </div>
        <div className="wrapper-blog">
          <Link className="img-blog" to={`${blogState1[5]?._id}`}>
            <img src={blogState1[5]?.images[0].url} alt={blogState1[5]?.id} />
          </Link>
          <div className="mt-3">
            <h1 className="text-base font-sans font-semibold text-[#3d3d3d]">{blogState1[5]?.title}</h1>
            <p className="text-sm text-[#9b9b9b]">
              {moment(blogState1.length > 0 ? blogState1[5].updatedAt : null).format('MM-DD-YYYY')}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogCardMobile;
