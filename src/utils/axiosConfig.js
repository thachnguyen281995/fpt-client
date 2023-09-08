export const base_url = "https://fpt-ecom-server.onrender.com/api/"
const getTokenFromLocalStorage = localStorage.getItem('customer') ? JSON.parse(localStorage.getItem('customer')) : null;
export const config = {
  headers:{
    Authorization : `Bearer ${getTokenFromLocalStorage !== null ? getTokenFromLocalStorage.token : ""}`,
    Accept:'application/json'
  }
} 