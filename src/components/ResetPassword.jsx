import React from 'react';
import Meta from './Meta';
const ResetPassword = () => {
  return (
    <>
      <Meta title={'Đặt lại mật khẩu'} />
      <div className="container mx-auto p-10">
        <div className="wrapper grid grid-cols-2 items-center  py-8 px-4">
          <div className="max-w-md">
            <img
              src="https://res.cloudinary.com/dgh2j7n1e/image/upload/v1690079449/t-gear-ecom/undraw_gaming_re_cma2_equycm.svg"
              alt=""
            />
          </div>
          <form className="">
            <h1 className="text-2xl font-medium font-sans mb-4 capitalize">Đặt lại mật khẩu</h1>
            <div className="border-[#cbd1d6] border py-2 px-4 rounded-md mb-4">
              <input type="password" name="password" placeholder="Mật khẩu" className="form-control text-base w-full" />
            </div>
            <div className="border-[#cbd1d6] border py-2 px-4 rounded-md">
              <input
                type="password"
                name="password"
                placeholder="Đặt lại mật khẩu"
                className="form-control text-base w-full"
              />
            </div>
            <button
              type="submit"
              className="mx-auto px-4 py-2 rounded-md bg-red-700 hover:bg-red-800 text-white mt-4 text-2xl font-sans "
            >
              Tiếp Tục
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ResetPassword;
