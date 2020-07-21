import React from 'react';
import './index.css';
import { Link } from 'react-scroll'

const Footer = () => {
	return (
		<div className="footer-container">
			<div className="footer-padding">
				<Link className='nav-button' activeClass="nav-button-active" spy to="HOME" smooth>HOME</Link>
				<Link className='nav-button' activeClass="nav-button-active" spy to="PRODUCTS" smooth>PRODUCTS</Link>
				<Link className='nav-button' activeClass="nav-button-active" spy to="FEATURES" smooth>FEATURES</Link>
				<Link className='nav-button' activeClass="nav-button-active" spy to="STOCKISTS" smooth>STOCKISTS</Link>
				<Link className='nav-button' activeClass="nav-button-active" spy to="FAQ" smooth>FAQ</Link>
				<Link className='nav-button' activeClass="nav-button-active" spy to="ABOUT" smooth>ABOUT</Link>
				<Link className='nav-button' activeClass="nav-button-active" spy to="CONTACT" smooth>CONTACT</Link>
				<h3>2020 &#169; Odour-B-Gone</h3>
				<h2 onClick={() => window.open('http://bradfrancis.com.au')}>Designed & Developed by bradfrancis.com.au</h2>
			</div>
		</div>
	)
}

export default Footer;