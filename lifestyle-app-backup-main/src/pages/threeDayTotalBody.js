import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import SingleSquare from '../shared/single-square';
import './generalWorkoutFormatting.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faPinterest } from '@fortawesome/free-brands-svg-icons';

const ThreeDayTotalBody = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const sectionType = 'home workouts';
	const workoutTitle = 'Three Day Total-Body Strength Workout';
	const altText = '3-Day Total-Body Strength Workout';
	const authorName = 'Shana Verstegen';
	const authorNickname = 'MyFitnessPal';
	const authorPhoto =
		'https://blog.myfitnesspal.com/wp-content/uploads/2016/05/Shana-150x150.jpeg';
	const authorDescription =
		'Shana is a TRX and American Council on exercise master instructor and a six-time world champion lumberjack athlete. She holds a degree in Kinesiology- Exercise Science from the University of Wisconsin, Madison and is a certified personal trainer through ACE, NASM and NFPT. An energetic and personable speaker, she is also the National spokesperson for the Huntington’s Disease Society of America.';
	const videoSource = 'https://www.youtube.com/embed/5iICtOPsHJU';
	const initialWorkoutPhoto =
		'https://blog.myfitnesspal.com/wp-content/uploads/2021/03/MFP-3-Day-Total-Body-Strength-Workout-chart.jpg';

	const title1 = 'The Three-Day Strength Workout';
	const title2 = 'Day 1 Lower Body';
	const title3 = 'Day 2 Upper Body';
	const title4 = 'Day 3 Core Body';

	const workoutDate = 'March 19, 2021';
	const workoutDescription1 =
		'Long weekends tend to evoke images of vacations and quick getaways, but they can also be just what you need to jump-start a strength-training streak. Of course, you don’t need an official long weekend to do this workout. Just pick three consecutive days — you can even start on a Tuesday. You’re in control!';

	// DAY 1
	const workoutPhoto1 =
		'https://blog.myfitnesspal.com/wp-content/uploads/2020/05/01-Single-Leg-Deadlift.gif';
	const exerciseName1 = 'SINGLE-LEG ROMANIAN DEADLIFT';
	const altText1 = 'woman holding dumbbells hinging at hips on one leg';
	const workoutPhoto2 =
		'https://blog.myfitnesspal.com/wp-content/uploads/2018/11/Goblet-Squat_GIF.gif';
	const exerciseName2 = 'GOBLET SQUAT';
	const altText2 = 'woman holding kettlebell squat';
	const workoutPhoto3 =
		'https://blog.myfitnesspal.com/wp-content/uploads/2020/01/Dumbbell-step-ups.gif';
	const exerciseName3 = 'DUMBBELL STEPUPS';
	const altText3 = 'woman holding dumbbels stepping up on bench';
	const workoutPhoto4 =
		'https://blog.myfitnesspal.com/wp-content/uploads/2020/06/Alternating-Lateral-Lunges.gif';
	const exerciseName4 = 'LATERAL LUNGE';
	const altText4 = 'woman lunging side to side with hands behind head';

	// DAY 2
	const workoutPhoto5 =
		'https://blog.myfitnesspal.com/wp-content/uploads/2020/04/Dumbbell-snatch.gif';
	const exerciseName5 = 'DUMBBELL SNATCH';
	const altText5 =
		'woman picking up one dumbbell from between legs, then pressing overhead';
	const workoutPhoto6 =
		'https://blog.myfitnesspal.com/wp-content/uploads/2020/08/3-point-row-with-Bench.gif';
	const exerciseName6 = '3-POINT DUMBBELL ROW WITH BENCH';
	const altText6 = 'woman rowing dumbbell from bench position';
	const workoutPhoto7 =
		'https://blog.myfitnesspal.com/wp-content/uploads/2020/09/06-Dumbbell-Bench-Press.gif';
	const exerciseName7 = 'DUMBBELL BENCH PRESS';
	const altText7 = 'woman laying on bench pressing dumbbells';
	const workoutPhoto8 =
		'https://blog.myfitnesspal.com/wp-content/uploads/2020/02/Military-Press.gif';
	const exerciseName8 = 'DUMBBELL MILITARY PRESS';
	const altText8 = 'woman pressing dumbbell overhead from standing position';

	// DAY 3
	const workoutPhoto9 =
		'https://blog.myfitnesspal.com/wp-content/uploads/2020/06/Plank-With-Reach.gif';
	const exerciseName9 = 'PLANK WITH REACHES';
	const altText9 =
		'woman in pushup position lifting alternating arms in front of her';
	const workoutPhoto10 =
		'https://blog.myfitnesspal.com/wp-content/uploads/2020/06/03-side-plank-leg-raise.gif';
	const exerciseName10 = 'SIDE PLANK WITH LEG RAISES';
	const altText10 =
		'woman laying sideways on elbow lifting leg to sky and pointing arm to sky as well';
	const workoutPhoto11 =
		'https://blog.myfitnesspal.com/wp-content/uploads/2019/02/Hanging-Leg-Raises.gif';
	const exerciseName11 = 'HANGING LEG RAISES';
	const altText11 = 'woman hanging from bar lifting knees to chest';
	const workoutPhoto12 =
		'https://blog.myfitnesspal.com/wp-content/uploads/2020/06/Superman.gif';
	const exerciseName12 = 'SUPERMAN';
	const altText12 = 'woman laying on chest lifting hands and feet to the sky';

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
				The goal for this 3-day workout is strength, thus you are aiming for
				heavy weight, and longer rest breaks. Every exercise is completed 10
				times (or as close as you can get with good form) and 3 sets, separated
				by a minimum a 1-minute rest break.
			</p>
			<p className='workoutDescription'>
				Traditionally, it’s best to take at least a day between heavy
				resistance-training workouts to allow your muscles time to recover, heal
				and develop. However, if you focus on different areas of the body for
				your back-to-back lifting sessions, you can easily become a
				weekend-warrior for strength training.
			</p>
			<p className='workoutDescription'>
				The only tools necessary are dumbbells or other heavy objects you can
				hold onto safely. Begin with a minimum of 5 minutes of cardiovascular
				and mobility warmups before completing each workout.
			</p>
			<img id='image1' src={initialWorkoutPhoto} alt={altText} />

			<div id='title2' className='workoutTitle'>
				{title2}
			</div>
			<p className='workoutDescription'>
				<strong>{exerciseName1}</strong>
			</p>
			<img src={workoutPhoto1} alt={altText1} />
			<p className='workoutDescription'>
				Begin by holding a dumbbell in the opposite hand of the planted foot.
				Keep a neutral spine and only a slight bend in the planted leg as you
				hinge forward, keeping square with the ground. Once the end range of a
				flat torso is reached, lower that leg back to the ground.
			</p>
			<p className='workoutDescription'>
				<strong>Pro tip:</strong> &nbsp;Ensure a neutral spine throughout the
				entire movement. Forward flexion not only takes away from the exercise
				but also puts excessive strain on the lumbar spine.
			</p>

			<p className='workoutDescription'>
				<strong>{exerciseName2}</strong>
			</p>
			<img src={workoutPhoto2} alt={altText2} />
			<p className='workoutDescription'>
				Hold a heavier dumbbell vertically by one end against your chest. Your
				feet should be a little wider than shoulder-width apart with toes turned
				out slightly. Drop your hips straight down to the floor with your chest
				open and shoulders anchored down and back. Pretend you are separating
				the floor with your feet and engage your glutes as you power back up to
				the starting position.
			</p>
			<p className='workoutDescription'>
				<strong>{exerciseName3}</strong>
			</p>
			<img src={workoutPhoto3} alt={altText3} />
			<p className='workoutDescription'>
				Select a box, bench or step that is about knee height. Grasp a fairly
				heavy dumbbell in each hand and let your arms hang straight by your
				sides. Plant your right foot flat and firm on the box with toes pointing
				directly forward. Squeezing from the glutes on the right side, keep the
				right knee tracking directly over the middle toes, and press to a stand.
				Balance on top of the step for a moment, then slowly return to the
				starting position. After the prescribed number of reps, repeat on the
				other side.
			</p>
			<p className='workoutDescription'>
				<strong>{exerciseName4}</strong>
			</p>
			<img src={workoutPhoto4} alt={altText4} />
			<p className='workoutDescription'>
				Begin with your feet together and standing upright. Step wider than
				hip-width apart with your right leg, keeping the toes of your right foot
				pointed forward as you land. Immediately upon coming in contact with the
				floor, bend at the knee and sink your right hip down and back. Press
				back to the starting position. After the prescribed number of reps,
				repeat on the other side.
			</p>

			<div id='title3' className='workoutTitle'>
				{title3}
			</div>
			<p className='workoutDescription'>
				<strong>{exerciseName5}</strong>
			</p>
			<img src={workoutPhoto5} alt={altText5} />
			<p className='workoutDescription'>
				Begin with your feet together and standing upright. Step wider than
				hip-width apart with your right leg, keeping the toes of your right foot
				pointed forward as you land. Immediately upon coming in contact with the
				floor, bend at the knee and sink your right hip down and back. Press
				back to the starting position. After the prescribed number of reps,
				repeat on the other side.
			</p>
			<p className='workoutDescription'>
				<strong>{exerciseName6}</strong>
			</p>
			<img src={workoutPhoto6} alt={altText6} />
			<p className='workoutDescription'>
				While holding a moderate-to-heavy dumbbell in the left hand, place your
				right hand and right knee on a bench. Establish a neutral spine, gaze
				forward slightly, engage behind the left shoulder blade, and pull the
				dumbbell to the rib cage. After the prescribed number of reps, repeat on
				the other side.
			</p>
			<p className='workoutDescription'>
				<strong>{exerciseName7}</strong>
			</p>
			<img src={workoutPhoto7} alt={altText7} />
			<p className='workoutDescription'>
				Grab two dumbbells and safely lay on a bench or the ground. Press both
				bells up toward the ceiling, then lower them down, stopping with the
				dumbbells about an inch above your chest. Ensure the core stays braced,
				wrists are neutral, and the dumbbells go straight up toward the ceiling.
			</p>
			<p className='workoutDescription'>
				<strong>{exerciseName8}</strong>
			</p>
			<img src={workoutPhoto8} alt={altText8} />
			<p className='workoutDescription'>
				Begin with two dumbbells in line with your earlobes and hands turned in
				to face one another. Keeping a strong, stable core, press the dumbbells
				overhead and return them to the starting position. Avoid shoulder
				shrugging or arching your back.
			</p>

			<div id='title4' className='workoutTitle'>
				{title4}
			</div>
			<p className='workoutDescription'>
				<strong>{exerciseName9}</strong>
			</p>
			<img src={workoutPhoto9} alt={altText9} />
			<p className='workoutDescription'>
				Begin in a high plank or forearm plank position, with your body in a
				tight, straight line and feet about shoulder-width apart. With minimal
				movement in the rest of the body, extend one arm out in line with your
				shoulder, hold for a count of two, set it down and repeat on the other
				side
			</p>
			<p className='workoutDescription'>
				<strong>{exerciseName10}</strong>
			</p>
			<img src={workoutPhoto10} alt={altText10} />
			<p className='workoutDescription'>
				Line your elbow up with your shoulder and your shoulder with your hip
				and heel. With a tight, braced core, push the ground away from you,
				staying active in the shoulder joint. Squeeze your glutes and drive your
				hips forward. To add the leg raise, lift your top leg up about 6 inches
				and slightly back to engage your glutes. Lower and return.
			</p>
			<p className='workoutDescription'>
				<strong>{exerciseName11}</strong>
			</p>
			<img src={workoutPhoto11} alt={altText11} />
			<p className='workoutDescription'>
				Grab a pullup bar (or anything you can hang safely from) with your palms
				facing forward. Brace your core and lift your toes as high as possible.
				Return to the original position slow and controlled, avoiding any
				swinging. To cut back the intensity, consider bending your knees and
				pulling them to your chest in a tuck position.
			</p>
			<p className='workoutDescription'>
				<strong>{exerciseName12}</strong>
			</p>
			<img src={workoutPhoto12} alt={altText12} />
			<p className='workoutDescription'>
				Begin by lying on your stomach with your body long, arms overhead and
				toes pointed. Squeeze the glutes and lift your arms and legs off of the
				floor. Lower back down to almost touching and repeat, arching back up
				into position.
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

export default ThreeDayTotalBody;
