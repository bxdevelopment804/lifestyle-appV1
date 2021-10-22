import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import SingleSquare from '../shared/single-square';
import './generalWorkoutFormatting.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faPinterest } from '@fortawesome/free-brands-svg-icons';

const FourCommonStretches = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const sectionType = 'beginners';
	const workoutTitle = 'Four Common Types of Stretches and When to do Each';
	const altText = 'four common types of stretches';
	const authorName = 'Kevin Gray';
	const authorNickname = 'MyFitnessPal';
	const authorPhoto =
		'https://blog.myfitnesspal.com/wp-content/uploads/2016/05/kg-150x150.jpg';
	const authorDescription =
		'Kevin is a Dallas-based writer who spends the majority of his weekends on a bike. His less healthy pursuits can be found at Bevvy and Cocktail Enthusiast.';
	const videoSource = 'https://www.youtube.com/embed/5iICtOPsHJU';
	const initialWorkoutPhoto =
		'https://blog.myfitnesspal.com/wp-content/uploads/2021/07/Four-Common-Types-of-Stretches-and-When-to-do-Each.jpg';

	const workoutDate = 'July 9, 2021';
	const workoutDescription1 =
		'Whether you’re an elite athlete, weekend warrior, average gym-goer or just starting to exercise for the first time, you’ve probably tried stretching to loosen muscles before a workout or to help sore muscles recover. But what most people don’t know is there are many types of stretching and different recommendations on when to perform each, so the practice goes well beyond touching your toes.';
	const workoutDescription2 =
		'Depending on who you ask, there are multiple types of stretches, but the four common movement patterns include static, active, dynamic and ballistic stretching. Some are better for warming up before workouts, while others are recommended for cooling down afterward. To learn more, we spoke with a man who moves for a living: Anthony Crouchelli, founder of the.1method and Master Trainer at GRIT BXNG. Below, he explains the four movement patterns and what to know about each one.';

	const title1 = 'Static Stretching';
	const title2 = 'Active Stretching';
	const title3 = 'Dynamic Stretching';
	const title4 = 'Ballistic Stretching';
	const title5 = 'The Bottom Line';

	// -------------------------
	// SCROLL DOWN TO MANUALLY ENTER ADDITIONAL WORKOUT INFORMATION
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
				Static stretch patterns are built around holding a position for a
				duration of time,” says Crouchelli. Often performed while seated,
				standing or lying flat on your back, static stretches focus on
				lengthening the muscles by staying in one position, rather than through
				movement. Most experts suggest holding a static stretch for at least 30
				seconds.
			</p>
			<p className='workoutDescription'>
				<strong>Examples:</strong> &nbsp;Cobra pose; seated butterfly stretch
			</p>
			<p className='workoutDescription'>
				<strong>When to do it:</strong> &nbsp;Perform static stretches after
				your workout to help your body cool down and recover.
			</p>

			<div id='title2' className='workoutTitle'>
				{title2}
			</div>
			<p className='workoutDescription'>
				When you engage in active stretching, you use opposing muscles to
				stretch yourself without requiring any additional forces, says
				Crouchelli. Your quads may be working while your hamstrings stretch, so
				your body is playing an active role in the stretch. Active stretches
				typically include multiple repetitions and are held for shorter
				durations than static stretches.
			</p>
			<p className='workoutDescription'>
				<strong>Examples:</strong> &nbsp;Straight leg raises while lying on your
				back; seated wall angels
			</p>
			<p className='workoutDescription'>
				<strong>When to do it:</strong> &nbsp;These versatile stretches can be
				performed before or after workouts.
			</p>

			<div id='title3' className='workoutTitle'>
				{title3}
			</div>
			<p className='workoutDescription'>
				Studies show adding dynamic stretching to your warmup improves strength,
				agility and endurance. In these movement patterns, joints and muscles
				actively go through a full range of motion and may even mirror your
				workout — for example, walking lunges or standing knee raises before
				going for a jog. “Dynamic stretches are great for increasing range and
				mobility,” says Crouchelli.
			</p>
			<p className='workoutDescription'>
				<strong>Examples:</strong> &nbsp;Walking lunges with a twist; standing
				straight leg kicks
			</p>
			<p className='workoutDescription'>
				<strong>When to do it:</strong> &nbsp;Crouchelli recommends dynamic
				stretching for pre-game warmups, before workouts and on recovery days.
			</p>

			<div id='title4' className='workoutTitle'>
				{title4}
			</div>
			<p className='workoutDescription'>
				Ballistic stretches are similar to dynamic stretches, but they focus
				more on expanding your joints and muscles past their normal range of
				motion,” says Crouchelli. When performed safely with controlled
				movements, these stretches may lengthen and loosen muscles faster and
				further than other stretches. A BMJ study found ballistic stretching —
				often described as bouncing into and out of a stretched position —
				improved hamstring flexibility better than static stretching, but be
				careful not to overdo it. Ballistic stretching is often performed by
				athletes who wish to maximize their body’s capabilities, but because it
				carries a risk of injury, it’s not for everyone. Make sure your muscles
				are warmed up before giving it a try.
			</p>
			<p className='workoutDescription'>
				<strong>Examples:</strong> &nbsp;Sitting toe reaches; standing lunges;
				shoulder rotations
			</p>
			<p className='workoutDescription'>
				<strong>When to do it:</strong> &nbsp;Try ballistic stretching after
				your workout or on rest days (after warming up your muscles).
			</p>
			<div id='title5' className='workoutTitle'>
				{title5}
			</div>
			<p className='workoutDescription'>
				As you can see from the above, not all stretching is created equal.
				There’s a time and place for each kind of stretch, but not all
				stretching is for everyone. Take your time learning the movements, and
				ask for guidance from a certified personal trainer or coach if you’re
				unsure of the proper use or form of a movement.
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

export default FourCommonStretches;
