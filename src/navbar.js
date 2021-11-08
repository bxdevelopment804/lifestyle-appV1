import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars,
  faChevronDown,
  faChevronUp,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

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

  // const [tertiaryMobileMenuActivated, setTertiaryMobileMenuActivated] =
  //   useState(false);
  // const handleTertiaryMobileMenu = () => {
  //   setTertiaryMobileMenuActivated(!tertiaryMobileMenuActivated);
  // };

  return (
    <div>
      <div id='container'>
        <div /*id='logoDiv' className='navButton'*/>
          <Link to='/' /*className='navButton'*/>
            <img
              id='logo'
              src='https://thumbs.dreamstime.com/b/healthy-lifestyle-vector-illustration-letters-banner-colorful-badge-illustration-white-background-healthy-lifestyle-stylized-165923548.jpg'
            />
          </Link>
          {/* LOGO AREA */}
        </div>
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
                <li className='recipeSubItem'>Appetizers</li>
                <li className='recipeSubItem'>Breakfast</li>
                <li className='recipeSubItem'>Lunch</li>
                <li className='recipeSubItem'>Dinner</li>
                <li className='recipeSubItem'>Dessert</li>
                <li className='recipeSubItem'>Drinks</li>
                <li className='recipeSubItem'>Sides</li>
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
                <li className='recipeSubItem'>Bowls</li>
                <li className='recipeSubItem'>Burgers</li>
                <li className='recipeSubItem'>Casseroles</li>
                <li className='recipeSubItem'>Condiments</li>
                <li className='recipeSubItem'>Dressings & Vinaigrettes</li>
                <li className='recipeSubItem'>Ice Cream</li>
                <li className='recipeSubItem'>One-Pot & Skillet</li>
                <li className='recipeSubItem'>Pasta Dishes</li>
                <li className='recipeSubItem'>Pizza</li>
                <li className='recipeSubItem'>Salads</li>
                <li className='recipeSubItem'>Sandwiches</li>
                <li className='recipeSubItem'>Soup, Stew, & Chili</li>
                <li className='recipeSubItem'>Tacos</li>
              </ul>
            </li>
            <li className='recipeMenuItem'>
              Method
              <FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon>
              <ul id='recipeSubTypes'>
                <li className='recipeSubItem'>Baking</li>
                <li className='recipeSubItem'>Barbeque & Grilling</li>
                <li className='recipeSubItem'>Instant Pot</li>
                <li className='recipeSubItem'>No-Cook</li>
                <li className='recipeSubItem'>Roasting</li>
                <li className='recipeSubItem'>Slow Cooker</li>
                <li className='recipeSubItem'>Stove Top</li>
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
            <li className='recipeMenuItem'>Recipe Index</li>
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
            <li className='recipeMenuItem'>Meal Plans</li>
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
              <ul id='recipeSubTypes'>
                <li className='recipeSubItem'>Cardio</li>
                <li className='recipeSubItem'>H.I.T.T</li>
                <li className='recipeSubItem'>Tabata</li>
              </ul>
            </li>
            <li className='recipeMenuItem'>Home Workouts</li>
            <li className='recipeMenuItem'>
              Lower Body
              <FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon>
              <ul id='recipeSubTypes'>
                <li className='recipeSubItem'>Butt</li>
                <li className='recipeSubItem'>Leg</li>
              </ul>
            </li>
            <li className='recipeMenuItem'>
              Upper Body
              <FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon>
              <ul id='recipeSubTypes'>
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
          <Link
            to='/shop'
            className='navLink'
            style={{ textDecoration: 'none' }}
          >
            Shop
          </Link>
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
          <div id='mobile-menu' onClick={handleMobileMenu}>
            <FontAwesomeIcon icon={faBars} className='barsIcon' />
          </div>
        )}
        {mobileMenuActivated == true && (
          <React.Fragment>
            <div id='mobile-menu' onClick={handleMobileMenu}>
              <FontAwesomeIcon icon={faTimes} className='closeIcon' />
            </div>
            <ul id='mobileNavButtonList'>
              <Link to='/recipes'>
                <li className='mobileNavButton'>
                  <div>Recipes</div>
                  <div>
                    <FontAwesomeIcon
                      icon={faChevronDown}
                      onClick={handleSecondaryRecipeMenu}
                    />
                  </div>
                </li>
              </Link>
              {secondaryRecipeMenuActivated && (
                <div className='secondaryMobileMenu'>
                  {/* Meal Type Tertiary Menus */}
                  {!tertiaryMealTypeMenuActivated && (
                    <div className='secondaryMobileItem'>
                      <div>Meal Type</div>
                      <div>
                        <FontAwesomeIcon
                          icon={faChevronDown}
                          onClick={handleTertiaryMealTypeMenu}
                        />
                      </div>
                    </div>
                  )}
                  {tertiaryMealTypeMenuActivated && (
                    <div>
                      <div className='secondaryMobileItem'>
                        <div>Meal Type</div>
                        <div>
                          <FontAwesomeIcon
                            icon={faChevronUp}
                            onClick={handleTertiaryMealTypeMenu}
                          />
                        </div>
                      </div>
                      <div className='tertiaryMobileMenu'>
                        <div className='tertiaryMobileItem'>Appetizers</div>
                        <div className='tertiaryMobileItem'>Breakfast</div>
                        <div className='tertiaryMobileItem'>Lunch</div>
                        <div className='tertiaryMobileItem'>Dinner</div>
                        <div className='tertiaryMobileItem'>Dessert</div>
                        <div className='tertiaryMobileItem'>Drinks</div>
                        <div className='tertiaryMobileItem'>Sides</div>
                        <div className='tertiaryMobileItem'>Snacks</div>
                        <div className='tertiaryMobileItem'>Dog Recipes</div>
                        <div className='tertiaryMobileItem'>Holidays</div>
                      </div>
                    </div>
                  )}

                  {/* Dish Type Tertiary Menus */}
                  {!tertiaryDishTypeMenuActivated && (
                    <div className='secondaryMobileItem'>
                      <div>Dish Type</div>
                      <div>
                        <FontAwesomeIcon
                          icon={faChevronDown}
                          onClick={handleTertiaryDishTypeMenu}
                        />
                      </div>
                    </div>
                  )}
                  {tertiaryDishTypeMenuActivated && (
                    <div>
                      <div className='secondaryMobileItem'>
                        <div>Dish Type</div>
                        <div>
                          <FontAwesomeIcon
                            icon={faChevronUp}
                            onClick={handleTertiaryDishTypeMenu}
                          />
                        </div>
                      </div>
                      <div className='tertiaryMobileMenu'>
                        <div className='tertiaryMobileItem'>Baked Goods</div>
                        <div className='tertiaryMobileItem'>Bowls</div>
                        <div className='tertiaryMobileItem'>Burgers</div>
                        <div className='tertiaryMobileItem'>Casseroles</div>
                        <div className='tertiaryMobileItem'>Condiments</div>
                        <div className='tertiaryMobileItem'>
                          Dressings & Vinaigrettes
                        </div>
                        <div className='tertiaryMobileItem'>Ice Cream</div>
                        <div className='tertiaryMobileItem'>
                          One-Pot & Skillet
                        </div>
                        <div className='tertiaryMobileItem'>Pasta Dishes</div>
                        <div className='tertiaryMobileItem'>Pizza</div>
                        <div className='tertiaryMobileItem'>Salads</div>
                        <div className='tertiaryMobileItem'>Sandwiches</div>
                        <div className='tertiaryMobileItem'>
                          Soup, Stew, & Chili
                        </div>
                        <div className='tertiaryMobileItem'>Tacos</div>
                      </div>
                    </div>
                  )}

                  {/* Method Tertiary Menus */}
                  {!tertiaryMethodMenuActivated && (
                    <div className='secondaryMobileItem'>
                      <div>Method</div>
                      <div>
                        <FontAwesomeIcon
                          icon={faChevronDown}
                          onClick={handleTertiaryMethodMenu}
                        />
                      </div>
                    </div>
                  )}
                  {tertiaryMethodMenuActivated && (
                    <div>
                      <div className='secondaryMobileItem'>
                        <div>Method</div>
                        <div>
                          <FontAwesomeIcon
                            icon={faChevronUp}
                            onClick={handleTertiaryMethodMenu}
                          />
                        </div>
                      </div>
                      <div className='tertiaryMobileMenu'>
                        <div className='tertiaryMobileItem'>Baking</div>
                        <div className='tertiaryMobileItem'>
                          Barbeque & Grilling
                        </div>
                        <div className='tertiaryMobileItem'>Instant Pot</div>
                        <div className='tertiaryMobileItem'>No-Cook</div>
                        <div className='tertiaryMobileItem'>Roasting</div>
                        <div className='tertiaryMobileItem'>Slow Cooker</div>
                        <div className='tertiaryMobileItem'>Stove Top</div>
                      </div>
                    </div>
                  )}

                  {/* Diet Type Tertiary Menus */}
                  {!tertiaryDietTypeMenuActivated && (
                    <div className='secondaryMobileItem'>
                      <div>Diet Type</div>
                      <div>
                        <FontAwesomeIcon
                          icon={faChevronDown}
                          onClick={handleTertiaryDietTypeMenu}
                        />
                      </div>
                    </div>
                  )}
                  {tertiaryDietTypeMenuActivated && (
                    <div>
                      <div className='secondaryMobileItem'>
                        <div>Diet Type</div>
                        <div>
                          <FontAwesomeIcon
                            icon={faChevronUp}
                            onClick={handleTertiaryDietTypeMenu}
                          />
                        </div>
                      </div>
                      <div className='tertiaryMobileMenu'>
                        <div className='tertiaryMobileItem'>Dairy-Free</div>
                        <div className='tertiaryMobileItem'>
                          Diabetic-Friendly
                        </div>
                        <div className='tertiaryMobileItem'>Gluten-Free</div>
                        <div className='tertiaryMobileItem'>Keto</div>
                        <div className='tertiaryMobileItem'>Low-Carb</div>
                        <div className='tertiaryMobileItem'>Paleo</div>
                        <div className='tertiaryMobileItem'>Plant-Base</div>
                        <div className='tertiaryMobileItem'>Vegetarian</div>
                      </div>
                    </div>
                  )}

                  <div>Recipe Index</div>
                  <div>Recipe Videos</div>
                </div>
              )}
              <Link to='/mealPlanning'>
                <li className='mobileNavButton'>
                  <div>Meal Planning</div>
                  <div>
                    <FontAwesomeIcon
                      icon={faChevronDown}
                      onClick={setSecondaryMealPlanningMenuActivated}
                    />
                  </div>
                </li>
              </Link>

              {/* ------------------- */}
              {/* Stopping Point - 11/4/21 */}
              {/* ------------------- */}

              {/* {secondaryMealPlanningMenuActivated && (
                <div className='secondaryMobileMenu'>
                  <div className='secondaryMobileItem'>
                    <div>Meal Planning #1</div>
                    <div>Meal Planning #2</div>
                    <div>Meal Planning #3</div>
                  </div>
                </div>
              )} */}
              <Link to='/weightLoss'>
                <li className='mobileNavButton'>
                  <div>Weight Loss</div>
                  <div>
                    <FontAwesomeIcon icon={faChevronDown} />
                  </div>
                </li>
              </Link>
              <Link to='/fitness'>
                <li className='mobileNavButton'>
                  <div>Fitness</div>
                  <div>
                    <FontAwesomeIcon icon={faChevronDown} />
                  </div>
                </li>
              </Link>
              <Link to='/selfCare'>
                <li className='mobileNavButton'>
                  <div>Self Care</div>
                  <div>
                    <FontAwesomeIcon icon={faChevronDown} />
                  </div>
                </li>
              </Link>
              <Link to='/shop'>
                <li id='mobileShop' className='mobileNavButton'>
                  Shop
                </li>
              </Link>
              <li id='mobileSearch' className='mobileNavButton'>
                Search
              </li>
              <li id='mobileSignUp' className='mobileNavButton'>
                Sign Up
              </li>
              <li id='mobileLogIn' className='mobileNavButton'>
                Log In
              </li>
            </ul>
          </React.Fragment>
        )}
      </div>
    </div>
  );
};

export default Navbar;
