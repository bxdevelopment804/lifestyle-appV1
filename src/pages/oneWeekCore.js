import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import SingleSquare from '../shared/single-square';
import './generalWorkoutFormatting.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faPinterest } from '@fortawesome/free-brands-svg-icons';

const OneWeekCore = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const sectionType = 'home workouts';
	const workoutTitle = 'Your Quick and Easy 1-Week Core Workout Guide';
	const altText = 'Your Quick and Easy 1-Week Core Workout Guide';
	const authorName = 'Shana Verstegen';
	const authorNickname = 'MyFitnessPal';
	const authorPhoto =
		'https://blog.myfitnesspal.com/wp-content/uploads/2016/05/Shana-150x150.jpeg';
	const authorDescription =
		'Shana is a TRX and American Council on exercise master instructor and a six-time world champion lumberjack athlete. She holds a degree in Kinesiology- Exercise Science from the University of Wisconsin, Madison and is a certified personal trainer through ACE, NASM and NFPT. An energetic and personable speaker, she is also the National spokesperson for the Huntington’s Disease Society of America.';
	const videoSource = 'https://www.youtube.com/embed/5iICtOPsHJU';
	const initialWorkoutPhoto1 =
		'https://blog.myfitnesspal.com/wp-content/uploads/2020/12/UACF-1-Week-Core-Workout-Guide-03-1465x1536.jpg';

	const title1 = 'The Exercises';

	const workoutDate = 'December 6, 2020';
	const workoutDescription1 =
		'Your “core” is much more complex than the infamous “six-pack abs” which refer to the muscle group known as the rectus abdominis. Dozens of muscles make up the core musculature, which has three-dimensional depth and creates or resists movement in all planes of motion.';
	const workoutDescription2 =
		'Proper core strength and function can contribute to:';
	const workoutDescription3 =
		'This quick and easy workout targets the essential stability from your deeper core muscles and the necessary mobility that the core can produce. Days 1, 2 and 3 repeat with higher volume during the second half of the week. If you experience back pain during any part of these exercises, please stop. This signifies that either the core is fatigued and no longer able to stabilize your spine in proper alignment or the form may not be spot on.';

	const exerciseName1 = 'MCGILL CURLUP';
	const workoutPhoto1 =
		'https://blog.myfitnesspal.com/wp-content/uploads/2020/05/04a-McGill-Curl-Up.gif';
	const altText1 = 'woman on back raising head and one leg';
	const exerciseName2 = 'SIDE PLANK';
	const workoutPhoto2 =
		'https://blog.myfitnesspal.com/wp-content/uploads/2020/08/Side-Plank.jpg';
	const altText2 = 'woman sideways on ankles and one elbow';
	const exerciseName3 = 'BIRD DOG';
	const workoutPhoto3 =
		'https://blog.myfitnesspal.com/wp-content/uploads/2020/05/19-Bird-dogs.gif';
	const altText3 = 'woman on hands and knees raising alternating arms and legs';
	const exerciseName4 = 'STIR THE POT';
	const workoutPhoto4 =
		'https://blog.myfitnesspal.com/wp-content/uploads/2020/04/Stir-The-Pot.gif';
	const altText4 = 'woman with elbows on ball moving elbows in circular motion';
	const exerciseName5 = 'STABILITY BALL KNEE TUCKS';
	const workoutPhoto5 =
		'https://blog.myfitnesspal.com/wp-content/uploads/2018/07/Stability-Ball-Jackknives.gif';
	const altText5 = 'woman with feet on ball bringing knees to chest';
	const exerciseName6 = 'STABILITY BALL OPPOSITE ARM/LEG RAISES';
	//No photo available for exercise #6.
	const exerciseName7 = 'SINGLE-ARM FARMER CARRY';
	const workoutPhoto7 =
		'https://blog.myfitnesspal.com/wp-content/uploads/2020/07/Single-Arm-Farmers-Carry.gif';
	const altText7 = 'woman walking with a kettlebell';
	const exerciseName8 = 'BICYCLE CRUNCHES';
	const workoutPhoto8 =
		'https://blog.myfitnesspal.com/wp-content/uploads/2020/06/Bicycles.gif';
	const altText8 =
		'woman on back bringing alternating elbows and knees together';
	const exerciseName9 = 'SUPERMAN';
	const workoutPhoto9 =
		'https://blog.myfitnesspal.com/wp-content/uploads/2020/06/Superman.gif';
	const altText9 = 'woman on chest raising hands and feet to air';
	const exerciseName10 = 'MOUNTAIN CLIMBERS';
	const workoutPhoto10 =
		'https://blog.myfitnesspal.com/wp-content/uploads/2020/06/Mountain-Climbers-updated.gif';
	const altText10 =
		'woman in plank position bringing alternating knees to chest';
	const exerciseName11 = 'PLANK WALKDOWN';
	const workoutPhoto11 =
		'https://blog.myfitnesspal.com/wp-content/uploads/2020/06/Plank-With-Reach.gif';
	const altText11 =
		'woman in plank position raising alternating arms to ceiling';

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
				<FontAwesomeIcon icon={faPinterest} className='titleIcon' />
				<FontAwesomeIcon icon={faFacebook} className='titleIcon' />
				<FontAwesomeIcon icon={faEnvelope} className='titleIcon' />
			</div>
			<div id='date'>Published: {workoutDate}</div>
			{/* <img id='image1' src={initialWorkoutPhoto1} alt={altText} /> */}
			<p id='description1' className='workoutDescription'>
				{workoutDescription1}
			</p>
			<p id='description2' className='workoutDescription'>
				{workoutDescription2}
			</p>
			<ul className='workoutListContainer'>
				<li className='workoutList'>Better posture</li>
				<li className='workoutList'>
					Improved power transfer and overall strength
				</li>
				<li className='workoutList'>Lower risk of injury</li>
				<li className='workoutList'>Protection of internal organs</li>
				<li className='workoutList'>Mobility of the trunk</li>
				<li className='workoutList'>Improved balance</li>
				<li className='workoutList'>
					Toned midsection (when paired with a healthy diet and tracking with
					MyFitnessPal)
				</li>
			</ul>
			<p id='description3' className='workoutDescription'>
				{workoutDescription3}
			</p>
			<img id='image1' src={initialWorkoutPhoto1} alt={altText} />

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

			<div id='title1' className='workoutTitle'>
				{title1}
			</div>
			<p className='workoutDescription'>
				<strong>{exerciseName1}</strong>
			</p>
			<img src={workoutPhoto1} alt={altText1} />
			<p className='workoutDescription'>
				<strong>The move:</strong> &nbsp;The McGill curlup differs from a crunch
				in that there should be no movement from the lumbar spine to protect the
				discs and promote proper posture. Begin by lying flat on your back with
				only one knee bent. Place your hands under the small of your back to
				monitor movement, ensuring your back does not touch the floor. Brace the
				core muscles and lift your head and tops of your shoulders, keeping the
				spine in neutral. For an added challenge, lift your elbows off of the
				floor.
			</p>
			<p className='workoutDescription'>
				<strong>{exerciseName2}</strong>
			</p>
			<img src={workoutPhoto2} alt={altText2} />
			<p className='workoutDescription'>
				<strong>The move:</strong> &nbsp;Line your elbow up with your shoulder
				and your shoulder with your hip and heel. With a very tight and braced
				core, push the ground away from you, staying active in the shoulder
				joint. Feet can be stacked or the top foot in front of the bottom,
				pressing the blades of the feet into the floor.
			</p>
			<p className='workoutDescription'>
				<strong>Option:</strong> &nbsp;To reduce the intensity, perform this
				exercise as a side bridge from the knees instead of the feet.
			</p>
			<p className='workoutDescription'>
				<strong>{exerciseName3}</strong>
			</p>
			<img src={workoutPhoto3} alt={altText3} />
			<p className='workoutDescription'>
				<strong>The move:</strong> &nbsp;The bird dog is a co-contraction of one
				leg and the opposite arm in the quadruped position. Begin by posturing
				the spine in neutral, with your hands directly underneath your shoulders
				and the knees directly underneath your hips. Find a neutral spine and
				gently brace your core. Sweep the floor with your hand and knee after
				each 10-second hold.
			</p>
			<p className='workoutDescription'>
				<strong>{exerciseName4}</strong>
			</p>
			<img src={workoutPhoto4} alt={altText4} />
			<p className='workoutDescription'>
				<strong>The move:</strong> &nbsp;Find a strong-and-straight plank
				position on a stability ball. Ensure your shoulders are directly over
				your elbows and away from the ears. While keeping the rest of the body
				completely stable, rotate your forearms in a clockwise motion, stop and
				unwind in a counterclockwise pattern.
			</p>
			<p className='workoutDescription'>
				<strong>Option:</strong> &nbsp;To decrease the intensity, this exercise
				can be done with your knees placed on the floor.
			</p>
			<p className='workoutDescription'>
				<strong>{exerciseName5}</strong>
			</p>
			<img src={workoutPhoto5} alt={altText5} />
			<p className='workoutDescription'>
				<strong>The move:</strong> &nbsp;Place the stability ball at your shins,
				hands on the floor, and press up into a strong-and-straight plank
				position. Ensure the hips never sag, as this can lead to back pain.
				Simultaneously press into the floor with your hands and onto the ball
				with your shins, tuck both knees into your chest and return to the plank
				position. Your hips should elevate slightly during this movement.
			</p>
			<p className='workoutDescription'>
				<strong>Option:</strong> &nbsp;The closer the ball is to your feet, the
				harder the exercise is. For an even greater challenge, this move can be
				done with only one leg.
			</p>
			<p className='workoutDescription'>
				<strong>{exerciseName6}</strong>
			</p>
			<p className='workoutDescription'>
				<strong>The move:</strong> &nbsp;Begin with your midsection on the
				stability ball and your weight equally distributed between your hands
				and feet with your gaze slightly out in front of your hands. Squeezing
				your backside, simultaneously raise the right arm and left leg. Lower
				both back to the floor and repeat on the other side.
			</p>
			<p className='workoutDescription'>
				<strong>Option:</strong> &nbsp;For a greater challenge, a full superman
				(both arms and legs raised at the same time) can be completed, but this
				is a tricky move!
			</p>
			<p className='workoutDescription'>
				<strong>{exerciseName7}</strong>
			</p>
			<img src={workoutPhoto7} alt={altText7} />
			<p className='workoutDescription'>
				<strong>The move:</strong> &nbsp;Grab a heavy dumbbell (or any weighted
				object) in one hand. While bracing the core and resisting side or
				forward bending, walk slow and controlled during the entire 30-second
				set. Repeat on the other side.
			</p>
			<p className='workoutDescription'>
				<strong>Option:</strong> &nbsp;If forearm strength is an issue, a
				weightlifting strap can be used on the working side.
			</p>
			<p className='workoutDescription'>
				<strong>{exerciseName8}</strong>
			</p>
			<img src={workoutPhoto8} alt={altText8} />
			<p className='workoutDescription'>
				<strong>The move:</strong> &nbsp;Begin by lying on your back with your
				head gently resting in your hands and feet about 4 inches off of the
				floor to create a strong abdominal brace. Lift your shoulders slightly
				off the floor and rotate your right shoulder toward your left knee.
				Without lowering back down to the ground, repeat on the other side.
			</p>
			<p className='workoutDescription'>
				<strong>Option:</strong> &nbsp;To reduce the intensity, place your feet
				flat on the floor and march your alternating knee toward the rotating
				shoulder.
			</p>
			<p className='workoutDescription'>
				<strong>{exerciseName9}</strong>
			</p>
			<img src={workoutPhoto9} alt={altText9} />
			<p className='workoutDescription'>
				<strong>The move:</strong> &nbsp;Start in a strong hand plank position,
				keeping the ears, hips, knees and heels in straight alignment. While
				maintaining this plank, bend one knee into your chest, followed by the
				other.
			</p>
			<p className='workoutDescription'>
				<strong>Option:</strong> &nbsp;This movement can be done in slow motion
				with a strong focus on abdominal contraction, or it can be sped up.
				However, as speed is added, the strong plank should be maintained.
			</p>
			<p className='workoutDescription'>
				<strong>{exerciseName10}</strong>
			</p>
			<img src={workoutPhoto10} alt={altText10} />
			<p className='workoutDescription'>
				<strong>The move:</strong> &nbsp;Start in a strong hand plank position,
				keeping the ears, hips, knees and heels in straight alignment. While
				maintaining this plank, bend one knee into your chest, followed by the
				other.
			</p>
			<p className='workoutDescription'>
				<strong>Option:</strong> &nbsp;This movement can be done in slow motion
				with a strong focus on abdominal contraction, or it can be sped up.
				However, as speed is added, the strong plank should be maintained.
			</p>
			<p className='workoutDescription'>
				<strong>{exerciseName11}</strong>
			</p>
			<img src={workoutPhoto11} alt={altText11} />
			<p className='workoutDescription'>
				<strong>The move:</strong> &nbsp;Begin in a high-plank position with the
				core and backside tight and in alignment. With minimal movement or
				rotation, drop down to the right forearm, followed by the left. Again,
				with a tight midsection, return to the high plank, one arm at a time.
			</p>
			<p className='workoutDescription'>
				<strong>Option:</strong> &nbsp;This move can also be performed from the
				knees.
			</p>

			<div id='workoutSection'>
				<div id='block26' className='instructionItem'>
					<div id='signup-bar'>
						<h1 id='signup-header-h1'>SAVE YOUR FAVORITE RECIPES</h1>
						<h3 id='signup-header-h3'>
							Create a FREE account for quick & easy access
						</h3>
						<div id='signup-bar-inputs'>
							<input type='text' />
							<button>START SAVING</button>
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
					<div id='commentText' className='replyItem'>
						Comment*
						<div id='commentBox' className='replyItem'></div>
					</div>
					<div id='nameText' className='replyItem'>
						Name*
						<div id='nameField' className='replyItem'></div>
					</div>
					<div id='emailText' className='replyItem'>
						Email*
						<div id='emailField' className='replyItem'></div>
					</div>
					<div id='postButton' className='replyItem'>
						Post Comment
					</div>
				</div>
			</div>
		</div>
	);
};

export default OneWeekCore;
