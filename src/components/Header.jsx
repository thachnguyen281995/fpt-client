import React, { useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import { BsHeadphones } from 'react-icons/bs';
import { TiLocation } from 'react-icons/ti';
import { AiOutlineShopping, AiOutlineUserAdd } from 'react-icons/ai';
import { FaUserAlt } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../assets/images/T-gear-noBg.png';
import Navbar from './Navbar';
import { Typeahead } from 'react-bootstrap-typeahead';
import { Badge } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getCart } from '../features/user/userSlice';
import { getAProduct } from '../features/products/productSlice';
const Header = () => {
  const stateCart = useSelector((state) => state.auth.getCart);
  const productState = useSelector((state) => state?.product?.product);
  const authState = useSelector((state) => state.auth);
  const [productOpt, setProductOpt] = useState([]);
  const [paginate, setPaginate] = useState(true);
  const navigation = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCart());
  }, [dispatch]);
  useEffect(() => {
    let data = [];
    for (let index = 0; index < productState.length; index++) {
      const element = productState[index];
      data.push({ id: index, prod: element?._id, name: element?.title });
    }
    setProductOpt(data);
  }, [productState]);
  return (
    <>
      <header className="py-3">
        <div className="max-w-[1200px] mx-auto">
          <div className="hidden md:flex items-center justify-between md:justify-center xl:justify-between">
            {/* Header Left */}
            <Link to="/" className="w-24 md:w-40">
              <img src={Logo} alt="" />
            </Link>
            {/* Header Search Main */}
            <div className="md:flex px-4 py-2 text-gray-900 bg-white border border-gray-300 rounded-lg">
              <Typeahead
                className="border-transparent header__search-input focus:border-transparent focus:ring-0 w-full"
                id="pagination-example"
                onChange={(selected) => {
                  if (selected[0]?.prod) {
                    navigation(`/product/${selected[0]?.prod}`);
                    dispatch(getAProduct(selected[0]?.prod));
                  }
                }}
                emptyLabel={'Không tìm thấy sản phẩm...'}
                options={productOpt}
                minLength={2}
                paginate={paginate}
                labelKey={'name'}
                placeholder="Tìm kiếm"
              />
              <button className="ml-2">
                <BiSearch size={24} />
              </button>
            </div>
            {/* Header Right */}
            <div className="items-center gap-2 ml-2 group hidden lg:flex">
              <div className="header-action-item gap-x-2 text-main">
                <div className="flex items-center">
                  <span>
                    <AiOutlineUserAdd size={30} />
                  </span>
                  <div className="relative flex">
                    <Link to={authState?.user === null ? '/login' : ''}>
                      {authState?.user !== null ? authState.user.firstName : 'Tài khoản'}
                    </Link>
                  </div>
                </div>
              </div>
              <Link to="/cart" className="header-action-item gap-x-2 text-main">
                <Badge count={stateCart?.length}>
                  <span>
                    <AiOutlineShopping size={30} />
                  </span>
                </Badge>
                <div className="relative flex">
                  <span>Giỏ hàng</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </header>
      <Navbar stateCart={stateCart}/>
    </>
  );
};

export default Header;
