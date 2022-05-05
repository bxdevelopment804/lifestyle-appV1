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

const ChickenSaladSandwich = () => {
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
			<div id='sectionTitle'>LUNCH</div>
			<div id='title'>Chicken Salad Sandwich With Raisins and Curry Powder</div>
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
						src='https://pbs.twimg.com/profile_images/378800000276556305/416287d3cae05392f05d2dc305b94914_400x400.jpeg'
						alt='author'
						width='75px'
						height='75px'
					/>
					<img
						id='authorPhoto2'
						className='authorPhoto'
						src='https://images.ctfassets.net/o6q5esfvflvg/ua-687219270355465615/da71caed34b1867559b91ed7a6d57077/mattgoulding001.jpg'
						alt='author'
						width='75px'
						height='75px'
					/>
					<div id='authorName' className='authorName'>
						by <strong>David Zinczenko</strong> and
						<strong>Matt Goulding</strong>
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
			<div id='date'>Published: March 27, 2019</div>
			<p id='description'>
				Who said a chicken salad needs to be drowning in mayo to be tasty?
			</p>
			<img
				id='image1'
				src='https://www.eatthis.com/wp-content/uploads/sites/4/2019/01/chicken-salad-sandwich-curry-raisins.jpg?quality=82&strip=1&resize=970%2C546'
				alt='chicken salad sandwich'
			/>
			<p id='videoHeader'>OUR LATEST VIDEOS</p>

			{/*REMINDER - Remember to insert id='video1' below whenever pasting embeds from Youtube. */}
			{/* id='video1' */}
			<iframe
				id='video1'
				width='560'
				height='315'
				src='https://www.youtube.com/embed/npPoLXG-rBQ'
				title='YouTube video player'
				frameBorder='0'
				allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
				allowFullScreen
			></iframe>
			<div id='title2'>Making a classic combination even more savory</div>
			<img
				id='image2'
				src='https://www.theroastedroot.net/wp-content/uploads/2017/08/curried_chicken_salad_sandwiches_hero-720x720.jpg'
				alt='chicken salad sandwich'
			/>
			<p className='foodDescription'>
				Chicken and salad: two great foods on their own that often can make for
				a lousy dish when combined. That's because salad, when attached to
				chicken, is secret-speak for mayo overload. In fact, chicken and tuna
				salad sandwiches are consistently the worst option you'll find on a deli
				menu, be it Subway or your neighborhood sandwich shop.
			</p>
			<div id='title3'>Why not spice up your lunch?</div>
			<img
				id='image3'
				src='https://images-gmi-pmc.edge-generalmills.com/99224605-becf-4eb2-bc23-524def152141.jpg'
				alt='chicken salad sandwich'
			/>
			<p className='foodDescription'>
				We use a modest amount of olive-oil-based mayo, then punch up the flavor
				with plump golden raisins and the complex savory notes of curry powder
				in this chicken salad sandwich recipe. Make a big batch of the salad as
				part of your weekly meal planning and work it into other sandwiches,
				stuffed in pitas, or crowning a bowl of mixed greens.
			</p>
			<p className='foodDescription'>
				Curry powder is as ubiquitous throughout Indian cooking as it is
				diverse, with each cook preferring a different blend of spices such as
				coriander, cumin, fennel, and cardamom. One thing they nearly all have
				in common is that distinctive yellow tinge, which comes from turmeric,
				perhaps the world's healthiest spice. Studies have shown turmeric's vast
				antioxidant portfolio to be an effective defense against arthritis,
				prostate and colon cancers, and various other diseases. Get your dose by
				rubbing curry onto chicken and fish; mixing with yogurt, garlic, and
				ginger for a sauce or dip; or coating roasted nuts.
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
						Chicken Salad Sandwich With Raisins and Curry Powder
					</div>
					<div id='block2' className='imageContainerWithButtons'>
						<img
							className='headerItem'
							src='https://www.eatthis.com/wp-content/uploads/sites/4/2019/01/chicken-salad-sandwich-curry-raisins.jpg?quality=82&strip=1&resize=970%2C546'
							width='100%'
							alt='Chicken Salad Sandwich with Raisins and Curry Powder'
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
						Simple ingredients, complex flavor profile
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
						<div className='subBlock-2'>Lunch</div>
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
							<li className='ingredient'>3 Tbsp golden raisins</li>
							<li className='ingredient'>3 cups chopped cooked chicken</li>
							<li className='ingredient'>2 stalks celery, thinly sliced</li>
							<li className='ingredient'>1⁄2 onion, diced</li>
							<li className='ingredient'>1 carrot, shredded</li>
							<li className='ingredient'>
								1⁄2 tsp curry powder (From both a flavor and a nutritional
								standpoint, spices need to be replaced every 6 months to a
								year.)
							</li>
							<li className='ingredient'>1⁄4 cup olive oil mayonnaise</li>
							<li className='ingredient'>Salt and black pepper to taste</li>
							<li className='ingredient'>
								4 large lettuce leaves (romaine, iceberg, or anything else)
							</li>
							<li className='ingredient'>
								8 slices whole-grain bread or English muffin halves, toasted
							</li>
							<li className='ingredient'>2 medium tomatoes, sliced</li>
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
								Cover the raisins with hot water and soak for at least 10
								minutes (the warm water will help the raisins plump up); drain
								and place in a large bowl.
							</li>
							<li className='instruction'>
								Add the chicken, celery, onion, carrot, curry powder, and
								mayonnaise. Mix well and season with salt and pepper.
							</li>
							<li className='instruction'>
								Place the lettuce leaves on top of 4 bread slices, then top with
								tomatoes, chicken salad, and the remaining bread.
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
						<strong>Keywords</strong>&nbsp; Lunch, American, Fusion
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
							src='https://pbs.twimg.com/profile_images/378800000276556305/416287d3cae05392f05d2dc305b94914_400x400.jpeg'
							alt='author'
						/>
						<img
							className='authorPhoto'
							src='https://images.ctfassets.net/o6q5esfvflvg/ua-687219270355465615/da71caed34b1867559b91ed7a6d57077/mattgoulding001.jpg'
							alt='author'
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
							<div className='recipeKeyword'>Fusion</div>
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
								value='Chicken Salad Sandwich With Raisins and Curry Powder'
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

export default ChickenSaladSandwich;
