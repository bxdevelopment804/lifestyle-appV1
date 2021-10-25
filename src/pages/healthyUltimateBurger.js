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

const HealthyUltimateBurger = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const [gradeIndex, setGradeIndex] = useState(-1);

	const changeGradeIndex = (index) => {
		setGradeIndex(index);
	};

	return (
		<div id='pageContainer'>
			<div id='sectionTitle'>Dinner</div>
			<div id='title'>A Healthy, Lean Take on the Ultimate Burger</div>
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
						src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNiB7xhtV400YhyOPtn5mrCawZZpCjAbrbWOtFWwfDXLxqvtpBtyJzWyZlPRWbHLBujqU&usqp=CAU'
						alt='author'
						width='75px'
						height='50px'
					/>
					<img
						id='authorPhoto2'
						className='authorPhoto'
						src='https://static.appliancesconnection.com/www/871x1350/site-info/images/blog/matt-goulding.jpg'
						alt='author'
						width='75px'
						height='50px'
					/>
					<div id='authorName' className='authorName'>
						by <strong>David Zinczenko</strong> and{' '}
						<strong>Matt Goulding</strong>
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
			<div id='date'>Published: April 12, 2019</div>
			<p id='description'>Prepare for a true, first-class burger experience.</p>
			<img
				id='image1'
				src='https://www.eatthis.com/wp-content/uploads/sites/4/2019/01/the-healthy-ultimate-burger.jpg?quality=82&strip=1&resize=970%2C546'
				alt='healthy ultimate burger'
			/>
			<p id='videoHeader'>OUR LATEST VIDEOS</p>

			{/*REMINDER - Remember to insert id='video1' below whenever pasting embeds from Youtube. */}
			{/* id='video1' */}
			<iframe
				id='video1'
				width='560'
				height='315'
				src='https://www.youtube.com/embed/MjPL4yFMxnw'
				title='YouTube video player'
				frameborder='0'
				allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
				allowfullscreen
			></iframe>
			<div id='title2'>Prepare for a true, first-class burger experience</div>
			<img
				id='image2'
				src='https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F5332204.jpg'
				alt='healthy ultimate burger'
			/>
			<p className='foodDescription'>
				It is nearly impossible to find a burger at a sit-down restaurant with
				fewer than 1,000 calories. Blame the high-fat meat and heavy condiments.
				Here, we start with ground brisket, which is relatively lean but packed
				with perfect burger flavor. (The butcher at your local market should be
				happy to grind up a hunk for you.)
			</p>
			<div id='title3'>Sirloin, brisket, and arugula are the best mix</div>
			<img
				id='image3'
				src='https://www.kimscravings.com/wp-content/uploads/2021/06/Healthy-Burgers-6-640x437.jpg'
				alt='healthy ultimate burger'
			/>
			<p className='foodDescription'>
				We solve the condiment crisis by slowly caramelizing a red onion until
				it's sweet and moist. Combine that with the great beef and some peppery
				arugula for a first-class burger experience. If you must add cheese, a
				bit of crumbled blue goes well here atop this ultimate burger.
			</p>
			<p className='foodDescription'>
				The pre-packaged trays of ground hamburger meat at supermarkets may be
				convenient, but it's true mystery meat, usually made from a blend of
				beef scraps of dubious quality and age. Instead, pick out a fresh hunk
				of beef and ask the butcher to grind it for you on the spot; it's the
				single best way to instantly improve the quality of your hamburgers.
				When it comes to balancing flavor with an appropriate amount of fat,
				sirloin and brisket are the best picks in the meat case.
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
						A Healthy, Lean Take on the Ultimate Burger
					</div>
					<div id='block2' class='imageContainerWithButtons'>
						<img
							className='headerItem'
							src='https://www.eatthis.com/wp-content/uploads/sites/4/2019/01/the-healthy-ultimate-burger.jpg?quality=82&strip=1&resize=970%2C546'
							width='100%'
						/>
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
						Let's cut some calories out of that burger
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
						<div className='cookTimes'>10 mins</div>
						<div className='cookTimes'>20 mins</div>
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
						<div className='subBlock-2'>Dinner</div>
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
							<strong id='redAuthor'>David Zinczenko and Matt Goulding</strong>
						</div>
					</div>
				</div>
				<div id='instructionContainer'>
					<div id='block16' className='instructionItem'>
						Ingredients
					</div>
					<div id='block17' className='instructionItem'>
						<ul>
							<li className='ingredient'>10 oz ground sirloin</li>
							<li className='ingredient'>10 oz ground brisket</li>
							<li className='ingredient'>1 tsp salt</li>
							<li className='ingredient'>1 tsp freshly cracked pepper</li>
							<li className='ingredient'>
								4 hamburger buns, preferably Martin's Potato Rolls, toasted
								(Martin's Potato Rolls aren't just the perfect size—not too big
								or bready—for the burger, but they also pack 3 grams of fiber
								apiece.)
							</li>
							<li className='ingredient'>2 cups arugula</li>
							<li className='ingredient'>1⁄2 cup caramelized onions</li>
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
								Heat a grill or stovetop grill pan until hot.
							</li>
							<li className='instruction'>
								Combine the sirloin, brisket, salt, and pepper in a bowl and
								gently mix.
							</li>
							<li className='instruction'>
								Form into 4 patties. Caution: Overworking the meat or packing
								your patties too tightly can make tough burgers.
							</li>
							<li className='instruction'>
								Cook the burgers for 2 to 3 minutes and flip.
							</li>
							<li className='instruction'>
								Cook on the other side for another 2 to 3 minutes, until nicely
								charred on the outside but still medium-rare to medium within.
								(The center of the patty should be firm but easily yielding—like
								a Nerf football.)
							</li>
							<li className='instruction'>
								After you remove the burgers, toast the buns briefly.
							</li>
							<li className='instruction'>
								Divide the arugula among the buns and top with the burgers and
								onions.
							</li>
						</ol>
					</div>
					<div id='block21' className='instructionItem'>
						Nutrition Information
					</div>
					<div id='block22' className='instructionItem'>
						<div id='nutritionList'>
							<div className='nutritionItem'>Serving: 1serving |&nbsp;</div>
							<div className='nutritionItem'>Calories: 320kcal |&nbsp;</div>
							<div className='nutritionItem'>Carbohydrates: 22g |&nbsp;</div>
							<div className='nutritionItem'>Protein: 30g |&nbsp;</div>
							<div className='nutritionItem'>Fat: 12g |&nbsp;</div>
							<div className='nutritionItem'>Saturated Fat: 6g |&nbsp;</div>
							<div className='nutritionItem'>Trans Fat: 1g |&nbsp;</div>
							<div className='nutritionItem'>Cholesterol: 275mg |&nbsp;</div>
							<div className='nutritionItem'>Sodium: 710mg |&nbsp;</div>
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
						<strong>Keywords</strong>&nbsp; Dinner, American, Classic
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
							src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNiB7xhtV400YhyOPtn5mrCawZZpCjAbrbWOtFWwfDXLxqvtpBtyJzWyZlPRWbHLBujqU&usqp=CAU'
							alt='author'
							width='125px'
							height='100px'
						/>
						<img
							className='authorPhoto'
							src='https://static.appliancesconnection.com/www/871x1350/site-info/images/blog/matt-goulding.jpg'
							alt='author'
							width='125px'
							height='100px'
						/>
					</div>
					<div id='block30' className='footerAuthInfo'>
						David Zinczenko and Matt Goulding
					</div>
					<div id='block31' className='footerAuthInfo'>
						David Zinczenko is an American publisher, author, and businessman.
						Previously, he was the EVP and General Manager of Men's Health,
						Women's Health, Prevention and Rodale Books; Editorial Director of
						Men's Fitness; and the Nutrition and Wellness Editor at ABC News.
						<br /> Matt Goulding is an American food journalist, book author,
						and producer based in Barcelona, Spain. He was food editor at Men's
						Health magazine, where he wrote the column Eat This, Not That, which
						became a book series. In 2012, he co-founded Roads & Kingdoms with
						longtime foreign correspondent Nathan Thornburgh.
					</div>
					<div id='block32' className='footerAuthInfo'>
						More by David and Matt
					</div>
					<div id='block33' className='footerAuthInfo'>
						<div id='recipeKeywordList'>
							<div className='recipeKeyword'>Lunch</div>
							<div className='recipeKeyword'>Dinner</div>
							<div className='recipeKeyword'>American</div>
							<div className='recipeKeyword'>Classic</div>
							<div className='recipeKeyword'>Sandwich</div>
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

export default HealthyUltimateBurger;
