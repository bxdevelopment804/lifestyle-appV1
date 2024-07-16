import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import SingleSquare from '../shared/single-square';
import SingleSquareCropped from '../shared/single-square-cropped';

import './generalCompilationFormatting.css';

const BbqGrilling = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<div>
			<h1 id='compilationTitle'>Barbeque & Grilling</h1>
			<div id='compilationContainer'>
				<div className='compilationContainerItem'>
					<Link to='/asianChickenMeatballs'>
						<SingleSquareCropped
							// url='https://www.eatthis.com/wp-content/uploads/sites/4/2018/12/paleo-asian-chicken-meatballs.jpg?quality=82&strip=1&resize=640%2C360'
							url='/pictures/asianChickenMeatballs.png'
							section='Lunch'
							title='Asian Chicken Meatballs'
							description='Get your tastebuds ready for some bold flavors we bring for a twist on a classic dish.'
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
					<Link to='/chickenSouvlakiBowl'>
						<SingleSquare
							url='https://thegirlonbloor.com/wp-content/uploads/bb-plugin/cache/Meal-Prep-Chicken-Souvlaki-Bowls-5-1-400x500-circle.jpg'
							section='Meal Planning'
							title='Chicken Souvlaki Bowls'
							description="These bowls with quinoa and grilled veggies are a delicious and easy lunch idea you'll want to eat all week!"
							author='Taylor Stinson'
						/>
					</Link>
				</div>
				<div className='compilationContainerItem'>
					<Link to='/koreanChickenBowl'>
						<SingleSquare
							url='https://thegirlonbloor.com/wp-content/uploads/2017/12/Korean-Chicken-Meal-Prep-Bowls-3-500x500.jpg'
							section='Meal Planning'
							title='Korean Inspired Chicken Bowls'
							description='These are a healthy make ahead lunch idea made up of chicken thighs, sesame coleslaw and jasmine rice!'
							author='Taylor Stinson'
						/>
					</Link>
				</div>
			</div>
		</div>
	);
};
export default BbqGrilling;
