import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import SingleSquare from '../shared/single-square';

import './generalCompilationFormatting.css';

const Shop = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<div>
			<h1 id='compilationTitle'>Books We Recommend</h1>
			<div id='compilationContainer'>
				<div className='compilationContainerItem'>
					<Link to=''>
						<SingleSquare
							url='https://images-na.ssl-images-amazon.com/images/I/51ICWYR7GaL._SX384_BO1,204,203,200_.jpg'
							// section='Dinner'
							// title='Healthy French Toast With Strawberries'
							description='The Shredded Chef: 125 Recipes for Building Muscle, Getting Lean, and Staying Healthy (Third Edition)'
							author='Michael Matthews'
						/>
					</Link>
				</div>
				<div className='compilationContainerItem'>
					<Link to=''>
						<SingleSquare
							url='https://images-na.ssl-images-amazon.com/images/I/41N5ZUnmeDL._SX331_BO1,204,203,200_.jpg'
							// section='Lunch'
							// title='Asian Chicken Meatballs'
							description='Calories In Calories Out: What It Took for Me to Lose 140 Pounds and How You Can Do It Too'
							author='Aaron Knipp'
						/>
					</Link>
				</div>
				<div className='compilationContainerItem'>
					<Link to=''>
						<SingleSquare
							url='https://images-na.ssl-images-amazon.com/images/I/51W9o9b28+L._SX383_BO1,204,203,200_.jpg'
							// section='Dinner'
							// title='Instant Pot Chicken Zoodle Soup'
							description='The New Encyclopedia of Modern Bodybuilding : The Bible of Bodybuilding, Fully Updated and Revised'
							author='Arnold Schwarzenegger'
						/>
					</Link>
				</div>
				<div className='compilationContainerItem'>
					<Link to=''>
						<SingleSquare
							url='https://images-na.ssl-images-amazon.com/images/I/41Ip8FtGCxL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg'
							// section='Lunch'
							// title='Italian Tuna Melt'
							description='The Shift: 7 Powerful Mindset Changes for Lasting Weight Loss '
							author='Gary Foster PhD'
						/>
					</Link>
				</div>
				<div className='compilationContainerItem'>
					<Link to=''>
						<SingleSquare
							url='https://images-na.ssl-images-amazon.com/images/I/51w+8T3bnqL._SY344_BO1,204,203,200_.jpg'
							// section='Lunch'
							// title='Chicken Salad Sandwich with Curry and Raisins'
							description='Bigger Leaner Stronger: The Simple Science of Building the Ultimate Male Body'
							author='Michael Matthews'
						/>
					</Link>
				</div>
				<div className='compilationContainerItem'>
					<Link to=''>
						<SingleSquare
							url='https://images-na.ssl-images-amazon.com/images/I/51P2CbGwi7L._SY291_BO1,204,203,200_QL40_FMwebp_.jpg'
							// section='Dinner'
							// title='The Healthy Ultimate Burger'
							description='Thinner Leaner Stronger: The Simple Science of Building the Ultimate Female Body'
							author='Michael Matthews'
						/>
					</Link>
				</div>		
			</div>
		</div>
	);
};
export default Shop;
