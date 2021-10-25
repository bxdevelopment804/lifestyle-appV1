import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import SingleSquare from '../shared/single-square';

import './generalCompilationFormatting.css';

const Sandwiches = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<div>
			<h1 id='compilationTitle'>Sandwiches</h1>
			<div id='compilationContainer'>
				<div className='compilationContainerItem'>
					<Link to='/healthyFrenchToast'>
						<SingleSquare
							url='https://www.eatthis.com/wp-content/uploads/sites/4/2018/12/healthy-french-toast-with-strawberries.jpg?quality=82&strip=1&resize=640%2C360'
							section='Dinner'
							title='Healthy French Toast With Strawberries'
							description='When you want something a little sweet for supper, look no further than this French toast recipe.'
							author='David Zinczenko and Matt Goulding'
						/>
					</Link>
				</div>
				<div className='compilationContainerItem'>
					<Link to='/italianTunaMelt'>
						<SingleSquare
							url='https://www.eatthis.com/wp-content/uploads/sites/4/2018/12/healthy-italian-tuna-melt.jpg?quality=82&strip=1&resize=970%2C546'
							section='Lunch'
							title='Italian Tuna Melt'
							description='A new and improved version of the classic sandwich that is ready to eat in minutes.'
							author='David Zinczenko and Matt Goulding'
						/>
					</Link>
				</div>
				<div className='compilationContainerItem'>
					<Link to='/chickenSaladSandwich'>
						<SingleSquare
							url='https://www.eatthis.com/wp-content/uploads/sites/4/2019/01/chicken-salad-sandwich-curry-raisins.jpg?quality=82&strip=1&resize=640%2C360'
							section='Lunch'
							title='Chicken Salad Sandwich with Curry and Raisins'
							description='Who said a chicken salad needs to be drowning in mayo to be tasty?'
							author='David Zinczenko and Matt Goulding'
						/>
					</Link>
				</div>
				<div className='compilationContainerItem'>
					<Link to='/healthyUltimateBurger'>
						<SingleSquare
							url='https://www.eatthis.com/wp-content/uploads/sites/4/2019/01/the-healthy-ultimate-burger.jpg?quality=82&strip=1&resize=970%2C546'
							section='Dinner'
							title='The Healthy Ultimate Burger'
							description='Prepare for a true, first-class burger experience.'
							author='David Zinczenko and Matt Goulding'
						/>
					</Link>
				</div>
			</div>
		</div>
	);
};
export default Sandwiches;
