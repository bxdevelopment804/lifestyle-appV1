import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import SingleSquareCropped from '../shared/single-square-cropped';

import './generalCompilationFormatting.css';

const OnePotOrSkillet = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<div>
			<h1 id='compilationTitle'>One-Pot & Skillet</h1>
			<div id='compilationContainer'>
				<div className='compilationContainerItem'>
					<Link to='/chickenZoodleSoup'>
						<SingleSquareCropped
							// url='https://www.eatthis.com/wp-content/uploads/sites/4/2019/12/Whole30-IP-Chicken-Zoodle-Soup.jpg?quality=82&strip=1&resize=640%2C360'
							url='/pictures/chickenZoodleSoup.png'
							section='Dinner'
							title='Instant Pot Chicken Zoodle Soup'
							description='Use zucchini noodles instead of regular ones to make a gluten-free chicken noodle soup.'
							author='Posie Brien'
						/>
					</Link>
				</div>
				<div className='compilationContainerItem'>
					<Link to='/chickenSaladSandwich'>
						<SingleSquareCropped
							// url='https://www.eatthis.com/wp-content/uploads/sites/4/2019/01/chicken-salad-sandwich-curry-raisins.jpg?quality=82&strip=1&resize=640%2C360'
							url='/pictures/chickenSaladSandwichSquared.png'
							section='Lunch'
							title='Chicken Salad Sandwich with Curry and Raisins'
							description='Who said a chicken salad needs to be drowning in mayo to be tasty?'
							author='David Zinczenko and Matt Goulding'
						/>
					</Link>
				</div>
				<div className='compilationContainerItem'>
					<Link to='/healthyUltimateBurger'>
						<SingleSquareCropped
							// url='https://www.eatthis.com/wp-content/uploads/sites/4/2019/01/the-healthy-ultimate-burger.jpg?quality=82&strip=1&resize=970%2C546'
							url='/pictures/healthyUltimateBurgerSquared.png'
							section='Dinner'
							title='The Healthy Ultimate Burger'
							description='Prepare for a true, first-class burger experience.'
							author='David Zinczenko and Matt Goulding'
						/>
					</Link>
				</div>
				<div className='compilationContainerItem'>
					<Link to='/veganMacaroniCheese'>
						<SingleSquareCropped
							// url='https://www.forksoverknives.com/wp-content/uploads/fly-images/67930/Super-Stove-Top-Mac-and-Cheese-103068713-WP-688x387-c.jpg'
							url='/pictures/veganMacaroniCheeseSquared.png'
							section='Plant-Based Recipes'
							title='Stove-Top Vegan Macaroni and Cheese'
							description='This classic vegan mac and cheese is ultra cheesy, saucy and creamy.'
							author='Molly Patrick'
						/>
					</Link>
				</div>
			</div>
		</div>
	);
};
export default OnePotOrSkillet;
