import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import SingleSquare from '../shared/single-square';
import './generalWorkoutFormatting.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faPinterest } from '@fortawesome/free-brands-svg-icons';

const OneDumbbellTotalBody = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const sectionType = 'home workouts';
	const workoutTitle = 'One-Week, One-Dumbbell Total Body Workout';
	const altText = '1-Week, 1-Dumbbell Total-Body Workout';
	const authorName = 'Shana Verstegen';
	const authorNickname = 'MyFitnessPal';
	const authorPhoto =
		'https://blog.myfitnesspal.com/wp-content/uploads/2016/05/Shana-150x150.jpeg';
	const authorDescription =
		'Shana is a TRX and American Council on exercise master instructor and a six-time world champion lumberjack athlete. She holds a degree in Kinesiology- Exercise Science from the University of Wisconsin, Madison and is a certified personal trainer through ACE, NASM and NFPT. An energetic and personable speaker, she is also the National spokesperson for the Huntington’s Disease Society of America.';
	const videoSource = 'https://www.youtube.com/embed/5iICtOPsHJU';
	const initialWorkoutPhoto =
		'https://blog.myfitnesspal.com/wp-content/uploads/2021/02/UACF-1-Week-1-Dumbbell-Total-Body-chart-03.jpg';

	const title1 = 'Upper Body';
	const title2 = 'Lower Body';
	const title3 = 'Core';

	const workoutDate = 'February 28, 2021';
	const workoutDescription1 =
		'Most of us have at least one dumbbell handy. Tried and true, these handles with two equal weights attached on the ends have been around since the early 17th century and can help you become stronger, leaner and move better. This workout requires just one dumbbell for each exercise, allowing you to train unilaterally — each side individually — utilizing your core as your body coordinates movement with this single weight.';

	// UPPER BODY
	const workoutPhoto1 =
		'https://blog.myfitnesspal.com/wp-content/uploads/2020/08/3-point-row-with-Bench.gif';
	const exerciseName1 = 'THREE-POINT DUMBBELL ROW';
	const altText1 = 'woman rowing dumbbell from bench position';
	const workoutPhoto2 =
		'https://blog.myfitnesspal.com/wp-content/uploads/2018/06/single-arm-bench-press.gif';
	const exerciseName2 = 'SINGLE-ARM BENCH PRESS';
	const altText2 = 'woman on flat bench pressing one dumbbell upwards';
	const workoutPhoto3 =
		'https://blog.myfitnesspal.com/wp-content/uploads/2021/02/Half-Kneeling-Single-Arm-Overhead-Dumbell-Press.gif';
	const exerciseName3 = 'SINGLE-ARM OVERHEAD PRESS WITH DUMBBELL';
	const altText3 = 'woman kneeling while pressing one dumbbell overhead';
	const workoutPhoto4 =
		'https://blog.myfitnesspal.com/wp-content/uploads/2021/02/Dumbbell-Pullover.gif';
	const exerciseName4 = 'DUMBBELL PULLOVER';
	const altText4 =
		'woman laying on bench pulling a dumbbell from out past her head to up over her chest';

	// LOWER BODY
	const workoutPhoto5 =
		'https://blog.myfitnesspal.com/wp-content/uploads/2018/11/Goblet-Squat_GIF.gif';
	const exerciseName5 = 'GOBLET SQUAT';
	const altText5 = 'woman holding kettlebell while doing a squat';
	const workoutPhoto6 =
		'https://blog.myfitnesspal.com/wp-content/uploads/2020/02/Kettlebell-Thrusters.gif';
	const exerciseName6 = 'DUMBBELL THRUSTERS';
	const altText6 =
		'woman completing squat with dumbbells, then pressing overhead';
	const workoutPhoto7 =
		'https://blog.myfitnesspal.com/wp-content/uploads/2019/08/Reverse-Lunge-w-Overhead-Press.gif';
	const exerciseName7 = 'REVERSE LUNGE WITH OVERHEAD PRESS';
	const altText7 = 'woman lunging backwards while pressing a dumbbell overhead';
	const workoutPhoto8 =
		'https://blog.myfitnesspal.com/wp-content/uploads/2019/07/Single-Leg-Romanian.gif';
	const exerciseName8 = 'ONE-LEG, ONE-WEIGHT ROMANIAN DEADLIFT';
	const altText8 =
		'woman holding two dumbbells while hinging at hips on one leg';

	// CORE
	const workoutPhoto9 =
		'https://blog.myfitnesspal.com/wp-content/uploads/2020/07/Single-Arm-Farmers-Carry.gif';
	const exerciseName9 = 'SINGLE-ARM FARMERS CARRY';
	const altText9 = 'woman walking while holding kettlebells';
	const workoutPhoto10 =
		'https://blog.myfitnesspal.com/wp-content/uploads/2020/04/Dumbbell-snatch.gif';
	const exerciseName10 = 'DUMBBELL SNATCH';
	const altText10 =
		'woman picking up one dumbbell from between legs, then pressing overhead';
	const workoutPhoto11 =
		'https://blog.myfitnesspal.com/wp-content/uploads/2020/03/Kettlebell-Renegade-Row.gif';
	const exerciseName11 = 'DUMBBELL RENEGADE ROW';
	const altText11 =
		'woman in plank position on dumbbells alternately performing rows';
	const workoutPhoto12 =
		'https://blog.myfitnesspal.com/wp-content/uploads/2020/08/Side-Plank.jpg';
	const exerciseName12 = 'DUMBBELL SIDE PLANK WITH ROTATION';
	const altText12 =
		'woman in side plank position rotation around same axis as spine';

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
			<p id='description1' className='workoutDescription'>
				{workoutDescription1}
			</p>
			{/* <p id='description2' className='workoutDescription'>
				{workoutDescription2}
			</p>
			<p id='description3' className='workoutDescription'>
				{workoutDescription3}
			</p> */}
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
				<strong>The move:</strong> &nbsp;While holding a moderate-to-heavy
				dumbbell in the left hand, place your right hand and right knee on a
				bench. Establish a neutral spine, gaze forward slightly, engage behind
				the left shoulder blade, and pull the dumbbell to the rib cage. After
				the prescribed number of reps, repeat on the other side.
			</p>
			<p className='workoutDescription'>
				<strong>{exerciseName2}</strong>
			</p>
			<img src={workoutPhoto2} alt={altText2} />
			<p className='workoutDescription'>
				<strong>The move:</strong> &nbsp;Holding a moderate-weight dumbbell in
				your right hand, begin by laying on a flat bench with feet firmly
				planted on the floor. Keeping your core braced to avoid twisting and
				rotation, press the dumbbell directly above your shoulder. Lower it down
				to about 1-inch off of your chest and repeat.
			</p>
			<p className='workoutDescription'>
				<strong>{exerciseName3}</strong>
			</p>
			<img src={workoutPhoto3} alt={altText3} />
			<p className='workoutDescription'>
				<strong>The move:</strong> &nbsp;With a strong and stable stance, begin
				with a moderate-weight dumbbell at ear height. Avoiding twisting,
				arching and shoulder shrugging, press the dumbbell straight overhead.
				Lower back to the start and repeat.
			</p>
			<p className='workoutDescription'>
				<strong>{exerciseName4}</strong>
			</p>
			<img src={workoutPhoto4} alt={altText4} />
			<p className='workoutDescription'>
				<strong>The move:</strong> &nbsp;Begin by lying on a flat bench with a
				moderate-weight dumbbell held straight above your chest. With a slight
				elbow bend, keep your ribcage tucked in and core braced, lower the
				dumbbell just past your head. Without elevating your chest, bring the
				dumbbell back overhead.
			</p>

			<div id='title2' className='workoutTitle'>
				{title2}
			</div>
			<p className='workoutDescription'>
				<strong>{exerciseName5}</strong>
			</p>
			<img src={workoutPhoto5} alt={altText5} />
			<p className='workoutDescription'>
				<strong>The move:</strong> &nbsp;Hold a heavier dumbbell vertically by
				one end against your chest. Your feet should be a little wider than
				shoulder-width apart with toes turned out slightly. Drop the hips
				straight down to the floor with the chest open and shoulders anchored
				down and back. Pretend you are separating the floor with your feet and
				engage your glutes as you power back up to the starting position.
			</p>
			<p className='workoutDescription'>
				<strong>{exerciseName6}</strong>
			</p>
			<img src={workoutPhoto6} alt={altText6} />
			<p className='workoutDescription'>
				<strong>The move:</strong> &nbsp;Begin with a moderate-weight dumbbell
				in your right hand positioned near your right ear. Lower down into a
				squat, as low as you can safely go. Explosively press through the floor,
				stand up, and drive your arm up to the ceiling. Lower down, controlled,
				and repeat on the other side after the prescribed number of reps.
			</p>
			<p className='workoutDescription'>
				<strong>{exerciseName7}</strong>
			</p>
			<img src={workoutPhoto7} alt={altText7} />
			<p className='workoutDescription'>
				<strong>The move:</strong> &nbsp;Begin with a moderate-weight dumbbell
				in your right hand, racked next to your chin. As you step back with your
				right leg, simultaneously press the right hand to the ceiling. Lower the
				right knee down to form a 90/90 angle, squeeze the glutes and return to
				a stand. Rerack your dumbbell and repeat for the prescribed number of
				reps, then repeat on the other side.
			</p>
			<p className='workoutDescription'>
				<strong>{exerciseName8}</strong>
			</p>
			<img src={workoutPhoto8} alt={altText8} />
			<p className='workoutDescription'>
				<strong>The move:</strong> &nbsp;Begin by holding a dumbbell in the
				opposite hand of the planted foot. Keep a neutral spine and only a
				slight bend in your planted leg as you hinge forward, keeping square
				with the ground. Once the end range of a flat torso is reached, lower
				that leg back to the ground.
			</p>
			<p className='workoutDescription'>
				Take care to ensure a neutral spine throughout the entire movement.
				Forward flexion not only takes away from the exercise but also puts
				excessive strain on the lumbar spine.
			</p>

			<div id='title3' className='workoutTitle'>
				{title3}
			</div>
			<p className='workoutDescription'>
				<strong>{exerciseName9}</strong>
			</p>
			<img src={workoutPhoto9} alt={altText9} />
			<p className='workoutDescription'>
				<strong>The move:</strong> &nbsp;Place a dumbbell in one hand and let it
				hang to the side. Walk forward with a regular stride while minimizing
				rotation, swinging, depression or elevation of the weighted arm.
			</p>
			<p className='workoutDescription'>
				<strong>{exerciseName10}</strong>
			</p>
			<img src={workoutPhoto10} alt={altText10} />
			<p className='workoutDescription'>
				<strong>The move:</strong> &nbsp;Begin by holding a dumbbell in one
				hand. Hinge the hips back and lower the dumbbell to just above your
				knee. Simultaneously unhinge your hips, pull the dumbbell up along your
				body, and bring it overhead with speed and power.
			</p>
			<p className='workoutDescription'>
				<strong>{exerciseName11}</strong>
			</p>
			<img src={workoutPhoto11} alt={altText11} />
			<p className='workoutDescription'>
				<strong>The move:</strong> &nbsp;Begin in a straight, tight plank
				position with feet wide for support. Avoiding rotation, row one dumbbell
				up, set it down, slide it over with the opposite hand, and row on the
				other side. Avoid letting your hips sag (especially during the row) to
				prevent low-back pain and potential injury.
			</p>
			<p className='workoutDescription'>
				<strong>{exerciseName12}</strong>
			</p>
			<img src={workoutPhoto12} alt={altText12} />
			<p className='workoutDescription'>
				<strong>The move:</strong> &nbsp;Line your elbow up with your shoulder
				and your shoulder with your hip and heel. With a very tight and braced
				core, push the ground away from you, staying active in the shoulder
				joint. Reach your top arm under your body while simultaneously raising
				your hips. Return to a solid and straight plank position.
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

export default OneDumbbellTotalBody;
