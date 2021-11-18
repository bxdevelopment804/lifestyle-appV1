import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import SingleSquare from '../shared/single-square';
import SingleSquareCropped from '../shared/single-square-cropped';

import './generalCompilationFormatting.css';

const LowCarb = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<div>
			<h1 id='compilationTitle'>Low Carb</h1>
			<div id='compilationContainer'>
				<div className='compilationContainerItem'>
					<Link to='/asianChickenMeatballs'>
						<SingleSquare
							url='https://www.eatthis.com/wp-content/uploads/sites/4/2018/12/paleo-asian-chicken-meatballs.jpg?quality=82&strip=1&resize=640%2C360'
							section='Lunch'
							title='Asian Chicken Meatballs'
							description='Get your tastebuds ready for some bold flavors we bring for a twist on a classic dish.'
							author='David Zinczenko and Matt Goulding'
						/>
					</Link>
				</div>
				<div className='compilationContainerItem'>
					<Link to='/chickenZoodleSoup'>
						<SingleSquare
							url='https://www.eatthis.com/wp-content/uploads/sites/4/2019/12/Whole30-IP-Chicken-Zoodle-Soup.jpg?quality=82&strip=1&resize=640%2C360'
							section='Dinner'
							title='Instant Pot Chicken Zoodle Soup'
							description='Use zucchini noodles instead of regular ones to make a gluten-free chicken noodle soup.'
							author='Posie Brien'
						/>
					</Link>
				</div>
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
							url='https://thegirlonbloor.com/wp-content/uploads/bb-plugin/cache/The-best-Beef-stir-fry-5-400x500-circle.jpg'
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
					<Link to='/zucchiniNoodleCaprese'>
						<SingleSquare
							url='https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2014/10/zucchini-noodle-caprese-6-300x300.jpg'
							section='Weight Loss Recipes'
							title='Zucchini Noodle Caprese'
							description='This zucchini noodle caprese is a delicious, healthy salad made from zucchini noodles and a few simple, fresh ingredients.'
							author='Lisa Bryan'
						/>
					</Link>
				</div>
				<div className='compilationContainerItem'>
					<Link to='/greekSalad'>
						<SingleSquare
							url='https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2018/08/Greek-Salad-450x450.jpg'
							section='Weight Loss Recipes'
							title='Greek Salad'
							description='This salad is easy to make and bursting with flavor.'
							author='Lisa Bryan'
						/>
					</Link>
				</div>
				<div className='compilationContainerItem'>
					<Link to='/salmonAvocadoSalad'>
						<SingleSquare
							url='https://downshiftology.com/wp-content/uploads/2020/07/Salmon-Avocado-Salad-6-300x300.jpg'
							section='Weight Loss Recipes'
							title='Salmon Avocado Salad'
							description='This salmon avocado salad is a healthy salad recipe that is big on nutrients and flavor.'
							author='Lisa Bryan'
						/>
					</Link>
				</div>
				<div className='compilationContainerItem'>
					<Link to='/tacoSalad'>
						<SingleSquare
							url='https://downshiftology.com/wp-content/uploads/2020/06/Taco-Salad-6-300x300.jpg'
							section='Weight Loss Recipes'
							title='Taco Salad'
							description='Loaded with crisp vegetables, seasoned ground beef, and taco classics such as homemade salsa, cilantro and avocado.'
							author='Lisa Bryan'
						/>
					</Link>
				</div>
				<div className='compilationContainerItem'>
					<Link to='/cucumberRadishSalad'>
						<SingleSquare
							url='https://downshiftology.com/wp-content/uploads/2021/07/Cucumber-Radish-Salad-main-1-300x300.jpg'
							section='Weight Loss Recipes'
							title='Cucumber Radish Salad'
							description='Loaded with cool cucumbers, crisp radishes, fresh dill, and a simple olive oil lemon dressing for a fresh, tangy touch.'
							author='Lisa Bryan'
						/>
					</Link>
				</div>
				<div className='compilationContainerItem'>
					<Link to='/southwestChickenSalad'>
						<SingleSquare
							url='https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2020/07/Southwest-Chicken-Salad-6-450x450.jpg'
							section='Weight Loss Recipes'
							title='Southwest Chicken Salad'
							description='Simple to make, filled with bold flavors, and hearty enough to fill you up.'
							author='Lisa Bryan'
						/>
					</Link>
				</div>
			</div>
		</div>
	);
};
export default LowCarb;
