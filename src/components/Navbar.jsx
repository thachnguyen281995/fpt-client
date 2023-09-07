import { Fragment } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link, NavLink } from 'react-router-dom';
import DropMenu from '../Helmet/DropMenu';
import { useSelector } from 'react-redux';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { Badge } from 'antd';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Navbar({ stateCart }) {
  const authState = useSelector((state) => state?.auth?.user);
  const handleLogout = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <Disclosure as="nav" className="bg-[#252525]">
      {({ open }) => (
        <>
          <div className="max-w-[1200px] mx-auto">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <div className="flex-shrink-0"></div>
                <div className="hidden  sm:block">
                  <div className="flex items-center space-x-4">
                    <NavLink
                      to="/"
                      className="px-3 py-2 font-sans text-base text-white uppercase rounded-md hover:bg-gray-700 hover:text-white"
                    >
                      Trang chủ
                    </NavLink>
                    <NavLink
                      to="/product"
                      className="px-3 py-2 font-sans text-base text-white uppercase rounded-md hover:bg-gray-700 hover:text-white"
                    >
                      Cửa hàng
                    </NavLink>
                    <NavLink
                      to="/blog"
                      className="px-3 py-2 font-sans text-base text-white uppercase rounded-md hover:bg-gray-700 hover:text-white"
                    >
                      Tin tức
                    </NavLink>

                    <NavLink
                      to="/my-orders"
                      className="px-3 py-2 font-sans text-base text-white uppercase rounded-md hover:bg-gray-700 hover:text-white"
                    >
                      Đơn hàng
                    </NavLink>
                  </div>
                </div>
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex items-center">
                  {/* Profile dropdown */}
                  <Menu as="div" className="relative mr-3">
                    <div>
                      <Menu.Button className="flex text-sm bg-gray-800 rounded-full focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                        <span className="sr-only">Open user menu</span>
                        {authState && (
                          <span className="h-8 w-8 rounded-full bg-[#455a64] grid place-content-center text-base text-white">
                            {authState?.firstName.slice(0, 1)}
                          </span>
                        )}
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute right-0 z-10 w-48 py-1 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              onClick={handleLogout}
                              href="#"
                              className={classNames(
                                active ? 'bg-gray-100' : '',
                                'block px-4 py-2 text-sm text-gray-700'
                              )}
                            >
                              Đăng xuất
                            </a>
                          )}
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              </div>

              <div className="flex -mr-2 sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white mr-4">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block w-6 h-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block w-6 h-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link to="/" className="block px-3 py-2 text-base text-white uppercase bg-gray-900 rounded-md">
                Trang chủ
              </Link>
              <Link
                to="/product"
                className="block px-3 py-2 text-base text-gray-300 uppercase rounded-md hover:bg-gray-700 hover:text-white"
              >
                Cửa hàng
              </Link>
              <Link
                to="/blog"
                className="block px-3 py-2 text-base text-gray-300 uppercase rounded-md hover:bg-gray-700 hover:text-white"
              >
                Tin tức
              </Link>
              <Link
                to="/my-orders"
                className="block px-3 py-2 text-base text-gray-300 uppercase rounded-md hover:bg-gray-700 hover:text-white"
              ></Link>
            </div>
            <div className="pt-4 pb-3 border-t border-gray-700">
              {authState && (
                <div className="flex items-center px-5">
                  <div className="flex-shrink-0">
                    {authState && (
                      <span className="h-8 w-8 rounded-full bg-[#455a64] grid place-content-center text-base text-white">
                        {authState?.firstName.slice(0, 1)}
                      </span>
                    )}
                  </div>
                  <div className="ml-3">
                    <div className="text-base text-white uppercase">
                      {authState?.firstName + ' ' + authState?.lastName}
                    </div>
                    <div className="text-sm text-gray-400 uppercase">{authState?.email}</div>
                  </div>
                  <button
                    type="button"
                    className="flex-shrink-0 p-1 ml-auto text-gray-400 bg-gray-800 rounded-full hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  >
                    <Badge count={stateCart?.length}>
                      <span className="sr-only">Giỏ hàng</span>
                     <Link to="/cart"> <AiOutlineShoppingCart className="w-6 h-6 text-white" aria-hidden="true" /></Link>
                    </Badge>
                  </button>
                </div>
              )}
              {authState === null ? (
                <div className="px-2 mt-3 space-y-1">
                  <Disclosure.Button
                    as={Link}
                    to="login"
                    className="block px-3 py-2 text-base text-gray-400 uppercase rounded-md hover:bg-gray-700 hover:text-white"
                  >
                    Đăng nhập
                  </Disclosure.Button>
                </div>
              ) : (
                <div className="px-2 mt-3 space-y-1">
                  <Disclosure.Button
                    as="a"
                    href="#"
                    className="block px-3 py-2 text-base text-gray-400 uppercase rounded-md hover:bg-gray-700 hover:text-white"
                    onClick={handleLogout}
                  >
                    Đăng xuất
                  </Disclosure.Button>
                </div>
              )}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
