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

const TacoSalad = () => {
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

	const mealType = 'Salad';
	const cuisineType = 'Mexican';
	const mealTitle = 'Taco Salad';
	const altText = 'taco salad';
	const authorName = 'Lisa Bryan';
	const authorNickname = 'Lisa';
	const authorPhoto =
		'https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2015/07/Lisa-Bryan-square-4-300x300.jpg';
	const authorDescription =
		'I’m Lisa and I love healthy food with fresh, simple and seasonal ingredients. I’m a recipe developer, food blogger, YouTuber and massive wanderluster (getting food inspiration from around the world!).';
	const videoSource = 'https://www.youtube.com/embed/xLX7-symEvQ';
	const smallRecipePhoto =
		'https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2020/06/Taco-Salad-6-300x300.jpg';
	const recipePhoto =
		'https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2020/06/Taco-Salad-7.jpg';
	const recipePhoto2 =
		'https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2020/06/Taco-Salad-3.jpg';
	const recipePhoto3 =
		'https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2020/06/Taco-Salad-8.jpg';
	const recipeDate = 'June 17, 2020';
	const recipeDescription =
		'Taco salad is a quick, and healthy salad recipe perfect for summer. This recipe is a family favorite and perfect for Taco Tuesday. Watch the video above to see how easy it is to make!';
	const title2 =
		'Enjoy classic Mexican flavors in a lighter, veggie-heavy meal';
	const title3 =
		'Protein options can include shrimp, pulled pork, carnitas or carne asada';
	const description1 =
		'It’s not a taco salad without tomatoes, black beans, avocado, homemade salsa, and shredded cheese. While those are the classics, feel free to improvise here.  Top your salad with corn, radishes, jalapeños, bell peppers or crumbled tortilla chips. And to add a bit of creaminess, dollop sour cream (vegan cashew sour cream) or drizzle lime crema';
	const description2 =
		'You can prep many of the ingredients in advance and create a buffet-style salad bar as well. Ingredients you can prep ahead of time include the beef, salsa, taco seasoning, diced red onion, and beans.  Those items can be stored in the fridge for 4-5 days in separate containers. The rest can be pulled straight out of the fridge and prepped in under 10 minutes.';
	const prepTime = '15 mins';
	const cookTime = '10 mins';
	const totalTime = '25 mins';
	const peopleServed = '4 people';
	const keywordList = 'Salad, Lunch, Mexican';
	const keyword1 = 'Salad';
	const keyword2 = 'Lunch';
	const keyword3 = 'Mexican';
	const keyword4 = 'Seafood';
	const keyword5 = 'Tacos';

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
						<img className='headerItem' src={smallRecipePhoto} width='100%' />
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
							<li className='ingredient'>1 pound ground beef</li>
							<li className='ingredient'>2 tablespoons taco seasoning</li>
							<li className='ingredient'>salt and pepper, to taste</li>
							<li className='ingredient'>
								1 head romaine lettuce or iceberg lettuce, chopped
							</li>
							<li className='ingredient'>1 cup grape tomatoes, chopped</li>
							<li className='ingredient'>
								1 cup black beans, drained and rinsed
							</li>
							<li className='ingredient'>1 avocado, diced</li>
							<li className='ingredient'>1/2 cup salsa</li>
							<li className='ingredient'>1/4 cup red onion, diced</li>
							<li className='ingredient'>1/4 cup freshly chopped cilantro</li>
							<li className='ingredient'>1 lime</li>
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
								In a pan over medium-high heat, add the ground beef and break it
								into small pieces with your spatula. Cook for about 8 minutes or
								until it starts to brown. Then drain the fat from the beef.
							</li>
							<li className='instruction'>
								Flip the salmon and cook for an additional 2-3 minutes or until
								the salmon is mostly opaque, with just a smidge of softness
								still in the middle.
							</li>
							<li className='instruction'>
								Add in the taco seasoning, give everything a stir and cook for
								another minute or two.
							</li>
							<li className='instruction'>
								In a large salad bowl, layer the chopped lettuce with browned
								beef, black beans, tomatoes, avocado, red onion, and cheese.
							</li>
						</ol>
					</div>
					<div id='block21' className='instructionItem'>
						Nutrition Information
					</div>
					<div id='block22' className='instructionItem'>
						<div id='nutritionList'>
							<div className='nutritionItem'>Serving: 1serving |&nbsp;</div>
							<div className='nutritionItem'>Calories: 433kcal |&nbsp;</div>
							<div className='nutritionItem'>Carbohydrates: 27g |&nbsp;</div>
							<div className='nutritionItem'>Protein: 34g |&nbsp;</div>
							<div className='nutritionItem'>Fat: 23g |&nbsp;</div>
							<div className='nutritionItem'>Saturated Fat: 8g |&nbsp;</div>
							<div className='nutritionItem'>Cholesterol: 85mg |&nbsp;</div>
							<div className='nutritionItem'>Sodium: 512mg |&nbsp;</div>
							<div className='nutritionItem'>Potassium: 1370mg |&nbsp;</div>
							<div className='nutritionItem'>Fiber: 12g |&nbsp;</div>
							<div className='nutritionItem'>Sugar: 6g |&nbsp;</div>
							<div className='nutritionItem'>Vitamin A: 14450U |&nbsp;</div>
							<div className='nutritionItem'>Vitamin C: 23mg |&nbsp;</div>
							<div className='nutritionItem'>Calcium: 173mg |&nbsp;</div>
							<div className='nutritionItem'>Iron: 6mg |&nbsp;</div>
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

export default TacoSalad;
