import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import SingleSquare from '../shared/single-square';
import FiveStarRating from '../shared/fiveStarRating';
import './generalRecipeFormatting.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPrint, faStar } from '@fortawesome/free-solid-svg-icons';
import {
	faFacebook,
	faFacebookSquare,
	faInstagram,
	faPinterest,
	faPinterestSquare,
} from '@fortawesome/free-brands-svg-icons';

const HoneyDijonChicken = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const [gradeIndex, setGradeIndex] = useState(-1);

	const changeGradeIndex = (index) => {
		setGradeIndex(index);
	};

	const mealType = 'Lunch';
	const cuisineType = 'American';
	const mealTitle = 'Sheet Pan Honey Dijon Chicken';
	const altText = 'honey dijon chicken';
	const authorName = 'Taylor Stinson';
	const authorNickname = 'Taylor';
	const authorPhoto =
		'https://thegirlonbloor.com/wp-content/uploads/2021/08/Girl-on-Bloor-4-768x803.jpg';
	const authorDescription =
		"I'm Taylor Stinson, a busy city girl living in downtown Toronto. Looking to switch up your weekly meal prep routine? I've got you covered with healthy recipes and meal planning resources. Join 1.5 million other monthly readers and dive in!";
	const videoSource = 'https://www.youtube.com/embed/VevWHoZ66bI';
	const recipePhoto =
		'https://thegirlonbloor.com/wp-content/uploads/2017/09/Sheet-Pan-Honey-Mustard-Chicken-11-1300x1950.jpg';
	const recipePhoto2 =
		'https://thegirlonbloor.com/wp-content/uploads/2017/09/Sheet-Pan-Honey-Mustard-Chicken-5-1300x1950.jpg';
	const recipePhoto3 =
		'https://thegirlonbloor.com/wp-content/uploads/2017/09/Sheet-Pan-Honey-Mustard-Chicken-6-1300x1950.jpg';
	const recipeDate = 'September 26, 2017';
	const recipeDescription =
		"This Sheet Pan Honey Dijon Chicken with butternut squash is a delicious meal that comes together in 30 minutes – it's great for meal prep.";
	const recipeDescription2 =
		'This Sheet Pan Honey Dijon Chicken with butternut squash is a delicious meal that comes together in 30 minutes.';
	const title2 = 'Healthy and guilt free';
	const title3 =
		'This can also be made as a skillet dinner, though a few additional steps are required';
	const description1 =
		'One of the great things about this honey Dijon chicken is that it stores well for up to 5 days in the refrigerator, and for at least 3 months in the freezer. As a result, it is truly one of the best meal prep recipes for a busy weeknight dinner!  When you’re ready to reheat the meal, it can be done in a microwave. Although, it can make the chicken rubbery. For better results, reheat on a sheet pan covered with aluminum foil. Reheat in a preheated 400 F. oven for 15-20 minutes. Then, uncover and continue heating until the chicken is heated through to an internal temperature of 165 F.';
	const description2 =
		"I love quick and easy sheet pan meals. They seriously make me wonder why anyone would ever skip meal prep day? Literally just dump all your fave veggies on a baking sheet, add chicken and in 15 minutes you've got lunch covered from Monday to Thursday (okay, I'll let you go out for lunch on Friday hehe)";
	const prepTime = '20 mins';
	const cookTime = '15 mins';
	const totalTime = '35 mins';
	const peopleServed = '4 people';
	const keywordList = 'Lunch, Dinner, Baking';
	const keyword1 = 'Lunch';
	const keyword2 = 'Dinner';
	const keyword3 = 'Baking';
	const keyword4 = 'Meal Planning';
	const keyword5 = 'One-Pot & Skillet';

	// -------------------------
	// SCROLL DOWN TO MANUALLY ENTER INGREDIENTS, INSTRUCTIONS, ANY CALORIE INFORMATION
	// -------------------------

	return (
		<div id='pageContainer'>
			<div id='sectionTitle'>{mealType}</div>
			<div id='title'>{mealTitle}</div>
			<div id='rating'>
				<FiveStarRating
					gradeIndex={gradeIndex}
					changeGradeIndex={changeGradeIndex}
				/>
			</div>
			<div id='authorBlock'>
				<div id='authorInfo'>
					<img
						id='authorPhoto'
						className='authorPhoto'
						src={authorPhoto}
						alt='author'
						width='75px'
						height='75px'
					/>
					<div id='authorName' className='authorName'>
						by <strong>{authorName}</strong>
					</div>
				</div>
				<a href='#recipeSection'>
					<button id='recipeButton'>Jump to Recipe</button>
				</a>
			</div>
			<div id='media'>
				<FontAwesomeIcon icon={faPinterest} className='titleIcon' />
				<FontAwesomeIcon icon={faFacebook} className='titleIcon' />
				<FontAwesomeIcon icon={faEnvelope} className='titleIcon' />
			</div>
			<div id='date'>Published: {recipeDate}</div>
			<p id='description'>{recipeDescription}</p>
			<img id='image1' src={recipePhoto} alt={altText} />
			<p id='videoHeader'>OUR LATEST VIDEOS</p>

			{/*REMINDER - Remember to insert id='video1' below whenever pasting embeds from Youtube. */}
			{/* id='video1' */}
			<iframe
				id='video1'
				width='560'
				height='315'
				src={videoSource}
				title='YouTube video player'
				frameborder='0'
				allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
				allowfullscreen
			></iframe>
			<div id='title2'>{title2}</div>
			<img id='image2' src={recipePhoto2} alt={altText} />
			<p className='foodDescription'>{description1}</p>
			<div id='title3'>{title3}</div>
			<img id='image3' src={recipePhoto3} alt={altText} />
			<p className='foodDescription'>{description2}</p>
			<div id='recipeSection'>
				<div id='rating2'>
					<FiveStarRating
						gradeIndex={gradeIndex}
						changeGradeIndex={changeGradeIndex}
					/>
				</div>
				<div id='headerContainer'>
					<div id='block1' className='headerItem'>
						{mealTitle}
					</div>
					<div id='block2' class='imageContainerWithButtons'>
						<img className='headerItem' src={recipePhoto} width='100%' />
						<div id='reviewRecipe'>
							<strong id='reviewRecipeText'>Review Recipe</strong>
						</div>
						<div id='pinRecipe'>
							<strong>Pin Recipe</strong>
						</div>
						<div id='printRecipe'>
							<FontAwesomeIcon icon={faPrint} className='printIcon' />
							&nbsp;&nbsp;
							<strong>Print Recipe</strong>
						</div>
					</div>
					<div id='block3' className='headerItem'>
						{recipeDescription2}
					</div>
					<div id='block4' className='headerItem'>
						<div className='timeHeaders'>
							<strong>Prep Time</strong>
						</div>
						<div className='timeHeaders'>
							<strong>Cook Time</strong>
						</div>
						<div className='timeHeaders'>
							<strong>Total Time</strong>
						</div>
						<div className='cookTimes'>{prepTime}</div>
						<div className='cookTimes'>{cookTime}</div>
						<div className='cookTimes'>{totalTime}</div>
					</div>
					<div id='block5' className='headerItem'>
						<div className='subBlock-1'>
							<strong>Serves</strong>
						</div>
						<div className='subBlock-2'>{peopleServed}</div>
					</div>
					<div id='block6' className='headerItem'>
						<div className='subBlock-1'>
							<strong>Serving Size</strong>
						</div>
						<div className='subBlock-2'>1</div>
					</div>
					<div id='block7' className='headerItem'>
						<div className='subBlock-1'>
							<strong>Course</strong>
						</div>
						<div className='subBlock-2'>{mealType}</div>
					</div>
					<div id='block8' className='headerItem'>
						<div className='subBlock-1'>
							<strong>Cuisine</strong>
						</div>
						<div className='subBlock-2'>{cuisineType}</div>
					</div>
					<div id='block9' className='headerItem'>
						<div className='subBlock-1'>
							<strong>Author</strong>
						</div>
						<div className='subBlock-2'>
							<strong id='redAuthor'>{authorName}</strong>
						</div>
					</div>
				</div>
				<div id='instructionContainer'>
					<div id='block16' className='instructionItem'>
						Ingredients
					</div>
					<div id='block17' className='instructionItem'>
						<ul>
							<li className='ingredient'>1 lb chicken breasts, diced</li>
							<li className='ingredient'>
								1/2 head broccoli, cut into florets
							</li>
							<li className='ingredient'>
								1/2 small butternut squash, cut into chunks (I use the
								store-bought pre-cut stuff)
							</li>
							<li className='ingredient'>1 small red onion, chopped</li>
							<li className='ingredient'>1/2 red pepper, chopped</li>
							<li className='ingredient'>1 large carrot, chopped</li>
							<li className='ingredient'>1/2 cup green beans</li>
							<li className='ingredient'>2 tsp olive oil</li>
							<li className='ingredient'>1/2 tsp pepper</li>
							<li className='ingredient'>1/4 cup parsley, chopped</li>
							<li className='ingredient'>½ teaspoon smoked paprika</li>
							<li className='ingredient'>
								2-3 tbsp extra honey dijon mustard (equal parts honey and dijon
								mixed together)
							</li>
							<li className='ingredient'>2 tsp olive oil</li>
							<li className='ingredient'>2 cloves garlic minced</li>
							<li className='ingredient'>2 tbsp dijon mustard</li>
							<li className='ingredient'>2 tbsp honey</li>
							<li className='ingredient'>1/2 tsp salt</li>
						</ul>
					</div>
					<div id='block18' className='instructionItem'>
						Ad Space
					</div>
					<div id='block19' className='instructionItem'>
						Instructions
					</div>
					<div id='block20' className='instructionItem'>
						<ol id='instructionList' className='instructions'>
							<li className='instruction'>
								Preheat oven to 450 F. In a small bowl, mix together sauce
								ingredients, then pour over diced chicken. Let marinate for 10
								minutes.
							</li>
							<li className='instruction'>
								Meanwhile, chop and prepare veggies, adding to a large
								parchment-covered baking sheet and tossing in olive oil, salt
								and pepper. Add chicken and toss altogether, then bake for 15
								minutes.
							</li>
							<li className='instruction'>
								Remove from oven, garnish with parsley and drizzle with extra
								honey dijon. Serve and enjoy!
							</li>
							<li className='instruction'>
								Check the flavor, and add salt and additional seasonings to
								taste.
							</li>
							<li className='instruction'>
								In a dry nonstick skillet over medium heat, warm tortillas one
								at a time 40 seconds or until warm and pliable, turning once.
								Cover with a damp cloth to keep warm.
							</li>
							<li className='instruction'>
								Spread about 1 cup of the bean-and-veggie mixture onto each
								tortilla just below the center. Fold bottom edge of each
								tortilla over filling. Fold in opposite sides; roll up tortilla.
								Place burritos, seam sides down, on a platter. Serve warm. If
								desired, pass hot pepper sauce.
							</li>
						</ol>
					</div>
					<div id='block21' className='instructionItem'>
						Nutrition Information
					</div>
					<div id='block22' className='instructionItem'>
						<div id='nutritionList'>
							<div className='nutritionItem'>Serving: 1serving |&nbsp;</div>
							<div className='nutritionItem'>Calories: 267kcal |&nbsp;</div>
							<div className='nutritionItem'>Carbohydrates: 31g |&nbsp;</div>
							<div className='nutritionItem'>Protein: 20g |&nbsp;</div>
							<div className='nutritionItem'>Fat: 10g |&nbsp;</div>
							<div className='nutritionItem'>Saturated Fat: 2g |&nbsp;</div>
							<div className='nutritionItem'>
								Polyunsaturated Fat: 2g |&nbsp;
							</div>
							<div className='nutritionItem'>
								Monounsaturated Fat: 6g |&nbsp;
							</div>
							<div className='nutritionItem'>Cholesterol: 37mg |&nbsp;</div>
							<div className='nutritionItem'>Sodium: 318mg |&nbsp;</div>
							<div className='nutritionItem'>Potassium: 774mg |&nbsp;</div>
							<div className='nutritionItem'>Fiber: 6g |&nbsp;</div>
							<div className='nutritionItem'>Sugar: 16g |&nbsp;</div>
							<div className='nutritionItem'>Vitamin A: 11250U |&nbsp;</div>
							<div className='nutritionItem'>Vitamin C: 175.7mg |&nbsp;</div>
							<div className='nutritionItem'>Calcium: 90mg |&nbsp;</div>
							<div className='nutritionItem'>Iron: 2.2mg |&nbsp;</div>
						</div>
					</div>
					<div id='block23' className='instructionItem'>
						<strong>Keywords</strong>&nbsp; {keywordList}
					</div>
					<div id='block24' className='instructionItem'>
						<div id='instagramPlaceholder'>
							<FontAwesomeIcon icon={faInstagram} className='instagramIcon' />
						</div>
						<div id='instagramText'>
							<div>
								<strong>Have you made this recipe?</strong>
							</div>
							<div>
								Tag @healthylifestyle on Instagram or hashtag it
								#healthlylifestyle
							</div>
						</div>
					</div>
					<div id='block25' className='instructionItem'>
						For more tasty recipes and lifestyle advice, make sure to like us on
						our <strong>Facebook</strong> page and follow us on{' '}
						<strong>Pinterest</strong>!
					</div>
					<div id='block26' className='instructionItem'>
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
					</div>
					<div id='block27' className='instructionItem'>
						Share this recipe
					</div>
					<div id='block28' className='instructionItem'>
						<div id='facebookButton' className='socialMediaButtons'>
							<FontAwesomeIcon icon={faFacebookSquare} className='icon' />
							&nbsp;&nbsp;Facebook
						</div>
						<div id='pintrestButton' className='socialMediaButtons'>
							<FontAwesomeIcon icon={faPinterestSquare} className='icon' />
							&nbsp;&nbsp;Pin
						</div>
						<div id='emailButton' className='socialMediaButtons'>
							<FontAwesomeIcon icon={faEnvelope} className='icon' />
							&nbsp;&nbsp;Email
						</div>
					</div>
				</div>
				<div id='footerAuthContainer'>
					<div id='block29'>
						<img
							className='authorPhoto'
							src={authorPhoto}
							alt='author'
							width='100px'
							height='100px'
						/>
					</div>
					<div id='block30' className='footerAuthInfo'>
						{authorName}
					</div>
					<div id='block31' className='footerAuthInfo'>
						{authorDescription}
					</div>
					<div id='block32' className='footerAuthInfo'>
						More by {authorNickname}
					</div>
					<div id='block33' className='footerAuthInfo'>
						<div id='recipeKeywordList'>
							<div className='recipeKeyword'>{keyword1}</div>
							<div className='recipeKeyword'>{keyword2}</div>
							<div className='recipeKeyword'>{keyword3}</div>
							<div className='recipeKeyword'>{keyword4}</div>
							<div className='recipeKeyword'>{keyword5}</div>
						</div>
					</div>
				</div>
				<div id='block34'>Related Recipes</div>
				<div id='footerLinkContainer'>
					<div id='block35' className='footerLinks'>
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
					<div id='block36' className='footerLinks'>
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
					<div id='block37' className='footerLinks'>
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
					<div id='block38' className='footerLinks'>
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
					<div id='block39' className='footerLinks'>
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
					<div id='block40' className='footerLinks'>
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
					<div id='leaveReply' className='replyItem'>
						Leave A Reply
					</div>
					<div id='emailMessage' className='replyItem'>
						Your email address will not be published. Required fields are marked
						*
					</div>
					<div id='rating' className='replyItem'>
						<div id='rating3'>Recipe Rating</div>
						<div>
							<FiveStarRating
								gradeIndex={gradeIndex}
								changeGradeIndex={changeGradeIndex}
							/>
						</div>
					</div>
					<div id='commentText' className='replyItem'>
						Comment*
						<div id='commentBox' className='replyItem'></div>
					</div>
					<div id='nameText' className='replyItem'>
						Name*
						<div id='nameField' className='replyItem'></div>
					</div>
					<div id='emailText' className='replyItem'>
						Email*
						<div id='emailField' className='replyItem'></div>
					</div>
					<div id='postButton' className='replyItem'>
						Post Comment
					</div>
				</div>
			</div>
		</div>
	);
};

export default HoneyDijonChicken;
