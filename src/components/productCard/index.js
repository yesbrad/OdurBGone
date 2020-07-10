import React, { useState } from 'react';
import './index.css';
import { useSpring, animated } from 'react-spring';

const ProductCard = ({ product }) => {
	const [isOpen, setIsOpen] = useState(false);

	const trans = useSpring({
		top: isOpen ? '20%' : '80%',
	})

	return (
		<div className="product-card-container" id={product.width === 3 ? 'product-full' : ''} >
			<div className="product-card-content"  style={{ backgroundImage: `url(${product.image})`}}>
				{/* <img src={product.image} alt="Product"/> */}
				<animated.div style={trans} className="product-info">
					<h2>{product.name}</h2>
					<span>{product.description}</span>
					<button onClick={() => setIsOpen(!isOpen)}>Open</button>
				</animated.div>
			</div>
		</div>
	);
}

export default ProductCard;