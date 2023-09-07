import axios from 'axios';
import { base_url, config } from '../../utils/axiosConfig';
const getProducts = async (data) => {
  const response = await axios.get(`${base_url}product?${data?.category? `category=${data?.category}&&`:""}${data?.tag? `tags=${data?.tag}&&`:""}${data?.minPrice?`price[gte]=${data?.minPrice}&&`:""}${data?.maxPrice?`price[lte]=${data?.maxPrice}&&`:""}${data?.sort?`sort=${data?.sort}&&`:""}`);
  if (response.data) {
    return response.data;
  }
};
const getAProduct = async (id) => {
  const response = await axios.get(`${base_url}product/${id}`)
  if(response.data){
    return response.data
  }
}
const addToWishlist = async (prodId) => {
  const response = await axios.put(`${base_url}product/wishlist`,  {prodId }, config);
  if (response.data) {
    return response.data;
  }
};

export const productService = {
  getProducts,
  addToWishlist,
  getAProduct,
};
