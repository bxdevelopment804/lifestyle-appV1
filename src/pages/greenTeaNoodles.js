import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import SingleSquare from '../shared/single-square';
import FiveStarRating from '../shared/fiveStarRating';
import './generalRecipeFormatting.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPrint } from '@fortawesome/free-solid-svg-icons';
import {
	faFacebook,
	faFacebookSquare,
	faInstagram,
	faPinterest,
	faPinterestSquare,
} from '@fortawesome/free-brands-svg-icons';

const GreenTeaNoodles = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const [gradeIndex, setGradeIndex] = useState(-1);

	const changeGradeIndex = (index) => {
		setGradeIndex(index);
	};

	return (
		<div id='pageContainer'>
			<div id='sectionTitle'>DINNER</div>
			<div id='title'>Green Tea Noodles with Sticky Sweet Chili Salmon</div>
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
						src='https://img.delicious.com.au/qWQ_h2-V/w50-h50-q80-cfill/del/2015/11/phoebe-wood-138289-1.jpg'
						alt='author'
					/>
					<div id='authorName' className='authorName'>
						by <strong>Phoebe Wood</strong>
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
			<div id='date'>Published: October 01, 2020</div>
			<p id='description'>
				Green tea noodles bring a pop of colour to this easy midweek dinner.
			</p>
			<img
				id='image1'
				src='https://img.delicious.com.au/EEJ2ozkv/del/2020/10/green-tea-noodles-with-sticky-sweet-chilli-salmon-140868-2.jpg'
				alt='green tea noodles'
			/>
			<p id='videoHeader'>OUR LATEST VIDEOS</p>

			<iframe
				id='video1'
				width='740'
				height='418'
				src='https://www.youtube.com/embed/Idp67QSxXhc'
				title='YouTube video player'
				frameborder='0'
				allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
				allowfullscreen
			></iframe>
			<div id='title2'>A Traditional Classic</div>
			<img
				id='image2'
				src='https://mk0mydrtest3eri40dsq.kinstacdn.com/wp-content/uploads/2021/04/AdobeStock_78709581-1210x700.jpeg'
				alt='green tea noodles'
			/>
			<p className='foodDescription'>
				These Green Tea Noodles with Sticky Sweet Chili Salmon are healthy,
				nutritious and seriously satisfying! Easy to make and even easier to
				devour, this warming dish is guaranteed to soothe your soul!
			</p>
			<div id='title3'>Delectable Salmon Paired with Savory Noodles</div>
			<img
				id='image3'
				src='https://www.mindfood.com/wp-content/uploads/2013/11/miso-salmon-with-green-tea-noodle-salad.102239-681x1024.jpg'
				alt='green tea noodles again'
			/>
			<p className='foodDescription'>
				Hey guys! So, is it finally feeling like the fall season where you are?!
			</p>
			<p className='foodDescription'>
				I know that some people have already experienced their first snow storm
				of the year, while others are still enduring temperatures in the 90’s
				(hello, Mom!).
			</p>
			<p className='foodDescription'>
				It finally feels like autumn here and I couldn’t be more excited since
				this means fuzzy sweaters, buttery soft blankets and suede booties
				galore!
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
						Green Tea Noodles with Sticky Sweet Chili Salmon
					</div>
					<div id='block2' class='imageContainerWithButtons'>
						<img
							className='headerItem'
							src='https://www.nospoonnecessary.com/wp-content/uploads/2018/10/Green-Tea-Poached-Salmon-Soba-Noodles-84-1-1024x1536.jpg'
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
						Flavorful, yet healthy and light, these Green Tea Noodles with
						Sticky Sweet Chili Salmon are easy to make and perfect for busy
						weeknights!
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
						<div className='cookTimes'>8 mins</div>
						<div className='cookTimes'>20 mins</div>
						<div className='cookTimes'>28 mins</div>
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
						<div className='subBlock-2'>Dinner, Main Course</div>
					</div>
					<div id='block8' className='headerItem'>
						<div className='subBlock-1'>
							<strong>Cuisine</strong>
						</div>
						<div className='subBlock-2'>Asian</div>
					</div>
					<div id='block9' className='headerItem'>
						<div className='subBlock-1'>
							<strong>Author</strong>
						</div>
						<div className='subBlock-2'>
							<strong id='redAuthor'>Phoebe Wood</strong>
						</div>
					</div>
				</div>
				<div id='instructionContainer'>
					<div id='block16' className='instructionItem'>
						Ingredients
					</div>
					<div id='block17' className='instructionItem'>
						<ul>
							<li className='ingredient'>1/2 cup (125ml) peanut oil</li>
							<li className='ingredient'>1 tbs finely chopped ginger</li>
							<li className='ingredient'>
								3 long green shallots, thinly sliced
							</li>
							<li className='ingredient'>
								1 lemongrass stalk (white part only), finely grated
							</li>
							<li className='ingredient'>1 1/2 tbs runny honey</li>
							<li className='ingredient'>2 tbs extra virgin olive oil</li>
							<li className='ingredient'>80g chilli paste in soybean oil</li>
							<li className='ingredient'>
								600g whole skinless salmon fillet, pin-boned
							</li>
							<li className='ingredient'>
								240g packet dried green tea noodles
							</li>
							<li className='ingredient'>1/3 cup (80ml) lime juice</li>
							<li className='ingredient'>2 1/2 tsp caster sugar</li>
							<li className='ingredient'>2 tsp fish sauce</li>
							<li className='ingredient'>
								1/2 tsp chilli flakes, plus extra to serve
							</li>
							<li className='ingredient'>
								Toasted sesame seeds & micro shiso leaves, to serve
							</li>
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
								Preheat oven to 220°C. Heat peanut oil in a small saucepan over
								low heat. Add ginger, long green shallot, lemongrass and a pinch
								of salt. Cook, stirring occasionally, for 6-8 minutes until long
								green shallot is very soft but not coloured. Remove from heat
								and cool.
							</li>
							<li className='instruction'>
								Meanwhile, combine honey, olive oil and chilli paste in a bowl.
								Stir to combine. Line a baking tray with baking paper and add
								salmon. Rub honey mixture over salmon to coat, then season.
								Roast for 12-15 minutes for medium. Set aside, loosely covered
								with foil, to rest for 5 minutes.
							</li>
							<li className='instruction'>
								Cook noodles according to packet instructions. Drain and rinse
								briefly with warm water.
							</li>
							<li className='instruction'>
								Whisk lime juice, sugar, fish sauce and chilli flakes into the
								shallot oil mixture. Place noodles in a large bowl with three
								quarters of the shallot oil, season and toss to combine. Arrange
								on a serving platter and flake salmon over the top. Drizzle over
								remaining shallot oil and scatter with extra chilli flakes,
								toasted sesame seeds and shiso leaves. Serve at room temperature
								or chilled.
							</li>
						</ol>
					</div>
					<div id='block21' className='instructionItem'>
						Nutrition Information
					</div>
					<div id='block22' className='instructionItem'>
						<div id='nutritionList'>
							<div className='nutritionItem'>Serving: 1serving |&nbsp;</div>
							<div className='nutritionItem'>Calories: 381kcal |&nbsp;</div>
							<div className='nutritionItem'>Carbohydrates: 22g |&nbsp;</div>
							<div className='nutritionItem'>Protein: 30g |&nbsp;</div>
							<div className='nutritionItem'>Fat: 20g |&nbsp;</div>
							<div className='nutritionItem'>Saturated Fat: 9g |&nbsp;</div>
							<div className='nutritionItem'>Trans Fat: 1g |&nbsp;</div>
							<div className='nutritionItem'>Cholesterol: 275mg |&nbsp;</div>
							<div className='nutritionItem'>Sodium: 1328mg |&nbsp;</div>
							<div className='nutritionItem'>Potassium: 640mg |&nbsp;</div>
							<div className='nutritionItem'>Fiber: 3g |&nbsp;</div>
							<div className='nutritionItem'>Sugar: 2g |&nbsp;</div>
							<div className='nutritionItem'>Vitamin A: 3031U |&nbsp;</div>
							<div className='nutritionItem'>Vitamin C: 50mg |&nbsp;</div>
							<div className='nutritionItem'>Iron: 4mg |&nbsp;</div>
							<div className='nutritionItem'>SmartPoints (FreeStyle): 11</div>
						</div>
					</div>
					<div id='block23' className='instructionItem'>
						<strong>Keywords</strong>&nbsp; Dinner, Asian, Seafood
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
						our <strong>Facebook</strong> page and follow us on
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
					<img
						id='block29'
						className='authorPhoto'
						src='https://img.delicious.com.au/Sh0eXQqs/w506-h506-cfill/del/2015/11/phoebe-wood-138289-1.jpg'
						alt='author'
					/>
					<div id='block30' className='footerAuthInfo'>
						Phoebe Wood
					</div>
					<div id='block31' className='footerAuthInfo'>
						Phoebe Wood is the Food Director of the delicious. brand. She is the
						author of ‘delicious. daily’ and the Food Director of delicious.
						After years in hospitality working at celebrated Sydney restaurants
						such as Spice Temple, Sails on Lavender Bay and Duke, Phoebe began
						her career in food publishing in 2009 as delicious. Food Assistant.
						After working her way up to Assistant Food Editor at delicious.,
						Phoebe left Sydney to embark on a 3-month holiday in New York, with
						the aim of eating a doughnut a day and researching her cookbook on
						all-things pie. She returned to Australia to work in the MasterChef
						Australia test kitchen, before taking on the role of Food Editor at
						SBS Feast magazine, where she was able to realise her global
						experiences and appreciation of food across cultures. At Feast she
						learned to tell the story of food beyond cooking, delving deep into
						the stories and history of people, dishes and food communities
						around Australia and the world. She returned to delicious. in the
						role of Food Director in 2015 to work across all the brand
						platforms, creating impressive yet effortless food content for our
						print and online audience, be it entertaining feasts, quick fast
						family dinners and wicked cakes and pies. She loves lemon and salt,
						and will eat noodles any time of the day. You won’t find red
						capsicum in her recipes. Follow @phoeberosewood for regular updates
						from her kitchen.
					</div>
					<div id='block32' className='footerAuthInfo'>
						More by Phoebe
					</div>
					<div id='block33' className='footerAuthInfo'>
						<div id='recipeKeywordList'>
							<div className='recipeKeyword'>Asian</div>
							<div className='recipeKeyword'>Pasta</div>
							<div className='recipeKeyword'>Savory</div>
							<div className='recipeKeyword'>Seafood</div>
							<div className='recipeKeyword'>Salmon</div>
							<div className='recipeKeyword'>Dinner</div>
							<div className='recipeKeyword'>Main Course</div>
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
					<div id='block39' className='footerLinks'>
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
					<div id='block40' className='footerLinks'>
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

export default GreenTeaNoodles;
