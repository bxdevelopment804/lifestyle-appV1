import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import SingleSquare from '../shared/single-square';
import './generalWorkoutFormatting.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faPinterest } from '@fortawesome/free-brands-svg-icons';

const ColdWeatherRunning = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const sectionType = 'running';
	const workoutTitle = 'How To Breathe Better During Cold-Weather Running';
	const altText = 'breathing during cold weather running';
	const authorName = 'Lauren Bedosky';
	const authorNickname = 'MyFitnessPal';
	const authorPhoto =
		'https://blog.myfitnesspal.com/wp-content/uploads/2018/03/Bedosky-headshot-150x150.jpg';
	const authorDescription =
		'Lauren is a freelance fitness writer who specializes in covering running and strength training topics. She writes for a variety of national publications, including Men’s Health, Runner’s World, SHAPE and Women’s Running. She lives in Brooklyn Park, Minnesota, with her husband and their three dogs.';
	const videoSource = 'https://www.youtube.com/embed/5iICtOPsHJU';
	const initialWorkoutPhoto =
		'https://blog.myfitnesspal.com/wp-content/uploads/2021/01/How-to-Breathe-Better-During-Cold-Weather-Running-752x472.jpg';

	const title1 = 'What To Know About Breathing During Cold-Weather Runs';
	const title2 = 'Other Ways To Make Your Cold-Weather Runs Safe and Fun';

	const workoutDate = 'January 28, 2021';
	const workoutDescription1 =
		'Any runner who braves the cold can attest to one thing: Breathing during winter runs is a struggle. And the more the temps drop, the harder — and more uncomfortable — it is.';
	const workoutDescription2 =
		'You can let the struggle keep you on the treadmill all winter. Or, you can figure out a way to work through it. After all, spending time outside can stave off dreaded cabin fever and keep your routine feeling fresh.';
	const workoutDescription3 =
		'Ready to head out? Here’s the scoop on how to breathe a little easier on your cold-weather runs.';

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
				Your breathing may change a little until you get used to running in
				colder temps. “However, you should try to breathe as normal as possible
				during your run to oxygenate your muscles,” says Nicole Gainacopulos, a
				certified strength and conditioning specialist and running coach in
				Milwaukee, Wisconsin. She trains her clients to breathe in through the
				nose for two counts, and out through the mouth for three counts.
			</p>
			<p className='workoutDescription'>
				So, how about that burning sensation runners often feel when cold air
				travels down their throat?
			</p>
			<p className='workoutDescription'>
				If you get hit with a burn in your throat, it’s tempting to buy into the
				idea that breathing cold air is bad for your lungs. But fortunately,
				this is just a myth.
			</p>
			<p className='workoutDescription'>
				“Breathing in cold air does not hurt your lungs,” says Kelly Mortenson,
				a USA track and field-certified running coach in Minnesota. Once you
				breathe in cold, dry air, it gets warmed and humidified through your
				nose and mouth, so it’s good to go by the time it gets to your lungs, he
				explains.
			</p>
			<p className='workoutDescription'>
				Of course, the downside of breathing cold air is your nose may get runny
				and your throat may feel scratchy. Using a breathable face mask or neck
				gaiter may help with the burning and scratching sensations by adding
				moisture to the air you’re inhaling. Plus, adding a barrier tames the
				initial shock of cold air.
			</p>
			<p className='workoutDescription'>
				But rest assured: The more you run in the cold, the more natural it
				feels, Gainacopulos says.
			</p>
			<p className='workoutDescription'>
				One caveat: If you experience chest tightness after warming up post-run,
				consider taking your runs indoors or seeking medical attention.
			</p>

			<div id='title2' className='workoutTitle'>
				{title2}
			</div>
			<p className='workoutDescription'>
				“The main thing is to have any exposed skin covered,” Mortenson says.
				Think: Face masks, neck gaiters, balaclavas, gloves and hats. If your
				nose gets runny, get in the habit of bringing a handkerchief, tissue or
				piece of cloth when you go out. Apply a thin layer of petroleum jelly to
				your skin to protect it from getting dry and chapped.
			</p>
			<p className='workoutDescription'>
				You can also make your cold-weather runs more enjoyable by investing in
				a great running jacket and a moisture-wicking base layer.
			</p>
			<p className='workoutDescription'>
				Gainacopulos recommends not worrying too much about your pace when you
				run in the cold. Pay attention to your effort, as opposed to trying to
				hit a certain time or distance. Instead, just try to enjoy your time in
				the fresh air — and the fact that you’re staying consistent with your
				running routine.
			</p>
			<p className='workoutDescription'>
				Plus, focusing on your surroundings instead of checking the time allows
				you to watch your step, helping you avoid a nasty tumble on black ice
				and slush.
			</p>
			<p className='workoutDescription'>
				Finally, be sure to stay on top of your water intake, because you can
				get dehydrated easily in the winter. “I carry water with me in the cold
				just as I would during the summer months,” Gainacopulos says.
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

export default ColdWeatherRunning;
