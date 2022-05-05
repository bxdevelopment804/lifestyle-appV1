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

const OneKettlebellLowerBody = () => {
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
	const workoutTitle = 'One-Week, One-Kettlebell Lower-Body Workout Guide';
	const altText = '1-Week, 1-Kettlebell Lower-Body Workout Guide';
	const authorName = 'Shana Verstegen';
	const authorNickname = 'MyFitnessPal';
	const authorPhoto =
		'https://blog.myfitnesspal.com/wp-content/uploads/2016/05/Shana-150x150.jpeg';
	const authorDescription =
		'Shana is a TRX and American Council on exercise master instructor and a six-time world champion lumberjack athlete. She holds a degree in Kinesiology- Exercise Science from the University of Wisconsin, Madison and is a certified personal trainer through ACE, NASM and NFPT. An energetic and personable speaker, she is also the National spokesperson for the Huntington’s Disease Society of America.';
	const videoSource = 'https://www.youtube.com/embed/5iICtOPsHJU';
	const initialWorkoutPhoto1 =
		'https://blog.myfitnesspal.com/wp-content/uploads/2021/01/UACF-Kettlebell-Workout-Guide-featured-01-752x473.jpg';
	const initialWorkoutPhoto2 =
		'https://blog.myfitnesspal.com/wp-content/uploads/2021/01/UACF-Kettlebell-Workout-Guide-2-04.jpg';

	const title1 = 'The Exercises';

	const workoutDate = 'January 30, 2021';
	const workoutDescription1 =
		'Working out with only one tool has its benefits. Keeping things simple requires less brainpower and saves time to spend more time thinking about what we may want to do for a workout. Training with a single piece of equipment makes lots of sense, too, as at-home workouts are surging in popularity.';
	const workoutDescription2 =
		'Whether you have one rusty kettlebell in your basement or you don’t feel like venturing too far from the kettlebell storage rack at your gym, this workout keeps it simple with one tool and one section of the body.';
	const workoutDescription3 =
		'Bonus: Kettlebells also provide the benefits of full-body integrated movement, improve strength and stability, are little to no impact, and offer a high caloric burn.';
	const workoutDescription4 =
		'This quick and easy workout involves four days of lower-body training alternating with a day of rest or another fitness activity you enjoy.';

	const exerciseName1 = 'SINGLE-ARM FARMERS CARRY';
	const workoutPhoto1 =
		'https://blog.myfitnesspal.com/wp-content/uploads/2020/07/Single-Arm-Farmers-Carry.gif';
	const altText1 = 'woman walking while holding kettlebells';
	const exerciseName2 = 'KETTLEBELL SWING';
	const workoutPhoto2 =
		'https://blog.myfitnesspal.com/wp-content/uploads/2020/05/Kettlebell-Swing_GIF.gif';
	const altText2 =
		'woman swinging kettlebell from between her knees to extended out in front of her shoulders';
	const exerciseName3 = 'KETTLEBELL GOBLET SQUAT';
	const workoutPhoto3 =
		'https://blog.myfitnesspal.com/wp-content/uploads/2018/11/Goblet-Squat_GIF.gif';
	const altText3 = 'woman holding kettlebell while doing a squat';
	const exerciseName4 = 'KETTLEBELL GOBLET FORWARD LUNGE';
	const workoutPhoto4 =
		'https://blog.myfitnesspal.com/wp-content/uploads/2020/05/Goblet-Forward-Lunge-1.gif';
	const altText4 = 'woman holding kettlebell at chest while lunging forward';
	const exerciseName5 = 'KETTLEBELL DEADLIFT';
	const workoutPhoto5 =
		'https://blog.myfitnesspal.com/wp-content/uploads/2020/02/Kettlebell-Deadlift.gif';
	const altText5 =
		'woman grabbing kettlebell from floor between her ankles, then standing while keeping a straight back';
	const exerciseName6 = 'KETTLEBELL CURTSY LUNGE';
	const workoutPhoto6 =
		'https://blog.myfitnesspal.com/wp-content/uploads/2020/08/Curtsy-Lunge.gif';
	const altText6 =
		'woman holding kettlebell while stepping backwards on an angle';

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
			<img id='image1' src={initialWorkoutPhoto1} alt={altText} />
			<p id='description1' className='workoutDescription'>
				{workoutDescription1}
			</p>
			<p id='description2' className='workoutDescription'>
				{workoutDescription2}
			</p>
			<p id='description3' className='workoutDescription'>
				{workoutDescription3}
			</p>
			<p id='description4' className='workoutDescription'>
				{workoutDescription4}
			</p>
			<img id='image2' src={initialWorkoutPhoto2} alt={altText} />
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
				<strong>{exerciseName1}</strong>
			</p>
			<img src={workoutPhoto1} alt={altText1} />
			<p className='workoutDescription'>
				Carry exercises are an excellent way to integrate a strong core brace
				with the lower body gait.
			</p>
			<p className='workoutDescription'>
				<strong>The move:</strong> &nbsp;For this exercise select a
				medium-to-heavy kettlebell, hold it strong in one hand and walk about
				15–30 yards with minimal upper body movement or swinging. Repeat on the
				other side.
			</p>
			<p className='workoutDescription'>
				<strong>{exerciseName2}</strong>
			</p>
			<img src={workoutPhoto2} alt={altText2} />
			<p className='workoutDescription'>
				Kettlebell swings are the “gold standard” kettlebell exercise and are
				what most people think of when they see a bell. They are ideal for
				developing lower-body power and create a massive calorie burn.
			</p>
			<p className='workoutDescription'>
				<strong>The move:</strong> &nbsp;Select a medium kettlebell weight. With
				an overhand grip, hold the handle of the bell with both hands. Keeping a
				neutral spine, hinge the hips back, squeeze your glutes, and unhinge
				your hips with speed and power. The bell should “float” out directly in
				front of the body. Return to the hinge and repeat.
			</p>
			<p className='workoutDescription'>
				<strong>{exerciseName3}</strong>
			</p>
			<img src={workoutPhoto3} alt={altText3} />
			<p className='workoutDescription'>
				By bringing the weight to the front of your body, kettlebell goblet
				squats help create a counterbalance to allow the squatter to feel safer
				and squat deeper.
			</p>
			<p className='workoutDescription'>
				<strong>The move:</strong> &nbsp;Select a heavy kettlebell and hold it
				with both hands on the horns. Keeping the shoulder blades down and back,
				and chest tall and proud, sink your hips as low as possible. Pressing
				hard into the floor, come back up to a stand.
			</p>
			<p className='workoutDescription'>
				<strong>{exerciseName4}</strong>
			</p>
			<img src={workoutPhoto4} alt={altText4} />
			<p className='workoutDescription'>
				Holding the kettlebell in the “goblet” position can help the user
				maintain a stronger and more stable upper body posture throughout the
				move.
			</p>
			<p className='workoutDescription'>
				<strong>The move:</strong> &nbsp;Begin in the same position as the
				goblet squat — holding onto the horns of the bell and chest tall and
				proud. Step the right leg forward and bend both knees to 90 degrees.
				Press the full right foot into the floor and return to a stand. Repeat
				on the other side.
			</p>
			<p className='workoutDescription'>
				<strong>{exerciseName5}</strong>
			</p>
			<img src={workoutPhoto5} alt={altText5} />
			<p className='workoutDescription'>
				This is a functional movement that maps directly to picking heavy things
				up and putting them back down — something most of us do daily. This
				particular movement also targets the backside of your body, the
				hamstrings and glutes.
			</p>
			<p className='workoutDescription'>
				<strong>The move:</strong> &nbsp;Begin with your heaviest kettlebell on
				the floor. Hinge forward, maintaining a neutral spine, and grab the
				handle of the bell. Keeping your shoulder blades down and back, squeeze
				your glutes, drive your hips forward and stand up without rounding your
				lower back. Lower down in the same fashion and repeat.
			</p>
			<p className='workoutDescription'>
				<strong>{exerciseName6}</strong>
			</p>
			<img src={workoutPhoto6} alt={altText6} />
			<p className='workoutDescription'>
				This exercise adds the element of rotation and lateral movement to these
				lower-body workouts, with a specific target to the gluteus medius, an
				important hip and knee stabilizer.
			</p>
			<p className='workoutDescription'>
				<strong>The move:</strong> &nbsp;Holding a medium-to-heavy kettlebell in
				your left hand, ground the full right foot and step the left leg behind
				the right. Lower the left knee down to the point it almost touches the
				floor and sits behind and past the right heel. Return to a stand and
				repeat.
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

export default OneKettlebellLowerBody;
