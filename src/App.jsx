import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Blog from './pages/Blog';
import HotSale from './components/HotSale/ProductHotSale';
import OurStore from './pages/OurStore/OurStore';
import BlogSingle from './pages/BlogSingle';
import SingleProduct from './pages/SingleProduct/SingleProduct';
import Cart from './pages/Cart/Cart';
import Checkout from './pages/Checkout/Checkout';
import Signup from './components/Signup';
import Login from './components/Login';
import Wishlist from './components/Wishlist';
import PrivateRoutes from './routes/PrivateRoutes';
import OpenRoutes from './routes/OpenRoutes';
import Order from './components/Order';
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog/:id" element={<BlogSingle />} />
          <Route
            path="cart"
            element={
              <PrivateRoutes>
                <Cart />
              </PrivateRoutes>
            }
          />
          <Route
            path="my-orders"
            element={
              <PrivateRoutes>
                <Order />
              </PrivateRoutes>
            }
          />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="product" element={<OurStore />} />
          <Route path="product/:id" element={<SingleProduct />} />
          <Route path="hotsale" element={<HotSale />} />

          <Route
            path="sign-up"
            element={
              <OpenRoutes>
                <Signup />
              </OpenRoutes>
            }
          />
          <Route
            path="login"
            element={
              <OpenRoutes>
                <Login />
              </OpenRoutes>
            }
          />
          <Route path="wishlist" element={<Wishlist />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
