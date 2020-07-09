import React from 'react';
import './styles/baseStyles.css';
import Header from './components/header';
import Products from './components/products';

const App = () => {
  return (
    <div>
		  <Header />
		  <Products />
    </div>
  );
}

export default App;
