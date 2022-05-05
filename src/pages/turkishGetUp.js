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

const TurkishGetUp = () => {
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

	const sectionType = 'advanced';
	const workoutTitle =
		'The One Exercise You Should Add to Your Workout Routine';
	const altText = 'benefits of the turkish get-up';
	const authorName = 'Lauren Bedosky';
	const authorNickname = 'MyFitnessPal';
	const authorPhoto =
		'https://blog.myfitnesspal.com/wp-content/uploads/2018/03/Bedosky-headshot-150x150.jpg';
	const authorDescription =
		'Lauren is a freelance fitness writer who specializes in covering running and strength training topics. She writes for a variety of national publications, including Men’s Health, Runner’s World, SHAPE and Women’s Running. She lives in Brooklyn Park, Minnesota, with her husband and their three dogs.';
	const videoSource = 'https://www.youtube.com/embed/5iICtOPsHJU';
	const initialWorkoutPhoto =
		'https://blog.myfitnesspal.com/wp-content/uploads/2021/06/The-One-Exercise-You-Should-Add-to-Your-Workout-Routine-3-752x472.jpg';

	const title1 = 'The Benefits of the Turkish Get-Up';
	const title2 = 'What the Perfect Bodyweight Turkish Get-Up Looks Like';
	const title3 = 'Work Your Way to a Full Turkish Get-Up';
	const title4 = 'The Bottom Line';

	const workoutDate = 'June 11, 2021';
	const workoutDescription1 =
		'The Turkish get-up (TGU) is the total package when it comes to exercise. This full-body move takes you from lying flat on your back to standing upright, then back to lying flat.';
	const workoutDescription2 =
		'It may sound simple, but there’s a twist: You’re holding a weight overhead with one arm the entire time. This component makes the TGU a technical and challenging movement, but it’s a movement that’s well worth learning.';
	const workoutDescription3 =
		'Read on to learn what makes the TGU an exercise worth adding to your fitness routine. Then, assuming you’re ready to give it a go, use our tips to master it.';

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
			<p id='description2' className='workoutDescription'>
				{workoutDescription2}
			</p>
			<p id='description3' className='workoutDescription'>
				{workoutDescription3}
			</p>
			<img id='image1' src={initialWorkoutPhoto} alt={altText} />
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
				The TGU is a fluid movement that involves several steps. Every rep
				targets several muscle groups, builds full-body strength and stability,
				and gets you working in every plane of motion. It also requires your
				brain to participate so you can coordinate your limbs every step of the
				way. And, like most exercises that hit several large muscle groups, the
				TGU can get your heart rate up in a flash.
			</p>
			<p className='workoutDescription'>
				“The get-up is very special because even the individual pieces of the
				move are solid exercises in and of themselves,” says Adrienne Harvey, a
				kettlebell and calisthenics instructor. String them all together, and
				you’ll get a move that hits practically every muscle in your body.
			</p>
			<p className='workoutDescription'>
				The TGU is especially challenging for the shoulders, triceps, upper
				back, abdominals, obliques, glutes and quads. You don’t even need the
				kettlebell to feel the exercise, Harvey notes.
			</p>

			<div id='title2' className='workoutTitle'>
				{title2}
			</div>
			<img
				src='https://blog.myfitnesspal.com/wp-content/uploads/2019/08/Turkish-Get-Ups.gif'
				alt='woman standing up from laying position with kettlebell extended overhead in one arm'
			/>
			<p className='workoutDescription'>
				<strong>THE SETUP:</strong>
			</p>
			<p className='workoutDescription'>
				Lie on your back and bend your right knee, so your right foot is flat on
				the floor. Make a fist with your right hand and extend it toward the
				ceiling, making sure your right shoulder is firmly pressed into the
				ground, supporting your right arm. Let your left arm and leg spread out
				on the floor so they’re extended away from your midline at a
				30–45-degree angle.
			</p>
			<p className='workoutDescription'>
				<strong>PART ONE:</strong>
			</p>
			<p className='workoutDescription'>
				Leading with your chest, push through your right foot (especially the
				heel) and roll toward the left side until you’re propped up on your left
				elbow. “The movement is more of a ‘roll-up’ than a ‘sit-up,’” says
				Harvey. Continue rolling upward until your left arm is straight, still
				holding your fist straight overhead. Keep your gaze on your fist the
				entire time and don’t let your left leg or foot leave the ground.
			</p>
			<p className='workoutDescription'>
				<strong>PART TWO:</strong>
			</p>
			<p className='workoutDescription'>
				While still looking at your fist, press through your left hand and right
				foot to lift your hips off the floor. Lift just enough to sweep the left
				leg under the body and place your left knee on the ground where you were
				just seated. “The body then shifts slightly so that the raised arm is
				directly over the hand on the ground,” says Harvey. Then, pivot your
				left knee to windshield-wiper your lower left leg directly behind you.
				Tuck your left toes under so you end in a kneeling lunge position with
				your fist still overhead.
			</p>
			<p className='workoutDescription'>
				<strong>PART THREE:</strong>
			</p>
			<p className='workoutDescription'>
				Look ahead, and then push off your toes to stand up from the lunge.
			</p>
			<p className='workoutDescription'>
				<strong>PART FOUR:</strong>
			</p>
			<p className='workoutDescription'>
				Reverse the sequence by first stepping back from the standing position
				into a wide lunge, “making sure to give ourselves the proper amount of
				room to correctly come to the ground with control,” says Harvey. Keep
				reversing the movement step by step until you return to the starting
				position.
			</p>
			<p className='workoutDescription'>
				Once you’ve mastered the bodyweight version, do the TGU while balancing
				a shoe or yoga block on top of your knuckles. “No cheating with the
				thumb!” says Harvey.
			</p>
			<p className='workoutDescription'>
				Finally, practice the TGU with a light kettlebell or dumbbell. If you
				can, have an experienced trainer watch you the first time in case you
				lose control of the kettlebell while it’s overhead. Hopefully, however,
				you’ve selected a weight you can manage. Trying to chase a heavy weight
				before you’re ready is incredibly dangerous and “totally not worth it,”
				says Harvey.
			</p>

			<div id='title3' className='workoutTitle'>
				{title3}
			</div>
			<p className='workoutDescription'>
				The TGU is a complex exercise with tons of moving parts. One of the best
				ways to learn it is to break it down.
			</p>
			<p className='workoutDescription'>
				“Learning the get-up in pieces (and then putting the pieces together in
				later workouts) is one of my favorite ways to teach the get-up to people
				who might otherwise get frustrated or overwhelmed by it,” says Harvey.
			</p>
			<p className='workoutDescription'>
				So, if you’re mystified by the TGU, start by practicing these
				components.
			</p>
			<p className='workoutDescription'>
				<strong>PUSH AND ROLL</strong>
			</p>
			<p className='workoutDescription'>
				Lie on your back and bend your right knee, so your right foot is flat on
				the floor. Make a fist with your right hand and extend it toward the
				ceiling, making sure your right shoulder is firmly pressed into the
				ground, supporting your right arm. Let your left arm and leg spread out
				on the floor, so they’re extended away from your midline at a
				30–45-degree angle.
			</p>
			<p className='workoutDescription'>
				Leading with your chest, push through your right foot (especially the
				heel) and roll toward the left side until you’re propped up on your left
				elbow. Continue rolling upward until your left arm is straight, still
				holding your fist straight overhead. Keep your gaze on your fist the
				entire time, and don’t let your left leg or foot leave the ground. Then,
				slowly lower back down to the floor. Repeat. To make it more
				challenging, add a kettlebell.
			</p>
			<p className='workoutDescription'>
				<strong>HALF-KNEELING KETTLEBELL WINDMILL</strong>
			</p>
			<p className='workoutDescription'>
				Begin in a half-kneeling position with a kettlebell in the racked
				position, and your thumb near or against your chest. The kettlebell
				should be on the same side as your front leg. From here, press the
				kettlebell overhead. Look up at the kettlebell. Shift your weight into
				your front hip and rotate your torso toward your front leg. As you
				rotate, slowly reach your free hand toward the ground. Keep your gaze on
				the kettlebell overhead and reach until the palm of your hand touches
				the ground. Reverse the movement with control to straighten your torso.
				Repeat, keeping the weight overhead.
			</p>
			<p className='workoutDescription'>
				<strong>SINGLE-ARM KETTLEBELL OVERHEAD REVERSE LUNGE</strong>
			</p>
			<p className='workoutDescription'>
				Stand with your feet hip-width apart. Hold a kettlebell in the racked
				position, thumb near or against your chest. Press the kettlebell toward
				the ceiling. With the weight overhead and your gaze fixed on an unmoving
				point, step your opposite foot back into a reverse lunge. The kettlebell
				should be on the same side as your front knee. Return to standing by
				pulling your body up through your front heel. Repeat, keeping the weight
				overhead.
			</p>

			<div id='title4' className='workoutTitle'>
				{title4}
			</div>

			<p className='workoutDescription'>
				The Turkish Get-up is a phenomenal total-body exercise with myriad
				benefits, including improving strength, balance and coordination. It’s
				important to learn the movement patterns of the exercise before diving
				in too quickly, however, so take it slow and lean on the expertise of a
				certified personal trainer, if accessible.
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
						<Link to='thirtyMinBeachWorkout'>
							<SingleSquare
								url='https://blog.myfitnesspal.com/wp-content/uploads/2021/07/30-Minute-Beach-Workout-930x550.jpg'
								section='Fitness'
								title='30-Minute Beach Workout'
								description='The beach is a perfect spot for a fun, functional workout.'
								author='Shana Verstegen'
							/>
						</Link>
					</div>
					<div id='block36' className='footerLinks'>
						<Link to='fourCommonStretches'>
							<SingleSquare
								url='https://blog.myfitnesspal.com/wp-content/uploads/2021/07/Four-Common-Types-of-Stretches-and-When-to-do-Each-930x550.jpg'
								section='Fitness'
								title='Four Common Types of Stretches and When to do Each'
								description="There's a time and place for each kind of stretch, but not all stretches are for everyone."
								author='Kevin Gray'
							/>
						</Link>
					</div>
					<div id='block37' className='footerLinks'>
						<Link to='/coldWeatherRunning'>
							<SingleSquare
								url='https://blog.myfitnesspal.com/wp-content/uploads/2021/01/How-to-Breathe-Better-During-Cold-Weather-Running-752x472.jpg'
								section='Fitness'
								title='How to Breathe Better During Cold-Weather Running'
								description="Breathing during winter runs is a struggle.  Here's how to cope."
								author='Lauren Bedosky'
							/>
						</Link>
					</div>
					<div id='block38' className='footerLinks'>
						<Link to='/turkishGetUp'>
							<SingleSquare
								url='https://blog.myfitnesspal.com/wp-content/uploads/2021/06/The-One-Exercise-You-Should-Add-to-Your-Workout-Routine-3-930x550.jpg'
								section='Fitness'
								title='The One Exercise You Should Add to Your Workout Routine'
								description='This technical and challenging movement is well worth learning.'
								author='Lauren Bedosky'
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

export default TurkishGetUp;
