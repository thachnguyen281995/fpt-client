import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import * as yup from 'yup';
import { Link, useNavigate } from 'react-router-dom';
import { loginUser } from '../features/user/userSlice';
const Login = () => {
  const authState = useSelector((state) => state?.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loginSchema = yup.object({
    email: yup.string().email('Email phải hợp lệ').required('Yêu cầu nhập địa chỉ email'),
    password: yup.string().required('Yêu cầu nhập mật khẩu*')
  });
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: loginSchema,
    onSubmit: (values) => {
      dispatch(loginUser(values));
    }
  });
  useEffect(() => {
    if(authState.user !== null && authState.isError === false){
      navigate('/')
    }
  },[authState])
  return (
    <div className="container py-10 mx-auto">
      <div className="max-w-md p-5 mx-auto bg-white rounded-md shadow-sm">
        <div className="py-4">
          <img
            src="https://res.cloudinary.com/dgh2j7n1e/image/upload/v1690012930/t-gear-ecom/img-login_qgiill.png"
            alt=""
            className="max-w-[156px] mx-auto"
          />
        </div>
        <form className="" onSubmit={formik.handleSubmit}>
          <div className="border-[#cbd1d6] border py-2 px-4 rounded-md">
            <input
              type="email"
              name="email"
              placeholder="Nhập email của bạn"
              className="w-full text-base"
              value={formik.values.email}
              onChange={formik.handleChange('email')}
              onBlur={formik.handleBlur('email')}
            />
          </div>
          <div className="my-2 text-sm indent-2 error text-redcb">{formik.touched.email && formik.errors.email}</div>
          <div className="border-[#cbd1d6] border py-2 px-4 rounded-md ">
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
          <div className="flex justify-center gap-4 mt-5">
            <button
              type="submit"
              className="px-4 py-2 font-sans text-xl text-white bg-red-700 rounded-md hover:bg-red-800"
            >
              Đăng Nhập
            </button>
            <Link
              to="/sign-up"
              className="px-4 py-2 font-sans text-xl text-white bg-red-700 rounded-md hover:bg-red-800"
            >
              Đăng Ký
            </Link>
          </div>
        
        </form>
      </div>
    </div>
  );
};

export default Login;
