import React from 'react';
import './index.css';
import Data from '../../data/features';

const Features = () => {
	return (
		<div className="features-contatiner">
			<div className="features-content">
				<div className="features-column">
					{Data.map((feat, i) => i < (Data.length - 1) / 2 ? <span>{feat}</span> : null)}
				</div>
				<div className="features-column">
					{Data.map((feat, i) => i > (Data.length - 1) / 2 ? <span>{feat}</span> : null)}
				</div>
			</div>
		</div>
	)
}

export default Features;