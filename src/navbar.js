import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faBars,
	faChevronDown,
	faChevronUp,
	faTimes,
	faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

import './navbar.css';

const Navbar = () => {
	//MAIN MENU CLICKAWAY HANDLER
	function useMainMenuVisible(initialIsMainVisible) {
		const [isMainMenuVisible, setIsMainMenuVisible] =
			useState(initialIsMainVisible);
		const mainRef = useRef(null);

		const handleMainClickOutside = (event) => {
			if (mainRef.current && !mainRef.current.contains(event.target)) {
				closeMainMenu();
			}
		};

		useEffect(() => {
			document.addEventListener('click', handleMainClickOutside, true);
			return () => {
				document.removeEventListener('click', handleMainClickOutside, true);
			};
		}, []);

		return { mainRef, isMainMenuVisible, setIsMainMenuVisible };
	}

	//State needed purely for the above clickaway hook to function.
	const { mainRef, isMainMenuVisible } = useMainMenuVisible(true);

	//State for hiding and showing the entire mobile dropdown menu
	const [mainMenuActivated, setMainMenuActivated] = useState(false);
	const handleMainMenu = () => {
		setMainMenuActivated(!mainMenuActivated);
	};

	//State for hiding and showing the second levels of the main dropdown menu
	const [secondaryRecipeMainMenuActivated, setSecondaryRecipeMainMenuActivated] =
		useState(false);
	const handleSecondaryRecipeMainMenu = () => {
		setSecondaryRecipeMainMenuActivated(!secondaryRecipeMainMenuActivated);
	};

	const [
		secondaryMealPlanningMainMenuActivated,
		setSecondaryMealPlanningMainMenuActivated,
	] = useState(false);
	const handleSecondaryMealPlanningMainMenu = () => {
		setSecondaryMealPlanningMainMenuActivated(!secondaryMealPlanningMainMenuActivated);
	};

	const [
		secondaryWeightLossMainMenuActivated,
		setSecondaryWeightLossMainMenuActivated,
	] = useState(false);
	const handleSecondaryWeightLossMainMenu = () => {
		setSecondaryWeightLossMainMenuActivated(!secondaryWeightLossMainMenuActivated);
	};

	const [secondaryFitnessMainMenuActivated, setSecondaryFitnessMainMenuActivated] =
		useState(false);
	const handleSecondaryFitnessMainMenu = () => {
		setSecondaryFitnessMainMenuActivated(!secondaryFitnessMainMenuActivated);
	};

	//State for hiding and showing the third levels of the mobile dropdown menu
	const [tertiaryMealTypeMainMenuActivated, setTertiaryMealTypeMainMenuActivated] =
		useState(false);
	const handleTertiaryMealTypeMainMenu = () => {
		setTertiaryMealTypeMainMenuActivated(!tertiaryMealTypeMainMenuActivated);
	};

	const [tertiaryDishTypeMainMenuActivated, setTertiaryDishTypeMainMenuActivated] =
		useState(false);
	const handleTertiaryDishTypeMainMenu = () => {
		setTertiaryDishTypeMainMenuActivated(!tertiaryDishTypeMainMenuActivated);
	};

	const [tertiaryMethodMainMenuActivated, setTertiaryMethodMainMenuActivated] =
		useState(false);
	const handleTertiaryMethodMainMenu = () => {
		setTertiaryMethodMainMenuActivated(!tertiaryMethodMainMenuActivated);
	};

	const [tertiaryDietTypeMainMenuActivated, setTertiaryDietTypeMainMenuActivated] =
		useState(false);
	const handleTertiaryDietTypeMainMenu = () => {
		setTertiaryDietTypeMainMenuActivated(!tertiaryDietTypeMainMenuActivated);
	};

	// //Close all main menus and submenus
	const closeMainMenu = () => {
		setMainMenuActivated(false);
		setSecondaryRecipeMainMenuActivated(false);
		setSecondaryMealPlanningMainMenuActivated(false);
		setSecondaryWeightLossMainMenuActivated(false);
		setSecondaryFitnessMainMenuActivated(false);
		setTertiaryMealTypeMainMenuActivated(false);
		setTertiaryDishTypeMainMenuActivated(false);
		setTertiaryMethodMainMenuActivated(false);
		setTertiaryDietTypeMainMenuActivated(false);
	};

	//Mobile menu clickaway handler
	function useMobileMenuVisible(initialIsVisible) {
		const [isMobileMenuVisible, setIsMobileMenuVisible] =
			useState(initialIsVisible);
		const ref = useRef(null);

		const handleClickOutside = (event) => {
			if (ref.current && !ref.current.contains(event.target)) {
				closeMobileMenu();
			}
		};

		useEffect(() => {
			document.addEventListener('click', handleClickOutside, true);
			return () => {
				document.removeEventListener('click', handleClickOutside, true);
			};
		}, []);

		return { ref, isMobileMenuVisible, setIsMobileMenuVisible };
	}

	//State needed purely for the above clickaway hook to function.
	const { ref, isMobileMenuVisible } = useMobileMenuVisible(true);

	//State for hiding and showing the entire mobile dropdown menu
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

	//Close all menus and submenus
	const closeMobileMenu = () => {
		setMobileMenuActivated(false);
		setSecondaryRecipeMenuActivated(false);
		setSecondaryMealPlanningMenuActivated(false);
		setSecondaryWeightLossMenuActivated(false);
		setSecondaryFitnessMenuActivated(false);
		setTertiaryMealTypeMenuActivated(false);
		setTertiaryDishTypeMenuActivated(false);
		setTertiaryMethodMenuActivated(false);
		setTertiaryDietTypeMenuActivated(false);
	};

	return (
		<div>
			<div id='container'>
				<div>
					<Link to='/'>
						<img
							id='logo'
							src='https://thumbs.dreamstime.com/b/healthy-lifestyle-vector-illustration-letters-banner-colorful-badge-illustration-white-background-healthy-lifestyle-stylized-165923548.jpg'
							alt='Healthy Lifestyle Logo'
						/>
					</Link>
				</div>

				{/* Full Screen Nav Menu */}
				<div 
					id='recipes' 
					className='navButton'
				>
					<Link
						to='/recipes'
						className='navLink'
						style={{ textDecoration: 'none' }}
						onClick={closeMainMenu}
						onMouseEnter={() => setSecondaryRecipeMainMenuActivated(true)}
						onKeyDown={closeMainMenu}
					>
							Recipes &nbsp;
							<FontAwesomeIcon icon={faChevronDown} className='mainChevron'/>
					</Link>

					{secondaryRecipeMainMenuActivated && (
						<ul id='recipeTypes' className='menuType'>
							<li className='recipeMenuItem'>
								Meal Type
								<FontAwesomeIcon icon={faChevronRight} />
								<ul id='recipeSubTypes'>
									<Link to='/appetizers' onClick={() => closeMainMenu()}>
										<li className='recipeSubItem'>Appetizers</li>
									</Link>
									<Link to='/breakfast' onClick={() => closeMainMenu()}>
										<li className='recipeSubItem'>Breakfast</li>
									</Link>
									<Link to='/lunch' onClick={() => closeMainMenu()}>
										<li className='recipeSubItem'>Lunch</li>
									</Link>
									<Link to='/dinner' onClick={() => closeMainMenu()}>
										<li className='recipeSubItem'>Dinner</li>
									</Link>
									<Link to='/dessert' onClick={() => closeMainMenu()}>
										<li className='recipeSubItem'>Dessert</li>
									</Link>
									<Link to='/sides' onClick={() => closeMainMenu()}>
										<li className='recipeSubItem'>Sides</li>
									</Link>
								</ul>
							</li>
							<li className='recipeMenuItem'>
								Dish Type
								<FontAwesomeIcon icon={faChevronRight} className='mainChevron'></FontAwesomeIcon>
								<ul id='recipeSubTypes'>
									<Link to='/bowls' onClick={() => closeMainMenu()}>
										<li className='recipeSubItem'>Bowls</li>
									</Link>
									<Link to='/burgers' onClick={() => closeMainMenu()}>
										<li className='recipeSubItem'>Burgers</li>
									</Link>
									<Link to='/onePotOrSkillet' onClick={() => closeMainMenu()}>
										<li className='recipeSubItem'>One-Pot & Skillet</li>
									</Link>
									<Link to='/pastaDishes' onClick={() => closeMainMenu()}>
										<li className='recipeSubItem'>Pasta Dishes</li>
									</Link>
									<Link to='/pizza' onClick={() => closeMainMenu()}>
										<li className='recipeSubItem'>Pizza</li>
									</Link>
									<Link to='/salads' onClick={() => closeMainMenu()}>
										<li className='recipeSubItem'>Salads</li>
									</Link>
									<Link to='/sandwiches' onClick={() => closeMainMenu()}>
										<li className='recipeSubItem'>Sandwiches</li>
									</Link>
									<Link to='/soupStewChili' onClick={() => closeMainMenu()}>
										<li className='recipeSubItem'>Soup, Stew, & Chili</li>
									</Link>
									<Link to='/tacosBurritos' onClick={() => closeMainMenu()}>
										<li className='recipeSubItem'>Tacos & Burritos</li>
									</Link>
								</ul>
							</li>
							<li className='recipeMenuItem'>
								Method
								<FontAwesomeIcon icon={faChevronRight} />
								<ul id='recipeSubTypes'>
									<Link to='/baking' onClick={() => closeMainMenu()}>
										<li className='recipeSubItem'>Baking</li>
									</Link>
									<Link to='/bbqGrilling' onClick={() => closeMainMenu()}>
										<li className='recipeSubItem'>Barbeque & Grilling</li>
									</Link>
									<Link to='/instapot' onClick={() => closeMainMenu()}>
										<li className='recipeSubItem'>Instant Pot</li>
									</Link>
									<Link to='/noCook' onClick={() => closeMainMenu()}>
										<li className='recipeSubItem'>No-Cook</li>
									</Link>
									<Link to='/stoveTop' onClick={() => closeMainMenu()}>
										<li className='recipeSubItem'>Stove Top</li>
									</Link>
								</ul>
							</li>
							<li className='recipeMenuItem'>
								Diet Type
								<FontAwesomeIcon icon={faChevronRight} />
								<ul id='recipeSubTypes'>
									<Link to='/dairyFree' onClick={() => closeMainMenu()}>
										<li className='recipeSubItem'>Dairy-Free</li>
									</Link>
									<Link to='/glutenFree' onClick={() => closeMainMenu()}>
										<li className='recipeSubItem'>Gluten-Free</li>
									</Link>
									<Link to='/lowCarb' onClick={() => closeMainMenu()}>
										<li className='recipeSubItem'>Low-Carb</li>
									</Link>
									<Link to='/paleo' onClick={() => closeMainMenu()}>
										<li className='recipeSubItem'>Paleo</li>
									</Link>
									<Link to='/plantBased' onClick={() => closeMainMenu()}>
										<li className='recipeSubItem'>Plant-Based</li>
									</Link>
									<Link to='/vegetarian' onClick={() => closeMainMenu()}>
										<li className='recipeSubItem'>Vegetarian</li>
									</Link>
								</ul>
							</li>
							<Link to='/recipes' onClick={() => closeMainMenu()}>
								<li className='recipeMenuItem'>Recipe Index</li>
							</Link>
						</ul>
					)}
				</div>
				<div 
					id='meal-planning' 
					className='navButton'
					onClick={closeMainMenu}
					onMouseEnter={() => setSecondaryMealPlanningMainMenuActivated(true)}
				>
					<Link
						to='/mealPlanning'
						className='navLink'
						style={{ textDecoration: 'none' }}
					>
						Meal Planning &nbsp;
						<FontAwesomeIcon icon={faChevronDown} className='mainChevron'></FontAwesomeIcon>
					</Link>
					{secondaryMealPlanningMainMenuActivated && (
						<ul id='recipeTypes' className='menuType'>
							<Link to='mealPlanning' onClick={() => closeMainMenu()}>
								<li className='recipeMenuItem'>Meal Plans</li>
							</Link>
							<Link to='lowCarb' onClick={() => closeMainMenu()}>
								<li className='recipeMenuItem'>Low-Carb Menus</li>
							</Link>
							<Link to='/plantBased' onClick={() => closeMainMenu()}>
								<li className='recipeMenuItem'>Plant-Based Menus</li>
							</Link>
						</ul>
					)}
				</div>
				<div 
					id='weight-loss' 
					className='navButton'
					onClick={closeMainMenu}
					onMouseEnter={() => setSecondaryWeightLossMainMenuActivated(true)}
				>
					<Link
						to='/weightLoss'
						className='navLink'
						style={{ textDecoration: 'none' }}
					>
						Weight Loss &nbsp;
						<FontAwesomeIcon icon={faChevronDown} className='mainChevron'></FontAwesomeIcon>
					</Link>
					{secondaryWeightLossMainMenuActivated && (
						<ul id='weightLossRecipeTypes' className='menuType'>
							<Link to='weightLoss' onClick={() => closeMainMenu()}>
								<li className='recipeMenuItem'>Weight Loss Foods</li>
							</Link>
						</ul>
					)}
				</div>
				<div id='fitness' className='navButton'>
					<Link
						to='/fitness'
						className='navLink'
						style={{ textDecoration: 'none' }}
						onClick={closeMainMenu}
						onMouseEnter={() => setSecondaryFitnessMainMenuActivated(true)}
					>
						Fitness&nbsp;
						<FontAwesomeIcon icon={faChevronDown} className='mainChevron fitnessChevron'></FontAwesomeIcon>
					</Link>
					{secondaryFitnessMainMenuActivated && ( 
						<ul id='recipeTypes' className='menuType'>
							<Link to='abAndCore' onClick={() => closeMainMenu()}>
								<li className='recipeMenuItem'>Ab & Core</li>
							</Link>
							<Link to='/beginners' onClick={() => closeMainMenu()}>
								<li className='recipeMenuItem'>Beginners</li>
							</Link>
							<Link to='/advanced' onClick={() => closeMainMenu()}>
								<li className='recipeMenuItem'>Advanced</li>
							</Link>
							<Link to='/homeWorkouts' onClick={() => closeMainMenu()}>
								<li className='recipeMenuItem'>Home Workouts</li>
							</Link>
							<Link to='/lowerBody' onClick={() => closeMainMenu()}>
								<li className='recipeMenuItem'>Lower Body</li>
							</Link>
							<Link to='/upperBody' onClick={() => closeMainMenu()}>
								<li className='recipeMenuItem'>Upper Body</li>
							</Link>
							<Link to='/totalBody' onClick={() => closeMainMenu()}>
								<li className='recipeMenuItem'>Total Body</li>
							</Link>
							<Link to='/running' onClick={() => closeMainMenu()}>
								<li className='recipeMenuItem'>Running</li>
							</Link>
						</ul>
					)}
				</div>
				<div id='self-care' className='navButton'>
					<Link
						to='/selfCare'
						className='navLink'
						style={{ textDecoration: 'none' }}
					>
						Self Care
					</Link>
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

				{/* Mobile Nav Menu */}
				{!mobileMenuActivated && (
					<div id='mobile-menu' onClick={handleMobileMenu}>
						<FontAwesomeIcon icon={faBars} className='barsIcon' />
					</div>
				)}
				{mobileMenuActivated && (
					<div>
						<div id='mobile-menu' onClick={handleMobileMenu}>
							<FontAwesomeIcon icon={faTimes} className='closeIcon' />
						</div>
						<div ref={ref}>
							{isMobileMenuVisible && (
								<div>
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
															<div className='secondaryMobileTitle'>
																Meal Type
															</div>
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
																<div className='secondaryMobileTitle'>
																	Meal Type
																</div>
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
																<Link to='/sides'>
																	<div
																		className='tertiaryMobileItem'
																		onClick={closeMobileMenu}
																	>
																		Sides
																	</div>
																</Link>
															</div>
														</div>
													)}

													{/* Dish Type Tertiary Menus */}
													{!tertiaryDishTypeMenuActivated && (
														<div className='secondaryMobileItem'>
															<div className='secondaryMobileTitle'>
																Dish Type
															</div>
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
																<div className='secondaryMobileTitle'>
																	Dish Type
																</div>
																<div>
																	<FontAwesomeIcon
																		icon={faChevronUp}
																		onClick={handleTertiaryDishTypeMenu}
																		className='chevron'
																	/>
																</div>
															</div>
															<div className='tertiaryMobileMenu'>
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
																<div className='secondaryMobileTitle'>
																	Method
																</div>
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
																<div className='tertiaryMobileItem'>
																	Instant Pot
																</div>
																<Link to='/noCook'>
																	<div
																		className='tertiaryMobileItem'
																		onClick={closeMobileMenu}
																	>
																		No-Cook
																	</div>
																</Link>
																<div className='tertiaryMobileItem'>
																	Stove Top
																</div>
															</div>
														</div>
													)}

													{/* Diet Type Tertiary Menus */}
													{!tertiaryDietTypeMenuActivated && (
														<div className='secondaryMobileItem'>
															<div className='secondaryMobileTitle'>
																Diet Type
															</div>
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
																<div className='secondaryMobileTitle'>
																	Diet Type
																</div>
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
																<Link to='/glutenFree'>
																	<div
																		className='tertiaryMobileItem'
																		onClick={closeMobileMenu}
																	>
																		Gluten-Free
																	</div>
																</Link>
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
													<Link to='weightLoss'>
														<div
															className='secondaryMobileItem secondaryMobileTitle secondaryMobileTitle'
															onClick={closeMobileMenu}
														>
															Weight Loss Foods
														</div>
													</Link>
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
													<Link to='/advanced'>
														<div
															className='secondaryMobileItem secondaryMobileTitle'
															onClick={closeMobileMenu}
														>
															Advanced
														</div>
													</Link>

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
									</ul>
								</div>
							)}
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default Navbar;
