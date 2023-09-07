import React, { useEffect } from 'react';
import News from '../components/News';
import Meta from '../components/Meta';
import BlogCard from '../components/BlogCard';
import BreadCrumb from '../components/BreadCrumb';
import { useDispatch, useSelector } from 'react-redux';
import { getAllBlogs } from '../features/blogs/blogSlice';
import BlogCardMobile from '../components/BlogCardMobile';
const Blog = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllBlogs())
  },[dispatch])

  return (
    <>
      <Meta title={'Tin Tức'} />
      <BreadCrumb title="Tin tức công nghệ" />
      <div className="max-w-[1200px] mx-auto p-2">
        <h1 className="mt-2 text-sm lg:text-lg leading-8 text-gray-600 mb-4">
          Bao gồm những tin tức mới nhất về các lĩnh vực công nghệ.
        </h1>
        <BlogCard />
        <BlogCardMobile/>
        <News />
      </div>
    </>
  );
};

export default Blog;
