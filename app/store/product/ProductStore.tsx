import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { productsApi } from '../../features/product/ProductsSlice'
import productReducer from '../../features/product/ProductsSlice'

export const productStore = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
    product: productReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productsApi.middleware)
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof productStore.getState>

export type AppDispatch = typeof productStore.dispatch