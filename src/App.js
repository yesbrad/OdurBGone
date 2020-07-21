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
import Footer from './components/footer';
import Features from './components/features';
import { Element } from 'react-scroll'

const App = () => {
  return (
	  <div>
		  	<Element name="HOME">
				<Header />
			  	<HeaderImage />
			</Element>
		  	<Element name="PRODUCTS">
				<TitleHeading title="Product Range"/>
			  	<Products />
			</Element>
		  	<Element name="FEATURES">
				<TitleHeading title="Features" />  
				<Features />
			</Element>
		  	<Element name="STOCKISTS">
				<TitleHeading title="Stockists" />
			  	<Stockists />
			</Element>
		  	<Element name="ABOUT">
				<TitleHeading title="About" />
			  	<About />
			</Element>
		  	<Element name="FAQ">
				<TitleHeading title="FAQ" />
			  	<FAQ />
		  </Element>
		  <Element name="CONTACT">
				<TitleHeading title="Contact" />
			  	<Contact />
			</Element>
		<Footer />
    </div>
  );
}

export default App;
