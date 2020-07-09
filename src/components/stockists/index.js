import React, { useState } from 'react';
import './index.css';
import { useSpring, animated } from 'react-spring';
import StockistData from '../../data/stockists';

const Stockists = () => {
	const [currentState, SetCurrentState] = useState(0);

	const springStyles = useSpring({
		left: `${(currentState * 12.5)}%`,
	});

	const getNamedStateFromIndex = () => {
		switch (currentState) {
			case 0:
				return 'VIC';
			case 1:
				return 'NSW';
			case 2:
				return 'QLD';
			case 3:
				return 'ACT';
			case 4:
				return 'WA';
			case 5:
				return 'NT';
			case 6:
				return 'SA';
			case 7:
				return 'TAS';
				
		}
	} 

	return (
		<div className="stockists-contatiner">
			<div className="stockists-state-container">
				<animated.div style={springStyles} className="stockists-border-selector" />
				<button onClick={() => SetCurrentState(0)} className="stockists-state">VIC</button>
				<button onClick={() => SetCurrentState(1)} className="stockists-state">NSW</button>
				<button onClick={() => SetCurrentState(2)} className="stockists-state">QLD</button>
				<button onClick={() => SetCurrentState(3)} className="stockists-state">ACT</button>
				<button onClick={() => SetCurrentState(4)} className="stockists-state">WA</button>
				<button onClick={() => SetCurrentState(5)} className="stockists-state">NT</button>
				<button onClick={() => SetCurrentState(6)} className="stockists-state">SA</button>
				<button onClick={() => SetCurrentState(7)} className="stockists-state">TAS</button>				
			</div>
			<div className="stockists-info-container">
				{StockistData.map((data) => {
					if (getNamedStateFromIndex() === data.state) {	
						return (
							<div className='stockists-info-card'>
								<span>{data.name}</span>
								<span>{data.address}</span>
								<span>{data.website}</span>
								<span>{data.phone}</span>
							</ div>	
						);
					} else {
						return null;
					}
				})}
			</div>
		</div>
	)
}

export default Stockists;