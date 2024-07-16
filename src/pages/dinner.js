import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import SingleSquare from '../shared/single-square';
import SingleSquareCropped from '../shared/single-square-cropped';

import './generalCompilationFormatting.css';

const Dinner = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<div>
			<h1 id='compilationTitle'>Dinner</h1>
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
					<Link to='/italianTunaMelt'>
						<SingleSquareCropped
							// url='https://www.eatthis.com/wp-content/uploads/sites/4/2018/12/healthy-italian-tuna-melt.jpg?quality=82&strip=1&resize=970%2C546'
							url='/pictures/italianTunaMeltSquared.png'
							section='Lunch'
							title='Italian Tuna Melt'
							description='A new and improved version of the classic sandwich that is ready to eat in minutes.'
							author='David Zinczenko and Matt Goulding'
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
					<Link to='/texmexPitaPizza'>
						<SingleSquareCropped
							// url='https://www.forksoverknives.com/wp-content/uploads/fly-images/66822/Tex-Mex-Pita-Pizzas_WP-688x387-c.jpg'
							url='/pictures/texmexPitaPizzaSquared.png'
							section='Plant-Based Recipes'
							title='Tex-Mex Pita Pizzas'
							description='These will satisfy your taste buds and satiate your tum.'
							author='Darshana Thacker'
						/>
					</Link>
				</div>
				<div className='compilationContainerItem'>
					<Link to='/penneTomatoMushroom'>
						<SingleSquareCropped
							// url='https://www.forksoverknives.com/wp-content/uploads/fly-images/41259/Penne-with-Tomato-Mushroom-Cream-Sauce-wp-edit-688x387-c.jpg'
							url='/pictures/penneTomatoMushroomSquared.png'
							section='Plant-Based Recipes'
							title='Penne With Tomato-Mushroom Sauce'
							description='Put an authentic Italian pasta dish on your dinner table in just 20 minutes.'
							author='Del Sroufe'
						/>
					</Link>
				</div>
				<div className='compilationContainerItem'>
					<Link to='/burritosRiceBeans'>
						<SingleSquareCropped
							// url='https://www.forksoverknives.com/wp-content/uploads/fly-images/22661/burrito-fok-300kb-688x387-c.jpg'
							url='/pictures/burritosRiceBeansSquared.png'
							section='Plant-Based Recipes'
							title='Burritos With Spanish Rice And Black Beans'
							description='Quick and easy, vegan bean and rice burritos are a perfect vegetarian dinner idea.'
							author='Susan Voisin'
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
export default Dinner;
