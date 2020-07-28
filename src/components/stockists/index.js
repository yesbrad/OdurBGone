import React, { useState } from 'react';
import './index.css';
import { useSpring, animated } from 'react-spring';
// import StockistData from '../../data/stockists';

import {
	vicData,
	nswData,
	qldData,
	saData,
	waData,
	actData,
	ntData,
} from '../../data/stockists';
import { useEffect } from 'react';
import { Button } from 'react-scroll';

const maxPageLimit = 10;

const Stockists = () => {
	const [currentState, SetCurrentState] = useState(0);
	const [pageCount, SetPageCount] =useState(0)
	const [currentPage, SetCurrentPage] = useState(0);

	const springStyles = useSpring({
		left: `${(currentState * 12.5)}%`,
	});

	const getNamedStateFromIndex = () => {
		switch (currentState) {
			case 0:
				return vicData;
			case 1:
				return nswData;
			case 2:
				return qldData;
			case 3:
				return actData;
			case 4:
				return waData;
			case 5:
				return ntData;
			case 6:
				return saData;
			case 7:
				return [];
		}
	} 

	useEffect(() => {
		SetCurrentPage(0);
		SetPageCount(getPageAmount(getNamedStateFromIndex()));
	}, [currentState])

	const getPageAmount = (arr) => Math.ceil(arr.length / maxPageLimit); 

	const getPagnationArray = (arr) => {
		const pageAmount = Math.ceil(arr.length / maxPageLimit);
		const cop = [...arr];
		const newArry = []
		for (let i = 0; i < pageAmount; i++) {
			const newElements = cop.splice(0, maxPageLimit);
			newArry.push([...newElements]);
		}

		return newArry.length > 0 ? newArry : [[]];
	}

	const pagnationArray = getPagnationArray(getNamedStateFromIndex());

	const getPagnationButtons = () => {
		const buttons = []

		for(let i = 0; i < pageCount; i++) {
			buttons.push(<button style={{ backgroundColor: currentPage === i ? 'black' : ''}} onClick={() => SetCurrentPage(i)}></button>)
		}
		
		return buttons;
	}

	return (
		<div className="stockists-contatiner">
			<div className="stockists-state-container">
				<animated.div style={springStyles} className="stockists-border-selector" />
				<button onClick={() => { SetCurrentPage(0); SetCurrentState(0); }} className="stockists-state">VIC</button>
				<button onClick={() => { SetCurrentPage(0); SetCurrentState(1); }} className="stockists-state">NSW</button>
				<button onClick={() => { SetCurrentPage(0); SetCurrentState(2); }} className="stockists-state">QLD</button>
				<button onClick={() => { SetCurrentPage(0); SetCurrentState(3); }} className="stockists-state">ACT</button>
				<button onClick={() => { SetCurrentPage(0); SetCurrentState(4); }} className="stockists-state">WA</button>
				<button onClick={() => { SetCurrentPage(0); SetCurrentState(5); }} className="stockists-state">NT</button>
				<button onClick={() => { SetCurrentPage(0); SetCurrentState(6); }} className="stockists-state">SA</button>
				<button onClick={() => { SetCurrentPage(0); SetCurrentState(7); }} className="stockists-state">TAS</button>				
			</div>
			<div className="stockists-info-container">
				{pagnationArray[currentPage].map((data) => {
					return (
						<div className='stockists-info-card'>
							<span>{data.name}</span>
							<span>{data.address}</span>
							<span>{data.phone}</span>
						</ div>	
					);
				})}
			</div>
			<div className="stockist-pagnation">
				{pageCount > 1 && getPagnationButtons()}
			</div>
		</div>
	)
}

export default Stockists;