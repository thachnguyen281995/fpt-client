import React, { useEffect, useState } from 'react';
import BreadCrumb from '../../components/BreadCrumb';
import Meta from '../../components/Meta';
import Rating from '../../Helmet/Rating/Rating';
import SelectDropDown from '../../Helmet/Select/Select';
import { CgMenuGridR } from 'react-icons/cg';
import { AiOutlineBars } from 'react-icons/ai';
import './styles.css';
import ProductCard from '../../components/ProductCard/ProductCard';
import BannerProduct from '../../components/BannerProduct/BannerProduct';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../../features/products/productSlice';
import ProductCardMobile from '../../components/ProductCard/ProductCardMobile';
const OurStore = () => {
  const dispatch = useDispatch();

  const { product } = useSelector((state) => state.product);
  const [grid, setGrid] = useState(3);
  const [activeTab, setActiveTab] = useState('');
  const [toggle, setToggle] = useState(true);
  const [secondToggle, setSecondToggle] = useState(false);
  const [brands, setBrands] = useState([]);
  const [categories, setCategories] = useState([]);
  const [tags, setTags] = useState([]);

  // Filter State

  const [tag, setTag] = useState(null);
  const [category, setCategory] = useState(null);
  const [minPrice, setMinPrice] = useState(null);
  const [maxPrice, setMaxPrice] = useState(null);
  const [sort, setSort] = useState(null);

  useEffect(() => {
    let newBrands = [];
    let category = [];
    let newtags = [];
    for (let i = 0; i < product.length; i++) {
      const element = product[i];
      newBrands.push(element.brand);
      category.push(element.category);
      newtags.push(element.tags);
    }
    setBrands(newBrands);
    setCategories(category);
    setTags(newtags);
  }, [product]);
  useEffect(() => {
    const getProducts = async () => {
      dispatch(getAllProducts({ sort, tag, category, minPrice, maxPrice }));
    };
    getProducts();
  }, [sort, tag, category, minPrice, maxPrice]);
  const handleActive = (tabName) => {
    setActiveTab(tabName);
  };
  const gridSetter = (i) => {
    if (i === 3) {
      handleActive('tab1');
      setToggle(true);
      setSecondToggle(false);
    } else if (i === 1) {
      handleActive('tab2');
      setToggle(false);
      setSecondToggle(true);
    }
    setGrid(i);
  };
  const imageCarousel = [
    'https://res.cloudinary.com/dgh2j7n1e/image/upload/v1690452351/t-gear-ecom/638252265551520212_F-C1_1200x300iP13_20EVO_uytqce.png',
    'https://res.cloudinary.com/dgh2j7n1e/image/upload/v1690452345/t-gear-ecom/638257810585217123_F-C1_1200x30014PRM_20580_ymiyfr.png'
  ];

  const colorMap = {
    Apple: '#0f71fb',
    'laptop-gaming': '#025464',
    'hot-sale': '#B70404',
    'may-tinh-xach-tay': '#27374D'
  };
  return (
    <>
      <Meta title={'Cửa Hàng'} />
      <BreadCrumb title="Cửa Hàng" />
      <div className='max-w-[1200px] mx-auto'>
        <BannerProduct imageCarousel={imageCarousel} />
        <div className="container grid grid-cols-12 gap-4 mx-auto">
          <div className="col-span-3 hidden lg:block">
            <div className="bg-white rounded-md py-[10px] px-[15px] mb-4 shadow-sm">
              <h3 className="mb-5 text-base font-semibold text-primary sm:text-sm">Danh mục</h3>
  
              <div>
                <ul className="text-sm leading-7 grid grid-cols-2 ">
                  {['Tất cả', ...new Set(categories)].map((item, index) => (
                    <button
                      className={`text-[#777] hover:cursor-pointer hover:underline hover:text-redcb w-fit ${
                        item === category ? 'text-redcb' : ''
                      }`}
                      key={index}
                      onClick={() => setCategory(item === 'Tất cả' ? null : item)}
                    >
                      {item}
                    </button>
                  ))}
                </ul>
              </div>
            </div>
            <div className="bg-white rounded-md py-[10px] px-[15px] mb-4 shadow-sm">
              <h3 className="my-5 text-base font-semibold text-primary sm:text-sm">Giá</h3>
              <div className="grid grid-cols-2 gap-x-2">
                <div className="p-1 mb-2 overflow-hidden border bg-whitelight">
                  <input
                    type="number"
                    className="p-1 mr-2 overflow-hidden text-sm"
                    placeholder="Từ"
                    onChange={(e) => setMinPrice(e.target.value)}
                  />
                  <label htmlFor="floatingInput" className="text-sm text-[#777]"></label>
                </div>
                <div className="p-1 mb-2 overflow-hidden border bg-whitelight">
                  <input
                    type="number"
                    className="mr-2 text-sm"
                    placeholder="Đến"
                    onChange={(e) => setMaxPrice(e.target.value)}
                  />
                  <label htmlFor="floatingInput1" className="text-sm text-[#777]"></label>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-md py-[10px] px-[15px] mb-4 shadow-sm">
              <h3 className="mb-5 text-base font-semibold text-primary sm:text-sm">Sản phẩm Tags</h3>
  
              <div className="flex flex-wrap items-center gap-2">
                {tags &&
                  ['Tags', ...new Set(tags)].map((item, index) => {
                    const backgroundColor = colorMap[item] || '#3F72AF';
                    return (
                      <span
                        className="text-sm text-white py-1 px-2 cursor-pointer rounded-sm duration-250 hover:scale-105 "
                        key={index}
                        onClick={() => setTag(item === 'Tags' ? null : item)}
                        style={{ backgroundColor: backgroundColor }}
                      >
                        {item}
                      </span>
                    );
                  })}
              </div>
            </div>
            <div className="bg-white rounded-md py-[10px] px-[15px] mb-4 shadow-sm">
              <h3 className="mb-5 text-base font-semibold text-primary sm:text-sm">Sản phẩm ngẫu nhiên</h3>
              <div className="grid items-center lg:grid-cols-2 pb-2 border-underline">
                <div className="w-20 mx-auto">
                  <img
                    src="https://res.cloudinary.com/dgh2j7n1e/image/upload/v1689852577/t-gear-ecom/638161092136822060_xiaomi-redmi-10-2022-dd-docquyen_t3fz1s.webp"
                    alt=""
                    className="object-cover"
                  />
                </div>
                <div className="product-random__info">
                  <h1 className="mb-2 text-sm font-semibold text-primary sm:mt-5">Điện thoại Redmi 10 4+64GB</h1>
                  <Rating customSize={15} />
                  <p className="mt-2 text-sm font-semibold text-redcb">4.250.000₫</p>
                </div>
              </div>
              <div className="grid items-center lg:grid-cols-2 pb-2 mt-2 ">
                <div className="w-20 mx-auto">
                  <img
                    src="https://res.cloudinary.com/dgh2j7n1e/image/upload/v1689925283/t-gear-ecom/637986015090330798_apple-watch-se-2-gps-cellular-40mm-trang-dd_zisi4b.jpg"
                    alt=""
                    className="object-cover"
                  />
                </div>
                <div className="product-random__info">
                  <h1 className="mb-2 text-sm font-semibold text-primary">Apple Watch SE 2 GPS </h1>
                  <Rating customSize={15} />
                  <p className="mt-2 text-sm font-semibold text-redcb">7.490.000₫</p>
                </div>
              </div>
            </div>
          </div>
          <div className=" col-span-12 lg:col-span-9">
            <div className="bg-white rounded-md py-[10px] px-[15px] flex justify-between mb-4">
              <div>
                <span className="mr-2 text-sm">Ưu tiên xem: </span>
                <SelectDropDown setSort={setSort} />
              </div>
              <div className="lg:flex items-center gap-x-2 hidden">
                <p className="text-sm">{product.length} Sản phẩm</p>
                <div className="flex items-center gap-x-2">
                  <div className="flex items-center">
                    <CgMenuGridR size={30} onClick={() => gridSetter(3)} className={`${toggle ? 'text-red-500' : ''}`} />
                    <AiOutlineBars
                      size={30}
                      onClick={() => gridSetter(1)}
                      className={`${secondToggle ? 'text-red-500' : ''} `}
                    />
                  </div>
                </div>
              </div>
            </div>
  
            <div className="bg-white rounded-md py-[10px] px-[15px]">
              <ProductCard grid={grid} data={product} />
              <ProductCardMobile data={product} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurStore;
