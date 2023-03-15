import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductsFetch } from './productState';

import './App.css';
import { RootState } from './store';
import { Product, ProductElement } from './models/Product';
import { useAppSelector, useAppDispatch } from './hooks';

function App() {

  const dispatch = useAppDispatch();
  const products = useAppSelector(state => state.product.products);

  useEffect(() => {
    dispatch(getProductsFetch());
  }, [dispatch]);

  return (
    <div className="App">
      <div>{products.map(p =>
        <div key={p.id}>
          <img src={p.thumbnail} alt={p.title} /> {p.description} </div>
      )}</div>
    </div>
  );
}

export default App;
