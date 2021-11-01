import React from 'react';

import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faBlogger,
	faDelicious,
	faGoodreads,
	faRedditSquare,
	faTiktok,
} from '@fortawesome/free-brands-svg-icons';

import PrimarySquare from '../shared/primary-square';
import ThreeSquareShort from '../shared/three-square-short';
import ThreeSquare from '../shared/three-square';
import FourSquare from '../shared/four-square';
import SixSquare from '../shared/six-square';
import HoverIcon from '../shared/hoverIcon';

import './home.css';

const Home = () => {
	return (
		<div>
			<div id='home-container'>
				<div id='primary-image-container'>
					<Link to='/greenTeaNoodles'>
						<img
							id='primary-image'
							src='https://img.delicious.com.au/EEJ2ozkv/del/2020/10/green-tea-noodles-with-sticky-sweet-chilli-salmon-140868-2.jpg'
						/>
						<PrimarySquare
							id='primary-image-description'
							// url=''
							section='Dinner'
							title='Green Tea Noodles with Sticky Sweet Chili Salmon'
							description='Green tea noodles bring a pop of colour to this easy midweek dinner.'
							author='Phoebe Wood'
						/>
					</Link>
				</div>

				<div id='four-box-grid-container'>
					<div id='four-box-grid-item1' className='four-box-grid-item'>
						<HoverIcon
							url='https://img.buzzfeed.com/buzzfeed-static/static/2021-02/25/20/asset/8a98f7f0d02c/sub-buzz-6394-1614285314-17.jpg?output-format=auto&output-quality=auto'
							title='5-Ingredient'
						/>
					</div>
					<div id='four-box-grid-item2' className='four-box-grid-item'>
						<HoverIcon
							url='https://images.heb.com/is/image/HEBGrocery/recipe-hm-large/air-fryer-shrimp-boil-for-two-recipe.jpg'
							title='Air Fryer'
						/>
					</div>
					<div id='four-box-grid-item3' className='four-box-grid-item'>
						<HoverIcon
							url='https://img.delicious.com.au/Q8jQkgVW/del/2016/05/butternut-spaghetti-with-prosciutto-and-brown-butter-30846-2.jpg'
							title='Keto'
						/>
					</div>
					<div id='four-box-grid-item4' className='four-box-grid-item'>
						<HoverIcon
							url='https://images.themodernproper.com/billowy-turkey/production/posts/2019/Lentil-Soup-with-Quinoa-and-Mushrooms-10_191012_000659.jpg?w=1200&auto=compress%2Cformat&fit=crop&fp-x=0.5&fp-y=0.5&dm=1610375259&s=e9ccb039a532d89ed4ff052f96ae3dcc'
							title='Vegetarian'
						/>
					</div>
				</div>
				<hr />
				<p className='subtitle'>The Latest</p>
				<div className='three-square-container-short'>
					<Link to='/healthyFrenchToast'>
						<ThreeSquareShort
							url='https://www.eatthis.com/wp-content/uploads/sites/4/2018/12/healthy-french-toast-with-strawberries.jpg?quality=82&strip=1&resize=640%2C360'
							section='Dinner'
							title='Healthy French Toast With Strawberries'
							description='When you want something a little sweet for supper, look no further than this French toast recipe.'
							author='David Zinczenko and Matt Goulding'
						/>
					</Link>
					<Link to='/asianChickenMeatballs'>
						<ThreeSquareShort
							url='https://www.eatthis.com/wp-content/uploads/sites/4/2018/12/paleo-asian-chicken-meatballs.jpg?quality=82&strip=1&resize=640%2C360'
							section='Lunch'
							title='Asian Chicken Meatballs'
							description='Get your tastebuds ready for some bold flavors we bring for a twist on a classic dish.'
							author='David Zinczenko and Matt Goulding'
						/>
					</Link>
					<Link to='/chickenZoodleSoup'>
						<ThreeSquareShort
							url='https://www.eatthis.com/wp-content/uploads/sites/4/2019/12/Whole30-IP-Chicken-Zoodle-Soup.jpg?quality=82&strip=1&resize=640%2C360'
							section='Dinner'
							title='Instant Pot Chicken Zoodle Soup'
							description='Use zucchini noodles instead of regular ones to make a gluten-free chicken noodle soup.'
							author='Posie Brien'
						/>
					</Link>
				</div>
				<div className='three-square-container-short'>
					<Link to='/italianTunaMelt'>
						<ThreeSquareShort
							url='https://www.eatthis.com/wp-content/uploads/sites/4/2018/12/healthy-italian-tuna-melt.jpg?quality=82&strip=1&resize=970%2C546'
							section='Lunch'
							title='Italian Tuna Melt'
							description='A new and improved version of the classic sandwich that is ready to eat in minutes.'
							author='David Zinczenko and Matt Goulding'
						/>
					</Link>
					<Link to='/chickenSaladSandwich'>
						<ThreeSquareShort
							url='https://www.eatthis.com/wp-content/uploads/sites/4/2019/01/chicken-salad-sandwich-curry-raisins.jpg?quality=82&strip=1&resize=640%2C360'
							section='Lunch'
							title='Chicken Salad Sandwich with Curry and Raisins'
							description='Who said a chicken salad needs to be drowning in mayo to be tasty?'
							author='David Zinczenko and Matt Goulding'
						/>
					</Link>
					<Link to='/healthyUltimateBurger'>
						<ThreeSquareShort
							url='https://www.eatthis.com/wp-content/uploads/sites/4/2019/01/the-healthy-ultimate-burger.jpg?quality=82&strip=1&resize=970%2C546'
							section='Dinner'
							title='The Healthy Ultimate Burger'
							description='Prepare for a true, first-class burger experience.'
							author='David Zinczenko and Matt Goulding'
						/>
					</Link>
				</div>
				<div id='signup-bar'>
					<h1 id='signup-header-h1'>SAVE YOUR FAVORITE RECIPES</h1>
					<h3 id='signup-header-h3'>
						Create a FREE account for quick & easy access
					</h3>
					<div id='signup-bar-inputs'>
						<input type='text' />
						<button>START SAVING</button>
					</div>
				</div>
				<p className='subtitle'>Plant-Based Recipes</p>
				<div className='six-square-container'>
					<Link to='/texmexPitaPizza'>
						<SixSquare
							url='https://www.forksoverknives.com/wp-content/uploads/fly-images/66822/Tex-Mex-Pita-Pizzas_WP-688x387-c.jpg'
							section='Plant-Based Recipes'
							title='Tex-Mex Pita Pizzas'
						/>
					</Link>
					<Link to='/wildRiceSoup'>
						<SixSquare
							url='https://www.forksoverknives.com/wp-content/uploads/fly-images/80859/Creamy-Wild-Rice-Soup-for-website-688x387-c.jpg'
							section='Plant-Based Recipes'
							title='Creamy Wild Rice Soup'
						/>
					</Link>
					<Link to='/veganBakedPotato'>
						<SixSquare
							url='https://www.forksoverknives.com/wp-content/uploads/fly-images/42933/Nacho-and-Baked-Potato1561-WPedit-688x387-c.jpg'
							section='Plant-Based Recipes'
							title='"Nacho" Vegan Baked Potato'
						/>
					</Link>
					<Link to='/veganMacaroniCheese'>
						<SixSquare
							url='https://www.forksoverknives.com/wp-content/uploads/fly-images/67930/Super-Stove-Top-Mac-and-Cheese-103068713-WP-688x387-c.jpg'
							section='Plant-Based Recipes'
							title='Stove-Top Vegan Macaroni and Cheese'
						/>
					</Link>
					<Link to='/penneTomatoMushroom'>
						<SixSquare
							url='https://www.forksoverknives.com/wp-content/uploads/fly-images/41259/Penne-with-Tomato-Mushroom-Cream-Sauce-wp-edit-688x387-c.jpg'
							section='Plant-Based Recipes'
							title='Penne With Tomato-Mushroom Sauce'
						/>
					</Link>
					<Link to='/burritosRiceBeans'>
						<SixSquare
							url='https://www.forksoverknives.com/wp-content/uploads/fly-images/22661/burrito-fok-300kb-688x387-c.jpg'
							section='Plant-Based Recipes'
							title='Burritos With Spanish Rice And Black Beans'
						/>
					</Link>
				</div>
				<p className='subtitle'>Latest Workouts</p>
				<div className='four-square-container'>
					<div className='four-square-container-item'>
						<Link to='/thirtyMinBeachWorkout'>
							<FourSquare
								url='https://blog.myfitnesspal.com/wp-content/uploads/2021/07/30-Minute-Beach-Workout-930x550.jpg'
								section='Fitness'
								title='30-Minute Beach Workout'
							/>
						</Link>
					</div>
					<div className='four-square-container-item'>
						<Link to='/fourCommonStretches'>
							<FourSquare
								url='https://blog.myfitnesspal.com/wp-content/uploads/2021/07/Four-Common-Types-of-Stretches-and-When-to-do-Each-930x550.jpg'
								section='Fitness'
								title='Four Common Types of Stretches and When to do Each'
							/>
						</Link>
					</div>
					<div className='four-square-container-item'>
						<Link to='/coldWeatherRunning'>
							<FourSquare
								url='https://blog.myfitnesspal.com/wp-content/uploads/2021/01/How-to-Breathe-Better-During-Cold-Weather-Running-752x472.jpg'
								section='Fitness'
								title='How to Breathe Better During Cold-Weather Running'
							/>
						</Link>
					</div>
					<div className='four-square-container-item'>
						<Link to='/turkishGetUp'>
							<FourSquare
								url='https://blog.myfitnesspal.com/wp-content/uploads/2021/06/The-One-Exercise-You-Should-Add-to-Your-Workout-Routine-3-930x550.jpg'
								section='Fitness'
								title='The One Exercise You Should Add to Your Workout Routine'
							/>
						</Link>
					</div>
				</div>
				<p className='subtitle'>Latest Meal Plans</p>
				<div className='three-square-container'>
					<Link to='/honeyDijonChicken'>
						<ThreeSquare
							url='https://thegirlonbloor.com/wp-content/uploads/bb-plugin/cache/Sheet-Pan-Honey-Mustard-Chicken-3-400x500-circle.jpg'
							section='Meal Planning'
							title='Honey Dijon Chicken'
							description='A delicious meal that comes together in 30 minutes.'
							author='Taylor Stinson'
						/>
					</Link>
					<Link to='/beefStirFry'>
						<ThreeSquare
							url='https://thegirlonbloor.com/wp-content/uploads/bb-plugin/cache/The-best-Beef-stir-fry-5-400x500-circle.jpg'
							section='Meal Planning'
							title='Beef Stir Fry'
							description='This is the EASIEST Beef Stir Fry recipe, with a 2-ingredient stir fry sauce.'
							author='Taylor Stinson'
						/>
					</Link>
					<Link to='/chickenSouvlakiBowl'>
						<ThreeSquare
							url='https://thegirlonbloor.com/wp-content/uploads/bb-plugin/cache/Meal-Prep-Chicken-Souvlaki-Bowls-5-1-400x500-circle.jpg'
							section='Meal Planning'
							title='Chicken Souvlaki Bowls'
							description="These bowls with quinoa and grilled veggies are a delicious and easy lunch idea you'll want to eat all week!"
							author='Taylor Stinson'
						/>
					</Link>
				</div>
				<div className='three-square-container'>
					<Link to='/indianChickenBowl'>
						<ThreeSquare
							url='https://thegirlonbloor.com/wp-content/uploads/bb-plugin/cache/Chicken-Tandoori-Meal-Prep-Bowls-14-400x500-circle.jpg'
							section='Meal Planning'
							title='Indian Inspired Chicken Bowls'
							description="These are a tasty sheet pan meal idea ready in 45 minutes – they've even got pakoras!"
							author='Taylor Stinson'
						/>
					</Link>
					<Link to='/masonJarNoodles'>
						<ThreeSquare
							url='https://thegirlonbloor.com/wp-content/uploads/2016/01/Mason-Jar-Instant-Noodle-Soups-500x500.jpg'
							section='Meal Planning'
							title='Mason Jar Instant Noodles'
							description='These are the perfect on-the-go work lunch and packed full of raw veggies, quick-cook vermicelli noodles & shredded chicken!'
							author='Taylor Stinson'
						/>
					</Link>
					<Link to='/koreanChickenBowl'>
						<ThreeSquare
							url='https://thegirlonbloor.com/wp-content/uploads/2017/12/Korean-Chicken-Meal-Prep-Bowls-3-500x500.jpg'
							section='Meal Planning'
							title='Korean Inspired Chicken Bowls'
							description='These are a healthy make ahead lunch idea made up of chicken thighs, sesame coleslaw and jasmine rice!'
							author='Taylor Stinson'
						/>
					</Link>
				</div>
				<p id='home-workouts' className='subtitle'>
					Home Workouts
				</p>
				<div className='six-square-container'>
					<Link to='/threeDayTotalBody'>
						<SixSquare
							url='https://blog.myfitnesspal.com/wp-content/uploads/2021/03/MFP-3-Day-Total-Body-Strength-Workout-featured-930x550.jpg'
							section='Home Workouts'
							title='3-Day Total-Body Strength Workout'
						/>
					</Link>
					<Link to='/oneDumbbellTotalBody'>
						<SixSquare
							url='https://blog.myfitnesspal.com/wp-content/uploads/2021/02/UACF-1-Week-1-Dumbbell-Total-Body-01-930x550.jpg'
							section='Home Workouts'
							title='1-Week, 1-Dumbbell Total-Body Workout'
						/>
					</Link>
					<Link to='/oneKettlebellLowerBody'>
						<SixSquare
							url='https://blog.myfitnesspal.com/wp-content/uploads/2021/01/UACF-Kettlebell-Workout-Guide-featured-01-930x550.jpg'
							section='Home Workouts'
							title='1-Week, 1-Kettlebell Lower-Body Workout Guide'
						/>
					</Link>
					<Link to='/totalBody2021'>
						<SixSquare
							url='https://blog.myfitnesspal.com/wp-content/uploads/2020/12/MFP-2021-New-Year-Workout-Guide-2-featured-930x550.jpg'
							section='Home Workouts'
							title='Your Total Body (20)21 New Year Workout Guide'
						/>
					</Link>
					<Link to='/holidayAMRAP'>
						<SixSquare
							url='https://blog.myfitnesspal.com/wp-content/uploads/2020/12/MFP-Holiday-AMRAP-3-03-930x550.jpg'
							section='Home Workouts'
							title='12 Days of Cheer: Holiday AMRAP'
						/>
					</Link>
					<Link to='/oneWeekCore'>
						<SixSquare
							url='https://blog.myfitnesspal.com/wp-content/uploads/2020/12/UACF-1-Week-Core-Workout-Guide-01-930x550.jpg'
							section='Home Workouts'
							title='Your Quick and Easy 1-Week Core Workout Guide'
						/>
					</Link>
				</div>
				<p className='subtitle'>Weight Loss Recipes</p>
				<div className='three-square-container'>
					<Link to='/zucchiniNoodleCaprese'>
						<ThreeSquare
							url='https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2014/10/zucchini-noodle-caprese-6-300x300.jpg'
							section='Weight Loss Recipes'
							title='Zucchini Noodle Caprese'
							description='This zucchini noodle caprese is a delicious, healthy salad made from zucchini noodles and a few simple, fresh ingredients.'
							author='Lisa Bryan'
						/>
					</Link>
					<Link to='/greekSalad'>
						<ThreeSquare
							url='https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2018/08/Greek-Salad-450x450.jpg'
							section='Weight Loss Recipes'
							title='Greek Salad'
							description='This salad is easy to make and bursting with flavor.'
							author='Lisa Bryan'
						/>
					</Link>
					<Link to='/salmonAvocadoSalad'>
						<ThreeSquare
							url='https://downshiftology.com/wp-content/uploads/2020/07/Salmon-Avocado-Salad-6-300x300.jpg'
							section='Weight Loss Recipes'
							title='Salmon Avocado Salad'
							description='This salmon avocado salad is a healthy salad recipe that is big on nutrients and flavor.'
							author='Lisa Bryan'
						/>
					</Link>
				</div>
				<div className='three-square-container'>
					<Link to='/tacoSalad'>
						<ThreeSquare
							url='https://downshiftology.com/wp-content/uploads/2020/06/Taco-Salad-6-300x300.jpg'
							section='Weight Loss Recipes'
							title='Taco Salad'
							description='Loaded with crisp vegetables, seasoned ground beef, and taco classics such as homemade salsa, cilantro and avocado.'
							author='Lisa Bryan'
						/>
					</Link>
					<Link to='/cucumberRadishSalad'>
						<ThreeSquare
							url='https://downshiftology.com/wp-content/uploads/2021/07/Cucumber-Radish-Salad-main-1-300x300.jpg'
							section='Weight Loss Recipes'
							title='Cucumber Radish Salad'
							description='Loaded with cool cucumbers, crisp radishes, fresh dill, and a simple olive oil lemon dressing for a fresh, tangy touch.'
							author='Lisa Bryan'
						/>
					</Link>
					<Link to='/southwestChickenSalad'>
						<ThreeSquare
							url='https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2020/07/Southwest-Chicken-Salad-6-450x450.jpg'
							section='Weight Loss Recipes'
							title='Southwest Chicken Salad'
							description='Simple to make, filled with bold flavors, and hearty enough to fill you up.'
							author='Lisa Bryan'
						/>
					</Link>
				</div>
				<p className='subtitle'>Self Care</p>
				<div className='four-square-container'>
					<Link to='/fiveWFHStretches'>
						<FourSquare
							url='https://blog.myfitnesspal.com/wp-content/uploads/2021/07/5-Stretches-to-Relieve-Work-From-Home-Pains-930x550.jpg'
							section='Self Care'
							title='5 Stretches to Relieve Work-From-Home Pains'
						/>
					</Link>
					<Link to='/howSleepChanges'>
						<FourSquare
							url='https://blog.myfitnesspal.com/wp-content/uploads/2021/05/How-Sleep-Changes-as-You-Age-930x550.jpg'
							section='Self Care'
							title='How Sleep Changes as You Age'
						/>
					</Link>
					<Link to='/menWomenStress'>
						<FourSquare
							url='https://blog.myfitnesspal.com/wp-content/uploads/2021/05/How-Men-and-Women-Handle-Stress-Differently-930x550.jpg'
							section='Self Care'
							title='How Men and Women Handle Stress Differently'
						/>
					</Link>
					<Link to='/saunaHealthLongevity'>
						<FourSquare
							url='https://blog.myfitnesspal.com/wp-content/uploads/2021/05/Saunas-Promote-Heart-Health-and-Longevity-Science-Says-2-930x550.jpg'
							section='Self Care'
							title='Saunas Promote Heart Health and Longevity, Science Says'
						/>
					</Link>
				</div>
				<div id='signup-bar2'>
					<h1 id='signup2-header-h1'>SAVE YOUR FAVORITE RECIPES</h1>
					<h3 id='signup2-header-h1'>
						Create a FREE account for quick & easy access
					</h3>
					<div id='signup2-bar-inputs'>
						<input type='text' />
						<button>START SAVING</button>
					</div>
				</div>
				<h2>Featured On</h2>
				<div id='linkBanner'>
					<a href='https://www.blogger.com'>
						<FontAwesomeIcon icon={faBlogger} className='linkItems' />
					</a>
					<a href='https://www.delicious.com.au'>
						<FontAwesomeIcon icon={faDelicious} className='linkItems' />
					</a>
					<a href='https://www.goodreads.com/'>
						<FontAwesomeIcon icon={faGoodreads} className='linkItems' />
					</a>
					<a href='https://www.reddit.com/'>
						<FontAwesomeIcon icon={faRedditSquare} className='linkItems' />
					</a>
					<a href='https://www.tiktok.com/en/'>
						<FontAwesomeIcon icon={faTiktok} className='linkItems' />
					</a>
				</div>
			</div>
		</div>
	);
};

export default Home;
