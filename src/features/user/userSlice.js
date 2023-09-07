import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { authService } from './userService';
import { toast } from 'react-toastify';

export const registerUser = createAsyncThunk('auth/register', async (userData, thunkAPI) => {
  try {
    return await authService.registerUser(userData);
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});
export const loginUser = createAsyncThunk('auth/login', async (userData, thunkAPI) => {
  try {
    return await authService.loginUser(userData);
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});
export const getUserProductWishlist = createAsyncThunk('user/wishlist', async (thunkAPI) => {
  try {
    return await authService.getUserWishlist();
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});
export const addToCart = createAsyncThunk('user/cart', async (cart, thunkAPI) => {
  try {
    return authService.addToCart(cart)
  } catch (error) {
    return thunkAPI.rejectWithValue(error)
  }
});
export const getCart = createAsyncThunk('user/getcart',async(thunkAPI) => {
  try {
    return authService.getCart()
  } catch (error) {
    return thunkAPI.rejectWithValue(error)
  }
})
export const deleteCartProduct = createAsyncThunk('user/cart/product/delete',async(cartItemId,thunkAPI) => {
  try {
    return authService.removeProductFromCart(cartItemId)
  } catch (error) {
    return thunkAPI.rejectWithValue(error)
  }
})
export const createCashOrder = createAsyncThunk('user/cart/create-order',async(orderData,thunkAPI) => {
  try {
    return authService.createOrder(orderData)
  } catch (error) {
    return thunkAPI.rejectWithValue(error)
  }
})
export const getMyOrders = createAsyncThunk('/user/getmyorders',async(thunkAPI) => {
  try {
    return authService.getMyOrders()
  } catch (error) {
    return thunkAPI.rejectWithValue(error)
  }
})
export const forgotPasswordToken = createAsyncThunk('/user/password/token',async(data,thunkAPI) => {
  try {
    return authService.forgotPassToken(data)
  } catch (error) {
    return thunkAPI.rejectWithValue(error)
  }
})
const getCustomerFromLocalStorage = localStorage.getItem('customer')
  ? JSON.parse(localStorage.getItem('customer'))
  : null;
const initialState = {
  user: getCustomerFromLocalStorage,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: ''
};
export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.createdUser = action.payload;
        if (state.isSuccess === true) {
          toast.success('Tạo tài khoản thành công!');
        }
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
        if (state.isError === true) {
          toast.error(action.payload.response.data.message);
        }
      })
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.user = action.payload;
        if (state.isSuccess === true) {
          localStorage.setItem('token', action.payload.token);
          toast.success('Đăng nhập thành công' ,{ autoClose: 3000 ,position: toast.POSITION.TOP_LEFT});
        }
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
        if (state.isError === true) {
          toast.error(action.payload.response.data.message ,{ autoClose: 3000 ,position: toast.POSITION.TOP_LEFT});
        }
      })
      // GetUserWishlist
      .addCase(getUserProductWishlist.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUserProductWishlist.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.wishlist = action.payload;
      })
      .addCase(getUserProductWishlist.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      // Add to cart
      .addCase(addToCart.pending,(state) => {
        state.isLoading = true;
      })
      .addCase(addToCart.fulfilled,(state,action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.addToCart = action.payload;
      })
      .addCase(addToCart.rejected,(state,action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      // get cart
      .addCase(getCart.pending,(state) => {
        state.isLoading = true;
      })
      .addCase(getCart.fulfilled,(state,action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.getCart = action.payload;
      })
      .addCase(getCart.rejected,(state,action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      // delete Product Cart
      .addCase(deleteCartProduct.pending,(state) => {
        state.isLoading = true;
      })
      .addCase(deleteCartProduct.fulfilled,(state,action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.deleteCartProduct = action.payload;
      })
      .addCase(deleteCartProduct.rejected,(state,action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      // create Order Cash
      .addCase(createCashOrder.pending,(state) => {
        state.isLoading = true;
      })
      .addCase(createCashOrder.fulfilled,(state,action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.createCashOrder = action.payload;
      })
      .addCase(createCashOrder.rejected,(state,action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      // Get My Orders
      .addCase(getMyOrders.pending,(state) => {
        state.isLoading = true;
      })
      .addCase(getMyOrders.fulfilled,(state,action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.getMyOrders = action.payload;
      })
      .addCase(getMyOrders.rejected,(state,action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      // Forgot Password Token
      .addCase(forgotPasswordToken.pending,(state) => {
        state.isLoading = true;
      })
      .addCase(forgotPasswordToken.fulfilled,(state,action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.token = action.payload;
        if(state.isSuccess){
          toast.success("Đã gởi mã tới email thành công")
        }
      })
      .addCase(forgotPasswordToken.rejected,(state,action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
  }
});
export default authSlice.reducer;
