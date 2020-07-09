import React from 'react'
import './index.css';

const Header = () => {
	return (
		<div className="header-container">
			<h1>Odour B Gone</h1>
			<nav>
				<button>HOME</button>
				<button>PRODUCTS</button>
				<button>STOCKISTS</button>
				<button>ABOUT</button>
				<button>CONTACT</button>
			</nav>
		</div>
	);
}

export default Header;