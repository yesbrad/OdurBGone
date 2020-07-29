import React, { useState, useEffect } from 'react';
import './index.css';
import { useSpring, animated } from 'react-spring';
import { Link } from 'react-scroll'
import { IoMdMenu, IoMdClose } from 'react-icons/io';

const smallMenuOffset = 50;

const Header = () => {
	const [scrollPosition, setSrollPosition] = useState(0);
	const [isMenuOpen, setIsMenuOpen] = useState(false);

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
		transform: scrollPosition > smallMenuOffset ? 'scale(0.7)' : 'scale(1)'
	});

	const springMenu = useSpring({
		left: isMenuOpen ? '50%' : '100%',
		opacity: isMenuOpen ? 1 : 0,
	});

	const springMenuScale = useSpring({
		transform: isMenuOpen ? 'scale(1)' : 'scale(0)'
	});

	return (
		<div>
			<animated.div style={spring} className="header-container">
				<animated.div style={springFont} className="header-logo"></animated.div>
				<nav>
					<Link className='nav-button' activeClass="nav-button-active" spy to="HOME" smooth>HOME</Link>
					<Link className='nav-button' activeClass="nav-button-active" spy to="PRODUCTS" smooth>PRODUCTS</Link>
					<Link className='nav-button' activeClass="nav-button-active" spy to="FEATURES" smooth>FEATURES</Link>
					<Link className='nav-button' activeClass="nav-button-active" spy to="STOCKISTS" smooth>STOCKISTS</Link>
					<Link className='nav-button' activeClass="nav-button-active" spy to="FAQ" smooth>FAQ</Link>
					<Link className='nav-button' activeClass="nav-button-active" spy to="ABOUT" smooth>ABOUT</Link>
					<Link className='nav-button' activeClass="nav-button-active" spy to="CONTACT" smooth>CONTACT</Link>
					<button className="nav-hamburger-button" onClick={() => { setIsMenuOpen(true); console.log("CUNT")}}>
						<IoMdMenu className="nav-hamburger-button-icon"/>
					</button>
					<animated.div style={springMenu} className="nav-hamburger-menu">
						<animated.button style={springMenuScale} onClick={() => setIsMenuOpen(false)}>
							<IoMdClose className="nav-hamburger-close-icon" />
						</animated.button>
						<Link className='nav-button-hamburger' spy to="HOME" smooth>HOME</Link>
						<Link className='nav-button-hamburger' spy to="PRODUCTS" smooth>PRODUCTS</Link>
						<Link className='nav-button-hamburger' spy to="FEATURES" smooth>FEATURES</Link>
						<Link className='nav-button-hamburger' spy to="STOCKISTS" smooth>STOCKISTS</Link>
						<Link className='nav-button-hamburger' spy to="FAQ" smooth>FAQ</Link>
						<Link className='nav-button-hamburger' spy to="ABOUT" smooth>ABOUT</Link>
						<Link className='nav-button-hamburger' spy to="CONTACT" smooth>CONTACT</Link>
					</animated.div>
				</nav>
			</animated.div>
			<div className="headerImage-dummy-container">

			</div>
		</div>
	);
}

export default Header;