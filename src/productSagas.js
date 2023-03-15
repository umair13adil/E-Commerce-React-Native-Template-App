import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { getProductsSuccess } from './productState';

function* workGetProductsFetch() {
    const products = yield call(() => fetch('https://dummyjson.com/products').then(
        response => response.json()
      ));
    const formattedProducts = yield products;
    console.log(`Response`, formattedProducts)
    console.log(`Products`, formattedProducts['products'])
    yield put(getProductsSuccess(formattedProducts['products']));
}

function* productSaga() {
    yield takeEvery('product/getProductsFetch', workGetProductsFetch)
}


export default productSaga