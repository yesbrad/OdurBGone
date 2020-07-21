import React from 'react';
import './index.css';

const Footer = () => {
	return (
		<div className="footer-container">
			<div className="footer-padding">
				<button>HOME</button>
				<button>PRODUCTS</button>
				<button>STOCKISTS</button>
				<button>ABOUT</button>
				<button>CONTACT</button>
				<h3>2020 &#169; Odour-B-Gone</h3>
				<h2 onClick={() => window.open('http://bradfrancis.com.au')}>Designed & Developed by bradfrancis.com.au</h2>
			</div>
		</div>
	)
}

export default Footer;