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

const IndianChickenBowl = () => {
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

	const mealType = 'Lunch';
	const cuisineType = 'Indian';
	const mealTitle = 'Indian-Inspired Chicken Meal Prep Bowls';
	const altText = 'indian chicken bowl';
	const authorName = 'Taylor Stinson';
	const authorNickname = 'Taylor';
	const authorPhoto =
		'https://thegirlonbloor.com/wp-content/uploads/2021/08/Girl-on-Bloor-4-768x803.jpg';
	const authorDescription =
		"I'm Taylor Stinson, a busy city girl living in downtown Toronto. Looking to switch up your weekly meal prep routine? I've got you covered with healthy recipes and meal planning resources. Join 1.5 million other monthly readers and dive in!";
	const videoSource = 'https://www.youtube.com/embed/hDjK5C2aoSs';
	const recipePhoto =
		'https://thegirlonbloor.com/wp-content/uploads/bb-plugin/cache/Chicken-Tandoori-Meal-Prep-Bowls-14-400x500-circle.jpg';
	const recipePhoto2 =
		'https://thegirlonbloor.com/wp-content/uploads/2017/10/Chicken-Tandoori-Meal-Prep-Bowls-9-1300x1950.jpg';
	const recipePhoto3 =
		'https://thegirlonbloor.com/wp-content/uploads/2017/10/Chicken-Tandoori-Meal-Prep-Bowls-10-1300x1950.jpg';
	const recipeDate = 'February 18, 2021';
	const recipeDescription =
		"These Indian-Inspired Chicken Meal Prep Bowls are a tasty sheet pan meal idea ready in 45 minutes – they've even got pakoras!";
	const recipeDescription2 =
		"These Indian-Inspired Chicken Meal Prep Bowls are a tasty sheet pan meal idea ready in 45 minutes – they've even got pakoras!";
	const title2 =
		'Pakoras are a fried vegetable fritter that originates from Indian cuisine';
	const title3 =
		'Pakoras are often enjoyed with a special dipping sauce, or chutney';
	const description1 =
		"To store your dish as future meals for the week, you will want to take your meal prep containers and create your bowls to your liking. Once you've prepared each bowl, place your containers into the fridge. Your bowls will stay fresh for up to four days! When you're ready to enjoy your chicken tandoori bowls, warm up your dish in the microwave for 1-2 minutes.";
	const description2 =
		"If you have extra chicken on hand, feel free to freeze it for another time! You can freeze the chicken in the marinade or freeze the cooked chicken for another meal. Once you're ready to enjoy your chicken, defrost the meat in the fridge overnight and then follow the cooking instructions above to enjoy!";
	const prepTime = '10 mins';
	const cookTime = '30 mins';
	const totalTime = '40 mins';
	const peopleServed = '4 people';
	const keywordList = 'Lunch, Roasting, Meal Planning';
	const keyword1 = 'Lunch';
	const keyword2 = 'Roasting';
	const keyword3 = 'Indian';
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
							<li className='ingredient'>1 tbsp olive oil</li>
							<li className='ingredient'>1 head cauliflower, chopped</li>
							<li className='ingredient'>
								1 medium-sized russet potato, diced
							</li>
							<li className='ingredient'>1 small red onion, diced</li>
							<li className='ingredient'>1/2 cup peas</li>
							<li className='ingredient'>
								8 frozen pakoras (I like the Spice it up Foods brand)
							</li>
							<li className='ingredient'>
								1 lb chicken breasts, cut into 1-inch pieces
							</li>
							<li className='ingredient'>
								2 tbsp plain yogurt (Greek or low fat is fine!)
							</li>
							<li className='ingredient'>1 tbsp lemon juice</li>
							<li className='ingredient'>2 cloves garlic minced</li>
							<li className='ingredient'>1.5 tsp turmeric</li>
							<li className='ingredient'>
								1/2 tsp garam masala (Sub in cardamom or if you're really in a
								pinch, leave out altogether and double the ground ginger)
							</li>
							<li className='ingredient'>1 tsp cumin</li>
							<li className='ingredient'>1 tsp ground dried ginger</li>
							<li className='ingredient'>1 tsp salt</li>
							<li className='ingredient'>1 tsp curry</li>
							<li className='ingredient'>1 tsp coriander</li>
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
								Preheat oven to 400 F. Mix chicken together with marinade
								ingredients and let marinate for 10-15 minutes.
							</li>
							<li className='instruction'>
								Toss cauliflower, potatoes and red onion with the ingredients
								under the aloo gobi spice heading, along with olive oil on a
								baking sheet. Bake for 15 minutes, then remove from oven. Mix
								peas into cauliflower mixture.
							</li>
							<li className='instruction'>
								Add chicken and pakoras to the same baking sheet and bake for 15
								minutes, turning pakoras and tossing chicken halfway through.
							</li>
							<li className='instruction'>Remove from oven, and serve! </li>
						</ol>
					</div>
					<div id='block21' className='instructionItem'>
						Nutrition Information
					</div>
					<div id='block22' className='instructionItem'>
						<div id='nutritionList'>
							<div className='nutritionItem'>Serving: 1serving |&nbsp;</div>
							<div className='nutritionItem'>Calories: 277kcal |&nbsp;</div>
							<div className='nutritionItem'>Carbohydrates: 24g |&nbsp;</div>
							<div className='nutritionItem'>Protein: 30g |&nbsp;</div>
							<div className='nutritionItem'>Fat: 8g |&nbsp;</div>
							<div className='nutritionItem'>Saturated Fat: 2g |&nbsp;</div>
							<div className='nutritionItem'>Trans Fat: 1g |&nbsp;</div>

							<div className='nutritionItem'>Cholesterol: 74mg |&nbsp;</div>
							<div className='nutritionItem'>Sodium: 767mg |&nbsp;</div>
							<div className='nutritionItem'>Potassium: 1206mg |&nbsp;</div>
							<div className='nutritionItem'>Fiber: 5g |&nbsp;</div>
							<div className='nutritionItem'>Sugar: 6g |&nbsp;</div>
							<div className='nutritionItem'>Vitamin A: 389U |&nbsp;</div>
							<div className='nutritionItem'>Vitamin C: 85mg |&nbsp;</div>
							<div className='nutritionItem'>Calcium: 76mg |&nbsp;</div>
							<div className='nutritionItem'>Iron: 3mg |&nbsp;</div>
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

export default IndianChickenBowl;
