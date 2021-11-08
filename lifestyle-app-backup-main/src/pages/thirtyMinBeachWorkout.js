import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import SingleSquare from '../shared/single-square';
import './generalWorkoutFormatting.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faPinterest } from '@fortawesome/free-brands-svg-icons';

const ThirtyMinBeachWorkout = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const sectionType = 'total body';
	const workoutTitle = 'Thirty Minute Beach Workout';
	const altText = 'thirty minute beach workout';
	const authorName = 'Shana Verstegen';
	const authorNickname = 'MyFitnessPal';
	const authorPhoto =
		'https://blog.myfitnesspal.com/wp-content/uploads/2016/05/Shana-150x150.jpeg';
	const authorDescription =
		'Shana is a TRX and American Council on exercise master instructor and a six-time world champion lumberjack athlete. She holds a degree in Kinesiology- Exercise Science from the University of Wisconsin, Madison and is a certified personal trainer through ACE, NASM and NFPT. An energetic and personable speaker, she is also the National spokesperson for the Huntington’s Disease Society of America.';
	const videoSource = 'https://www.youtube.com/embed/5iICtOPsHJU';
	const initialWorkoutPhoto =
		'https://blog.myfitnesspal.com/wp-content/uploads/2021/07/30-Minute-Beach-Workout-752x472.jpg';
	const workoutPhoto1 =
		'https://blog.myfitnesspal.com/wp-content/uploads/2020/05/Bear-Crawl_GIF.gif';
	const exerciseName1 = 'BEAR CRAWL';
	const altText1 = 'woman crawling';
	const workoutPhoto2 =
		'https://blog.myfitnesspal.com/wp-content/uploads/2019/07/Single-Leg-Romanian.gif';
	const exerciseName2 = 'SINGLE-LEG HIP HINGE';
	const altText2 = 'woman bending at hips with dumbbells';
	const workoutPhoto3 =
		'https://blog.myfitnesspal.com/wp-content/uploads/2020/11/High-Knees.gif';
	const exerciseName3 = 'HIGH KNEES';
	const altText3 = 'woman running in place with high knees';
	const workoutPhoto4 =
		'https://blog.myfitnesspal.com/wp-content/uploads/2021/07/Runners-Stretch-with-Rotation.gif';
	const exerciseName4 = "RUNNER'S STRETCH WITH ROTATION";
	const altText4 = 'woman lunging on ground while rotating upwards';
	const workoutPhoto5 =
		'https://blog.myfitnesspal.com/wp-content/uploads/2020/06/Squat-Jumps.gif';
	const exerciseName5 = 'SQUAT JUMPS';
	const altText5 = 'woman bending knees then jumping in the air';
	const workoutPhoto6 =
		'https://blog.myfitnesspal.com/wp-content/uploads/2020/06/T-Pushups.gif';
	const exerciseName6 = 'T-PUSHUPS';
	const altText6 =
		'woman doing pushups then rotating alternating arms to the sky';
	const workoutPhoto7 =
		'https://blog.myfitnesspal.com/wp-content/uploads/2018/10/Walking-Lunge-GIF.gif';
	const exerciseName7 = 'WALKING LUNGES';
	const altText7 = 'woman taking exaggerated lunges';
	const workoutPhoto8 =
		'https://blog.myfitnesspal.com/wp-content/uploads/2020/06/Mountain-Climbers-updated.gif';
	const exerciseName8 = 'MOUNTAIN CLIMBERS';
	const altText8 =
		'woman in plank position, bringing alternating knees to chest';
	const workoutPhoto9 =
		'https://blog.myfitnesspal.com/wp-content/uploads/2020/06/Lateral-Skater-Jumps.gif';
	const exerciseName9 = 'LATERAL SKATER JUMPS';
	const altText9 = 'woman jumping from side to side';
	const exerciseWithoutPhoto1 = 'TOE WALKS';
	const exerciseWithoutPhoto2 = 'BACKWARD HEEL WALKS';

	const workoutDate = 'July 16, 2021';
	const workoutDescription1 =
		'Time on the beach is as synonymous with summer as watermelon and barbecues. If you’re lucky enough to vacation (or even live) near a beach, the sand is a perfect spot for a fun, functional and, if you are up for it, intense workout.';
	const workoutDescription2 =
		'The benefits of beach workouts are plentiful, but the real magic lies in the sand. The constant shifting of grains creates an unstable environment, so your nervous system recruits more muscles in your legs, ankles, hips and core to keep you stable. The sand also provides a soft landing surface, which reduces wear and tear on your joints during higher-impact activities. Lastly, the forgiving grainy surface absorbs more energy, so sand workouts can burn up to 50% more calories than their hard-surface counterparts.';
	const workoutDescription3 =
		'The best part? Once the workout is finished, you can run right into the water to splash around and cool off.';
	const workoutDescription4 =
		'The beach workout below takes just 30 minutes, requires zero equipment, and works your entire body.';

	const title1 = 'Warmup';
	const title2 = 'AMRAP';

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
			<p id='description2' className='workoutDescription'>
				{workoutDescription2}
			</p>
			<p id='description3' className='workoutDescription'>
				{workoutDescription3}
			</p>
			<p id='description4' className='workoutDescription'>
				{workoutDescription4}
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
				frameborder='0'
				allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
				allowfullscreen
			></iframe>
			<div id='title1' className='workoutTitle'>
				{title1}
			</div>
			<p className='workoutDescription'>
				Begin with these warmup exercises to get your body ready to move and
				accustomed to the instability of the sand.
			</p>
			<p className='workoutDescription'>
				Instructions: Perform 30 seconds of each move, with a minimum of 30
				seconds of rest between movements.
			</p>
			<div className='workoutSubtitle'>{exerciseName1}</div>
			<p className='workoutDescription'>
				Move like a Navy Seal right off the bat with this core-engaging
				functional move.
			</p>
			<img id='image1' src={workoutPhoto1} alt={altText1} />
			<div className='workoutDescription'>
				<strong>The Move:</strong> &nbsp;Begin on your hands and knees. Elevate
				your knees about 2 inches off the sand. Move your right hand and left
				foot forward in a crawling motion, keeping your hips lower than your
				shoulders. Then, move your left hand and right foot forward, and repeat
				this sequence in a slow and controlled manner.
			</div>
			<div className='workoutSubtitle'>{exerciseName2}</div>
			<p className='workoutDescription'>
				Plant one foot in the sand and feel your stabilizing muscles fire up as
				you balance and move at the hip.
			</p>
			<img id='image2' src={workoutPhoto2} alt={altText2} />
			<div className='workoutDescription'>
				<strong>The Move:</strong> &nbsp;Stand on your right foot and raise your
				left foot slightly off the ground behind you. Maintain a neutral spine
				and a slight bend in your right leg as you hinge forward, keeping your
				hips square with the ground. Try to touch the ground with your left hand
				(or go as low as you can), then reverse the movement back to the
				starting position. After 30 seconds, switch legs and repeat on the other
				side.
			</div>
			<div className='workoutSubtitle'>{exerciseName3}</div>
			<p className='workoutDescription'>
				It’s time to feel how quickly the sand can elevate your heart rate!
			</p>
			<img id='image3' src={workoutPhoto3} alt={altText3} />
			<div className='workoutDescription'>
				<strong>The Move:</strong> While maintaining upright posture, lift one
				knee toward your chest, followed by the other. The quicker you switch
				legs, the more difficult the move is. If going fast has too much impact
				or stability is a problem, slow the move into a high-knee march.
			</div>
			<div className='workoutSubtitle'>{exerciseName4}</div>
			<p className='workoutDescription'>
				This is an all-inclusive stretch that also engages your core.
			</p>
			<img id='image4' src={workoutPhoto4} alt={altText4} />
			<div className='workoutDescription'>
				<strong>The Move:</strong> &nbsp; Begin in a strong high plank, and step
				your right foot to the outside of your right hand. Raise your right arm
				straight up to the ceiling as you rotate your upper body and shoulders
				to the right. Your head and neck should follow the rotation of your
				spine. Hold this pose for a few moments. Step back to the plank, and
				repeat on the other side.
			</div>
			<div className='workoutSubtitle'>{exerciseWithoutPhoto1}</div>
			<p className='workoutDescription'>
				Take advantage of the sand for some ankle-joint stability and
				calf-muscle strengthening with this exercise.
			</p>
			<div className='workoutDescription'>
				<strong>The Move:</strong> &nbsp; Stand on your toes as you elevate your
				heels off the ground. While keeping your legs straight, walk forward for
				30 seconds.
			</div>
			<div className='workoutSubtitle'>{exerciseWithoutPhoto2}</div>
			<p className='workoutDescription'>
				Walking backward on your heels is great for strengthening the anterior
				tibialis muscle. This helps improve ankle stability and has the added
				bonus of helping to prevent shin splints.
			</p>
			<div className='workoutDescription'>
				<strong>The Move:</strong> &nbsp; With a tall, upright posture, lift the
				front of both feet off the ground and walk backward with control for 30
				seconds.
			</div>
			<div id='title2' className='workoutTitle'>
				{title2}
			</div>
			<p className='workoutDescription'>
				The main workout is an AMRAP (As Many Rounds As Possible) format. This
				challenges your endurance and willpower!
			</p>
			<p className='workoutDescription'>
				<i>Instructions:</i> &nbsp; Perform 10 reps of each exercise (or a
				modified version of the exercise, if needed), then move to the next
				exercise. When you get to the last exercise (skater leaps), come back to
				the top of the list (squat jumps) and continue. Complete as many rounds
				as possible for 10 minutes. Take a 5-minute break to walk around,
				stretch, hydrate and recover. Repeat one more 10-minute AMRAP, aiming to
				surpass the number of rounds achieved in the first set.
			</p>
			<div className='workoutSubtitle'>{exerciseName5}</div>
			<p className='workoutDescription'>
				Adjust your swimsuit, plant your feet in the sand, move those hips as
				low as they can go and let the sand absorb your landings.
			</p>
			<img id='image5' src={workoutPhoto5} alt={altText5} />
			<div className='workoutDescription'>
				<strong>The Move:</strong> &nbsp; Stand with your feet slightly wider
				than shoulder-width apart. Drive your arms back and sink your hips down
				and back. Simultaneously press your feet through the ground, drive your
				arms up and jump off the ground. Immediately absorb the landing by
				bending at the knees, hips and ankles upon impact, ending back in the
				squat position. Repeat for 10 reps.
			</div>
			<div className='workoutSubtitle'>{exerciseName6}</div>
			<p className='workoutDescription'>
				Performing pushups in the sand, especially with added rotation, aids in
				shoulder and core strength and stability. Be careful not to let sand
				fall off your hands into your eyes.
			</p>
			<img id='image6' src={workoutPhoto6} alt={altText6} />
			<div className='workoutDescription'>
				<strong>The Move:</strong> &nbsp; Begin in a high-plank position, bend
				your elbows and begin to lower your chest until it’s 3–5 inches off the
				sand. Push back up to a high-plank position, and rotate your right hand
				toward the sky to hold a brief side plank. Return the right hand to the
				ground in a strong plank. Repeat the move, but raise the left hand
				during the next rep.
			</div>
			<div className='workoutSubtitle'>{exerciseName7}</div>
			<p className='workoutDescription'>
				Every step lands softly, but balance is the bigger challenge with this
				popular lunging move.
			</p>
			<img id='image7' src={workoutPhoto7} alt={altText7} />
			<div className='workoutDescription'>
				<strong>The Move:</strong> &nbsp; Stand with your hands on your hips or
				hanging loosely to your sides. While maintaining an upright chest, step
				one foot forward, landing in a 90/90 lunge position. Lower your back
				knee to about 2 inches off the sand, then push through your rear foot,
				returning to the starting position. Repeat this movement with the other
				foot, and switch feet as you walk. Avoid “walking on a balance beam,”
				and lower your body straight up and down like an elevator when lunging.
			</div>
			<div className='workoutSubtitle'>{exerciseName8}</div>
			<p className='workoutDescription'>
				This move gets your heart rate up quickly! For an added challenge, try
				dragging your toes through the sand as you pull your knees in.
			</p>
			<img id='image8' src={workoutPhoto8} alt={altText8} />
			<div className='workoutDescription'>
				<strong>The Move:</strong> &nbsp; Start in a high-plank position,
				keeping your head, hips, knees and heels in straight alignment. While
				maintaining this plank, bring one knee into your chest and return it to
				the starting position. Then, quickly bring the other knee into your
				chest. The quicker you do this move, the more difficult it is.
			</div>
			<div className='workoutSubtitle'>{exerciseName9}</div>
			<p className='workoutDescription'>
				You’ll feel this move in your glutes and hips as you press off the sand
				from side to side.
			</p>
			<img id='image9' src={workoutPhoto9} alt={altText9} />
			<div className='workoutDescription'>
				<strong>The Move:</strong> &nbsp; While standing on your left leg, leap
				laterally to the right, immediately bending at the knee and hip to
				absorb the landing. Simultaneously reach your left leg slightly behind
				you and tap it to the floor for stability. Repeat by pressing off your
				right leg and landing on your left. The quicker you do this move, the
				more difficult it is.
			</div>
			<div id='workoutSection'>
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

export default ThirtyMinBeachWorkout;
