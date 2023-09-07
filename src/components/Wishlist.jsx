import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserProductWishlist } from '../features/user/userSlice';
import { addToWishlist } from '../features/products/productSlice';

const Wishlist = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    getWishlistFromDb();
  }, [dispatch]);
  const getWishlistFromDb = () => {
    dispatch(getUserProductWishlist());
  };
  const wishListState = useSelector((state) => state.auth.wishlist);
  const remove = (id) => {
    dispatch(addToWishlist(id))
    setTimeout(() => {
      dispatch(getUserProductWishlist())
    },300)
  }
  return (
    <div>
      {wishListState === undefined ? (
        <p>Loading wishlist data...</p>
      ) : (
        <div>
          {wishListState.wishlist.map((item) => (
            <div key={item._id}>
              <button onClick={() => {remove(item?._id)}}>X</button>
              <h3>{item.title}</h3>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
