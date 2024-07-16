import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import emailjs from 'emailjs-com';

import SingleSquare from '../shared/single-square';
import FiveStarRating from '../shared/fiveStarRating';
import './generalRecipeFormatting.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPrint } from '@fortawesome/free-solid-svg-icons';
import {
	faFacebook,
	faFacebookSquare,
	faInstagram,
	faPinterest,
	faPinterestSquare,
} from '@fortawesome/free-brands-svg-icons';

const MasonJarNoodles = () => {
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
		if (recipeComment !== '' && reviewerName !== '' && reviewerEmail !== '') {
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
		if (signUpEmail !== '') {
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

	//Code for sending emails from comment section.
	const form = useRef();
	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				'service_zz1nmdq',
				'template_blotnk6',
				form.current,
				'K0MS8uX0Eal8GsLQ1'
			)
			.then(
				(result) => {
					console.log(result.text);
				},
				(error) => {
					console.log(error.text);
				}
			);
	};

	const mealType = 'Lunch';
	const cuisineType = 'American';
	const mealTitle = 'Mason Jar Instant Noodle Soup';
	const altText = 'mason jar noodles';
	const authorName = 'Taylor Stinson';
	const authorNickname = 'Taylor';
	const authorPhoto =
		'https://thegirlonbloor.com/wp-content/uploads/2021/08/Girl-on-Bloor-4-768x803.jpg';
	const authorDescription =
		"I'm Taylor Stinson, a busy city girl living in downtown Toronto. Looking to switch up your weekly meal prep routine? I've got you covered with healthy recipes and meal planning resources. Join 1.5 million other monthly readers and dive in!";
	const videoSource = 'https://www.youtube.com/embed/31PBGPlgIRg';
	const recipePhoto =
		'https://thegirlonbloor.com/wp-content/uploads/2016/01/Mason-Jar-Instant-Noodle-Soups-500x500.jpg';
	const recipePhoto2 =
		'https://thegirlonbloor.com/wp-content/uploads/2016/01/Mason-Jar-Instant-Noodles1-1-of-1-333x500.jpg';
	const recipePhoto3 =
		'https://thegirlonbloor.com/wp-content/uploads/2016/01/Mason-Jar-Instant-Noodle-Soups-6.jpg';
	const recipeDate = 'February 17, 2021';
	const recipeDescription =
		'These Mason Jar Instant Noodle Soups are the perfect on-the-go work lunch and packed full of raw veggies, quick-cook vermicelli noodles & shredded chicken!';
	const recipeDescription2 =
		'These Mason Jar Instant Noodle Soups are the perfect on-the-go work lunch and packed full of raw veggies, quick-cook vermicelli noodles & shredded chicken!';
	const title2 =
		'This is a great way to meal prep your lunches for the week. In 15 minutes, you can make as many as you need';
	const title3 =
		'While mason jars are perfect for storage and travel, make sure to take a bowl to eat the soup out of';
	const description1 =
		'You want to use noodles that don’t require a long cooking time. If you used wheat noodles, you could have to cook them in advance because they need time in boiling water to soften.  Rice vermicelli is a very thin cut of pasta that will cook quickly. Rice noodles don’t require any boiling time. They can soak in hot water for a few minutes and be ready to eat. Make sure that you do indeed use RICE vermicelli as there are some types of bean-based vermicelli that can take up to 8 minutes of cooking time. Just read the label before you buy if in doubt!  Cellophane noodles are also thin enough to be cooked by sitting in hot water for a minute so those are another option.';
	const description2 =
		'The prepared mason jar soups will last for about four to five days in the refrigerator.  If you don’t eat the entire soup, you have another day or two to heat it up and finish it. Just pop it in the microwave for a minute or two to reheat the leftovers.  If you let it sit for more than a day, the noodles and veggies will get soggier than they would if enjoyed fresh, so keep that in mind!';
	const prepTime = '15 mins';
	const cookTime = '15 mins';
	const totalTime = '30 mins';
	const peopleServed = '4 people';
	const keywordList = 'Lunch, Soup Stew & Chili, Meal Planning';
	const keyword1 = 'Lunch';
	const keyword2 = 'Soup Stew & Chili';
	const keyword3 = 'American';
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
					<div
						id='authorName'
						className='authorName'
					>
						by <strong>{authorName}</strong>
					</div>
				</div>
				<a href='#recipeSection'>
					<button id='recipeButton'>Jump to Recipe</button>
				</a>
			</div>
			<div id='media'>
				<a href='https://www.pinterest.com/'>
					<FontAwesomeIcon
						icon={faPinterest}
						className='titleIcon'
					/>
				</a>
				<a href='https://www.facebook.com/'>
					<FontAwesomeIcon
						icon={faFacebook}
						className='titleIcon'
					/>
				</a>
				<a href='https://www.instagram.com/'>
					<FontAwesomeIcon
						icon={faInstagram}
						className='titleIcon'
					/>
				</a>
			</div>
			<div id='date'>Published: {recipeDate}</div>
			<p id='description'>{recipeDescription}</p>
			<img
				id='image1'
				src={recipePhoto}
				alt={altText}
			/>
			<p id='videoHeader'>OUR LATEST VIDEOS</p>

			{/*REMINDER - Remember to insert id='video1' below whenever pasting embeds from Youtube. */}
			{/* id='video1' */}
			<iframe
				id='video1'
				width='560'
				height='560'
				src={videoSource}
				title='YouTube video player'
				frameBorder='0'
				allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
				allowFullScreen
			></iframe>
			<div id='title2'>{title2}</div>
			<img
				id='image2'
				src={recipePhoto2}
				alt={altText}
			/>
			<p className='foodDescription'>{description1}</p>
			<div id='title3'>{title3}</div>
			<img
				id='image3'
				src={recipePhoto3}
				alt={altText}
			/>
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
					<div
						id='block1'
						className='headerItem'
					>
						{mealTitle}
					</div>
					<div
						id='block2'
						className='imageContainerWithButtons'
					>
						<img
							className='headerItem'
							src={recipePhoto}
							width='100%'
							alt={altText}
						/>
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
						<div
							id='printRecipe'
							onClick={printRecipe}
						>
							<FontAwesomeIcon
								icon={faPrint}
								className='printIcon'
							/>
							&nbsp;&nbsp;
							<strong>Print Recipe</strong>
						</div>
					</div>
					<div
						id='block3'
						className='headerItem'
					>
						{recipeDescription2}
					</div>
					<div
						id='block4'
						className='headerItem'
					>
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
					<div
						id='block5'
						className='headerItem'
					>
						<div className='subBlock-1'>
							<strong>Serves</strong>
						</div>
						<div className='subBlock-2'>{peopleServed}</div>
					</div>
					<div
						id='block6'
						className='headerItem'
					>
						<div className='subBlock-1'>
							<strong>Serving Size</strong>
						</div>
						<div className='subBlock-2'>1</div>
					</div>
					<div
						id='block7'
						className='headerItem'
					>
						<div className='subBlock-1'>
							<strong>Course</strong>
						</div>
						<div className='subBlock-2'>{mealType}</div>
					</div>
					<div
						id='block8'
						className='headerItem'
					>
						<div className='subBlock-1'>
							<strong>Cuisine</strong>
						</div>
						<div className='subBlock-2'>{cuisineType}</div>
					</div>
					<div
						id='block9'
						className='headerItem'
					>
						<div className='subBlock-1'>
							<strong>Author</strong>
						</div>
						<div className='subBlock-2'>
							<strong id='redAuthor'>{authorName}</strong>
						</div>
					</div>
				</div>
				<div id='instructionContainer'>
					<div
						id='block16'
						className='instructionItem'
					>
						Ingredients
					</div>
					<div
						id='block17'
						className='instructionItem'
					>
						<ul>
							<li className='ingredient'>4 (1 L) Mason jars</li>
							<li className='ingredient'>2 chicken breasts cooked and shredded</li>
							<li className='ingredient'>4 tsp soy sauce or tamari</li>
							<li className='ingredient'>4 tsp Sriracha chili garlic hot sauce</li>
							<li className='ingredient'>4 tsp lime juice</li>
							<li className='ingredient'>4 vegetable bouillon cubes</li>
							<li className='ingredient'>
								1/2 cup each julienned broccoli stems, carrots, bell peppers and green onions
							</li>
							<li className='ingredient'>1 lb package rice vermicelli noodles</li>
							<li className='ingredient'>Sunflower sprouts or cilantro for garnish</li>
						</ul>
					</div>
					<div
						id='block18'
						className='instructionItem'
					>
						Ad Space
					</div>
					<div
						id='block19'
						className='instructionItem'
					>
						Instructions
					</div>
					<div
						id='block20'
						className='instructionItem'
					>
						<ol
							id='instructionList'
							className='instructions'
						>
							<li className='instruction'>
								To shred chicken, boil breasts in a large pot of hot water for 12-15 minutes until chicken is cooked
								through. Pull apart with your hands or with a fork once cooled.
							</li>
							<li className='instruction'>
								Divide the shredded chicken into each mason jar evenly, then add 1 tsp of soy sauce, Sriracha and lime
								juice to each jar.
							</li>
							<li className='instruction'>
								Layer in vegetables, then drop in bouillon cubes. Finally, finish by dividing vermicelli noodles evenly
								among each jar and keep in fridge until ready to eat.
							</li>
							<li className='instruction'>
								When ready to serve, pour boiling water in to fill jar and carefully stir contents, making sure to
								dissolve bouillon cube completely and saturate noodles. You may also need to microwave the jar for 1-2
								minutes depending on the type of noodles used (some varieties of vermicelli are harder than others). Let
								the jar sit for 5 minutes before serving.
							</li>
							<li className='instruction'>
								Pour contents of the jar into large bowl when ready to eat (should be within 5 minutes of pouring
								boiling water) and eat right away!
							</li>
						</ol>
					</div>
					<div
						id='block21'
						className='instructionItem'
					>
						Nutrition Information
					</div>
					<div
						id='block22'
						className='instructionItem'
					>
						<div id='nutritionList'>
							<div className='nutritionItem'>Serving: 1serving |&nbsp;</div>
							<div className='nutritionItem'>Calories: 369kcal |&nbsp;</div>
							<div className='nutritionItem'>Carbohydrates: 52g |&nbsp;</div>
							<div className='nutritionItem'>Protein: 28g |&nbsp;</div>
							<div className='nutritionItem'>Fat: 4g |&nbsp;</div>
							<div className='nutritionItem'>Saturated Fat: 1g |&nbsp;</div>

							<div className='nutritionItem'>Cholesterol: 72mg |&nbsp;</div>
							<div className='nutritionItem'>Sodium: 1366mg |&nbsp;</div>
							<div className='nutritionItem'>Potassium: 496mg |&nbsp;</div>
							<div className='nutritionItem'>Fiber: 2g |&nbsp;</div>
							<div className='nutritionItem'>Sugar: 1g |&nbsp;</div>
							<div className='nutritionItem'>Vitamin A: 1189U |&nbsp;</div>
							<div className='nutritionItem'>Vitamin C: 8mg |&nbsp;</div>
							<div className='nutritionItem'>Calcium: 22mg |&nbsp;</div>
							<div className='nutritionItem'>Iron: 1mg |&nbsp;</div>
						</div>
					</div>
					<div
						id='block23'
						className='instructionItem'
					>
						<strong>Keywords</strong>&nbsp; {keywordList}
					</div>
					<div
						id='block24'
						className='instructionItem'
					>
						<div id='instagramPlaceholder'>
							<a href='https://www.instagram.com/'>
								<FontAwesomeIcon
									icon={faInstagram}
									className='instagramIcon'
								/>
							</a>
						</div>
						<div id='instagramText'>
							<div>
								<strong>Have you made this recipe?</strong>
							</div>
							<div>Tag @healthylifestyle on Instagram or hashtag it #healthlylifestyle</div>
						</div>
					</div>
					<div
						id='block25'
						className='instructionItem'
					>
						For more tasty recipes and lifestyle advice, make sure to like us on our <strong>Facebook</strong> page and
						follow us on <strong>Pinterest</strong>!
					</div>
					<div
						id='block26'
						className='instructionItem'
					>
						<div id='signup-bar'>
							<h1 id='signup-header-h1'>SAVE YOUR FAVORITE RECIPES</h1>
							<h3 id='signup-header-h3'>Create a FREE account for quick & easy access</h3>
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
								<button
									className='buttonItem'
									onClick={closeSignUpModal}
								>
									Close
								</button>
							</Modal>
						</div>
					</div>
					<div
						id='block27'
						className='instructionItem'
					>
						Share this recipe
					</div>
					<div
						id='block28'
						className='instructionItem'
					>
						<a
							href='https://www.facebook.com/'
							id='facebookAnchor'
							className='socialMediaAnchors'
						>
							<div
								id='facebookButton'
								className='socialMediaButtons'
							>
								<FontAwesomeIcon
									icon={faFacebookSquare}
									className='icon'
								/>
								&nbsp;&nbsp;Facebook
							</div>
						</a>
						<a
							href='https://www.pinterest.com/'
							id='pinterestAnchor'
							className='socialMediaAnchors'
						>
							<div
								id='pintrestButton'
								className='socialMediaButtons'
							>
								<FontAwesomeIcon
									icon={faPinterestSquare}
									className='icon'
								/>
								&nbsp;&nbsp;Pin
							</div>
						</a>
						<a
							href='https://www.instagram.com/'
							id='instagramAnchor'
							className='socialMediaAnchors'
						>
							<div
								id='instagramButton'
								className='socialMediaButtons'
							>
								<FontAwesomeIcon
									icon={faInstagram}
									className='icon'
								/>
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
					<div
						id='block30'
						className='footerAuthInfo'
					>
						{authorName}
					</div>
					<div
						id='block31'
						className='footerAuthInfo'
					>
						{authorDescription}
					</div>
					<div
						id='block32'
						className='footerAuthInfo'
					>
						More by {authorNickname}
					</div>
					<div
						id='block33'
						className='footerAuthInfo'
					>
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
					<div
						id='block35'
						className='footerLinks'
					>
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
					<div
						id='block36'
						className='footerLinks'
					>
						<Link to='/beefStirFry'>
							<SingleSquare
								// url='https://thegirlonbloor.com/wp-content/uploads/bb-plugin/cache/The-best-Beef-stir-fry-5-400x500-circle.jpg'
								url='../pictures/resizedBeefStirFry.png'
								section='Meal Planning'
								title='Beef Stir Fry'
								description='This is the EASIEST Beef Stir Fry recipe, with a 2-ingredient stir fry sauce.'
								author='Taylor Stinson'
							/>
						</Link>
					</div>
					<div
						id='block37'
						className='footerLinks'
					>
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
					<div
						id='block38'
						className='footerLinks'
					>
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
					<div
						id='block39'
						className='footerLinks'
					>
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
					<div
						id='block40'
						className='footerLinks'
					>
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
					<div
						id='leaveReply'
						className='replyItem'
					>
						Leave A Reply
					</div>
					<div
						id='emailMessage'
						className='replyItem'
					>
						Your email address will not be published. Required fields are marked *
					</div>
					<div
						id='rating'
						className='replyItem'
					>
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
					<form
						id='commentForm'
						ref={form}
						onSubmit={sendEmail}
					>
						<div
							id='commentText'
							className='replyItem'
						>
							Comment*
							<textarea
								name='enteredComment'
								id='commentBox'
								value={recipeComment}
								onChange={updateComment}
							></textarea>
						</div>
						<div id='nameAndEmailContainer'>
							<div
								id='nameText'
								className='replyItem'
							>
								Name*
								<div className='replyItem'>
									<input
										id='nameField'
										name='name'
										type='text'
										value={reviewerName}
										onChange={updateReviewerName}
									></input>
								</div>
							</div>
							<div
								id='emailText'
								className='replyItem'
							>
								Email*
								<div className='replyItem'>
									<input
										id='emailField'
										name='email'
										type='text'
										value={reviewerEmail}
										onChange={updateReviewerEmail}
									></input>
								</div>
							</div>
						</div>
						<div style={{ display: 'none' }}>
							<input
								type='text'
								name='relevantPage'
								id='relevantPage'
								value={mealTitle}
								readOnly={true}
							/>
						</div>
						<button
							type='submit'
							id='postButton'
							className='replyItem'
							onClick={openCommentModal}
						>
							Post Comment
						</button>
					</form>
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
						<button
							className='buttonItem'
							onClick={closeCommentModal}
						>
							Close
						</button>
					</Modal>
				</div>
			</div>
		</div>
	);
};

export default MasonJarNoodles;
