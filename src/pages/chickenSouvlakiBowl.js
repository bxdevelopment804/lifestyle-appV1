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

const ChickenSouvlakiBowl = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const [gradeIndex, setGradeIndex] = useState(-1);

	const changeGradeIndex = (index) => {
		setGradeIndex(index);
	};

	const mealType = 'Lunch';
	const cuisineType = 'Greek';
	const mealTitle = 'Meal Prep Chicken Souvlaki Bowls';
	const altText = 'chicken souvlaki bowls';
	const authorName = 'Taylor Stinson';
	const authorNickname = 'Taylor';
	const authorPhoto =
		'https://thegirlonbloor.com/wp-content/uploads/2021/08/Girl-on-Bloor-4-768x803.jpg';
	const authorDescription =
		"I'm Taylor Stinson, a busy city girl living in downtown Toronto. Looking to switch up your weekly meal prep routine? I've got you covered with healthy recipes and meal planning resources. Join 1.5 million other monthly readers and dive in!";
	const videoSource = 'https://www.youtube.com/embed/g_-VSY_jz8w';
	const recipePhoto =
		'https://thegirlonbloor.com/wp-content/uploads/2017/04/Meal-Prep-Chicken-Souvlaki-Bowls-5-1.jpg';
	const recipePhoto2 =
		'https://thegirlonbloor.com/wp-content/uploads/2017/04/Meal-Prep-Chicken-Souvlaki-Bowls-3-1.jpg';
	const recipePhoto3 =
		'https://thegirlonbloor.com/wp-content/uploads/2017/04/Meal-Prep-Chicken-Souvlaki-Bowls-1-1.jpg';
	const recipeDate = 'August 26, 2021';
	const recipeDescription =
		"These Meal Prep Chicken Souvlaki Bowls with quinoa and grilled veggies are a delicious and easy lunch idea you'll want to eat all week!";
	const recipeDescription2 =
		"These Meal Prep Chicken Souvlaki Bowls with quinoa and grilled veggies are a delicious and easy lunch idea you'll want to eat all week!";
	const title2 =
		'Grab some glass meal prep bowls if you plan on turning this recipe into leftovers';
	const title3 =
		'Get a meat thermometer to make sure your chicken is cooked through';
	const description1 =
		"These delicious chicken souvlaki quinoa bowls can be refrigerated in air-tight containers for up to 5 days – I wasn't lying when I said they're perfect for meal prep! I recommend storing the fresh vegetables (ex: cucumber and tomatoes) and tzatziki sauce separately so that you can reheat the dish without warming up the veggies and sauce. If you prefer not to warm up this dish, you can store the ingredients altogether and enjoy at room temperature the next day.";
	const description2 =
		'If you have leftover chicken, extend its life by freezing it. You can either freeze the extra chicken raw and marinated or cooked. Cooked chicken will keep frozen for up to four months. To enjoy, simply allow it to thaw overnight and then microwave it or bake it in the oven.';
	const prepTime = '15 mins';
	const cookTime = '25 mins';
	const totalTime = '40 mins';
	const peopleServed = '4 people';
	const keywordList = 'Lunch, Grill, Meal Planning';
	const keyword1 = 'Lunch';
	const keyword2 = 'Grill';
	const keyword3 = 'Greek';
	const keyword4 = 'Meal Planning';
	const keyword5 = 'Bowls';

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
				height='560'
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
							<li className='ingredient'>
								2 cups cooked quinoa (usually 1 cup dry quinoa and 2 cups of
								water cooked in a pot on the stove or in a rice cooker)
							</li>
							<li className='ingredient'>1 cup grape tomatoes </li>
							<li className='ingredient'>1/2 cup cucumber, sliced</li>
							<li className='ingredient'>1/2 cup sliced kalamata olives</li>
							<li className='ingredient'>1/2 cup tzatziki</li>
							<li className='ingredient'>1 lb chicken breasts, diced</li>
							<li className='ingredient'>2 tbsp olive oil</li>
							<li className='ingredient'>2 tbsp lemon juice</li>
							<li className='ingredient'>2 cloves garlic, minced</li>
							<li className='ingredient'>1 tbsp oregano</li>
							<li className='ingredient'>2 tsp salt</li>
							<li className='ingredient'>1/2 tsp pepper</li>
							<li className='ingredient'>1 tbsp olive oil</li>
							<li className='ingredient'>1 zucchini, sliced</li>
							<li className='ingredient'>2 small red onions, sliced</li>
							<li className='ingredient'>1/2 red pepper, chopped</li>
							<li className='ingredient'>1/2 yellow pepper, chopped</li>
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
								Preheat BBQ to med-high heat. In a small bowl, mix together
								ingredients for chicken marinade. Marinate chicken in a bowl for
								15 min, then grill on BBQ for 20 min, flipping halfway through.
							</li>
							<li className='instruction'>
								Meanwhile, toss veggies with olive oil and salt in a large bowl.
								Add veggies to skewers then add to grill within last 10 min of
								chicken being on the grill. Cook for 10 min then remove chicken
								and veggies from grill and let cool slightly.
							</li>
							<li className='instruction'>
								Meanwhile, cook quinoa and prepare other veggies. Dice chicken
								once cool enough to handle. Add quinoa, chicken and all veggies
								to bowls, topping each with tzatziki. Enjoy!
							</li>
						</ol>
					</div>
					<div id='block21' className='instructionItem'>
						Nutrition Information
					</div>
					<div id='block22' className='instructionItem'>
						<div id='nutritionList'>
							<div className='nutritionItem'>Serving: 1serving |&nbsp;</div>
							<div className='nutritionItem'>Calories: 550kcal |&nbsp;</div>
							<div className='nutritionItem'>Carbohydrates: 24g |&nbsp;</div>
							<div className='nutritionItem'>Protein: 53g |&nbsp;</div>
							<div className='nutritionItem'>Fat: 27g |&nbsp;</div>
							<div className='nutritionItem'>Saturated Fat: 4g |&nbsp;</div>
							<div className='nutritionItem'>Trans Fat: 1g |&nbsp;</div>
							<div className='nutritionItem'>Cholesterol: 145mg |&nbsp;</div>
							<div className='nutritionItem'>Sodium: 1703mg |&nbsp;</div>
							<div className='nutritionItem'>Potassium: 1395mg |&nbsp;</div>
							<div className='nutritionItem'>Fiber: 5g |&nbsp;</div>
							<div className='nutritionItem'>Sugar: 7g |&nbsp;</div>
							<div className='nutritionItem'>Vitamin A: 1238U |&nbsp;</div>
							<div className='nutritionItem'>Vitamin C: 77mg |&nbsp;</div>
							<div className='nutritionItem'>Calcium: 77mg |&nbsp;</div>
							<div className='nutritionItem'>Iron: 3mg |&nbsp;</div>
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

export default ChickenSouvlakiBowl;