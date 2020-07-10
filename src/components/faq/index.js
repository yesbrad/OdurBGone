import React from 'react';
import './index.css';
import FAQData from '../../data/faq';
import FAQDropDown from '../faqDropdown';

const FAQ = () => {
	return (
		<div className="faq-contatiner">
			<div className="faq-dropdown-wrapper">
				{FAQData.map(data => {
					return <FAQDropDown question={data.question} answer={data.answer} />
				})}
			</div>
		</div>
	)
}

export default FAQ;