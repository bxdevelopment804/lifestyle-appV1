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

const KoreanChickenBowl = () => {
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

	const mealType = 'Dinner';
	const cuisineType = 'Asian-Inspired';
	const mealTitle = 'Korean Inspired Chicken Meal Prep Bowls';
	const altText = 'korean chicken bowl';
	const authorName = 'Taylor Stinson';
	const authorNickname = 'Taylor';
	const authorPhoto =
		'https://thegirlonbloor.com/wp-content/uploads/2021/08/Girl-on-Bloor-4-768x803.jpg';
	const authorDescription =
		"I'm Taylor Stinson, a busy city girl living in downtown Toronto. Looking to switch up your weekly meal prep routine? I've got you covered with healthy recipes and meal planning resources. Join 1.5 million other monthly readers and dive in!";
	const videoSource = 'https://www.youtube.com/embed/4ZQ4sSVyEAk';
	const recipePhoto =
		'https://thegirlonbloor.com/wp-content/uploads/2017/12/Korean-Chicken-Meal-Prep-Bowls-3-500x500.jpg';
	const recipePhoto2 =
		'https://thegirlonbloor.com/wp-content/uploads/2017/12/Korean-Chicken-Meal-Prep-Bowls-2.jpg';
	const recipePhoto3 =
		'https://thegirlonbloor.com/wp-content/uploads/2017/12/Korean-Chicken-Meal-Prep-Bowls.jpg';
	const recipeDate = 'April 30, 2021';
	const recipeDescription =
		'These Korean Inspired Chicken Meal Prep Bowls are a healthy make ahead lunch idea made up of chicken thighs, sesame coleslaw and jasmine rice!';
	const recipeDescription2 =
		'These Korean Inspired Chicken Meal Prep Bowls are a healthy make ahead lunch idea made up of chicken thighs, sesame coleslaw and jasmine rice!';
	const title2 =
		'The key to making this Korean inspired chicken recipe super quickly is to start making the sides when the chicken is marinating';
	const title3 =
		'The honey balances out the soy sauce, while the garlic and ginger add that special zing to the chicken';
	const description1 =
		'If it were up to me though, I would BBQ all year round. I swear it makes any cut of meat absolutely delicious. If you have the choice, I would highly recommend grilling these chicken thighs as you will get more of a smokey flavour that complements the soy sauce and sesame well.  You may find that stirring in the cornstarch will help the marinade adhere to the chicken better and this may be the better choice for baking your chicken.';
	const description2 =
		"If you're prepping these Chicken Meal Prep Bowls for the work week I would recommend holding off on adding the dressing for the coleslaw until the time you're going to eat it – pack a bit of the dressing in small separate bowls and drizzle it on at lunchtime.  Alternatively, you can use a store-bought sesame dressing if you're lazy or already have some on hand.";
	const prepTime = '15 mins';
	const cookTime = '20 mins';
	const totalTime = '35 mins';
	const peopleServed = '4 people';
	const keywordList = 'Dinner, Roasting, Meal Planning';
	const keyword1 = 'Dinner';
	const keyword2 = 'Roasting';
	const keyword3 = 'Asian-Inspired';
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
				frameBorder='0'
				allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
				allowFullScreen
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
					<div id='block2' className='imageContainerWithButtons'>
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
							<li className='ingredient'>8 boneless skinless chicken thighs</li>
							<li className='ingredient'>
								1/4 cup low-sodium soy sauce or tamari
							</li>
							<li className='ingredient'>3 tbsp honey</li>
							<li className='ingredient'>2 tbsp sesame oil</li>
							<li className='ingredient'>4 cloves garlic</li>
							<li className='ingredient'>1 tbsp fresh ginger</li>
							<li className='ingredient'>1 tbsp sesame seeds</li>
							<li className='ingredient'>1 bag coleslaw mix</li>
							<li className='ingredient'>1 2 tbsp low sodium soy sauce</li>
							<li className='ingredient'>2 tbsp rice vinegar</li>
							<li className='ingredient'>1 tsp powdered ginger</li>
							<li className='ingredient'>1 cup jasmine rice</li>
							<li className='ingredient'>1 1/4 cups water</li>
							<li className='ingredient'>1 tsp butter</li>
							<li className='ingredient'>1 pinch salt</li>
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
								Preheat grill to high heat, or preheat oven to 425 F. In a large
								bowl, mix chicken marinade ingredients together. Add chicken
								thighs and marinate 10-15 minutes.
							</li>
							<li className='instruction'>
								Meanwhile, cook jasmine rice according to package directions.
								Mix together ingredients for Asian slaw dressing, then set
								aside.
							</li>
							<li className='instruction'>
								Add chicken to grill or frying pan. Cook on grill for 7 minutes,
								then flip and cook another 5 minutes depending on how large the
								thighs are. If using the oven method, bake on a parchment-lined
								baking sheet for 20 minutes or until chicken reaches 165 F in
								thickest part of thigh.
							</li>
							<li className='instruction'>
								Add two chicken thighs to each meal prep bowl. Toss coleslaw
								with dressing then add slaw and rice to each bowl. Serve and
								enjoy - leftovers stay good in the fridge up to 4-5 days.
							</li>
						</ol>
					</div>
					<div id='block21' className='instructionItem'>
						Nutrition Information
					</div>
					<div id='block22' className='instructionItem'>
						<div id='nutritionList'>
							<div className='nutritionItem'>Serving: 1serving |&nbsp;</div>
							<div className='nutritionItem'>Calories: 520kcal |&nbsp;</div>
							<div className='nutritionItem'>Carbohydrates: 49g |&nbsp;</div>
							<div className='nutritionItem'>Protein: 49g |&nbsp;</div>
							<div className='nutritionItem'>Fat: 13g |&nbsp;</div>
							<div className='nutritionItem'>Saturated Fat: 3g |&nbsp;</div>
							<div className='nutritionItem'>Cholesterol: 215mg |&nbsp;</div>
							<div className='nutritionItem'>Sodium: 491mg |&nbsp;</div>
							<div className='nutritionItem'>Potassium: 813mg |&nbsp;</div>
							<div className='nutritionItem'>Fiber: 4g |&nbsp;</div>
							<div className='nutritionItem'>Sugar: 8g |&nbsp;</div>
							<div className='nutritionItem'>Vitamin A: 164U |&nbsp;</div>
							<div className='nutritionItem'>Vitamin C: 41mg |&nbsp;</div>
							<div className='nutritionItem'>Calcium: 78mg |&nbsp;</div>
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
					<form id='commentForm' ref={form} onSubmit={sendEmail}>
						<div id='commentText' className='replyItem'>
							Comment*
							<textarea
								name='enteredComment'
								id='commentBox'
								value={recipeComment}
								onChange={updateComment}
							></textarea>
						</div>
						<div id='nameAndEmailContainer'>
							<div id='nameText' className='replyItem'>
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
							<div id='emailText' className='replyItem'>
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
						<button className='buttonItem' onClick={closeCommentModal}>
							Close
						</button>
					</Modal>
				</div>
			</div>
		</div>
	);
};

export default KoreanChickenBowl;
