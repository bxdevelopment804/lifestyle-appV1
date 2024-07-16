import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import SingleSquare from '../shared/single-square';

import './generalCompilationFormatting.css';

const MealPlanning = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<div>
			<h1 id='compilationTitle'>Meal Planning</h1>
			<div id='compilationContainer'>
				<div className='compilationContainerItem'>
					<Link to='/honeyDijonChicken'>
						<SingleSquare
							url='https://thegirlonbloor.com/wp-content/uploads/bb-plugin/cache/Sheet-Pan-Honey-Mustard-Chicken-3-400x500-circle.jpg'
							section='Meal Planning'
							title='Honey Dijon Chicken'
							description='A delicious meal that comes together in 30 minutes.'
							author='Taylor Stinson'
						/>
					</Link>
				</div>
				<div className='compilationContainerItem'>
					<Link to='/beefStirFry'>
						<SingleSquare
							// url='https://thegirlonbloor.com/wp-content/uploads/bb-plugin/cache/The-best-Beef-stir-fry-5-400x500-circle.jpg'
							url='../pictures/resizedBeefStirFry.png'
							section='Meal Planning'
							title='Beef Stir Fry'
							description='This is the EASIEST Beef Stir Fry recipe, with a 2-ingredient stir fry sauce.'
							author='Taylor Stinson'
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
					<Link to='/indianChickenBowl'>
						<SingleSquare
							url='https://thegirlonbloor.com/wp-content/uploads/bb-plugin/cache/Chicken-Tandoori-Meal-Prep-Bowls-14-400x500-circle.jpg'
							section='Meal Planning'
							title='Indian Inspired Chicken Bowls'
							description="These are a tasty sheet pan meal idea ready in 45 minutes – they've even got pakoras!"
							author='Taylor Stinson'
						/>
					</Link>
				</div>
				<div className='compilationContainerItem'>
					<Link to='/masonJarNoodles'>
						<SingleSquare
							url='https://thegirlonbloor.com/wp-content/uploads/2016/01/Mason-Jar-Instant-Noodle-Soups-500x500.jpg'
							section='Meal Planning'
							title='Mason Jar Instant Noodles'
							description='These are the perfect on-the-go work lunch and packed full of raw veggies, quick-cook vermicelli noodles & shredded chicken!'
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

export default MealPlanning;
