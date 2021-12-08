import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';

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

const BurritosRiceBeans = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const printRecipe = () => {
		window.print();
	};

	// Five star rating state and associated functions
	const [gradeIndex, setGradeIndex] = useState(-1);
	const [currentRating, setCurrentRating] = useState(0);
	const [numOfRatings, setNumOfRatings] = useState(5);
	const [totalOfRatings, setTotalOfRatings] = useState(18);
	const [averageRating, setAverageRating] = useState(
		totalOfRatings / numOfRatings
	);

	const [previouslyRated, setPreviouslyRated] = useState(false);
	const [ratingCountLimit, setRatingCountLimit] = useState(false);

	const changeGradeIndex = (index) => {
		if (!previouslyRated) {
			setGradeIndex(index);
			setCurrentRating(Number(index) + 1);
			setTotalOfRatings(totalOfRatings + (Number(index) + 1));
			setAverageRating(
				((totalOfRatings + (Number(index) + 1)) / numOfRatings).toFixed(2)
			);
			setPreviouslyRated(true);
			alert('Thanks for voting!');
		}
	};

	const updateRatingCount = () => {
		if (!ratingCountLimit) {
			setNumOfRatings(numOfRatings + 1);
			setRatingCountLimit(true);
		}
	};

	// Review recipe state and associated functions
	const [recipeComment, setRecipeComment] = useState('');
	const [reviewerName, setReviewerName] = useState('');
	const [reviewerEmail, setReviewerEmail] = useState('');
	const [commentModalIsOpen, setCommentModalIsOpen] = useState(false);

	const updateComment = (event) => {
		setRecipeComment(event.target.value);
	};
	const updateReviewerName = (event) => {
		setReviewerName(event.target.value);
	};
	const updateReviewerEmail = (event) => {
		setReviewerEmail(event.target.value);
	};

	function openCommentModal() {
		if (recipeComment != '' && reviewerName != '' && reviewerEmail != '') {
			setCommentModalIsOpen(true);
		} else {
			alert('Please complete all three fields.');
		}
	}

	function closeCommentModal() {
		setCommentModalIsOpen(false);
		setRecipeComment('');
		setReviewerName('');
		setReviewerEmail('');
	}

	// Mailing list sign up state and associated functions
	const [signUpEmail, setSignUpEmail] = useState('');
	const [signUpModalIsOpen, setSignUpModalIsOpen] = useState(false);

	const updateSignUpEmail = (event) => {
		setSignUpEmail(event.target.value);
	};

	function openSignUpModal() {
		if (signUpEmail != '') {
			setSignUpModalIsOpen(true);
		} else {
			alert('Please enter a complete email to sign up for our mailing list.');
		}
	}

	function closeSignUpModal() {
		setSignUpModalIsOpen(false);
		setSignUpEmail('');
	}

	const customStyles = {
		content: {
			top: '50%',
			left: '50%',
			right: 'auto',
			bottom: 'auto',
			marginRight: '-50%',
			transform: 'translate(-50%, -50%)',
		},
	};

	Modal.setAppElement('#root');

	const sectionType = 'Plant-Based Recipes';
	const mealType = 'Dinner';
	const cuisineType = 'Mexican';
	const mealTitle = 'Burritos with Spanish Rice and Black Beans';
	const altText = 'burritos rice beans';
	const authorName = 'Susan Voisin';
	const authorNickname = 'Susan';
	const authorPhoto =
		'https://www.forksoverknives.com/wp-content/uploads/fly-images/17847/susanvoisin-494x341-c.jpg';
	const authorDescription =
		'Susan Voisin is a food blogger and photographer who loves sharing her delicious, low-fat recipes almost as much as she does eating them. Follow her cooking adventures on her popular blog, FatFree Vegan Kitchen.';
	const videoSource = 'https://www.youtube.com/embed/DfEQCFRZJ5k';
	const recipePhoto =
		'https://www.forksoverknives.com/wp-content/uploads/fly-images/22661/burrito-fok-300kb-688x387-c.jpg';
	const recipePhoto2 =
		'https://www.thespruceeats.com/thmb/Niu__aJMsYSGrhNveczwUmCK354=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/vegetarian-bean-and-rice-burrito-recipe-3378550-hero-01-40ecbc08fcc84e80b8be853c1b779a13.jpg';
	const recipePhoto3 =
		'https://mahatmarice.com/wp-content/uploads/2019/08/Mah-Car_Brown-Rice-Black-Bean-Burrito.jpg';
	const recipeDate = 'July 10, 2013';
	const recipeDescription =
		'Adding black beans to this Spanish rice make this an especially filling burrito or wrap';
	const recipeDescription2 =
		'Quick and easy, vegan bean and rice burritos are a perfect vegetarian dinner idea.';
	const title2 =
		'The yummiest alternative to take out when you’re craving Mexican food';
	const title3 =
		'These are best when customized with extra ingredients you have on hand';
	const description1 =
		'About once a week, my family eats burritos for dinner. This recipe makes a great burrito filling or side dish and doesn’t take much longer than heating up a can of beans. This is a mildly seasoned dish, so you fire and spice lovers will probably want to increase the amounts of jalapeño peppers and chipotle powder.';
	const description2 =
		"These burritos are so filling that they're almost a complete and balanced meal on their own. If you'd like a side dish, consider elote (Mexican street corn), refried bean taquitos, or simply slice up an avocado and serve it on top of any fillings that didn't fit in the tortillas.";
	const prepTime = '20 mins';
	const cookTime = '35 mins';
	const totalTime = '55 mins';
	const peopleServed = '4 people';
	const keywordList = 'Dinner, Mexican, Skillet';
	const keyword1 = 'Dinner';
	const keyword2 = 'Mexican';
	const keyword3 = 'One-Pot & Skillet';
	const keyword4 = 'Vegan';
	const keyword5 = 'Stove Top';

	// -------------------------
	// SCROLL DOWN TO MANUALLY ENTER INGREDIENTS, INSTRUCTIONS, ANY CALORIE INFORMATION
	// -------------------------

	return (
		<div id='pageContainer'>
			<div id='sectionTitle'>{sectionType}</div>
			<div id='title'>{mealTitle}</div>
			<div id='rating'>
				<FiveStarRating
					gradeIndex={gradeIndex}
					changeGradeIndex={changeGradeIndex}
					numOfRatings={numOfRatings}
					totalOfRatings={totalOfRatings}
					updateRatingCount={updateRatingCount}
					averageRating={averageRating}
					currentRating={currentRating}
				/>
			</div>
			<div id='authorBlock'>
				<div id='authorInfo'>
					<img
						id='authorPhoto'
						className='authorPhoto'
						src={authorPhoto}
						alt='author'
						width='70px'
						height='50px'
					/>
					<div id='authorName' className='authorName'>
						by <strong>{authorName}</strong>
						{/* and{' '}						<strong>Matt Goulding</strong> */}
					</div>
				</div>
				<a href='#recipeSection'>
					<button id='recipeButton'>Jump to Recipe</button>
				</a>
			</div>
			<div id='media'>
				<a href='https://www.pinterest.com/'>
					<FontAwesomeIcon icon={faPinterest} className='titleIcon' />
				</a>
				<a href='https://www.facebook.com/'>
					<FontAwesomeIcon icon={faFacebook} className='titleIcon' />
				</a>
				<a href='https://www.instagram.com/'>
					<FontAwesomeIcon icon={faInstagram} className='titleIcon' />
				</a>
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
						numOfRatings={numOfRatings}
						totalOfRatings={totalOfRatings}
						updateRatingCount={updateRatingCount}
						averageRating={averageRating}
						currentRating={currentRating}
					/>
				</div>
				<div id='headerContainer'>
					<div id='block1' className='headerItem'>
						{mealTitle}
					</div>
					<div id='block2' class='imageContainerWithButtons'>
						<img className='headerItem' src={recipePhoto} width='100%' />
						<a href='#leaveReply'>
							<div id='reviewRecipe'>
								<strong id='reviewRecipeText'>Review Recipe</strong>
							</div>
						</a>
						<a href='https://www.pinterest.com/'>
							<div id='pinRecipe'>
								<strong>Pin Recipe</strong>
							</div>
						</a>
						<div id='printRecipe' onClick={printRecipe}>
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
							<li className='ingredient'>1 medium onion, chopped</li>
							<li className='ingredient'>
								1 green or yellow pepper, stemmed, seeded and chopped
							</li>
							<li className='ingredient'>
								½ –1 jalapeño chile, stemmed, seeded and finely diced (add more
								or less to taste)
							</li>
							<li className='ingredient'>2 cloves garlic, minced</li>
							<li className='ingredient'>4 cups cooked brown rice</li>
							<li className='ingredient'>
								1½ cup diced tomatoes (fresh or canned fire-roasted, liquid
								reserved)
							</li>
							<li className='ingredient'>
								1½ cup black beans (or 1 15-ounce can), rinsed well
							</li>
							<li className='ingredient'>1 teaspoon ground cumin</li>
							<li className='ingredient'>
								1 teaspoon ancho chili powder (or other pure, mild chili powder)
							</li>
							<li className='ingredient'>
								½ teaspoon chipotle chili powder (or more, to taste)
							</li>
							<li className='ingredient'>½ teaspoon smoked paprika</li>
							<li className='ingredient'>
								Salt and freshly ground black pepper to taste
							</li>
							<li className='ingredient'>
								8 7- to 8-inch whole grain tortillas
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
								Heat a deep, non-stick skillet over medium high heat. Add the
								onion and cook, stirring, until it begins to brown.
							</li>
							<li className='instruction'>
								Add the pepper, jalapeño, and garlic, and cook for another 2
								minutes, taking care not to burn the garlic.
							</li>
							<li className='instruction'>
								Add the remaining ingredients, stir, and cook, stirring
								frequently, for about 15 minutes. If it becomes too dry, add a
								little vegetable broth or reserved tomato juice.
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
								desired, pass hot pepper sauce.{' '}
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
						<strong>Keywords</strong>&nbsp; {keywordList}
					</div>
					<div id='block24' className='instructionItem'>
						<div id='instagramPlaceholder'>
							<a href='https://www.instagram.com/'>
								<FontAwesomeIcon icon={faInstagram} className='instagramIcon' />
							</a>
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
								<input
									id='signUpEmailField'
									type='text'
									placeholder='Email address...'
									value={signUpEmail}
									onChange={updateSignUpEmail}
								/>
								<button onClick={openSignUpModal}>START SAVING</button>
							</div>
							<Modal
								id='signUpModal'
								isOpen={signUpModalIsOpen}
								onRequestClose={closeSignUpModal}
								style={customStyles}
								contentLabel='signUpModal'
							>
								<h2>The following email has been added to our mailing list!</h2>
								<div id='signUpModalEmail'> Email: {signUpEmail}</div>
								<button className='buttonItem' onClick={closeSignUpModal}>
									Close
								</button>
							</Modal>
						</div>
					</div>
					<div id='block27' className='instructionItem'>
						Share this recipe
					</div>
					<div id='block28' className='instructionItem'>
						<a
							href='https://www.facebook.com/'
							id='facebookAnchor'
							className='socialMediaAnchors'
						>
							<div id='facebookButton' className='socialMediaButtons'>
								<FontAwesomeIcon icon={faFacebookSquare} className='icon' />
								&nbsp;&nbsp;Facebook
							</div>
						</a>
						<a
							href='https://www.pinterest.com/'
							id='pinterestAnchor'
							className='socialMediaAnchors'
						>
							<div id='pintrestButton' className='socialMediaButtons'>
								<FontAwesomeIcon icon={faPinterestSquare} className='icon' />
								&nbsp;&nbsp;Pin
							</div>
						</a>
						<a
							href='https://www.instagram.com/'
							id='instagramAnchor'
							className='socialMediaAnchors'
						>
							<div id='instagramButton' className='socialMediaButtons'>
								<FontAwesomeIcon icon={faInstagram} className='icon' />
								&nbsp;&nbsp;Instagram
							</div>
						</a>
					</div>
				</div>
				<div id='footerAuthContainer'>
					<div id='block29'>
						<img
							className='authorPhoto'
							src={authorPhoto}
							alt='author'
							// width='150px'
							// height='100px'
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
								numOfRatings={numOfRatings}
								totalOfRatings={totalOfRatings}
								updateRatingCount={updateRatingCount}
								averageRating={averageRating}
								currentRating={currentRating}
							/>
						</div>
					</div>
					<div id='commentText' className='replyItem'>
						Comment*
						<textarea
							name='enteredComment'
							id='commentBox'
							value={recipeComment}
							onChange={updateComment}
						></textarea>
					</div>
					<div id='nameText' className='replyItem'>
						Name*
						<div className='replyItem'>
							<input
								id='nameField'
								type='text'
								value={reviewerName}
								onChange={updateReviewerName}
							></input>
						</div>
					</div>
					<div id='emailText' className='replyItem'>
						Email*
						<div className='replyItem'>
							<input
								id='emailField'
								type='text'
								value={reviewerEmail}
								onChange={updateReviewerEmail}
							></input>
						</div>
					</div>
					<div id='postButton' className='replyItem' onClick={openCommentModal}>
						Post Comment
					</div>
					<Modal
						id='commentModal'
						isOpen={commentModalIsOpen}
						onRequestClose={closeCommentModal}
						style={customStyles}
						contentLabel='commentModal'
					>
						<h2>The following comment has been recorded!</h2>
						<div> Comment: {recipeComment}</div>
						<div> Name: {reviewerName}</div>
						<div> Email: {reviewerEmail}</div>
						<button className='buttonItem' onClick={closeCommentModal}>
							Close
						</button>
					</Modal>
				</div>
			</div>
		</div>
	);
};

export default BurritosRiceBeans;
