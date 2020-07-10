import React, { useState } from 'react';
import './index.css';
import { useSpring, animated } from 'react-spring';
import { IoIosArrowForward } from 'react-icons/io';

const FAQDropDown = ({ answer, question }) => {
	const [isOpen, SetIsOpen] = useState()

	const spring = useSpring({
		height: isOpen ? '5rem' : '0rem',
		opacity: isOpen ? 1 : 0
	})

	const springChevron = useSpring({
		transform: isOpen ? 'rotate(90deg)' : 'rotate(0deg)',
	})

	return (
		<div className="faq-dropdown-contatiner">
			<div className="faq-dropdown-question">
				<h2>Q. {question}</h2>
				<animated.button style={springChevron} onClick={() => SetIsOpen(!isOpen)}>
					<IoIosArrowForward size="3rem" />
				</animated.button>
			</div>
			<animated.div style={spring} className="faq-dropdown-answer">
				<span>A. {answer}</span>
			</animated.div>
		</div>
	)
}

export default FAQDropDown;