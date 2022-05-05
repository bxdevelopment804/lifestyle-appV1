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

const ZucchiniNoodleCaprese = () => {
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

	const mealType = 'Salad';
	const cuisineType = 'Italian';
	const mealTitle = 'Zucchini Noodle Caprese';
	const altText = 'zucchini noodle caprese';
	const authorName = 'Lisa Bryan';
	const authorNickname = 'Lisa';
	const authorPhoto =
		'https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2015/07/Lisa-Bryan-square-4-300x300.jpg';
	const authorDescription =
		'I’m Lisa and I love healthy food with fresh, simple and seasonal ingredients. I’m a recipe developer, food blogger, YouTuber and massive wanderluster (getting food inspiration from around the world!).';
	const videoSource = 'https://www.youtube.com/embed/ziPFz5QJY9o';
	const smallRecipePhoto =
		'https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2014/10/zucchini-noodle-caprese-6-450x450.jpg';
	const recipePhoto =
		'https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2014/10/zucchini-noodle-caprese-7.jpg';
	const recipePhoto2 =
		'https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2014/10/zucchini-noodle-caprese-4.jpg';
	const recipePhoto3 =
		'https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2014/10/zucchini-noodle-caprese-11.jpg';
	const recipeDate = 'June 15, 2017';
	const recipeDescription =
		'What’s great about this salad is the freshness and flavor from a few key, simple ingredients';
	const title2 =
		'The cherry tomatoes and creamy buffalo mozzarella balls are perfectly bite-sized';
	const title3 =
		'With a glass of wine, sangria or limoncello in one hand, this definitely has me dreaming of my next trip back to Italy';
	const description1 =
		'I’ve traveled extensively through Italy twice and I’ve always said that if there’s one country in the world I could easily live in, it would be Italy. The first time I traveled Italy was during a European study abroad in college and the second time was about 10 years later with my mom. For the record, I may have left my heart in Positano.';
	const description2 =
		'Both of those trips to Italy were before my celiac diagnosis, so everything in sight was edible. And I’d be lying if I said I didn’t do my fair share of indulging. I did. But given all the pizzas, pastas and everything I could eat, I kept going back to caprese salad. My favorite Italian salad. A salad that’s so simple, crisp, flavorful and beautiful.';
	const prepTime = '20 mins';
	const cookTime = '0 mins';
	const totalTime = '20 mins';
	const peopleServed = '5 people';
	const keywordList = 'Salad, Lunch, Plant-Based';
	const keyword1 = 'Salad';
	const keyword2 = 'Lunch';
	const keyword3 = 'Italian';
	const keyword4 = 'Plant-Based';
	const keyword5 = 'Sides';

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
							src={smallRecipePhoto}
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
						{recipeDescription}
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
							<li className='ingredient'>4 medium zucchini</li>
							<li className='ingredient'>8 ounces cherry tomatoes </li>
							<li className='ingredient'>
								8 ounces small balls of buffalo mozzarella, in water
							</li>
							<li className='ingredient'>
								2 tbsp raw pine nuts, plus extra for garnish{' '}
							</li>
							<li className='ingredient'>1/4 cup raw cashews</li>
							<li className='ingredient'>1 cup packed basil leaves</li>
							<li className='ingredient'>1/3 cup olive oil</li>
							<li className='ingredient'>2 garlic cloves </li>
							<li className='ingredient'>1 tsp lemon juice</li>
							<li className='ingredient'>1/4 tsp salt</li>
							<li className='ingredient'>black pepper, to taste</li>
							<li className='ingredient'>toasted pine nuts</li>
							<li className='ingredient'>fresh basil leaves</li>
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
								Toast the pine nuts in a skillet on medium low heat for 5
								minutes, tossing gently. Then place them in your food processor.
							</li>
							<li className='instruction'>
								Toast the cashews in the same skillet for 10 minutes, tossing
								gently. Then transfer to your food processor.
							</li>
							<li className='instruction'>
								Add the remaining pesto ingredients into your food processor
								except the olive oil. Pulse until the ingredients are mixed.
								Turn your food processor on while slowly pouring the olive oil.
								Process until your pesto is smooth and creamy, then set aside.
							</li>
							<li className='instruction'>
								Cut the ends off each zucchini and use a spiralizer to create
								zucchini noodles. Place these into a large bowl.
							</li>
							<li className='instruction'>
								Cut your tomatoes in half and place into the bowl with the
								zucchini. Cut your mozzarella balls in half and place in the
								same bowl.
							</li>
							<li className='instruction'>
								Using a spoon or spatula, remove all of the pesto from the food
								processor and add to the bowl. Mix all of the ingredients
								together until well combined. Serve immediately.
							</li>
						</ol>
					</div>
					<div id='block21' className='instructionItem'>
						Nutrition Information
					</div>
					<div id='block22' className='instructionItem'>
						<div id='nutritionList'>
							<div className='nutritionItem'>Serving: 1serving |&nbsp;</div>
							<div className='nutritionItem'>Calories: 352kcal |&nbsp;</div>
							<div className='nutritionItem'>Carbohydrates: 10g |&nbsp;</div>
							<div className='nutritionItem'>Protein: 12g |&nbsp;</div>
							<div className='nutritionItem'>Fat: 30g |&nbsp;</div>
							<div className='nutritionItem'>Saturated Fat: 8g |&nbsp;</div>
							<div className='nutritionItem'>Cholesterol: 34mg |&nbsp;</div>
							<div className='nutritionItem'>Sodium: 320mg |&nbsp;</div>
							<div className='nutritionItem'>Potassium: 618mg |&nbsp;</div>
							<div className='nutritionItem'>Fiber: 2g |&nbsp;</div>
							<div className='nutritionItem'>Sugar: 6g |&nbsp;</div>
							<div className='nutritionItem'>Vitamin A: 2125U |&nbsp;</div>
							<div className='nutritionItem'>Vitamin C: 40mg |&nbsp;</div>
							<div className='nutritionItem'>Calcium: 1055mg |&nbsp;</div>
							<div className='nutritionItem'>Iron: 2mg |&nbsp;</div>
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
						<Link to='/zucchiniNoodleCaprese'>
							<SingleSquare
								url='https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2014/10/zucchini-noodle-caprese-6-300x300.jpg'
								section='Weight Loss Recipes'
								title='Zucchini Noodle Caprese'
								description='This zucchini noodle caprese is a delicious, healthy salad made from zucchini noodles and a few simple, fresh ingredients.'
								author='Lisa Bryan'
							/>
						</Link>
					</div>
					<div id='block36' className='footerLinks'>
						<Link to='/greekSalad'>
							<SingleSquare
								url='https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2018/08/Greek-Salad-450x450.jpg'
								section='Weight Loss Recipes'
								title='Greek Salad'
								description='This salad is easy to make and bursting with flavor.'
								author='Lisa Bryan'
							/>
						</Link>
					</div>
					<div id='block37' className='footerLinks'>
						<Link to='/salmonAvocadoSalad'>
							<SingleSquare
								url='https://downshiftology.com/wp-content/uploads/2020/07/Salmon-Avocado-Salad-6-300x300.jpg'
								section='Weight Loss Recipes'
								title='Salmon Avocado Salad'
								description='This salmon avocado salad is a healthy salad recipe that is big on nutrients and flavor.'
								author='Lisa Bryan'
							/>
						</Link>
					</div>
					<div id='block38' className='footerLinks'>
						<Link to='/tacoSalad'>
							<SingleSquare
								url='https://downshiftology.com/wp-content/uploads/2020/06/Taco-Salad-6-300x300.jpg'
								section='Weight Loss Recipes'
								title='Taco Salad'
								description='Loaded with crisp vegetables, seasoned ground beef, and taco classics such as homemade salsa, cilantro and avocado.'
								author='Lisa Bryan'
							/>
						</Link>
					</div>
					<div id='block39' className='footerLinks'>
						<Link to='/cucumberRadishSalad'>
							<SingleSquare
								url='https://downshiftology.com/wp-content/uploads/2021/07/Cucumber-Radish-Salad-main-1-300x300.jpg'
								section='Weight Loss Recipes'
								title='Cucumber Radish Salad'
								description='Loaded with cool cucumbers, crisp radishes, fresh dill, and a simple olive oil lemon dressing for a fresh, tangy touch.'
								author='Lisa Bryan'
							/>
						</Link>
					</div>
					<div id='block40' className='footerLinks'>
						<Link to='/southwestChickenSalad'>
							<SingleSquare
								url='https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2020/07/Southwest-Chicken-Salad-6-450x450.jpg'
								section='Weight Loss Recipes'
								title='Southwest Chicken Salad'
								description='Simple to make, filled with bold flavors, and hearty enough to fill you up.'
								author='Lisa Bryan'
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

export default ZucchiniNoodleCaprese;
