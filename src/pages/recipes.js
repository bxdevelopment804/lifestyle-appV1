import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import SingleSquare from '../shared/single-square';
import SingleSquareCropped from '../shared/single-square-cropped';

import './generalCompilationFormatting.css';

const Recipes = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<div>
			<h1 id='compilationTitle'>Recipes</h1>
			<div id='compilationContainer'>
				{/* <div className='compilationContainerItem'>
					<Link to='/greenTeaNoodles'>
						<SingleSquare
							url='https://img.delicious.com.au/EEJ2ozkv/del/2020/10/green-tea-noodles-with-sticky-sweet-chilli-salmon-140868-2.jpg'
							section='Dinner'
							title='Green Tea Noodles with Sticky Sweet Chili Salmon'
							description='Green tea noodles bring a pop of colour to this easy midweek dinner.'
							author='Phoebe Wood'
						/>
					</Link>
				</div> */}
				<div className='compilationContainerItem'>
					<Link to='/healthyFrenchToast'>
						<SingleSquareCropped
							// url='https://www.eatthis.com/wp-content/uploads/sites/4/2018/12/healthy-french-toast-with-strawberries.jpg?quality=82&strip=1&resize=640%2C360'
							url='/pictures/healthyFrenchToastSquared.png'
							section='Dinner'
							title='Healthy French Toast With Strawberries'
							description='When you want something a little sweet for supper, look no further than this French toast recipe.'
							author='David Zinczenko and Matt Goulding'
						/>
					</Link>
				</div>
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
							description='Fresh flavours abound in this zingy pizza.'
							author='Darshana Thacker'
						/>
					</Link>
				</div>
				<div className='compilationContainerItem'>
					<Link to='/wildRiceSoup'>
						<SingleSquareCropped
							// url='https://www.forksoverknives.com/wp-content/uploads/fly-images/80859/Creamy-Wild-Rice-Soup-for-website-688x387-c.jpg'
							url='/pictures/creamyWildRiceSoupSquared.png'
							section='Plant-Based Recipes'
							title='Creamy Wild Rice Soup'
							description='Our family loves this soup and chances are your family will love it too!'
							author='Carla Christian'
						/>
					</Link>
				</div>
				<div className='compilationContainerItem'>
					<Link to='/veganBakedPotato'>
						<SingleSquareCropped
							// url='https://www.forksoverknives.com/wp-content/uploads/fly-images/42933/Nacho-and-Baked-Potato1561-WPedit-688x387-c.jpg'
							url='/pictures/veganBakedPotatoSquared.png'
							section='Plant-Based Recipes'
							title='"Nacho" Vegan Baked Potato'
							description='This recipe makes a great go-to meal when things are busy.'
							author='Andrea Duclos'
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
export default Recipes;
