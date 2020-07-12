import React, { useState, useEffect } from 'react';
import './index.css';
import { useSpring, animated } from 'react-spring';

const smallMenuOffset = 50;

const Header = () => {
	const [scrollPosition, setSrollPosition] = useState(0);
	const handleScroll = () => {
		const position = window.pageYOffset;
		setSrollPosition(position);
	};
	
	useEffect(() => {
		window.addEventListener('scroll', handleScroll, { passive: true });
	
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	const spring = useSpring({
		height: scrollPosition > smallMenuOffset ? '4rem' : '10rem'
	});

	const springFont = useSpring({
		fontSize: scrollPosition > smallMenuOffset ? '2rem' : '2.5rem'
	});

	return (
		<div>
			<animated.div style={spring} className="header-container">
				<animated.h1 style={springFont}>Odour B Gone</animated.h1>
				<nav>
					<button>HOME</button>
					<button>PRODUCTS</button>
					<button>STOCKISTS</button>
					<button>ABOUT</button>
					<button>CONTACT</button>
				</nav>
			</animated.div>
			<div className="headerImage-dummy-container">

			</div>
		</div>
	);
}

export default Header;