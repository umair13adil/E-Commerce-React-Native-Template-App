import { configureStore } from '@reduxjs/toolkit'
import productSaga from './productSagas';
import createSagaMiddleware from 'redux-saga';
import productReducer from './productState';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    product: productReducer
  },
  middleware: [sagaMiddleware]
})

sagaMiddleware.run(productSaga);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch