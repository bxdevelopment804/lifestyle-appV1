import React, { useState } from 'react';
import {
	// BrowserRouter as Router,
	// Route,
	// Redirect,
	// Switch,
	Link,
} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faBars,
	faChevronDown,
	faTimes,
} from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

import './navbar.css';

const Navbar = () => {
	const [mobileMenuActivated, setMobileMenuActivated] = useState(false);

	const handleDropdown = () => {
		setMobileMenuActivated(!mobileMenuActivated);
	};

	return (
		<div>
			<div id='container'>
				<Link to='/'>
					<img
						id='logo'
						src='https://thumbs.dreamstime.com/b/healthy-lifestyle-vector-illustration-letters-banner-colorful-badge-illustration-white-background-healthy-lifestyle-stylized-165923548.jpg'
					/>
				</Link>
				<div id='recipes' className='navButton'>
					<Link
						to='/recipes'
						// id='recipeLink'
						className='navLink'
						style={{ textDecoration: 'none' }}
					>
						Recipes &nbsp;
						<FontAwesomeIcon icon={faChevronDown}></FontAwesomeIcon>
					</Link>
					<ul id='recipeTypes' className='menuType'>
						<li className='recipeMenuItem'>
							Meal Type
							<FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon>
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
								<li className='recipeSubItem'>Dessert</li>
								<li className='recipeSubItem'>Drinks</li>
								<Link to='/sides'>
									<li className='recipeSubItem'>Sides</li>
								</Link>
								<li className='recipeSubItem'>Snacks</li>
								<li className='recipeSubItem'>Dog Recipes</li>
								<li className='recipeSubItem'>Holidays</li>
							</ul>
						</li>
						<li className='recipeMenuItem'>
							Dish Type
							<FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon>
							<ul id='recipeSubTypes'>
								<li className='recipeSubItem'>Baked Goods</li>
								<Link to='/bowls'>
									<li className='recipeSubItem'>Bowls</li>
								</Link>
								<Link to='/burgers'>
									<li className='recipeSubItem'>Burgers</li>
								</Link>
								<li className='recipeSubItem'>Casseroles</li>
								<li className='recipeSubItem'>Condiments</li>
								<li className='recipeSubItem'>Dressings & Vinaigrettes</li>
								<li className='recipeSubItem'>Ice Cream</li>
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
							<FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon>
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
								<li className='recipeSubItem'>No-Cook</li>
								<li className='recipeSubItem'>Roasting</li>
								<li className='recipeSubItem'>Slow Cooker</li>
								<Link to='/stoveTop'>
									<li className='recipeSubItem'>Stove Top</li>
								</Link>
							</ul>
						</li>
						<li className='recipeMenuItem'>
							Diet Type
							<FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon>
							<ul id='recipeSubTypes'>
								<li className='recipeSubItem'>Dairy-Free</li>
								<li className='recipeSubItem'>Diabetic Friendly</li>
								<li className='recipeSubItem'>Gluten-Free</li>
								<li className='recipeSubItem'>Keto</li>
								<li className='recipeSubItem'>Low-Carb</li>
								<li className='recipeSubItem'>Paleo</li>
								<li className='recipeSubItem'>Plant-Based</li>
								<li className='recipeSubItem'>Vegetarian</li>
							</ul>
						</li>
						<Link to='/recipes'>
							<li className='recipeMenuItem'>Recipe Index</li>
						</Link>
						<li className='recipeMenuItem'>Recipe Videos</li>
					</ul>
				</div>
				<div id='meal-planning' className='navButton'>
					<Link
						to='/mealPlanning'
						// id='recipeLink'
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
						<li className='recipeMenuItem'>Low-Carb Menus</li>
						<li className='recipeMenuItem'>Plant-Based Menus</li>
						<li className='recipeMenuItem'>Weight Watchers Menus</li>
						<li className='recipeMenuItem'>Recipe Collections</li>
						<li className='recipeMenuItem'>Shopping Lists</li>
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
						<li className='recipeMenuItem'>Cleanse & Detox</li>
						<li className='recipeMenuItem'>How to Lose Belly Fat</li>
						<li className='recipeMenuItem'>Weight Loss Foods</li>
						<li className='recipeMenuItem'>Weight Loss Tips</li>
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
						<li className='recipeMenuItem'>Ab & Core</li>
						<li className='recipeMenuItem'>Beginners</li>
						<li className='recipeMenuItem'>Challenges & Plans</li>
						<li className='recipeMenuItem'>Advanced</li>
						<li className='recipeMenuItem'>
							Fat Blasters
							<FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon>
							<ul id='skinnyRecipeSubTypes'>
								<li className='recipeSubItem'>Cardio</li>
								<li className='recipeSubItem'>H.I.T.T</li>
								<li className='recipeSubItem'>Tabata</li>
							</ul>
						</li>
						<li className='recipeMenuItem'>Home Workouts</li>
						<li className='recipeMenuItem'>
							Lower Body
							<FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon>
							<ul id='skinnyRecipeSubTypes'>
								<li className='recipeSubItem'>Butt</li>
								<li className='recipeSubItem'>Leg</li>
							</ul>
						</li>
						<li className='recipeMenuItem'>
							Upper Body
							<FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon>
							<ul id='skinnyRecipeSubTypes'>
								<li className='recipeSubItem'>Arm</li>
								<li className='recipeSubItem'>Back</li>
								<li className='recipeSubItem'>Leg</li>
							</ul>
						</li>
						<li className='recipeMenuItem'>Total Body</li>
						<li className='recipeMenuItem'>Running</li>
					</ul>
				</div>
				<div id='self-care' className='navButton'>
					<Link
						to='/selfCare'
						className='navLink'
						style={{ textDecoration: 'none' }}
					>
						Self Care&nbsp;
						<FontAwesomeIcon icon={faChevronDown}></FontAwesomeIcon>
					</Link>
					<ul id='recipeTypes' className='menuType'>
						<li className='recipeSubItem'>Beauty</li>
						<li className='recipeSubItem'>DIY</li>
						<li className='recipeSubItem'>Fitness Tips</li>
						<li className='recipeSubItem'>Healthy Eating</li>
						<li className='recipeSubItem'>Yoga</li>
					</ul>
				</div>
				<div id='shop' className='navButton'>
					Shop
				</div>
				<div id='search' className='navButton'>
					Search
				</div>
				<div id='signup' className='navButton'>
					Sign Up
				</div>
				<div id='login' className='navButton'>
					Log In
				</div>
				{mobileMenuActivated == false && (
					<div id='mobile-menu' onClick={handleDropdown}>
						<FontAwesomeIcon icon={faBars} className='barsIcon' />
					</div>
				)}
				{mobileMenuActivated == true && (
					<div id='mobile-menu' onClick={handleDropdown}>
						{/* <FontAwesomeIcon icon={faBars} className='barsIcon' /> */}
						<FontAwesomeIcon icon={faTimes} className='closeIcon' />
					</div>
				)}
			</div>
		</div>
	);
};

export default Navbar;
