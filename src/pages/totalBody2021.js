import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import emailjs from 'emailjs-com';

import SingleSquare from '../shared/single-square';
import './generalWorkoutFormatting.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faFacebook,
	faPinterest,
	faInstagram,
} from '@fortawesome/free-brands-svg-icons';

const TotalBody2021 = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

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

	const sectionType = 'home workouts';
	const workoutTitle = 'Your Total Body (20)21 New Year Workout Guide';
	const altText = 'Your Total Body (20)21 New Year Workout Guide';
	const authorName = 'Shana Verstegen';
	const authorNickname = 'MyFitnessPal';
	const authorPhoto =
		'https://blog.myfitnesspal.com/wp-content/uploads/2016/05/Shana-150x150.jpeg';
	const authorDescription =
		'Shana is a TRX and American Council on exercise master instructor and a six-time world champion lumberjack athlete. She holds a degree in Kinesiology- Exercise Science from the University of Wisconsin, Madison and is a certified personal trainer through ACE, NASM and NFPT. An energetic and personable speaker, she is also the National spokesperson for the Huntington’s Disease Society of America.';
	const videoSource = 'https://www.youtube.com/embed/5iICtOPsHJU';
	const initialWorkoutPhoto1 =
		'https://blog.myfitnesspal.com/wp-content/uploads/2020/12/MFP-2021-New-Year-Workout-Guide-2-graphic-scaled.jpg';

	const title1 = 'How 21s Work';
	const title2 = 'The Benefits of 21s';
	const title3 = 'The Exercises';

	const workoutDate = 'January 1, 2021';
	const workoutDescription1 =
		'Every year feels like a fresh start, and that goes double for 2021. We are all hoping for some big changes this year, so let’s focus on what we can control and spice up our workouts. If you haven’t heard of 21s, in honor of 2021, we are introducing this set configuration to you. They are most commonly used in biceps curls, however, they can be a great change of pace for almost any exercise.';

	const exerciseName1 = 'GOBLET SQUAT';
	const workoutPhoto1 =
		'https://blog.myfitnesspal.com/wp-content/uploads/2018/11/Goblet-Squat_GIF.gif';
	const altText1 = 'woman holding kettlebell while doing a squat';
	const exerciseName2 = 'DUMBBELL BENCH PRESS';
	const workoutPhoto2 =
		'https://blog.myfitnesspal.com/wp-content/uploads/2020/09/06-Dumbbell-Bench-Press.gif';
	const altText2 = 'woman laying on bench pressing dumbbells overhead';
	const exerciseName3 = 'THREE-POINT DUMBBELL ROW WITH BENCH';
	const workoutPhoto3 =
		'https://blog.myfitnesspal.com/wp-content/uploads/2020/08/3-point-row-with-Bench.gif';
	const altText3 = 'woman with knee and hand on flat bench rowing a dumbbell';
	const exerciseName4 = 'SPLIT SQUAT';
	const workoutPhoto4 =
		'https://blog.myfitnesspal.com/wp-content/uploads/2020/04/Split-Squat.gif';
	const altText4 =
		'woman holding kettlebell at chest while squatting in a lunge position';
	const exerciseName5 = 'DUMBBELL HAMMER CURLS';
	const workoutPhoto5 =
		'https://blog.myfitnesspal.com/wp-content/uploads/2018/02/0219_MyFitnessPal_Dumbbell-Hammer-Curls_resize.gif';
	const altText5 = 'woman curling a dumbbell in each hand';
	const exerciseName6 = 'LYING DUMBBELL TRICEPS EXTENSION (SKULL CRUSHERS)';
	const workoutPhoto6 =
		'https://blog.myfitnesspal.com/wp-content/uploads/2020/12/05-Lying-Down-Dumbbell-Tricep-Extension.gif';
	const altText6 =
		'woman laying on bench with elbows pointing up raising dumbbells from beside head to overhead';
	const exerciseName7 = 'PULLUPS';
	const workoutPhoto7 =
		'https://blog.myfitnesspal.com/wp-content/uploads/2020/03/0219_MyFitnessPal_Pullup-resize2.gif';
	const altText7 = 'woman hanging from bar and pulling herself up';
	const exerciseName8 = 'STABILITY BALL KNEE TUCKS (JACKKNIVES)';
	const workoutPhoto8 =
		'https://blog.myfitnesspal.com/wp-content/uploads/2018/07/Stability-Ball-Jackknives.gif';
	const altText8 =
		'woman in plank position with ankles on ball, curling knees to chest';

	// -------------------------
	// SCROLL DOWN TO MANUALLY ENTER ADDITIONAL WORKOUT DESCRIPTION
	// -------------------------

	return (
		<div id='pageContainer'>
			<div id='sectionTitle'>{sectionType}</div>
			<div id='workoutTitle'>{workoutTitle}</div>
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
			<div id='date'>Published: {workoutDate}</div>
			<p id='description1' className='workoutDescription'>
				{workoutDescription1}
			</p>

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

			<div id='title1' className='workoutTitle'>
				{title1}
			</div>
			<p className='workoutDescription'>
				At its core, it’s 21 reps divided into 3 sets of 7 reps. The first 7
				reps are partials focusing on the first half of the range of motion,
				from start to midpoint. The second 7 reps are another set of partials,
				exploring the second half, from midpoint to ending. For the final 7
				repetitions, the exercise is completed in its entirety. For bicep curls,
				you’d start with a straight arm, up to 90 degrees for the first 7, then
				from 90 degrees to fully flexed for the second 7 and the full move for
				the final set.
			</p>
			<div id='title2' className='workoutTitle'>
				{title2}
			</div>
			<p className='workoutDescription'>
				At its core, it’s 21 reps divided into 3 sets of 7 reps. The first 7
				reps are partials focusing on the first half of the range of motion,
				from start to midpoint. The second 7 reps are another set of partials,
				exploring the second half, from midpoint to ending. For the final 7
				repetitions, the exercise is completed in its entirety. For bicep curls,
				you’d start with a straight arm, up to 90 degrees for the first 7, then
				from 90 degrees to fully flexed for the second 7 and the full move for
				the final set.
			</p>
			<p className='workoutDescription'>
				Important note: Due to the high volume of these sets and exercises,
				you’ll need to use lighter weights. Like anything new, start light and
				safe, and build as you gain confidence.
			</p>
			<img id='image1' src={initialWorkoutPhoto1} alt={altText} />
			<div id='title3' className='workoutTitle'>
				{title3}
			</div>
			<p className='workoutDescription'>
				<strong>{exerciseName1}</strong>
			</p>
			<img src={workoutPhoto1} alt={altText1} />
			<p className='workoutDescription'>
				<strong>The move:</strong> &nbsp;Hold a dumbbell vertical by one end up
				against your chest. Your feet should be a little wider than
				shoulder-width apart and toes turned out slightly (the less mobile your
				hips, the more the toes will need to turn out). Drop your hips straight
				down with your chest open and shoulders anchored down and back. Pretend
				you are separating the floor with your feet and engage your glutes as
				you power back up to the starting position.
			</p>
			<p className='workoutDescription'>
				<strong>{exerciseName2}</strong>
			</p>
			<img src={workoutPhoto2} alt={altText2} />
			<p className='workoutDescription'>
				<strong>The move:</strong> &nbsp;Grab two dumbbells and safely lay on a
				bench or the ground. Press both bells up toward the ceiling, then lower
				them down, stopping with the dumbbells about an inch above your chest.
			</p>
			<p className='workoutDescription'>
				<strong>{exerciseName3}</strong>
			</p>
			<img src={workoutPhoto3} alt={altText3} />
			<p className='workoutDescription'>
				<strong>The move:</strong> &nbsp;While holding a dumbbell in your left
				hand, position your right hand and right knee on a bench or table with
				your left foot planted firmly on the ground. Ensure the spine is flat.
				Engage behind the left shoulder blade and lift the dumbbell up to your
				ribcage. Lower slowly and repeat.
			</p>
			<p className='workoutDescription'>
				<strong>{exerciseName4}</strong>
			</p>
			<img src={workoutPhoto4} alt={altText4} />
			<p className='workoutDescription'>
				<strong>The move:</strong> &nbsp;Begin in a split stance with about a
				foot of space laterally between your left and right foot. Holding the
				dumbbells in your hands, maintain a strong, solid posture. Bend both
				knees to 90 degrees, engage the glutes, and press up off of the floor.
			</p>
			<p className='workoutDescription'>
				<strong>{exerciseName5}</strong>
			</p>
			<img src={workoutPhoto5} alt={altText5} />
			<p className='workoutDescription'>
				<strong>The move:</strong> &nbsp;With dumbbells in each hand, begin with
				arms hanging down by your sides and palms facing your thighs. With fists
				stacked and core braced, bend your elbows and raise the thumb side of
				your hands toward your shoulders. Lower and repeat.
			</p>
			<p className='workoutDescription'>
				<strong>{exerciseName6}</strong>
			</p>
			<img src={workoutPhoto6} alt={altText6} />
			<p className='workoutDescription'>
				<strong>The move:</strong> &nbsp;Begin by lying on the ground or on a
				bench, a dumbbell in each hand, and arms extended directly overhead.
				Bending at the elbows, lower the dumbbells toward your temples and
				return to the starting position.
			</p>
			<p className='workoutDescription'>
				<strong>{exerciseName7}</strong>
			</p>
			<img src={workoutPhoto7} alt={altText7} />
			<p className='workoutDescription'>
				<strong>The move:</strong> &nbsp;Begin by hanging from a bar or assisted
				pullup machine with an overhand grip. With the body staying in a strong
				plank position, pull your chin above your hands, and then lower down to
				the starting position with control.
			</p>
			<p className='workoutDescription'>
				<strong>{exerciseName8}</strong>
			</p>
			<img src={workoutPhoto8} alt={altText8} />
			<p className='workoutDescription'>
				<strong>The move:</strong> &nbsp;Place the stability ball at your shins,
				hands on the floor, and press up into a strong and straight plank
				position. Ensure the hips never sag, as this can lead to back pain.
				Simultaneously pressing into the floor with your hands and onto the ball
				with your shins, tuck both knees into your chest and return to the plank
				position. Your hips should elevate slightly during this movement.
			</p>

			<div id='workoutSection'>
				<div id='block26' className='instructionItem'>
					<div id='signup-bar'>
						<h1 id='signup-header-h1'>SAVE YOUR FAVORITE RECIPES</h1>
						<h3 id='signup-header-h3'>
							Create a FREE account for quick & easy access
						</h3>
						<div id='signup-bar-inputs'>
							<input id='signUpEmailField' type='text' />
							<button id='signUpButton'>START SAVING</button>
						</div>
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
					<div id='block33' className='footerAuthInfo'></div>
				</div>
				<div id='block34'>Related Workouts</div>
				<div id='footerLinkContainer'>
					<div id='block35' className='footerLinks'>
						<Link to='/threeDayTotalBody'>
							<SingleSquare
								url='https://blog.myfitnesspal.com/wp-content/uploads/2021/03/MFP-3-Day-Total-Body-Strength-Workout-featured-930x550.jpg'
								section='Home Workouts'
								title='3-Day Total-Body Strength Workout'
								author='Shana Verstegen'
							/>
						</Link>
					</div>
					<div id='block36' className='footerLinks'>
						<Link to='/oneDumbbellTotalBody'>
							<SingleSquare
								url='https://blog.myfitnesspal.com/wp-content/uploads/2021/02/UACF-1-Week-1-Dumbbell-Total-Body-01-930x550.jpg'
								section='Home Workouts'
								title='1-Week, 1-Dumbbell Total-Body Workout'
								author='Shana Verstegen'
							/>
						</Link>
					</div>
					<div id='block37' className='footerLinks'>
						<Link to='/oneKettlebellLowerBody'>
							<SingleSquare
								url='https://blog.myfitnesspal.com/wp-content/uploads/2021/01/UACF-Kettlebell-Workout-Guide-featured-01-930x550.jpg'
								section='Home Workouts'
								title='1-Week, 1-Kettlebell Lower-Body Workout Guide'
								author='Shana Verstegen'
							/>
						</Link>
					</div>
					<div id='block38' className='footerLinks'>
						<Link to='/totalBody2021'>
							<SingleSquare
								url='https://blog.myfitnesspal.com/wp-content/uploads/2020/12/MFP-2021-New-Year-Workout-Guide-2-featured-930x550.jpg'
								section='Home Workouts'
								title='Your Total Body (20)21 New Year Workout Guide'
								author='Shana Verstegen'
							/>
						</Link>
					</div>
					<div id='block39' className='footerLinks'>
						<Link to='/holidayAMRAP'>
							<SingleSquare
								url='https://blog.myfitnesspal.com/wp-content/uploads/2020/12/MFP-Holiday-AMRAP-3-03-930x550.jpg'
								section='Home Workouts'
								title='12 Days of Cheer: Holiday AMRAP'
								author='Shana Verstegen'
							/>
						</Link>
					</div>
					<div id='block40' className='footerLinks'>
						<Link to='/oneWeekCore'>
							<SingleSquare
								url='https://blog.myfitnesspal.com/wp-content/uploads/2020/12/UACF-1-Week-Core-Workout-Guide-01-930x550.jpg'
								section='Home Workouts'
								title='Your Quick and Easy 1-Week Core Workout Guide'
								author='Shana Verstegen'
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
								value={workoutTitle}
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

export default TotalBody2021;
