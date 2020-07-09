import React, { useState } from 'react';
import './index.css';
import products from '../../data/products';
import ProductCard from '../productCard';

const Products = () => {

	return (
		<div className="products-container">
			{products.map((data) => {
				return (
					<ProductCard product={data} />
				)
			})}
		</div>
	);
}

export default Products;