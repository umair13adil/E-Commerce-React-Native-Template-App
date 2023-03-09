import { createSlice } from '@reduxjs/toolkit';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { Product, ProductElement } from '../../models/Product'
import type { PayloadAction } from '@reduxjs/toolkit'
import { setupProductRealm, saveProductsInDatabase, getAllProducts } from '../../globals/database/RealmHelper';

interface ProductState {
  products?: Array<ProductElement>;
}

const initialState: ProductState = {
  products: []
};


export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/' }),
  endpoints: (builder) => ({
    getProducts: builder.query<Product, string>({
      query: () => `products`,
    })
  }),
});


export const { useGetProductsQuery } = productsApi;

const productSlice = createSlice({
  name: 'product', initialState, reducers: {
    saveProducts(state, action: PayloadAction<Array<ProductElement>>) {
      state.products = action.payload;
      saveProductsInDatabase(state.products).then(

      ).catch((e) => {
        console.log(`Error: ${e}`);
      })
    },
    getProductsFromDatabase(state) {
      setupProductRealm().then(value => {
        const products = getAllProducts();
        console.log(`Results: ${products.length}`);
      }).catch(error => {
        console.log(`Error: ${error}`);
      });

      //state.products?.push()
    }
  }
});

export const { saveProducts, getProductsFromDatabase } = productSlice.actions;
export default productSlice.reducer;