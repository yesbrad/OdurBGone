import React, { useState } from 'react';
import './index.css';
import { useSpring, animated } from 'react-spring';
import { FaChevronUp } from 'react-icons/fa';

const description = `CASSETTE TOILETS : Simply drop 1 x 8 gram Blue tablet into the bottom cassette with half cup water, lasting up to 4 Days usage. The tablet will break down the matter including the paper very quickly. There are 2 size pouches, 50 x 8gram tablets (blue) & 25 x 8gram tablets both include 10 x 2gram. Mini oxygen tabs for use in a spray bottle.
The 2 gram Mini Tab (green) is used in a spray bottle, simply drop into a 400 mil bottle with cup hot water & top up with cold water, give it a shake and is ready for use. We use the spray bottle for the bowl & seat, which only takes seconds & in the heat perhaps spray the bowl 3 times a day. By spraying it is killing the bad bacteria & any odour, it is good to open the slide when spraying to allow entry into the bottom cassette.

Use any toilet paper & if it is not breaking down use more flushing water.

HOLDING TANKS: - Depending on the size of the tank I recommend using 1 x 30 gram tablet (white) for 7 days usage , add more as required. The tablet is similar to the 8 gram but more economical for such tanks.If you have a boat/yacht etc sea water can be used and with a Masurator suggest crush the tablet install pieces to prevent from jamming. If you have the small bottle Mini tabs enclosed in your packaging I suggest use the same method as shown above for the bowl & seat.

The Mini Oxygen Tab in a spray bottle lasts around 3 weeks can be used in the kitchen, Bathroom on bench tops etc and has NO perfume.

GREY WATER: - I recommend using the 30 gram tablet can be placed on the far corner of theshower base , this will clean out the pipe lines leading to the tank, also can be placed directly intothe tank.
`;

const ProductCard = ({ product }) => {
	const [isOpen, setIsOpen] = useState(false);

	const trans = useSpring({
		top: isOpen ? '0%' : '83%',
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
						<animated.div className="product-description-paragraph" style={descriptionProps}>{description.split('\n').map((item, i) => {
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