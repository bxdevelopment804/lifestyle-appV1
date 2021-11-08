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

const WildRiceSoup = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const [gradeIndex, setGradeIndex] = useState(-1);

	const changeGradeIndex = (index) => {
		setGradeIndex(index);
	};

	return (
		<div id='pageContainer'>
			<div id='sectionTitle'>Plant-Based Recipes</div>
			<div id='title'>Creamy Wild Rice Soup</div>
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
						src='https://www.forksoverknives.com/wp-content/uploads/fly-images/68654/CarlaChristian_photo-494x341-c.jpg'
						alt='author'
						width='70px'
						height='50px'
					/>
					<div id='authorName' className='authorName'>
						by <strong>Carla Christian</strong>
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
			<div id='date'>Published: December 26, 2018</div>
			<p id='description'>
				My family loves this soup and chances are your family will love it too!
			</p>
			<img
				id='image1'
				src='https://www.forksoverknives.com/wp-content/uploads/fly-images/80859/Creamy-Wild-Rice-Soup-for-website-688x387-c.jpg'
				alt='wild rice soup'
			/>
			<p id='videoHeader'>OUR LATEST VIDEOS</p>

			{/*REMINDER - Remember to insert id='video1' below whenever pasting embeds from Youtube. */}
			{/* id='video1' */}
			<iframe
				id='video1'
				width='560'
				height='315'
				src='https://www.youtube.com/embed/cWpx8ZwKiGc'
				title='YouTube video player'
				frameborder='0'
				allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
				allowfullscreen
			></iframe>
			<div id='title2'>
				It’s like a chicken noodle soup but it uses a variety of flavorful rice
				instead of noodles
			</div>
			<img
				id='image2'
				src='https://tmbidigitalassetsazure.blob.core.windows.net/rms3-prod/attachments/37/1200x1200/exps16303_HWS133216A06_19_6b_WEB.jpg'
				alt='wild rice soup'
			/>
			<p className='foodDescription'>
				This chowder-style soup showcases the hearty, nutty goodness of wild
				rice. The dark brown grains are gluten-free, rich in nutrients, and
				native to North America, where they’re harvested in early fall.
			</p>
			<div id='title3'>
				This is creamy due to a milk and heavy cream based béchamel sauce.
				Everyone will love it!
			</div>
			<img
				id='image3'
				src='https://bigycloud.relationshop.net/RSData/Recipes/8786/25102017114259_TurkeyWildRiceSoup.jpg'
				alt='wild rice soup'
			/>
			<p className='foodDescription'>
				Cooking the rice in the soup broth helps meld the flavors in the recipe,
				though it means you may have to thin the soup with more broth before
				thickening it with the flours, since the rice may absorb a lot of the
				liquid. Serve with an arugula, watercress, or spinach salad.
			</p>
			<p className='foodDescription'>
				The wild rice blend offers something that pasta doesn’t in traditional
				chicken noodle soup. It has a light natural sweetness to it then I’ve
				included lemon zest to balance that with a faint little tang. And all
				the herbs just nicely compliment and balance it all.
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
						Creamy Wild Rice Soup
					</div>
					<div id='block2' class='imageContainerWithButtons'>
						<img
							className='headerItem'
							src='https://www.forksoverknives.com/wp-content/uploads/fly-images/80859/Creamy-Wild-Rice-Soup-for-website-688x387-c.jpg'
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
						This may call for a few pots, but it's worth it!
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
						<div className='cookTimes'>20 mins</div>
						<div className='cookTimes'>75 mins</div>
						<div className='cookTimes'>95 mins</div>
					</div>
					<div id='block5' className='headerItem'>
						<div className='subBlock-1'>
							<strong>Serves</strong>
						</div>
						<div className='subBlock-2'>2 people</div>
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
							<strong id='redAuthor'>Carla Christian</strong>
						</div>
					</div>
				</div>
				<div id='instructionContainer'>
					<div id='block16' className='instructionItem'>
						Ingredients
					</div>
					<div id='block17' className='instructionItem'>
						<ul>
							<li className='ingredient'>4 cups vegetable stock</li>
							<li className='ingredient'>
								1 (8-ounce) package button mushrooms, trimmed and quartered
							</li>
							<li className='ingredient'>
								¾ cup uncooked wild rice, rinsed and drained
							</li>
							<li className='ingredient'>
								½ cup thinly sliced leek (white part only)
							</li>
							<li className='ingredient'>4 cloves garlic, minced</li>
							<li className='ingredient'>1 cup chopped red bell pepper</li>
							<li className='ingredient'>½ cup chopped carrot</li>
							<li className='ingredient'>¼ teaspoon sea salt</li>
							<li className='ingredient'>¼ cup almond flour </li>
							<li className='ingredient'>¼ cup chickpea flour </li>
							<li className='ingredient'>1 tablespoon snipped fresh thyme</li>
							<li className='ingredient'>1 tablespoon white wine vinegar</li>
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
								Combine the stock, mushrooms, wild rice, leek, and garlic in a
								5-quart Dutch oven or soup pot. Bring to a boil over high heat;
								reduce heat to medium-low. Cover and simmer for 45 to 50 minutes
								or until the rice is tender (kernels will start to pop open).
								Stir in the bell peppers, carrot, and salt. Cover and simmer for
								8 minutes more.
							</li>
							<li className='instruction'>
								Combine the almond flour and chickpea flour in a small bowl;
								stir in ¼ cup water. Stir the mixture into the soup. Cook,
								stirring constantly, for 1 to 2 minutes or until thick and
								bubbly. Stir in up to ½ cup more water to reach the desired
								consistency. Stir in the thyme and vinegar.
							</li>
						</ol>
					</div>
					<div id='block21' className='instructionItem'>
						Nutrition Information
					</div>
					<div id='block22' className='instructionItem'>
						<div id='nutritionList'>
							<div className='nutritionItem'>Serving: 1serving |&nbsp;</div>
							<div className='nutritionItem'>Calories: 440kcal |&nbsp;</div>
							<div className='nutritionItem'>Carbohydrates: 22g |&nbsp;</div>
							<div className='nutritionItem'>Protein: 30g |&nbsp;</div>
							<div className='nutritionItem'>Fat: 15g |&nbsp;</div>
							<div className='nutritionItem'>Saturated Fat: 2g |&nbsp;</div>
							<div className='nutritionItem'>Trans Fat: 1g |&nbsp;</div>
							<div className='nutritionItem'>Cholesterol: 275mg |&nbsp;</div>
							<div className='nutritionItem'>Sodium: 510mg |&nbsp;</div>
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
						<strong>Keywords</strong>&nbsp; Dinner, American, Comfort Food
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
							src='https://www.forksoverknives.com/wp-content/uploads/fly-images/68654/CarlaChristian_photo-494x341-c.jpg'
							alt='author'
							width='150px'
							height='100px'
						/>
					</div>
					<div id='block30' className='footerAuthInfo'>
						Carla Christian
					</div>
					<div id='block31' className='footerAuthInfo'>
						CARLA CHRISTIAN Carla Christian, RD, LD, received her associate’s
						degree in culinary arts from The Culinary Institute of America in
						2006 and her bachelor’s degree in dietetics from Michigan State
						University in 2009. She finished her dietetic internship from The
						University of Nebraska Medical Center in 2010 and is a former chef
						in the Better Homes and Gardens® Test Kitchen.
					</div>
					<div id='block32' className='footerAuthInfo'>
						More by Carla
					</div>
					<div id='block33' className='footerAuthInfo'>
						<div id='recipeKeywordList'>
							<div className='recipeKeyword'>Lunch</div>
							<div className='recipeKeyword'>Dinner</div>
							<div className='recipeKeyword'>American</div>
							<div className='recipeKeyword'>Traditional</div>
							<div className='recipeKeyword'>Comfort Food</div>
						</div>
					</div>
				</div>
				<div id='block34'>Related Recipes</div>
				<div id='footerLinkContainer'>
					<div id='block35' className='footerLinks'>
						<Link to='/texmexPitaPizza'>
							<SingleSquare
								url='https://www.forksoverknives.com/wp-content/uploads/fly-images/66822/Tex-Mex-Pita-Pizzas_WP-688x387-c.jpg'
								section='Plant-Based Recipes'
								title='Tex-Mex Pita Pizzas'
								description='These will satisfy your taste buds and satiate your tum.'
								author='Darshana Thacker'
							/>
						</Link>
					</div>
					<div id='block36' className='footerLinks'>
						<Link to='/wildRiceSoup'>
							<SingleSquare
								url='https://www.forksoverknives.com/wp-content/uploads/fly-images/80859/Creamy-Wild-Rice-Soup-for-website-688x387-c.jpg'
								section='Plant-Based Recipes'
								title='Creamy Wild Rice Soup'
								description='	It’s like a chicken noodle soup but better.'
								author='Carla Christian'
							/>
						</Link>
					</div>
					<div id='block37' className='footerLinks'>
						<Link to='/veganBakedPotato'>
							<SingleSquare
								url='https://www.forksoverknives.com/wp-content/uploads/fly-images/42933/Nacho-and-Baked-Potato1561-WPedit-688x387-c.jpg'
								section='Plant-Based Recipes'
								title='"Nacho" Vegan Baked Potato'
								description='This recipe makes a great go-to meal when things are busy.'
								author='Andrea Duclos'
							/>
						</Link>
					</div>
					<div id='block38' className='footerLinks'>
						<Link to='/veganMacaroniCheese'>
							<SingleSquare
								url='https://www.forksoverknives.com/wp-content/uploads/fly-images/67930/Super-Stove-Top-Mac-and-Cheese-103068713-WP-688x387-c.jpg'
								section='Plant-Based Recipes'
								title='Stove-Top Vegan Macaroni and Cheese'
								description='This classic vegan mac and cheese is ultra cheesy, saucy and creamy.'
								author='Molly Patrick'
							/>
						</Link>
					</div>
					<div id='block39' className='footerLinks'>
						<Link to='/penneTomatoMushroom'>
							<SingleSquare
								url='https://www.forksoverknives.com/wp-content/uploads/fly-images/41259/Penne-with-Tomato-Mushroom-Cream-Sauce-wp-edit-688x387-c.jpg'
								section='Plant-Based Recipes'
								title='Penne With Tomato-Mushroom Sauce'
								description='Put an authentic Italian pasta dish on your dinner table in just 20 minutes.'
								author='Del Sroufe'
							/>
						</Link>
					</div>
					<div id='block40' className='footerLinks'>
						<Link to='/burritosRiceBeans'>
							<SingleSquare
								url='https://www.forksoverknives.com/wp-content/uploads/fly-images/22661/burrito-fok-300kb-688x387-c.jpg'
								section='Plant-Based Recipes'
								title='Burritos With Spanish Rice And Black Beans'
								description='Quick and easy, vegan bean and rice burritos are a perfect vegetarian dinner idea.'
								author='Susan Voisin'
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

export default WildRiceSoup;
