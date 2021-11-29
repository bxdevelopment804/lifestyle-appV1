import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faBars,
	faChevronDown,
	faChevronUp,
	faTimes,
	faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
// import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

import './navbar.css';

const Navbar = () => {
	//State for hiding and showing the mobile dropdown menu
	const [mobileMenuActivated, setMobileMenuActivated] = useState(false);
	const handleMobileMenu = () => {
		setMobileMenuActivated(!mobileMenuActivated);
	};

	//State for hiding and showing the second levels of the mobile dropdown menu
	const [secondaryRecipeMenuActivated, setSecondaryRecipeMenuActivated] =
		useState(false);
	const handleSecondaryRecipeMenu = () => {
		setSecondaryRecipeMenuActivated(!secondaryRecipeMenuActivated);
	};

	const [
		secondaryMealPlanningMenuActivated,
		setSecondaryMealPlanningMenuActivated,
	] = useState(false);
	const handleSecondaryMealPlanningMenu = () => {
		setSecondaryMealPlanningMenuActivated(!secondaryMealPlanningMenuActivated);
	};

	const [
		secondaryWeightLossMenuActivated,
		setSecondaryWeightLossMenuActivated,
	] = useState(false);
	const handleSecondaryWeightLossMenu = () => {
		setSecondaryWeightLossMenuActivated(!secondaryWeightLossMenuActivated);
	};

	const [secondaryFitnessMenuActivated, setSecondaryFitnessMenuActivated] =
		useState(false);
	const handleSecondaryFitnessMenu = () => {
		setSecondaryFitnessMenuActivated(!secondaryFitnessMenuActivated);
	};

	const [secondarySelfCareMenuActivated, setSecondarySelfCareMenuActivated] =
		useState(false);
	const handleSecondarySelfCareMenu = () => {
		setSecondarySelfCareMenuActivated(!secondarySelfCareMenuActivated);
	};

	//State for hiding and showing the third levels of the mobile dropdown menu
	const [tertiaryMealTypeMenuActivated, setTertiaryMealTypeMenuActivated] =
		useState(false);
	const handleTertiaryMealTypeMenu = () => {
		setTertiaryMealTypeMenuActivated(!tertiaryMealTypeMenuActivated);
	};

	const [tertiaryDishTypeMenuActivated, setTertiaryDishTypeMenuActivated] =
		useState(false);
	const handleTertiaryDishTypeMenu = () => {
		setTertiaryDishTypeMenuActivated(!tertiaryDishTypeMenuActivated);
	};

	const [tertiaryMethodMenuActivated, setTertiaryMethodMenuActivated] =
		useState(false);
	const handleTertiaryMethodMenu = () => {
		setTertiaryMethodMenuActivated(!tertiaryMethodMenuActivated);
	};

	const [tertiaryDietTypeMenuActivated, setTertiaryDietTypeMenuActivated] =
		useState(false);
	const handleTertiaryDietTypeMenu = () => {
		setTertiaryDietTypeMenuActivated(!tertiaryDietTypeMenuActivated);
	};

	const [
		tertiaryFatBlastersMenuActivated,
		setTertiaryFatBlastersMenuActivated,
	] = useState(false);
	const handleTertiaryFatBlastersMenu = () => {
		setTertiaryFatBlastersMenuActivated(!tertiaryFatBlastersMenuActivated);
	};

	const [tertiaryLowerBodyMenuActivated, setTertiaryLowerBodyMenuActivated] =
		useState(false);
	const handleTertiaryLowerBodyMenu = () => {
		setTertiaryLowerBodyMenuActivated(!tertiaryLowerBodyMenuActivated);
	};

	const [tertiaryUpperBodyMenuActivated, setTertiaryUpperBodyMenuActivated] =
		useState(false);
	const handleTertiaryUpperBodyMenu = () => {
		setTertiaryUpperBodyMenuActivated(!tertiaryUpperBodyMenuActivated);
	};

	//Close all menus and submenus
	const closeMobileMenu = () => {
		setMobileMenuActivated(false);
		setSecondaryRecipeMenuActivated(false);
		setSecondaryMealPlanningMenuActivated(false);
		setSecondaryWeightLossMenuActivated(false);
		setSecondaryFitnessMenuActivated(false);
		setSecondarySelfCareMenuActivated(false);
		setTertiaryMealTypeMenuActivated(false);
		setTertiaryDishTypeMenuActivated(false);
		setTertiaryMethodMenuActivated(false);
		setTertiaryDietTypeMenuActivated(false);
		setTertiaryFatBlastersMenuActivated(false);
		setTertiaryLowerBodyMenuActivated(false);
		setTertiaryUpperBodyMenuActivated(false);
	};

	// const pageIndex = [
	// 	{
	// 		url: 'https://img.delicious.com.au/EEJ2ozkv/del/2020/10/green-tea-noodles-with-sticky-sweet-chilli-salmon-140868-2.jpg',
	// 		section: 'Dinner',
	// 		title: 'Green Tea Noodles with Sticky Sweet Chili Salmon',
	// 		description:
	// 			'Green tea noodles bring a pop of colour to this easy midweek dinner.',
	// 		author: 'Phoebe Wood',
	// 	},
	// 	{
	// 		url: 'https://www.eatthis.com/wp-content/uploads/sites/4/2018/12/healthy-french-toast-with-strawberries.jpg?quality=82&strip=1&resize=640%2C360',
	// 		section: 'Dinner',
	// 		title: 'Healthy French Toast With Strawberries',
	// 		description:
	// 			'When you want something a little sweet for supper, look no further than this French toast recipe.',
	// 		author: 'David Zinczenko and Matt Goulding',
	// 	},
	// 	{
	// 		url: 'https://www.eatthis.com/wp-content/uploads/sites/4/2018/12/paleo-asian-chicken-meatballs.jpg?quality=82&strip=1&resize=640%2C360',
	// 		section: 'Lunch',
	// 		title: 'Asian Chicken Meatballs',
	// 		description:
	// 			'Get your tastebuds ready for some bold flavors we bring for a twist on a classic dish.',
	// 		author: 'David Zinczenko and Matt Goulding',
	// 	},
	// 	{
	// 		url: 'https://www.eatthis.com/wp-content/uploads/sites/4/2019/12/Whole30-IP-Chicken-Zoodle-Soup.jpg?quality=82&strip=1&resize=640%2C360',
	// 		section: 'Dinner',
	// 		title: 'Instant Pot Chicken Zoodle Soup',
	// 		description:
	// 			'Use zucchini noodles instead of regular ones to make a gluten-free chicken noodle soup.',
	// 		author: 'Posie Brien',
	// 	},
	// 	{
	// 		url: 'https://www.eatthis.com/wp-content/uploads/sites/4/2018/12/healthy-italian-tuna-melt.jpg?quality=82&strip=1&resize=970%2C546',
	// 		section: 'Lunch',
	// 		title: 'Italian Tuna Melt',
	// 		description:
	// 			'A new and improved version of the classic sandwich that is ready to eat in minutes.',
	// 		author: 'David Zinczenko and Matt Goulding',
	// 	},
	// 	{
	// 		url: 'https://www.eatthis.com/wp-content/uploads/sites/4/2019/01/chicken-salad-sandwich-curry-raisins.jpg?quality=82&strip=1&resize=640%2C360',
	// 		section: 'Lunch',
	// 		title: 'Chicken Salad Sandwich with Curry and Raisins',
	// 		description:
	// 			'Who said a chicken salad needs to be drowning in mayo to be tasty?',
	// 		author: 'David Zinczenko and Matt Goulding',
	// 	},
	// 	{
	// 		url: 'https://www.eatthis.com/wp-content/uploads/sites/4/2019/01/the-healthy-ultimate-burger.jpg?quality=82&strip=1&resize=970%2C546',
	// 		section: 'Dinner',
	// 		title: 'The Healthy Ultimate Burger',
	// 		description: 'Prepare for a true, first-class burger experience.',
	// 		author: 'David Zinczenko and Matt Goulding',
	// 	},
	// 	{
	// 		url: 'https://www.forksoverknives.com/wp-content/uploads/fly-images/66822/Tex-Mex-Pita-Pizzas_WP-688x387-c.jpg',
	// 		section: 'Plant-Based Recipes',
	// 		title: 'Tex-Mex Pita Pizzas',
	// 		description: 'These will satisfy your taste buds and satiate your tum.',
	// 		author: 'Darshana Thacker',
	// 	},
	// 	{
	// 		url: 'https://www.forksoverknives.com/wp-content/uploads/fly-images/80859/Creamy-Wild-Rice-Soup-for-website-688x387-c.jpg',
	// 		section: 'Plant-Based Recipes',
	// 		title: 'Creamy Wild Rice Soup',
	// 		description: '  It’s like a chicken noodle soup but better.',
	// 		author: 'Carla Christian',
	// 	},
	// 	{
	// 		url: 'https://www.forksoverknives.com/wp-content/uploads/fly-images/42933/Nacho-and-Baked-Potato1561-WPedit-688x387-c.jpg',
	// 		section: 'Plant-Based Recipes',
	// 		title: '"Nacho" Vegan Baked Potato',
	// 		description: 'This recipe makes a great go-to meal when things are busy.',
	// 		author: 'Andrea Duclos',
	// 	},
	// 	{
	// 		url: 'https://www.forksoverknives.com/wp-content/uploads/fly-images/67930/Super-Stove-Top-Mac-and-Cheese-103068713-WP-688x387-c.jpg',
	// 		section: 'Plant-Based Recipes',
	// 		title: 'Stove-Top Vegan Macaroni and Cheese',
	// 		description:
	// 			'This classic vegan mac and cheese is ultra cheesy, saucy and creamy.',
	// 		author: 'Molly Patrick',
	// 	},
	// 	{
	// 		url: 'https://www.forksoverknives.com/wp-content/uploads/fly-images/41259/Penne-with-Tomato-Mushroom-Cream-Sauce-wp-edit-688x387-c.jpg',
	// 		section: 'Plant-Based Recipes',
	// 		title: 'Penne With Tomato-Mushroom Sauce',
	// 		description:
	// 			'Put an authentic Italian pasta dish on your dinner table in just 20 minutes.',
	// 		author: 'Del Sroufe',
	// 	},
	// 	{
	// 		url: 'https://www.forksoverknives.com/wp-content/uploads/fly-images/22661/burrito-fok-300kb-688x387-c.jpg',
	// 		section: 'Plant-Based Recipes',
	// 		title: 'Burritos With Spanish Rice And Black Beans',
	// 		description:
	// 			'Quick and easy, vegan bean and rice burritos are a perfect vegetarian dinner idea.',
	// 		author: 'Susan Voisin',
	// 	},
	// 	{
	// 		url: 'https://blog.myfitnesspal.com/wp-content/uploads/2021/07/30-Minute-Beach-Workout-930x550.jpg',
	// 		section: 'Fitness',
	// 		title: '30-Minute Beach Workout',
	// 		description: 'The beach is a perfect spot for a fun, functional workout.',
	// 		author: 'Shana Verstegen',
	// 	},
	// 	{
	// 		url: 'https://blog.myfitnesspal.com/wp-content/uploads/2021/07/Four-Common-Types-of-Stretches-and-When-to-do-Each-930x550.jpg',
	// 		section: 'Fitness',
	// 		title: 'Four Common Types of Stretches and When to do Each',
	// 		description:
	// 			"There's a time and place for each kind of stretch, but not all stretches are for everyone.",
	// 		author: 'Kevin Gray',
	// 	},
	// 	{
	// 		url: 'https://blog.myfitnesspal.com/wp-content/uploads/2021/01/How-to-Breathe-Better-During-Cold-Weather-Running-752x472.jpg',
	// 		section: 'Fitness',
	// 		title: 'How to Breathe Better During Cold-Weather Running',
	// 		description:
	// 			"Breathing during winter runs is a struggle.  Here's how to cope.",
	// 		author: 'Lauren Bedosky',
	// 	},
	// 	{
	// 		url: 'https://blog.myfitnesspal.com/wp-content/uploads/2021/06/The-One-Exercise-You-Should-Add-to-Your-Workout-Routine-3-930x550.jpg',
	// 		section: 'Fitness',
	// 		title: 'The One Exercise You Should Add to Your Workout Routine',
	// 		description:
	// 			'This technical and challenging movement is well worth learning.',
	// 		author: 'Lauren Bedosky',
	// 	},
	// 	{
	// 		url: 'https://thegirlonbloor.com/wp-content/uploads/bb-plugin/cache/Sheet-Pan-Honey-Mustard-Chicken-3-400x500-circle.jpg',
	// 		section: 'Meal Planning',
	// 		title: 'Honey Dijon Chicken',
	// 		description: 'A delicious meal that comes together in 30 minutes.',
	// 		author: 'Taylor Stinson',
	// 	},
	// 	{
	// 		url: 'https://thegirlonbloor.com/wp-content/uploads/bb-plugin/cache/The-best-Beef-stir-fry-5-400x500-circle.jpg',
	// 		section: 'Meal Planning',
	// 		title: 'Beef Stir Fry',
	// 		description:
	// 			'This is the EASIEST Beef Stir Fry recipe, with a 2-ingredient stir fry sauce.',
	// 		author: 'Taylor Stinson',
	// 	},
	// 	{
	// 		url: 'https://thegirlonbloor.com/wp-content/uploads/bb-plugin/cache/Meal-Prep-Chicken-Souvlaki-Bowls-5-1-400x500-circle.jpg',
	// 		section: 'Meal Planning',
	// 		title: 'Chicken Souvlaki Bowls',
	// 		description:
	// 			"These bowls with quinoa and grilled veggies are a delicious and easy lunch idea you'll want to eat all week!",
	// 		author: 'Taylor Stinson',
	// 	},
	// 	{
	// 		url: 'https://thegirlonbloor.com/wp-content/uploads/bb-plugin/cache/Chicken-Tandoori-Meal-Prep-Bowls-14-400x500-circle.jpg',
	// 		section: 'Meal Planning',
	// 		title: 'Indian Inspired Chicken Bowls',
	// 		description:
	// 			"These are a tasty sheet pan meal idea ready in 45 minutes – they've even got pakoras!",
	// 		author: 'Taylor Stinson',
	// 	},
	// 	{
	// 		url: 'https://thegirlonbloor.com/wp-content/uploads/2016/01/Mason-Jar-Instant-Noodle-Soups-500x500.jpg',
	// 		section: 'Meal Planning',
	// 		title: 'Mason Jar Instant Noodles',
	// 		description:
	// 			'These are the perfect on-the-go work lunch and packed full of raw veggies, quick-cook vermicelli noodles & shredded chicken!',
	// 		author: 'Taylor Stinson',
	// 	},
	// 	{
	// 		url: 'https://thegirlonbloor.com/wp-content/uploads/2017/12/Korean-Chicken-Meal-Prep-Bowls-3-500x500.jpg',
	// 		section: 'Meal Planning',
	// 		title: 'Korean Inspired Chicken Bowls',
	// 		description:
	// 			'These are a healthy make ahead lunch idea made up of chicken thighs, sesame coleslaw and jasmine rice!',
	// 		author: 'Taylor Stinson',
	// 	},
	// 	{
	// 		url: 'https://blog.myfitnesspal.com/wp-content/uploads/2021/03/MFP-3-Day-Total-Body-Strength-Workout-featured-930x550.jpg',
	// 		section: 'Home Workouts',
	// 		title: '3-Day Total-Body Strength Workout',
	// 		description: '',
	// 		author: 'Shana Verstegen',
	// 	},
	// 	{
	// 		url: 'https://blog.myfitnesspal.com/wp-content/uploads/2021/02/UACF-1-Week-1-Dumbbell-Total-Body-01-930x550.jpg',
	// 		section: 'Home Workouts',
	// 		title: '1-Week, 1-Dumbbell Total-Body Workout',
	// 		description: '',
	// 		author: 'Shana Verstegen',
	// 	},
	// 	{
	// 		url: 'https://blog.myfitnesspal.com/wp-content/uploads/2021/01/UACF-Kettlebell-Workout-Guide-featured-01-930x550.jpg',
	// 		section: 'Home Workouts',
	// 		title: '1-Week, 1-Kettlebell Lower-Body Workout Guide',
	// 		description: '',
	// 		author: 'Shana Verstegen',
	// 	},
	// 	{
	// 		url: 'https://blog.myfitnesspal.com/wp-content/uploads/2020/12/MFP-2021-New-Year-Workout-Guide-2-featured-930x550.jpg',
	// 		section: 'Home Workouts',
	// 		title: 'Your Total Body (20)21 New Year Workout Guide',
	// 		description: '',
	// 		author: 'Shana Verstegen',
	// 	},
	// 	{
	// 		url: 'https://blog.myfitnesspal.com/wp-content/uploads/2020/12/MFP-Holiday-AMRAP-3-03-930x550.jpg',
	// 		section: 'Home Workouts',
	// 		title: '12 Days of Cheer: Holiday AMRAP',
	// 		description: '',
	// 		author: 'Shana Verstegen',
	// 	},
	// 	{
	// 		url: 'https://blog.myfitnesspal.com/wp-content/uploads/2020/12/UACF-1-Week-Core-Workout-Guide-01-930x550.jpg',
	// 		section: 'Home Workouts',
	// 		title: 'Your Quick and Easy 1-Week Core Workout Guide',
	// 		description: '',
	// 		author: 'Shana Verstegen',
	// 	},
	// ];

	return (
		<div>
			<div id='container'>
				<div>
					<Link to='/'>
						<img
							id='logo'
							src='https://thumbs.dreamstime.com/b/healthy-lifestyle-vector-illustration-letters-banner-colorful-badge-illustration-white-background-healthy-lifestyle-stylized-165923548.jpg'
							onClick={closeMobileMenu}
						/>
					</Link>
				</div>

				{/* Full Screen Nav Menu */}
				<div id='recipes' className='navButton'>
					<Link
						to='/recipes'
						className='navLink'
						style={{ textDecoration: 'none' }}
					>
						Recipes &nbsp;
						<FontAwesomeIcon icon={faChevronDown} />
					</Link>
					<ul id='recipeTypes' className='menuType'>
						<li className='recipeMenuItem'>
							Meal Type
							<FontAwesomeIcon icon={faChevronRight} />
							<ul id='recipeSubTypes'>
								<Link to='/appetizers'>
									<li className='recipeSubItem'>Appetizers</li>
								</Link>
								<Link to='/breakfast'>
									<li className='recipeSubItem'>Breakfast</li>
								</Link>
								<Link to='/lunch'>
									<li className='recipeSubItem'>Lunch</li>
								</Link>
								<Link to='/dinner'>
									<li className='recipeSubItem'>Dinner</li>
								</Link>
								<Link to='/dessert'>
									<li className='recipeSubItem'>Dessert</li>
								</Link>
								{/* <li className='recipeSubItem'>Drinks</li> */}
								<Link to='/sides'>
									<li className='recipeSubItem'>Sides</li>
								</Link>
								{/* <li className='recipeSubItem'>Snacks</li> */}
								{/* <li className='recipeSubItem'>Dog Recipes</li> */}
								{/* <li className='recipeSubItem'>Holidays</li> */}
							</ul>
						</li>
						<li className='recipeMenuItem'>
							Dish Type
							<FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon>
							<ul id='recipeSubTypes'>
								{/* <li className='recipeSubItem'>Baked Goods</li> */}
								<Link to='/bowls'>
									<li className='recipeSubItem'>Bowls</li>
								</Link>
								<Link to='/burgers'>
									<li className='recipeSubItem'>Burgers</li>
								</Link>
								{/* <li className='recipeSubItem'>Casseroles</li> */}
								{/* <li className='recipeSubItem'>Condiments</li> */}
								{/* <li className='recipeSubItem'>Dressings & Vinaigrettes</li> */}
								{/* <li className='recipeSubItem'>Ice Cream</li> */}
								<Link to='/onePotOrSkillet'>
									<li className='recipeSubItem'>One-Pot & Skillet</li>
								</Link>
								<Link to='/pastaDishes'>
									<li className='recipeSubItem'>Pasta Dishes</li>
								</Link>
								<Link to='/pizza'>
									<li className='recipeSubItem'>Pizza</li>
								</Link>
								<Link to='/salads'>
									<li className='recipeSubItem'>Salads</li>
								</Link>
								<Link to='/sandwiches'>
									<li className='recipeSubItem'>Sandwiches</li>
								</Link>
								<Link to='/soupStewChili'>
									<li className='recipeSubItem'>Soup, Stew, & Chili</li>
								</Link>
								<Link to='/tacosBurritos'>
									<li className='recipeSubItem'>Tacos & Burritos</li>
								</Link>
							</ul>
						</li>
						<li className='recipeMenuItem'>
							Method
							<FontAwesomeIcon icon={faChevronRight} />
							<ul id='recipeSubTypes'>
								<Link to='/baking'>
									<li className='recipeSubItem'>Baking</li>
								</Link>
								<Link to='/bbqGrilling'>
									<li className='recipeSubItem'>Barbeque & Grilling</li>
								</Link>
								<Link to='/instapot'>
									<li className='recipeSubItem'>Instant Pot</li>
								</Link>
								<Link to='/noCook'>
									<li className='recipeSubItem'>No-Cook</li>
								</Link>
								{/* <li className='recipeSubItem'>Roasting</li> */}
								{/* <li className='recipeSubItem'>Slow Cooker</li> */}
								<Link to='/stoveTop'>
									<li className='recipeSubItem'>Stove Top</li>
								</Link>
							</ul>
						</li>
						<li className='recipeMenuItem'>
							Diet Type
							<FontAwesomeIcon icon={faChevronRight} />
							<ul id='recipeSubTypes'>
								<Link to='/dairyFree'>
									<li className='recipeSubItem'>Dairy-Free</li>
								</Link>
								{/* <li className='recipeSubItem'>Diabetic Friendly</li> */}
								<Link to='/glutenFree'>
									<li className='recipeSubItem'>Gluten-Free</li>
								</Link>
								{/* <li className='recipeSubItem'>Keto</li> */}
								<Link to='/lowCarb'>
									<li className='recipeSubItem'>Low-Carb</li>
								</Link>
								<Link to='/paleo'>
									<li className='recipeSubItem'>Paleo</li>
								</Link>
								<Link to='/plantBased'>
									<li className='recipeSubItem'>Plant-Based</li>
								</Link>
								<Link to='/vegetarian'>
									<li className='recipeSubItem'>Vegetarian</li>
								</Link>
							</ul>
						</li>
						<Link to='/recipes'>
							<li className='recipeMenuItem'>Recipe Index</li>
						</Link>
						{/* <li className='recipeMenuItem'>Recipe Videos</li> */}
					</ul>
				</div>
				<div id='meal-planning' className='navButton'>
					<Link
						to='/mealPlanning'
						className='navLink'
						style={{ textDecoration: 'none' }}
					>
						Meal Planning &nbsp;
						<FontAwesomeIcon icon={faChevronDown}></FontAwesomeIcon>
					</Link>
					<ul id='recipeTypes' className='menuType'>
						<Link to='mealPlanning'>
							<li className='recipeMenuItem'>Meal Plans</li>
						</Link>
						<Link to='lowCarb'>
							<li className='recipeMenuItem'>Low-Carb Menus</li>
						</Link>
						<Link to='/plantBased'>
							<li className='recipeMenuItem'>Plant-Based Menus</li>
						</Link>
						{/* <li className='recipeMenuItem'>Weight Watchers Menus</li> */}
						{/* <li className='recipeMenuItem'>Recipe Collections</li> */}
						{/* <li className='recipeMenuItem'>Shopping Lists</li> */}
					</ul>
				</div>
				<div id='weight-loss' className='navButton'>
					<Link
						to='/weightLoss'
						className='navLink'
						style={{ textDecoration: 'none' }}
					>
						Weight Loss &nbsp;
						<FontAwesomeIcon icon={faChevronDown}></FontAwesomeIcon>
					</Link>
					<ul id='weightLossRecipeTypes' className='menuType'>
						{/* <li className='recipeMenuItem'>Cleanse & Detox</li> */}
						{/* <li className='recipeMenuItem'>How to Lose Belly Fat</li> */}
						<Link to='weightLoss'>
							<li className='recipeMenuItem'>Weight Loss Foods</li>
						</Link>
						{/* <li className='recipeMenuItem'>Weight Loss Tips</li> */}
					</ul>
				</div>
				<div id='fitness' className='navButton'>
					<Link
						to='/fitness'
						className='navLink'
						style={{ textDecoration: 'none' }}
					>
						Fitness&nbsp;
						<FontAwesomeIcon icon={faChevronDown}></FontAwesomeIcon>
					</Link>
					<ul id='recipeTypes' className='menuType'>
						<Link to='abAndCore'>
							<li className='recipeMenuItem'>Ab & Core</li>
						</Link>
						<Link to='/beginners'>
							<li className='recipeMenuItem'>Beginners</li>
						</Link>
						{/* <li className='recipeMenuItem'>Challenges & Plans</li> */}
						<Link to='/advanced'>
							<li className='recipeMenuItem'>Advanced</li>
						</Link>
						{/* <li className='recipeMenuItem'>
							Fat Blasters
							<FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon>
							<ul id='skinnyRecipeSubTypes'>
								<li className='recipeSubItem'>Cardio</li>
								<li className='recipeSubItem'>H.I.T.T</li>
								<li className='recipeSubItem'>Tabata</li>
							</ul>
						</li> */}
						<Link to='/homeWorkouts'>
							<li className='recipeMenuItem'>Home Workouts</li>
						</Link>
						<Link to='/lowerBody'>
							<li className='recipeMenuItem'>
								Lower Body
								{/* <FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon>
							<ul id='skinnyRecipeSubTypes'>
								<li className='recipeSubItem'>Butt</li>
								<li className='recipeSubItem'>Leg</li>
							</ul> */}
							</li>
						</Link>
						<Link to='/upperBody'>
							<li className='recipeMenuItem'>
								Upper Body
								{/* <FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon>
							<ul id='skinnyRecipeSubTypes'>
								<li className='recipeSubItem'>Arm</li>
								<li className='recipeSubItem'>Back</li>
								<li className='recipeSubItem'>Leg</li>
							</ul> */}
							</li>
						</Link>
						<Link to='/totalBody'>
							<li className='recipeMenuItem'>Total Body</li>
						</Link>
						<Link to='/running'>
							<li className='recipeMenuItem'>Running</li>
						</Link>
					</ul>
				</div>
				<div id='self-care' className='navButton'>
					<Link
						to='/selfCare'
						className='navLink'
						style={{ textDecoration: 'none' }}
					>
						Self Care
						{/* &nbsp<FontAwesomeIcon icon={faChevronDown}></FontAwesomeIcon> */}
					</Link>
					{/* <ul id='recipeTypes' className='menuType'>
						<li className='recipeSubItem'>Beauty</li>
						<li className='recipeSubItem'>DIY</li>
						<li className='recipeSubItem'>Fitness Tips</li>
						<li className='recipeSubItem'>Healthy Eating</li>
						<li className='recipeSubItem'>Yoga</li>
					</ul> */}
				</div>
				<div id='shop' className='navButton'>
					<Link
						to='/shop'
						className='navLink'
						style={{ textDecoration: 'none' }}
					>
						Shop
					</Link>
				</div>
				<div id='search' className='navButton'>
					<Link
						to='/search'
						className='navLink'
						style={{ textDecoration: 'none' }}
					>
						Search
					</Link>
				</div>
				{/* <div id='signup' className='navButton'>
					Sign Up
				</div>
				<div id='login' className='navButton'>
					Log In
				</div> */}

				{/* Mobile Nav Menu */}
				{!mobileMenuActivated && (
					<div id='mobile-menu' onClick={handleMobileMenu}>
						<FontAwesomeIcon icon={faBars} className='barsIcon' />
					</div>
				)}
				{mobileMenuActivated && (
					<React.Fragment>
						<div id='mobile-menu' onClick={handleMobileMenu}>
							<FontAwesomeIcon icon={faTimes} className='closeIcon' />
						</div>
						<ul id='mobileNavButtonList'>
							{!secondaryRecipeMenuActivated && (
								<li className='mobileNavButton'>
									<Link to='/recipes'>
										<div onClick={closeMobileMenu}>Recipes</div>
									</Link>
									<div>
										<FontAwesomeIcon
											icon={faChevronDown}
											onClick={handleSecondaryRecipeMenu}
											className='chevron'
										/>
									</div>
								</li>
							)}
							{secondaryRecipeMenuActivated && (
								<React.Fragment>
									<li className='mobileNavButton'>
										<Link to='/recipes'>
											<div onClick={closeMobileMenu}>Recipes</div>
										</Link>
										<div>
											<FontAwesomeIcon
												icon={faChevronUp}
												onClick={handleSecondaryRecipeMenu}
												className='chevron'
											/>
										</div>
									</li>
									<div className='secondaryMobileMenu'>
										{/* Meal Type Tertiary Menus */}
										{!tertiaryMealTypeMenuActivated && (
											<div className='secondaryMobileItem'>
												<div className='secondaryMobileTitle'>Meal Type</div>
												<div>
													<FontAwesomeIcon
														icon={faChevronDown}
														onClick={handleTertiaryMealTypeMenu}
														className='chevron'
													/>
												</div>
											</div>
										)}
										{tertiaryMealTypeMenuActivated && (
											<div>
												<div className='secondaryMobileItem'>
													<div className='secondaryMobileTitle'>Meal Type</div>
													<div>
														<FontAwesomeIcon
															icon={faChevronUp}
															onClick={handleTertiaryMealTypeMenu}
															className='chevron'
														/>
													</div>
												</div>
												<div className='tertiaryMobileMenu'>
													<Link to='/appetizers'>
														<div
															className='tertiaryMobileItem'
															onClick={closeMobileMenu}
														>
															Appetizers
														</div>
													</Link>
													<Link to='/breakfast'>
														<div
															className='tertiaryMobileItem'
															onClick={closeMobileMenu}
														>
															Breakfast
														</div>
													</Link>
													<Link to='/lunch'>
														<div
															className='tertiaryMobileItem'
															onClick={closeMobileMenu}
														>
															Lunch
														</div>
													</Link>
													<Link to='/dinner'>
														<div
															className='tertiaryMobileItem'
															onClick={closeMobileMenu}
														>
															Dinner
														</div>
													</Link>
													<Link to='/dessert'>
														<div
															className='tertiaryMobileItem'
															onClick={closeMobileMenu}
														>
															Dessert
														</div>
													</Link>
													{/* <div className='tertiaryMobileItem'>Drinks</div> */}
													<Link to='/sides'>
														<div
															className='tertiaryMobileItem'
															onClick={closeMobileMenu}
														>
															Sides
														</div>
													</Link>
													{/* <div className='tertiaryMobileItem'>Snacks</div> */}
													{/* <div className='tertiaryMobileItem'>Dog Recipes</div> */}
													{/* <div className='tertiaryMobileItem'>Holidays</div> */}
												</div>
											</div>
										)}

										{/* Dish Type Tertiary Menus */}
										{!tertiaryDishTypeMenuActivated && (
											<div className='secondaryMobileItem'>
												<div className='secondaryMobileTitle'>Dish Type</div>
												<div>
													<FontAwesomeIcon
														icon={faChevronDown}
														onClick={handleTertiaryDishTypeMenu}
														className='chevron'
													/>
												</div>
											</div>
										)}
										{tertiaryDishTypeMenuActivated && (
											<div>
												<div className='secondaryMobileItem'>
													<div className='secondaryMobileTitle'>Dish Type</div>
													<div>
														<FontAwesomeIcon
															icon={faChevronUp}
															onClick={handleTertiaryDishTypeMenu}
															className='chevron'
														/>
													</div>
												</div>
												<div className='tertiaryMobileMenu'>
													{/* <div className='tertiaryMobileItem'>Baked Goods</div> */}
													<Link to='/bowls'>
														<div
															className='tertiaryMobileItem'
															onClick={closeMobileMenu}
														>
															Bowls
														</div>
													</Link>
													<Link to='/burgers'>
														<div
															className='tertiaryMobileItem'
															onClick={closeMobileMenu}
														>
															Burgers
														</div>
													</Link>
													{/* <div className='tertiaryMobileItem'>Casseroles</div> */}
													{/* <div className='tertiaryMobileItem'>Condiments</div> */}
													{/* <div className='tertiaryMobileItem'>
														Dressings & Vinaigrettes
													</div> */}
													{/* <div className='tertiaryMobileItem'>Ice Cream</div> */}
													<Link to='/onePotOrSkillet'>
														<div
															className='tertiaryMobileItem'
															onClick={closeMobileMenu}
														>
															One-Pot & Skillet
														</div>
													</Link>
													<Link to='/pastaDishes'>
														<div
															className='tertiaryMobileItem'
															onClick={closeMobileMenu}
														>
															Pasta Dishes
														</div>
													</Link>
													<Link to='/pizza'>
														<div
															className='tertiaryMobileItem'
															onClick={closeMobileMenu}
														>
															Pizza
														</div>
													</Link>
													<Link to='/salads'>
														<div
															className='tertiaryMobileItem'
															onClick={closeMobileMenu}
														>
															Salads
														</div>
													</Link>
													<Link to='/sandwiches'>
														<div
															className='tertiaryMobileItem'
															onClick={closeMobileMenu}
														>
															Sandwiches
														</div>
													</Link>
													<Link to='/soupStewChili'>
														<div
															className='tertiaryMobileItem'
															onClick={closeMobileMenu}
														>
															Soup, Stew, & Chili
														</div>
													</Link>
													<Link to='/tacosBurritos'>
														<div
															className='tertiaryMobileItem'
															onClick={closeMobileMenu}
														>
															Tacos
														</div>
													</Link>
												</div>
											</div>
										)}

										{/* Method Tertiary Menus */}
										{!tertiaryMethodMenuActivated && (
											<div className='secondaryMobileItem'>
												<div className='secondaryMobileTitle'>Method</div>
												<div>
													<FontAwesomeIcon
														icon={faChevronDown}
														onClick={handleTertiaryMethodMenu}
														className='chevron'
													/>
												</div>
											</div>
										)}
										{tertiaryMethodMenuActivated && (
											<div>
												<div className='secondaryMobileItem'>
													<div className='secondaryMobileTitle'>Method</div>
													<div>
														<FontAwesomeIcon
															icon={faChevronUp}
															onClick={handleTertiaryMethodMenu}
															className='chevron'
														/>
													</div>
												</div>
												<div className='tertiaryMobileMenu'>
													<div className='tertiaryMobileItem'>Baking</div>
													<div className='tertiaryMobileItem'>
														Barbeque & Grilling
													</div>
													<div className='tertiaryMobileItem'>Instant Pot</div>
													<Link to='/noCook'>
														<div
															className='tertiaryMobileItem'
															onClick={closeMobileMenu}
														>
															No-Cook
														</div>
													</Link>
													{/* <div className='tertiaryMobileItem'>Roasting</div> */}
													{/* <div className='tertiaryMobileItem'>Slow Cooker</div> */}
													<div className='tertiaryMobileItem'>Stove Top</div>
												</div>
											</div>
										)}

										{/* Diet Type Tertiary Menus */}
										{!tertiaryDietTypeMenuActivated && (
											<div className='secondaryMobileItem'>
												<div className='secondaryMobileTitle'>Diet Type</div>
												<div>
													<FontAwesomeIcon
														icon={faChevronDown}
														onClick={handleTertiaryDietTypeMenu}
														className='chevron'
													/>
												</div>
											</div>
										)}
										{tertiaryDietTypeMenuActivated && (
											<div>
												<div className='secondaryMobileItem'>
													<div className='secondaryMobileTitle'>Diet Type</div>
													<div>
														<FontAwesomeIcon
															icon={faChevronUp}
															onClick={handleTertiaryDietTypeMenu}
															className='chevron'
														/>
													</div>
												</div>
												<div className='tertiaryMobileMenu'>
													<Link to='/dairyFree'>
														<div
															className='tertiaryMobileItem'
															onClick={closeMobileMenu}
														>
															Dairy-Free
														</div>
													</Link>
													{/* <div className='tertiaryMobileItem'>
														Diabetic-Friendly
													</div> */}
													<Link to='/glutenFree'>
														<div
															className='tertiaryMobileItem'
															onClick={closeMobileMenu}
														>
															Gluten-Free
														</div>
													</Link>
													{/* <div className='tertiaryMobileItem'>Keto</div> */}
													<Link to='/lowCarb'>
														<div
															className='tertiaryMobileItem'
															onClick={closeMobileMenu}
														>
															Low-Carb
														</div>
													</Link>
													<Link to='/paleo'>
														<div
															className='tertiaryMobileItem'
															onClick={closeMobileMenu}
														>
															Paleo
														</div>
													</Link>
													<Link to='/plantBased'>
														<div
															className='tertiaryMobileItem'
															onClick={closeMobileMenu}
														>
															Plant-Base
														</div>
													</Link>
													<Link to='/vegetarian'>
														<div
															className='tertiaryMobileItem'
															onClick={closeMobileMenu}
														>
															Vegetarian
														</div>
													</Link>
												</div>
											</div>
										)}
										<Link to='/recipes'>
											<div
												className='secondaryMobileItem secondaryMobileTitle'
												onClick={closeMobileMenu}
											>
												Recipe Index
											</div>
										</Link>
										{/* <div className='secondaryMobileItem secondaryMobileTitle'>
											Recipe Videos
										</div> */}
									</div>
								</React.Fragment>
							)}

							{/* Meal Planning Menu Not Expanded */}
							{!secondaryMealPlanningMenuActivated && (
								<li className='mobileNavButton'>
									<Link to='/mealPlanning'>
										<div onClick={closeMobileMenu}>Meal Planning</div>
									</Link>
									<div>
										<FontAwesomeIcon
											icon={faChevronDown}
											onClick={handleSecondaryMealPlanningMenu}
											className='chevron'
										/>
									</div>
								</li>
							)}
							{/* Meal Planning Menu Expanded */}
							{secondaryMealPlanningMenuActivated && (
								<React.Fragment>
									<li className='mobileNavButton'>
										<Link to='/mealPlanning'>
											<div onClick={closeMobileMenu}>Meal Planning</div>
										</Link>
										<div>
											<FontAwesomeIcon
												icon={faChevronUp}
												onClick={handleSecondaryMealPlanningMenu}
												className='chevron'
											/>
										</div>
									</li>
									<div className='secondaryMobileMenu'>
										<Link to='mealPlanning'>
											<div
												className='secondaryMobileItem secondaryMobileTitle'
												onClick={closeMobileMenu}
											>
												Meal Plans
											</div>
										</Link>
										<Link to='lowCarb'>
											<div
												className='secondaryMobileItem secondaryMobileTitle'
												onClick={closeMobileMenu}
											>
												Low-Carb Menus
											</div>
										</Link>
										<Link to='/plantBased'>
											<div
												className='secondaryMobileItem secondaryMobileTitle'
												onClick={closeMobileMenu}
											>
												Plant-Based Menus
											</div>
										</Link>
										{/* <div className='secondaryMobileItem secondaryMobileTitle'>
											Weight Watchers Menus
										</div> */}
										{/* <div className='secondaryMobileItem secondaryMobileTitle'>
											Recipe Collections
										</div> */}
										{/* <div className='secondaryMobileItem secondaryMobileTitle'>
											Shopping Lists
										</div> */}
									</div>
								</React.Fragment>
							)}
							{/* Weight Loss Menu Not Expanded */}
							{!secondaryWeightLossMenuActivated && (
								<li className='mobileNavButton'>
									<Link to='/weightLoss'>
										<div onClick={closeMobileMenu}>Weight Loss</div>
									</Link>
									<div>
										<FontAwesomeIcon
											icon={faChevronDown}
											onClick={handleSecondaryWeightLossMenu}
											className='chevron'
										/>
									</div>
								</li>
							)}
							{/* Weight Loss Menu Expanded */}
							{secondaryWeightLossMenuActivated && (
								<React.Fragment>
									<li className='mobileNavButton'>
										<Link to='/weightLoss'>
											<div onClick={closeMobileMenu}>Weight Loss</div>
										</Link>
										<div>
											<FontAwesomeIcon
												icon={faChevronUp}
												onClick={handleSecondaryWeightLossMenu}
												className='chevron'
											/>
										</div>
									</li>
									<div className='secondaryMobileMenu'>
										{/* <div className='secondaryMobileItem secondaryMobileTitle'>
											Cleanse & Detox
										</div> */}
										{/* <div className='secondaryMobileItem secondaryMobileTitle secondaryMobileTitle'>
											How to Lose Belly Fat
										</div> */}
										<Link to='weightLoss'>
											<div
												className='secondaryMobileItem secondaryMobileTitle secondaryMobileTitle'
												onClick={closeMobileMenu}
											>
												Weight Loss Foods
											</div>
										</Link>
										{/* <div className='secondaryMobileItem secondaryMobileTitle secondaryMobileTitle'>
											Weight Loss Tips
										</div> */}
									</div>
								</React.Fragment>
							)}
							{/* Fitness Menu Not Expanded */}
							{!secondaryFitnessMenuActivated && (
								<li className='mobileNavButton'>
									<Link to='/fitness'>
										<div onClick={closeMobileMenu}>Fitness</div>
									</Link>
									<div>
										<FontAwesomeIcon
											icon={faChevronDown}
											onClick={handleSecondaryFitnessMenu}
											className='chevron'
										/>
									</div>
								</li>
							)}
							{/* Fitness Menu Expanded */}
							{secondaryFitnessMenuActivated && (
								<React.Fragment>
									<li className='mobileNavButton'>
										<Link to='/fitness'>
											<div onClick={closeMobileMenu}>Fitness</div>
										</Link>
										<div>
											<FontAwesomeIcon
												icon={faChevronUp}
												onClick={handleSecondaryFitnessMenu}
												className='chevron'
											/>
										</div>
									</li>
									<div className='secondaryMobileMenu'>
										<Link to='abAndCore'>
											<div
												className='secondaryMobileItem secondaryMobileTitle'
												onClick={closeMobileMenu}
											>
												Ab & Core
											</div>
										</Link>
										<Link to='beginners'>
											<div
												className='secondaryMobileItem secondaryMobileTitle'
												onClick={closeMobileMenu}
											>
												Beginners
											</div>
										</Link>
										{/* <div className='secondaryMobileItem secondaryMobileTitle'>
											Challenges & Plans
										</div> */}
										<Link to='/advanced'>
											<div
												className='secondaryMobileItem secondaryMobileTitle'
												onClick={closeMobileMenu}
											>
												Advanced
											</div>
										</Link>
										{/* {!tertiaryFatBlastersMenuActivated && (
											<div className='secondaryMobileItem'>
												<div className='secondaryMobileTitle'>Fat Blasters</div>
												<div>
													<FontAwesomeIcon
														icon={faChevronDown}
														onClick={handleTertiaryFatBlastersMenu}
														className='chevron'
													/>
												</div>
											</div>
										)} */}
										{/* {tertiaryFatBlastersMenuActivated && (
											<React.Fragment>
												<div className='secondaryMobileItem'>
													<div className='secondaryMobileTitle'>
														Fat Blasters
													</div>
													<div>
														<FontAwesomeIcon
															icon={faChevronUp}
															onClick={handleTertiaryFatBlastersMenu}
															className='chevron'
														/>
													</div>
												</div>
												<div className='tertiaryMobileMenu'>
													<div className='tertiaryMobileItem'>Cardio</div>
													<div className='tertiaryMobileItem'>H.I.I.T.</div>
													<div className='tertiaryMobileItem'>Tabata</div>
												</div>
											</React.Fragment>
										)} */}
										<Link to='/homeWorkouts'>
											<div
												className='secondaryMobileItem secondaryMobileTitle'
												onClick={closeMobileMenu}
											>
												Home Workouts
											</div>
										</Link>
										<Link to='/lowerBody'>
											<div
												className='secondaryMobileItem secondaryMobileTitle'
												onClick={closeMobileMenu}
											>
												Lower Body
											</div>
										</Link>
										<Link to='/upperBody'>
											<div
												className='secondaryMobileItem secondaryMobileTitle'
												onClick={closeMobileMenu}
											>
												Upper Body
											</div>
										</Link>

										{/* Lower Body Menu Collapsed */}
										{/* {!tertiaryLowerBodyMenuActivated && (
											<div className='secondaryMobileItem'>
												<div className='secondaryMobileTitle'>Lower Body</div>
												<div>
													<FontAwesomeIcon
														icon={faChevronDown}
														onClick={handleTertiaryLowerBodyMenu}
														className='chevron'
													/>
												</div>
											</div>
										)} */}
										{/* Lower Body Menu Expanded */}
										{/* {tertiaryLowerBodyMenuActivated && (
											<React.Fragment>
												<div className='secondaryMobileItem'>
													<div className='secondaryMobileTitle'>Lower Body</div>
													<div>
														<FontAwesomeIcon
															icon={faChevronUp}
															onClick={handleTertiaryLowerBodyMenu}
															className='chevron'
														/>
													</div>
												</div>
												<div className='tertiaryMobileMenu'>
													<div className='tertiaryMobileItem'>Butt</div>
													<div className='tertiaryMobileItem'>Leg</div>
												</div>
											</React.Fragment>
										)} */}

										{/* Upper Body Menu Collapsed */}
										{/* {!tertiaryUpperBodyMenuActivated && (
											<div className='secondaryMobileItem'>
												<div className='secondaryMobileTitle'>Upper Body</div>
												<div>
													<FontAwesomeIcon
														icon={faChevronDown}
														onClick={handleTertiaryUpperBodyMenu}
														className='chevron'
													/>
												</div>
											</div>
										)} */}
										{/* Upper Body Menu Expanded */}
										{/* {tertiaryUpperBodyMenuActivated && (
											<React.Fragment>
												<div className='secondaryMobileItem'>
													<div className='secondaryMobileTitle'>Upper Body</div>
													<div>
														<FontAwesomeIcon
															icon={faChevronUp}
															onClick={handleTertiaryUpperBodyMenu}
															className='chevron'
														/>
													</div>
												</div>
												<div className='tertiaryMobileMenu'>
													<div className='tertiaryMobileItem'>Arm</div>
													<div className='tertiaryMobileItem'>Back</div>
													<div className='tertiaryMobileItem'>Chest</div>
												</div>
											</React.Fragment>
										)} */}
										<Link to='/totalBody'>
											<div
												className='secondaryMobileItem secondaryMobileTitle'
												onClick={closeMobileMenu}
											>
												Total Body
											</div>
										</Link>
										<Link to='/running'>
											<div
												className='secondaryMobileItem secondaryMobileTitle'
												onClick={closeMobileMenu}
											>
												Running
											</div>
										</Link>
									</div>
								</React.Fragment>
							)}

							{/* Self Care Menu Not Expanded */}
							{/* {!secondarySelfCareMenuActivated && (
								<li className='mobileNavButton'>
									<Link to='/selfCare'>
										<div onClick={closeMobileMenu}>Self Care</div>
									</Link>
									<div>
										<FontAwesomeIcon
											icon={faChevronDown}
											onClick={handleSecondarySelfCareMenu}
											className='chevron'
										/>
									</div>
								</li>
							)} */}
							{/* Self Care Menu Expanded */}
							{/* {secondarySelfCareMenuActivated && (
								<React.Fragment>
									<li className='mobileNavButton'>
										<Link to='/selfCare'>
											<div onClick={closeMobileMenu}>Self Care</div>
										</Link>
										<div>
											<FontAwesomeIcon
												icon={faChevronUp}
												onClick={handleSecondarySelfCareMenu}
												className='chevron'
											/>
										</div>
									</li>
									<div className='secondaryMobileMenu'>
										<div className='secondaryMobileItem secondaryMobileTitle'>
											Beauty
										</div>
										<div className='secondaryMobileItem secondaryMobileTitle'>
											DIY
										</div>
										<div className='secondaryMobileItem secondaryMobileTitle'>
											Fitness Tips
										</div>
										<div className='secondaryMobileItem secondaryMobileTitle'>
											Healthy Eating
										</div>
										<div className='secondaryMobileItem secondaryMobileTitle'>
											Yoga
										</div>
									</div>
								</React.Fragment>
							)} */}

							<Link to='/selfCare'>
								<li
									id='mobileShop'
									className='mobileNavButton'
									onClick={closeMobileMenu}
								>
									Self Care
								</li>
							</Link>
							<Link to='/shop'>
								<li
									id='mobileShop'
									className='mobileNavButton'
									onClick={closeMobileMenu}
								>
									Shop
								</li>
							</Link>
							<Link to='/search'>
								<li
									id='mobileSearch'
									className='mobileNavButton'
									onClick={closeMobileMenu}
								>
									Search
								</li>
							</Link>
							{/* <li id='mobileSignUp' className='mobileNavButton'>
								Sign Up
							</li>
							<li id='mobileLogIn' className='mobileNavButton'>
								Log In
							</li> */}
						</ul>
					</React.Fragment>
				)}
			</div>
		</div>
	);
};

export default Navbar;
