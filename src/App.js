import React from 'react';
import './styles/baseStyles.css';
import Header from './components/header';
import Products from './components/products';
import HeaderImage from './components/headerImage';

const App = () => {
  return (
    <div>
		<Header />
		<HeaderImage />
		<Products />
    </div>
  );
}

export default App;
