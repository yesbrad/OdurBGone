import React, { useState } from 'react';
import './index.css';
import { useSpring, animated } from 'react-spring';
import { FaChevronUp } from 'react-icons/fa';

const ProductCard = ({ product }) => {
	const [isOpen, setIsOpen] = useState(false);

	const trans = useSpring({
		top: isOpen ? '0%' : '80%',
		opacity: isOpen ? 0.9 : 0.7,
		padding: isOpen ? '2rem' : '1.5rem',
	})

	const headerProps = useSpring({
		marginBottom: isOpen ? '0.6em' : '0.1em',
	})

	const chevProps = useSpring({
		transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)'
	});

	const shortDescriptionProps = useSpring({
		opacity: isOpen ? 0 : 1,
	})

	const descriptionProps = useSpring({
		opacity: isOpen ? 1 : 0,
	})

	return (
		<div className="product-card-container" id={product.width === 3 ? 'product-full' : ''} >
			<div className="product-card-content"  style={{ backgroundImage: `url(${product.image})`}}>
				<animated.div style={trans} className="product-info">
					<animated.h2 style={headerProps}>{product.name}</animated.h2>
					<div className="product-desctiption-container">
						<animated.span style={shortDescriptionProps}>{product.shortDescription}</animated.span>
						<animated.div className="product-description-paragraph" style={descriptionProps}>{product.description.split('\n').map((item, i) => {
							return <span key={i}>{item}</span>;
						})}</animated.div>
					</div>
					{/* <animated.div style={descriptionProps} className="product-specs">
						<h2>Specifictations</h2>
						{product.specifications.map((spec, index) => {
							return <span>{`${index + 1}. ${spec}`}</span>
						})}
					</animated.div> */}
					<animated.button style={chevProps} onClick={() => setIsOpen(!isOpen)}><FaChevronUp size="2rem" /></animated.button>
					<animated.span style={shortDescriptionProps} className="product-moreinfo">More Info</animated.span>
				</animated.div>
			</div>
		</div>
	);
}

export default ProductCard;