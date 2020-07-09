import React from 'react';
import './index.css';

const TitleHeading = ({ title }) => {
	return (
		<div className="title-heading-contatiner">
			<span>
				{title}
			</span>
		</div>
	)
}

export default TitleHeading;