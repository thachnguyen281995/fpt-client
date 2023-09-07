import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../features/user/userSlice';
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
  const authState = useSelector((state) => state.auth)
  const dispatch = useDispatch();
  const signUpSchema = yup.object({
    firstName: yup.string().required('Yêu cầu nhập tên'),
    lastName: yup.string().required('Yêu cầu nhập họ'),
    email: yup.string().required('Yêu cầu nhập địa chỉ email').email('Email phải hợp lệ'),
    mobile: yup.string().required('Nhập số điện thoại của bạn'),
    password: yup.string().required('Yêu cầu nhập mật khẩu')
  });
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      mobile: '',
      password: ''
    },
    validationSchema: signUpSchema,
    onSubmit: (values) => {
      dispatch(registerUser(values));
    }
  });
  
  return (
    <div className="container py-10 mx-auto">
      <div className="max-w-md p-5 mx-auto bg-white rounded-md shadow-sm">
        <h3 className='text-2xl font-medium'> Đăng Ký</h3>
        <div className="py-4">
          <img
            src="https://res.cloudinary.com/dgh2j7n1e/image/upload/v1690020246/t-gear-ecom/undraw_forgot_password_gi2d_b5s1tk.png"
            alt=""
            className="max-w-[156px] mx-auto"
          />
        </div>
        <form action="" className="flex flex-col" onSubmit={formik.handleSubmit}>
          <div className="border-[#cbd1d6] border py-2 px-4 rounded-md">
            <input
              type="text"
              name="firstName"
              placeholder="Tên"
              className="w-full text-base form-control"
              value={formik.values.firstName}
              onChange={formik.handleChange('firstName')}
              onBlur={formik.handleBlur('firstName')}
            />
          </div>
          <div className="my-2 text-sm indent-2 error text-redcb">
            {formik.touched.firstName && formik.errors.firstName}
          </div>
          <div className="border-[#cbd1d6] border py-2 px-4 rounded-md">
            <input
              type="text"
              name="lastName"
              placeholder="Họ"
              className="w-full text-base form-control"
              value={formik.values.lastName}
              onChange={formik.handleChange('lastName')}
              onBlur={formik.handleBlur('lastName')}
            />
          </div>
          <div className="my-2 text-sm indent-2 error text-redcb">
            {formik.touched.lastName && formik.errors.lastName}
          </div>
          <div className="border-[#cbd1d6] border py-2 px-4 rounded-md">
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full text-base form-control"
              value={formik.values.email}
              onChange={formik.handleChange('email')}
              onBlur={formik.handleBlur('email')}
            />
          </div>
          <div className="my-2 text-sm indent-2 error text-redcb">{formik.touched.email && formik.errors.email}</div>
          <div className="border-[#cbd1d6] border py-2 px-4 rounded-md">
            <input
              type="tel"
              name="mobile"
              placeholder="Nhập số điện thoại"
              className="w-full text-base form-control"
              value={formik.values.mobile}
              onChange={formik.handleChange('mobile')}
              onBlur={formik.handleBlur('mobile')}
            />
          </div>
          <div className="my-2 text-sm indent-2 error text-redcb">{formik.touched.mobile && formik.errors.mobile}</div>
          <div className="border-[#cbd1d6] border py-2 px-4 rounded-md">
            <input
              type="password"
              name="password"
              placeholder="Nhập mật khẩu"
              className="w-full text-base form-control"
              value={formik.values.password}
              onChange={formik.handleChange('password')}
              onBlur={formik.handleBlur('password')}
            />
          </div>
          <div className="my-2 text-sm indent-2 error text-redcb">
            {formik.touched.password && formik.errors.password}
          </div>
          <button
            type="submit"
            className="px-4 py-2 font-sans text-xl text-white bg-red-700 rounded-md hover:bg-red-800"
          >
            Tiếp tục
          </button>
        </form>
        <Link to="/login" className='block mt-2 text-sm text-end text-text1d hover:underline'>Đăng nhập </Link>
      </div>
    </div>
  );
};

export default Signup;
