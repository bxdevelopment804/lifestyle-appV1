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

const ChickenZoodleSoup = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const [gradeIndex, setGradeIndex] = useState(-1);

	const changeGradeIndex = (index) => {
		setGradeIndex(index);
	};

	return (
		<div id='pageContainer'>
			<div id='sectionTitle'>LUNCH</div>
			<div id='title'>Whole 30 Chicken Zoodle Soup</div>
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
						src='https://www.eatthis.com/wp-content/uploads/sites/4/2019/12/posie-brien-eat-this-not-that-writer.jpg?quality=82&strip=all&w=96'
						alt='author'
						width='50px'
						height='50px'
					/>

					<div id='authorName' className='authorName'>
						by <strong>Posie Brien</strong>
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
			<div id='date'>Published: December 23, 2019</div>
			<p id='description'>
				Use zucchini noodles instead of regular ones to make a gluten-free
				chicken noodle soup.
			</p>
			<img
				id='image1'
				src='https://www.laaloosh.com/wp-content/uploads/2017/01/chicken-zoodle-soup.jpg'
				alt='chicken zoodle soup'
			/>
			<p id='videoHeader'>OUR LATEST VIDEOS</p>

			{/*REMINDER - Remember to insert id='video1' below whenever pasting embeds from Youtube. */}
			<iframe
				id='video1'
				width='560'
				height='315'
				src='https://www.youtube.com/embed/Cs2_pweEORk'
				title='YouTube video player'
				frameborder='0'
				allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
				allowfullscreen
			></iframe>
			<div id='title2'>A lighter rendition of this classic dish</div>
			<img
				id='image2'
				src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqkGB41wNh9bbB32xeBK89nTe3WK63DsPlSQ&usqp=CAU'
				alt='chicken zoodle soup'
			/>
			<p className='foodDescription'>
				Chicken noodle soup is the ultimate comfort food, especially during the
				cold weather months. We've made our special light version by swapping in
				zucchini noodles for regular noodles, which makes this recipe
				gluten-free, paleo, and Whole30-approved. Basically, the healthiest
				chicken noodle soup you could possibly have.
			</p>
			<div id='title3'>Perfect for a cold day</div>
			<img
				id='image3'
				src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoP5EJuP7LUC0aE6tBCF9ThcLPUFC5EJObyQ&usqp=CAU'
				alt='chicken zoodle soup'
			/>
			<p className='foodDescription'>
				Our other favorite thing about this soup is that it's made in an instant
				pot in just 25 minutes! So you can have a healthy, warming homemade soup
				in less time than it takes to get takeout.
			</p>
			<div id='recipeSection'>
				<div id='rating2'>
					<FiveStarRating
						gradeIndex={gradeIndex}
						changeGradeIndex={changeGradeIndex}
					/>
				</div>
				<div id='headerContainer'>
					<div id='block1' className='headerItem'>
						Whole30 Chicken Zoodle Soup
					</div>
					<div id='block2' class='imageContainerWithButtons'>
						<img
							className='headerItem'
							src='https://www.eatthis.com/wp-content/uploads/sites/4/2019/12/Whole30-IP-Chicken-Zoodle-Soup.jpg?quality=82&strip=1&resize=640%2C360'
							width='100%'
						/>
						<div id='reviewRecipe'>
							<strong id='reviewRecipeText'>Review Recipe</strong>
						</div>
						<div id='pinRecipe'>
							<strong>Pin Recipe</strong>
						</div>
						<div id='printRecipe'>
							{' '}
							<FontAwesomeIcon icon={faPrint} className='printIcon' />
							&nbsp;&nbsp;
							<strong>Print Recipe</strong>
						</div>
					</div>
					<div id='block3' className='headerItem'>
						All of the comfort, none of the guilt.
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
						<div className='cookTimes'>10 mins</div>
						<div className='cookTimes'>25 mins</div>
						<div className='cookTimes'>35 mins</div>
					</div>
					<div id='block5' className='headerItem'>
						<div className='subBlock-1'>
							<strong>Serves</strong>
						</div>
						<div className='subBlock-2'>4 people</div>
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
						<div className='subBlock-2'>Lunch, Dinner</div>
					</div>
					<div id='block8' className='headerItem'>
						<div className='subBlock-1'>
							<strong>Cuisine</strong>
						</div>
						<div className='subBlock-2'>American</div>
					</div>
					<div id='block9' className='headerItem'>
						<div className='subBlock-1'>
							<strong>Author</strong>
						</div>
						<div className='subBlock-2'>
							<strong id='redAuthor'>Posie Brien</strong>
						</div>
					</div>
				</div>
				<div id='instructionContainer'>
					<div id='block16' className='instructionItem'>
						Ingredients
					</div>
					<div id='block17' className='instructionItem'>
						<ul>
							<li className='ingredient'>2 Tbsp olive oil</li>
							<li className='ingredient'>1 yellow onion, diced</li>
							<li className='ingredient'>
								4 large carrots, peeled and sliced in thick rounds
							</li>
							<li className='ingredient'>2 cups chopped celery</li>
							<li className='ingredient'>6 cups chicken stock</li>
							<li className='ingredient'>
								1 1/2 lb boneless, skinless chicken breasts or thighs
							</li>
							<li className='ingredient'>1 tsp fresh thyme</li>
							<li className='ingredient'>1 tsp salt</li>
							<li className='ingredient'>1/4 tsp black pepper</li>
							<li className='ingredient'>3 cups zucchini noodles</li>
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
								Set the instant pot to "sauté" and pour in the olive oil. Add
								the onion, carrots, and celery, and cook uncovered for 2
								minutes.
							</li>
							<li className='instruction'>
								Add the chicken stock, chicken, thyme, salt, and pepper, then
								cancel the "sauté" function. Lock the top into place and seal
								the instant pot. Select the "manual, high pressure" function and
								set the timer for 10 minutes.
							</li>
							<li className='instruction'>
								After 10 minutes, allow the pressure to naturally release.
								Remove the lid and use two forks to shred the chicken.
							</li>
							<li className='instruction'>
								While hot, add the zucchini noodles, then serve.
							</li>
						</ol>
					</div>
					<div id='block21' className='instructionItem'>
						Nutrition Information
					</div>
					<div id='block22' className='instructionItem'>
						<div id='nutritionList'>
							<div className='nutritionItem'>Serving: 1serving |&nbsp;</div>
							<div className='nutritionItem'>Calories: 230kcal |&nbsp;</div>
							<div className='nutritionItem'>Carbohydrates: 22g |&nbsp;</div>
							<div className='nutritionItem'>Protein: 30g |&nbsp;</div>
							<div className='nutritionItem'>Fat: 12g |&nbsp;</div>
							<div className='nutritionItem'>Saturated Fat: 3.5g |&nbsp;</div>
							<div className='nutritionItem'>Trans Fat: 1g |&nbsp;</div>
							<div className='nutritionItem'>Cholesterol: 275mg |&nbsp;</div>
							<div className='nutritionItem'>Sodium: 670mg |&nbsp;</div>
							<div className='nutritionItem'>Potassium: 640mg |&nbsp;</div>
							<div className='nutritionItem'>Fiber: 3g |&nbsp;</div>
							<div className='nutritionItem'>Sugar: 2g |&nbsp;</div>
							<div className='nutritionItem'>Vitamin A: 3031U |&nbsp;</div>
							<div className='nutritionItem'>Vitamin C: 50mg |&nbsp;</div>
							<div className='nutritionItem'>Iron: 4mg |&nbsp;</div>
							<div className='nutritionItem'>SmartPoints (FreeStyle): 10</div>
						</div>
					</div>
					<div id='block23' className='instructionItem'>
						<strong>Keywords</strong>&nbsp; Lunch, Dinner, American
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
							src='https://www.eatthis.com/wp-content/uploads/sites/4/2019/12/posie-brien-eat-this-not-that-writer.jpg?quality=82&strip=all&w=96'
							alt='author'
							width='100px'
							height='100px'
						/>
					</div>
					<div id='block30' className='footerAuthInfo'>
						Posie Brien
					</div>
					<div id='block31' className='footerAuthInfo'>
						Posie Brien is a New York City-based editor, writer, photographer,
						and recipe developer.
					</div>
					<div id='block32' className='footerAuthInfo'>
						More by Posie
					</div>
					<div id='block33' className='footerAuthInfo'>
						<div id='recipeKeywordList'>
							<div className='recipeKeyword'>Lunch</div>
							<div className='recipeKeyword'>Dinner</div>
							<div className='recipeKeyword'>American</div>
							<div className='recipeKeyword'>Whole 30</div>
							<div className='recipeKeyword'>Gluten Free</div>
						</div>
					</div>
				</div>
				<div id='block34'>Related Recipes</div>
				<div id='footerLinkContainer'>
					<div id='block35' className='footerLinks'>
						<Link to='/healthyFrenchToast'>
							<SingleSquare
								url='https://www.eatthis.com/wp-content/uploads/sites/4/2018/12/healthy-french-toast-with-strawberries.jpg?quality=82&strip=1&resize=640%2C360'
								section='Dinner'
								title='Healthy French Toast With Strawberries'
								description='When you want something a little sweet for supper, look no further than this French toast recipe.'
								author='David Zinczenko and Matt Goulding'
							/>
						</Link>
					</div>
					<div id='block36' className='footerLinks'>
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
					<div id='block37' className='footerLinks'>
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
					<div id='block38' className='footerLinks'>
						<Link to='/italianTunaMelt'>
							<SingleSquare
								url='https://www.eatthis.com/wp-content/uploads/sites/4/2018/12/healthy-italian-tuna-melt.jpg?quality=82&strip=1&resize=970%2C546'
								section='Lunch'
								title='Italian Tuna Melt'
								description='A new and improved version of the classic sandwich that is ready to eat in minutes.'
								author='David Zinczenko and Matt Goulding'
							/>
						</Link>
					</div>
					<div id='block39' className='footerLinks'>
						<Link to='/chickenSaladSandwich'>
							<SingleSquare
								url='https://www.eatthis.com/wp-content/uploads/sites/4/2019/01/chicken-salad-sandwich-curry-raisins.jpg?quality=82&strip=1&resize=640%2C360'
								section='Lunch'
								title='Chicken Salad Sandwich with Curry and Raisins'
								description='Who said a chicken salad needs to be drowning in mayo to be tasty?'
								author='David Zinczenko and Matt Goulding'
							/>
						</Link>
					</div>
					<div id='block40' className='footerLinks'>
						<Link to='/healthyUltimateBurger'>
							<SingleSquare
								url='https://www.eatthis.com/wp-content/uploads/sites/4/2019/01/the-healthy-ultimate-burger.jpg?quality=82&strip=1&resize=970%2C546'
								section='Dinner'
								title='The Healthy Ultimate Burger'
								description='Prepare for a true, first-class burger experience.'
								author='David Zinczenko and Matt Goulding'
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

export default ChickenZoodleSoup;
