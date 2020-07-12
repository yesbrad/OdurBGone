import React from 'react';
import './styles/baseStyles.css';
import Header from './components/header';
import Products from './components/products';
import HeaderImage from './components/headerImage';
import TitleHeading from './components/titleHeading';
import About from './components/about';
import Stockists from './components/stockists';
import FAQ from './components/faq';
import Contact from './components/contact';

const App = () => {
  return (
    <div>
		<Header />
		<HeaderImage />
		<TitleHeading title="Product Range"/>
		<Products />
		<TitleHeading title="Stockists" />
		<Stockists />
		<TitleHeading title="About" />
		<About />
		<TitleHeading title="FAQ" />
		<FAQ />
		<TitleHeading title="Contact" />
		<Contact />
    </div>
  );
}

export default App;
