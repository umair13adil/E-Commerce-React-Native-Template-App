import { createSlice } from '@reduxjs/toolkit';
import type { Product, ProductElement } from './models/Product'

interface ProductState {
  products: Array<ProductElement>;
  isLoading: boolean
}

const initialState: ProductState = {
  products: [],
  isLoading: false
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    getProductsFetch: (state) => {
      state.isLoading = true;
    },
    getProductsSuccess: (state, action) => {
      state.products = action.payload;
      state.isLoading = false;
    },
    getProductsFail: (state, action) => {
      state.isLoading = false;
    }
  }
});

export const { getProductsFetch, getProductsSuccess, getProductsFail } = productSlice.actions;
export default productSlice.reducer;