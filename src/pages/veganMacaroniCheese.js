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

const VeganMacaroniCheese = () => {
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

	return (
		<div id='pageContainer'>
			<div id='sectionTitle'>Plant-Based Recipes</div>
			<div id='title'>Stove-Top Vegan Macaroni and Cheese</div>
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
						src='https://www.forksoverknives.com/wp-content/uploads/fly-images/28240/W999Ja6E-494x341-c.jpg'
						alt='author'
						width='70px'
						height='50px'
					/>
					<div id='authorName' className='authorName'>
						by <strong>Molly Patrick</strong>
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
			<div id='date'>Published: September 13, 2018</div>
			<p id='description'>
				This classic vegan mac and cheese is ultra cheesy, saucy and creamy.
			</p>
			<img
				id='image1'
				src='https://www.forksoverknives.com/wp-content/uploads/fly-images/67930/Super-Stove-Top-Mac-and-Cheese-103068713-WP-688x387-c.jpg'
				alt='vegan macaroni cheese'
			/>
			<p id='videoHeader'>OUR LATEST VIDEOS</p>

			{/*REMINDER - Remember to insert id='video1' below whenever pasting embeds from Youtube. */}
			{/* id='video1' */}
			<iframe
				id='video1'
				width='560'
				height='315'
				src='https://www.youtube.com/embed/jvNng_-9ntM'
				title='YouTube video player'
				frameBorder='0'
				allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
				allowFullScreen
			></iframe>
			<div id='title2'>
				Oozing with cheese and baked until golden brown and crispy. Seriously
				satisfying
			</div>
			<img
				id='image2'
				src='https://simpleveganblog.com/wp-content/uploads/2019/12/Vegan-Mac-and-Cheese-3.jpg'
				alt='vegan macaroni cheese'
			/>
			<p className='foodDescription'>
				In this comforting vegan mac and cheese, a smooth purée of vegetables,
				soaked cashews, nutritional yeast (for cheesy flavor), and turmeric (for
				cheesy color) coats the pasta in a golden, creamy, dairy-free sauce.
			</p>
			<div id='title3'>
				We might be biased, but this super creamy, vegan mac and cheese is hands
				down the best
			</div>
			<img
				id='image3'
				src='https://thehiddenveggies.com/wp-content/uploads/2019/02/Vegan-mac-and-cheese-sq.jpg'
				alt='vegan macaroni cheese'
			/>
			<p className='foodDescription'>
				Any leftover sauce will keep in the refrigerator for up to a week. The
				sauce can also be made ahead and frozen for fast weeknight meals—simply
				thaw and re-blend before using. Craving a crunchy topping? Simply spread
				the prepared mac and cheese in a casserole dish, sprinkle breadcrumbs
				over the, and broil in the oven until brown and crispy.
			</p>

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
						Stove-Top Vegan Macaroni and Cheese
					</div>
					<div id='block2' className='imageContainerWithButtons'>
						<img
							className='headerItem'
							src='https://www.forksoverknives.com/wp-content/uploads/fly-images/67930/Super-Stove-Top-Mac-and-Cheese-103068713-WP-688x387-c.jpg'
							width='100%'
							alt='Stove-Top Vegan Macaroni and Cheese'
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
						This stovetop vegan mac and cheese is pretty much the best thing
						we’ve ever made
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
						<div className='cookTimes'>25 mins</div>
						<div className='cookTimes'>45 mins</div>
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
						<div className='subBlock-2'>Side</div>
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
							<strong id='redAuthor'>Molly Patrick</strong>
						</div>
					</div>
				</div>
				<div id='instructionContainer'>
					<div id='block16' className='instructionItem'>
						Ingredients
					</div>
					<div id='block17' className='instructionItem'>
						<ul>
							<li className='ingredient'>
								1 large russet potato, peeled and cut into ½-inch cubes (1½
								cups)
							</li>
							<li className='ingredient'>1 cup chopped carrots </li>
							<li className='ingredient'>½ cup chopped yellow onion</li>
							<li className='ingredient'>
								1 teaspoon ground turmeric or 1 tablespoon finely chopped
								turmeric root
							</li>
							<li className='ingredient'>3 cloves garlic, minced </li>
							<li className='ingredient'>½ cup raw cashews</li>
							<li className='ingredient'>½ cup nutritional yeast</li>
							<li className='ingredient'>1 teaspoon sea salt</li>
							<li className='ingredient'>
								4 ounces dried whole-wheat or gluten-free pasta
							</li>
							<li className='ingredient'>Freshly ground black pepper</li>
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
								Combine the potato, carrots, onion, turmeric, garlic, and 2 cups
								water in a medium saucepan. Bring to a boil over high heat.
								Reduce heat to low and simmer, covered, for 20 minutes.
							</li>
							<li className='instruction'>
								Place the cashews in a small bowl and add enough water to cover
								them. Soak for at least 10 minutes; drain.
							</li>
							<li className='instruction'>
								Meanwhile, cook the pasta in a large saucepan according to
								package directions; drain. Rinse with cool water; drain again.
								Return to the saucepan.
							</li>
							<li className='instruction'>
								Transfer the potato mixture to a blender. Add the cashews,
								nutritional yeast, salt, and ½ cup water. Blend for 2 minutes or
								until smooth and creamy.
							</li>
							<li className='instruction'>
								Top the pasta with the desired amount of sauce, and toss to
								coat. Season with pepper.
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
						<strong>Keywords</strong>&nbsp; Side, Stove Top, Pasta
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
							src='https://www.forksoverknives.com/wp-content/uploads/fly-images/28240/W999Ja6E-494x341-c.jpg'
							alt='author'
						/>
					</div>
					<div id='block30' className='footerAuthInfo'>
						Molly Patrick
					</div>
					<div id='block31' className='footerAuthInfo'>
						Molly Patrick is the founder of cleanfooddirtygirl.com, a website
						dedicated to helping people eat more whole plant food and less of
						everything else. Through her writing, recipes, programs, and
						coaching, she inspires, motivates, and educates people all over the
						globe to prevent illness and disease with the food they eat.
					</div>
					<div id='block32' className='footerAuthInfo'>
						More by Molly
					</div>
					<div id='block33' className='footerAuthInfo'>
						<div id='recipeKeywordList'>
							<div className='recipeKeyword'>Side</div>
							<div className='recipeKeyword'>Stove Top</div>
							<div className='recipeKeyword'>American</div>
							<div className='recipeKeyword'>Traditional</div>
							<div className='recipeKeyword'>Pasta Dish</div>
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
								value='Stove-Top Vegan Macaroni and Cheese'
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

export default VeganMacaroniCheese;
