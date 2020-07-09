import React from 'react';
import './index.css';
import AboutData from '../../data/about';

const About = () => {
	return (
		<div className="about-contatiner">
			<div className="about-content">
				<div className="about-content-image"></div>
				<div className="about-content-info">
					<h3>About Us</h3>
					<span>
						{AboutData}
					</span>
				</div>
			</div>
		</div>
	)
}

export default About;