import axios from "axios";
import {base_url,config} from '../../utils/axiosConfig'
const registerUser = async(userData) => {
  const response = await axios.post(`${base_url}user/register`,userData);
  if(response.data){
    localStorage.setItem('customer',JSON.stringify(response.data))
    return response.data;
  }
}
const loginUser = async(userData) => {
  const response = await axios.post(`${base_url}user/login`,userData)
  if(response.data){
    localStorage.setItem('customer',JSON.stringify(response.data))
    return response.data
  }
}
const getUserWishlist = async() => {
  const response = await axios.get(`${base_url}user/wishlist`,config)
  if(response.data){
    return response.data
  }
}
const addToCart = async(cart) => {
  const response = await axios.post(`${base_url}user/cart`,cart,config)
  if(response.data){
    return response.data
  }
}
const getCart = async() => {
  const response = await axios.get(`${base_url}user/cart`,config)
  if(response.data){
    return response.data
  }
}
const removeProductFromCart = async (cartItemId) => {
  const response = await axios.delete(`${base_url}user/delete-product-cart/${cartItemId}`,config)
  if(response.data){
    return response.data
  }
}
const createOrder = async(orderData) => {
  const response = await axios.post(`${base_url}user/cart/create-order`,orderData,config)
  if(response.data){
    return response.data
  }
}
const getMyOrders = async () => {
  const response = await axios.get(`${base_url}user/getmyorders`,config)
  if(response.data){
    return response.data
  }
}
const forgotPassToken = async (data) => {
  const response = await axios.post(`${base_url}user/forgot-password-token`,data,config)
  if(response.data){
    return response.data
  }
}
export const authService ={
  registerUser,
  loginUser,
  getUserWishlist,
  addToCart,
  getCart,
  removeProductFromCart,
  createOrder,
  getMyOrders,
  forgotPassToken
}