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

const HolidayAMRAP = () => {
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
	const workoutTitle = '12 Days of Cheer: Holiday AMRAP';
	const altText = '12 Days of Cheer: Holiday AMRAP';
	const authorName = 'Shana Verstegen';
	const authorNickname = 'MyFitnessPal';
	const authorPhoto =
		'https://blog.myfitnesspal.com/wp-content/uploads/2016/05/Shana-150x150.jpeg';
	const authorDescription =
		'Shana is a TRX and American Council on exercise master instructor and a six-time world champion lumberjack athlete. She holds a degree in Kinesiology- Exercise Science from the University of Wisconsin, Madison and is a certified personal trainer through ACE, NASM and NFPT. An energetic and personable speaker, she is also the National spokesperson for the Huntington’s Disease Society of America.';
	const videoSource = 'https://www.youtube.com/embed/5iICtOPsHJU';
	const initialWorkoutPhoto1 =
		'https://blog.myfitnesspal.com/wp-content/uploads/2020/12/MFP-Holiday-AMRAP-3-03.jpg';
	const initialWorkoutPhoto2 =
		'https://blog.myfitnesspal.com/wp-content/uploads/2020/12/MFP-Holiday-AMRAP-4-01.jpg';
	const initialWorkoutPhoto3 =
		'https://blog.myfitnesspal.com/wp-content/uploads/2020/12/MFP-Holiday-AMRAP-3-02.jpg';

	const title1 = 'The Exercises';

	const workoutDate = 'December 13, 2020';
	const workoutDescription1 =
		'To some, the holidays are about partridges in pear trees, turtle doves and French hens, but this holiday workout is about planks, lunge jumps and inchworms in as many reps as possible (AMRAP).';
	const workoutDescription2 =
		'Dedicate 12 days in the month of December to not only focus on movement and health, but to also take a stab at new exercises — like walking, yoga, foam rolling, meditation or a virtual workout. Included in the 12-day programming is an entertaining “12 Days” AMRAP workout for some festive fitness fun.';
	const workoutDescription3 =
		'Complete the prescribed number of reps for each exercise and repeat the entire sequence as many times as possible for the allotted amount of time. Keep a strong focus on proper form and movement patterns, and rest when needed.';

	const exerciseName1 = 'PLANK';
	const workoutPhoto1 =
		'https://blog.myfitnesspal.com/wp-content/uploads/2019/08/Front-Plank-0005.jpg';
	const altText1 = 'woman in plank position';
	const exerciseName2 = 'LUNGE CYCLE JUMPS';
	const workoutPhoto2 =
		'https://blog.myfitnesspal.com/wp-content/uploads/2020/02/Plyo-Lunges.gif';
	const altText2 =
		'woman jumping from one lunge position to another, alternating lead legs';
	const exerciseName3 = 'INCHWORM';
	const workoutPhoto3 =
		'https://blog.myfitnesspal.com/wp-content/uploads/2020/01/Inchworm-GIF.gif';
	const altText3 =
		'standing woman placing hands on ground then walking forwards and backwards on hands';
	const exerciseName4 = 'T-PUSHUPS';
	const workoutPhoto4 =
		'https://blog.myfitnesspal.com/wp-content/uploads/2020/06/T-Pushups.gif';
	const altText4 =
		'woman doing pushups while bringing alternating hands to ceiling at top position';
	const exerciseName5 = 'BURPEES';
	const workoutPhoto5 =
		'https://blog.myfitnesspal.com/wp-content/uploads/2020/06/Burpee.gif';
	const altText5 = 'woman jumping in air then getting down in plank position';
	const exerciseName6 = 'LATERAL LUNGES';
	const workoutPhoto6 =
		'https://blog.myfitnesspal.com/wp-content/uploads/2020/06/Alternating-Lateral-Lunges.gif';
	const altText6 = 'woman with hands behind head lunging from side to side';
	const exerciseName7 = 'SQUAT JUMPS';
	const workoutPhoto7 =
		'https://blog.myfitnesspal.com/wp-content/uploads/2020/06/Squat-Jumps.gif';
	const altText7 = 'woman jumping up from squatted position';
	const exerciseName8 = 'MOUNTAIN CLIMBERS';
	const workoutPhoto8 =
		'https://blog.myfitnesspal.com/wp-content/uploads/2020/06/Mountain-Climbers-updated.gif';
	const altText8 =
		'woman in plank position bringing alternating knees to chest';
	const exerciseName9 = 'SUPERMAN';
	const workoutPhoto9 =
		'https://blog.myfitnesspal.com/wp-content/uploads/2020/06/Superman.gif';
	const altText9 = 'woman on chest raising hands and feet to air';
	const exerciseName10 = 'SINGLE-LEG DEADLIFT TO KNEE-DRIVE';
	const workoutPhoto10 =
		'https://blog.myfitnesspal.com/wp-content/uploads/2020/06/22-Single-Leg-Deadlift-to-Knee-Drive.gif';
	const altText10 =
		'woman bending at hip on one leg, then standing upright and bringing knee to chest';
	const exerciseName11 = 'SINGLE-LEG CALF RAISES';
	const workoutPhoto11 =
		'https://blog.myfitnesspal.com/wp-content/uploads/2020/07/Calf-Raises.gif';
	const altText11 = 'standing woman getting up on her toes';
	const exerciseName12 = 'BICYCLE CRUNCHES';
	const workoutPhoto12 =
		'https://blog.myfitnesspal.com/wp-content/uploads/2020/06/Bicycles.gif';
	const altText12 =
		'woman on back bringing alternating knees and elbows together';

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
			<img id='image2' src={initialWorkoutPhoto2} alt={altText} />
			<p id='description3' className='workoutDescription'>
				{workoutDescription3}
			</p>
			<img id='image3' src={initialWorkoutPhoto3} alt={altText} />
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
				<strong>The move:</strong> &nbsp;On your forearms and toes, squeeze and
				brace all muscles of your body while maintaining a straight line from
				your ears, to hips, to knees, to heels.
			</p>
			<p className='workoutDescription'>
				<strong>Option:</strong> &nbsp;This can be done from the knees or
				elevated on a countertop to decrease the load.
			</p>
			<p className='workoutDescription'>
				<strong>{exerciseName2}</strong>
			</p>
			<img src={workoutPhoto2} alt={altText2} />
			<p className='workoutDescription'>
				<strong>The move:</strong> &nbsp;Begin in a lunge position with your
				right leg in front. Squeeze the glutes, keep your front knee aligned
				over your middle toes, drive your arms upward; jump and switch, landing
				with your left leg in front.
			</p>
			<p className='workoutDescription'>
				<strong>Option:</strong> &nbsp;Remove the jump and do alternating
				step-back lunges.
			</p>
			<p className='workoutDescription'>
				<strong>{exerciseName3}</strong>
			</p>
			<img src={workoutPhoto3} alt={altText3} />
			<p className='workoutDescription'>
				<strong>The move:</strong> &nbsp;Begin standing tall and fold forward,
				keeping your knees straight. Walk your hands forward into a strong high
				plank. After a brief squeeze, walk your hands back to your feet and
				stand.
			</p>
			<p className='workoutDescription'>
				<strong>Option:</strong> &nbsp;If reaching the ground and keeping your
				legs straight is a challenge, bring your feet into a straddle position,
				which allows for a better range of motion.
			</p>
			<p className='workoutDescription'>
				<strong>{exerciseName4}</strong>
			</p>
			<img src={workoutPhoto4} alt={altText4} />
			<p className='workoutDescription'>
				<strong>The move:</strong> &nbsp;Holding a strong plank position, lower
				your chest to 3–5 inches off the floor and return to plank position.
				Rotate one hand toward the sky and hold a brief side plank. Repeat and
				rotate onto the other hand during the next rep.
			</p>
			<p className='workoutDescription'>
				<strong>Option:</strong> &nbsp;Narrow your grip for a smaller base of
				support, or to decrease intensity, this pushup can be done on your
				knees, followed by a high plank and rotation.
			</p>
			<p className='workoutDescription'>
				<strong>{exerciseName5}</strong>
			</p>
			<img src={workoutPhoto5} alt={altText5} />
			<p className='workoutDescription'>
				<strong>The move:</strong> &nbsp;Begin in a tight, active plank position
				on the ground. Keeping your body in a straight line, lower down and
				press through the floor to complete a pushup. Immediately snap the feet
				below the body to land in a perfect squat position. While driving your
				arms up to the ceiling, press through the floor and engage through your
				glutes as you leave the ground for your jump. Hinge your hips back,
				place your hands on the floor, and hop back into the active plank.
			</p>
			<p className='workoutDescription'>
				<strong>Option:</strong> &nbsp;The pushup portion of the burpee can be
				done on your knees or removed all together. The jump can also be
				removed.
			</p>
			<p className='workoutDescription'>
				<strong>{exerciseName6}</strong>
			</p>
			<img src={workoutPhoto6} alt={altText6} />
			<p className='workoutDescription'>
				<strong>The move:</strong> &nbsp;Begin with your feet together and
				standing upright. Step wider than hip-width apart with your right leg,
				keeping the toes of your right foot pointed forward as you land.
				Immediately upon coming in contact with the floor, bend at the knee, and
				sink your right hip down and back. Press back to the starting position
				and repeat on the other side.
			</p>
			<p className='workoutDescription'>
				<strong>Option:</strong> &nbsp;Add a rotation over your top leg to
				increase the intensity or keep feet wide and remove the step to tone
				things down.
			</p>
			<p className='workoutDescription'>
				<strong>{exerciseName7}</strong>
			</p>
			<img src={workoutPhoto7} alt={altText7} />
			<p className='workoutDescription'>
				<strong>The move:</strong> &nbsp;Begin with your feet slightly wider
				than shoulder-width apart. Drive your arms back, and sink your hips down
				and back. Simultaneously press through the floor, drive your arms up and
				jump off of the ground. Immediately absorb the landing by bending at the
				knees, hips, and ankles upon impact, ending up back in the squat
				position. To make it easier, perform a regular bodyweight squat with no
				jump.
			</p>
			<p className='workoutDescription'>
				<strong>{exerciseName8}</strong>
			</p>
			<img src={workoutPhoto8} alt={altText8} />
			<p className='workoutDescription'>
				<strong>The move:</strong> &nbsp;Start in a strong hand plank position,
				keeping your ears, hips, knees and heels in straight alignment. While
				maintaining this plank, bend one knee into your chest, followed by the
				other. This movement can be done in slow motion with a strong focus on
				abdominal contraction or sped up. However, as speed is added, the strong
				plank should be maintained.
			</p>
			<p className='workoutDescription'>
				<strong>{exerciseName9}</strong>
			</p>
			<img src={workoutPhoto9} alt={altText9} />
			<p className='workoutDescription'>
				<strong>The move:</strong> &nbsp;Begin by lying on your stomach with
				your body long, arms overhead and toes pointed. Squeeze your glutes and
				lift your arms and legs off of the floor. Lower back down to almost
				touching, and repeat, arching back up into position. To make it easier,
				lift your opposite arm and leg together, rather than everything at once.
			</p>

			<p className='workoutDescription'>
				<strong>{exerciseName10}</strong>
			</p>
			<img src={workoutPhoto10} alt={altText10} />
			<p className='workoutDescription'>
				<strong>The move:</strong> &nbsp;Balance on one foot. Hinge at your hips
				and extend your arms out in front, maintaining a neutral spine and
				balance between reps (Don’t sit down unless you have to!). As you
				return, drive your extended knee up and in toward your chest while
				simultaneously standing upright. Add weights to up the intensity.
			</p>
			<p className='workoutDescription'>
				<strong>{exerciseName11}</strong>
			</p>
			<img src={workoutPhoto11} alt={altText11} />
			<p className='workoutDescription'>
				<strong>The move:</strong> &nbsp;Begin by standing on one foot, holding
				onto the wall for balance if necessary. Elevate your heel as high off of
				the ground as possible, then return to a point where it is almost
				touching the floor. For added range of motion and intensity, stand on
				the edge of a stair or stable and elevated object.
			</p>
			<p className='workoutDescription'>
				<strong>{exerciseName12}</strong>
			</p>
			<img src={workoutPhoto12} alt={altText12} />
			<p className='workoutDescription'>
				<strong>The move:</strong> &nbsp;Begin by lying on your back with your
				head gently resting in your hands and feet about 4 inches off of the
				floor to create a strong abdominal brace. Lift your shoulders slightly
				off of the floor and rotate your right shoulder toward your left knee.
				Without lowering back down to the ground, repeat on the other side. To
				reduce the intensity, place your feet flat on the floor and march your
				alternating knee toward your rotating shoulder.
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

export default HolidayAMRAP;
