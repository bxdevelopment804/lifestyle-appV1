import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import SingleSquare from '../shared/single-square';
import './generalSelfCareFormatting.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faPinterest } from '@fortawesome/free-brands-svg-icons';

const HowSleepChanges = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const sectionType = 'self care';
	const articleTitle = 'How Sleep Changes as You Age';
	const altText = 'How Sleep Changes as You Age';
	const authorName = 'Kevin Gray';
	const authorNickname = 'MyFitnessPal';
	const authorPhoto =
		'https://blog.myfitnesspal.com/wp-content/uploads/2016/05/kg-150x150.jpg';
	const authorDescription =
		'Kevin is a Dallas-based writer who spends the majority of his weekends on a bike. His less healthy pursuits can be found at Bevvy and Cocktail Enthusiast.';
	const videoSource = 'https://www.youtube.com/embed/5iICtOPsHJU';
	const initialPhoto1 =
		'https://blog.myfitnesspal.com/wp-content/uploads/2021/05/How-Sleep-Changes-as-You-Age.jpg';

	const title1 = 'How Aging Affects Sleep';
	const title2 = 'Sleep Through The Decades';

	const articleDate = 'May 28, 2021';
	const articleDescription1 =
		'Infants often sleep up to 17 hours per day. No, they aren’t just lazy — they need it. School kids require more sleep than teenagers, and teens need more than adults. As we age, our sleep requirements shift, as does our circadian rhythm, which dictates when we feel alert and when we feel tired.';
	const articleDescription2 =
		'Lifestyle factors also change as we age, and these too can impact sleep. If you’re still growing or have a particularly demanding job — or exercise regimen — your body likely needs more sleep to aid its recovery and growth.';
	const articleDescription3 =
		'Considering that aging is tied to sleep concerns, and sleep issues are tied to myriad health problems from heart disease to weight gain, it pays to understand how sleep changes as you age.';

	// -------------------------
	// SCROLL DOWN TO MANUALLY ENTER ADDITIONAL WORKOUT DESCRIPTION
	// -------------------------

	return (
		<div id='pageContainer'>
			<div id='sectionTitle'>{sectionType}</div>
			<div id='articleTitle'>{articleTitle}</div>
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
						&nbsp;by <strong>{authorName}</strong>
					</div>
				</div>
			</div>
			<div id='media'>
				<FontAwesomeIcon icon={faPinterest} className='titleIcon' />
				<FontAwesomeIcon icon={faFacebook} className='titleIcon' />
				<FontAwesomeIcon icon={faEnvelope} className='titleIcon' />
			</div>
			<div id='date'>Published: {articleDate}</div>
			<img id='image1' src={initialPhoto1} alt={altText} />
			<p id='description1' className='articleDescription'>
				{articleDescription1}
			</p>
			<p id='description2' className='articleDescription'>
				{articleDescription2}
			</p>
			<p id='description3' className='articleDescription'>
				{articleDescription3}
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

			<div id='title1' className='articleTitle'>
				{title1}
			</div>
			<p className='articleDescription'>
				According to MedlinePlus, a service of the National Library of Medicine,
				many people experience more difficulty falling asleep and staying asleep
				as they get older, and they wake up earlier in the morning. Overall
				sleep time may decrease, even if time in bed does not.
			</p>
			<p className='articleDescription'>
				There’s a reason for this. According to the National Sleep Foundation,
				the body’s circadian rhythm experiences a “phase advance,” where it
				shifts forward in time with age. This phase advance is usually
				experienced as getting tired earlier in the day and waking up earlier in
				the morning. It also means older adults typically spend more time in the
				earlier, lighter stages of sleep and achieve less deep sleep throughout
				the night.
			</p>
			<p className='articleDescription'>
				But even though older people may be getting less sleep, it’s not because
				they’re wired to function on less. Older adults require the same amount
				of sleep as younger adults: roughly 7–9 hours each night.
			</p>

			<div id='title2' className='articleTitle'>
				{title2}
			</div>
			<p className='articleDescription'>
				In your 20s, you are more likely to be a night owl, preferring the
				evening hours over early mornings. You may even struggle to function
				early in the morning, which is a carryover from the post-puberty
				adolescent years. When you’re young, you can get away with less sleep,
				but this changes as the years go by, with more people developing a
				fondness for turning in early by the time they reach 30. Unfortunately,
				that’s about when total sleep time begins to decrease for most adults.
			</p>
			<p className='articleDescription'>
				Our 30s and 40s are often characterized by more demanding jobs, family
				lives and stress. We tend to fall into longer lifestyle patterns during
				these decades, too, with more structured routines. When those routines
				don’t prioritize sleep or allow for enough rest each night, it’s
				difficult to break those habits.
			</p>
			<p className='articleDescription'>
				Studies have shown the total amount of sleep decreases linearly with
				age, with an average loss of 10 minutes per decade. Interestingly, how
				we sleep also changes. The percentage of deep sleep we get each night
				decreases linearly at 2% per decade until about age 60. In your 60s and
				beyond, these losses plateau.
			</p>
			<p className='articleDescription'>
				Sleep issues present themselves by gender in slightly different ways. A
				meta-analysis of 65 studies found women are more likely to have
				difficulty falling asleep as they age, but men are more likely to
				experience shorter total sleep time and to wake up more often during the
				night.
			</p>
			<p className='articleDescription'>
				All that can seem a bit depressing, but there is still hope for a
				restful night’s sleep. General wellness and sleep hygiene practices
				apply, no matter your age. Avoiding late meals, limiting screen time and
				winding down before bed can help you fall asleep faster and enjoy more
				restful slumber. Considering that sleep is so vital to overall health,
				making these little adjustments is worth the effort.
			</p>

			<div id='articleSection'>
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
				<div id='block34'>Related Articles</div>
				<div id='footerLinkContainer'>
					<div id='block35' className='footerLinks'>
						<Link to='/fiveWFHStretches'>
							<SingleSquare
								url='https://blog.myfitnesspal.com/wp-content/uploads/2021/07/5-Stretches-to-Relieve-Work-From-Home-Pains-930x550.jpg'
								section='Self Care'
								title='5 Stretches to Relieve Work-From-Home Pains'
								author='Kevin Gray'
							/>
						</Link>
					</div>
					<div id='block36' className='footerLinks'>
						<Link to='/howSleepChanges'>
							<SingleSquare
								url='https://blog.myfitnesspal.com/wp-content/uploads/2021/05/How-Sleep-Changes-as-You-Age-930x550.jpg'
								section='Self Care'
								title='How Sleep Changes as You Age'
								author='Kevin Gray'
							/>
						</Link>
					</div>
					<div id='block37' className='footerLinks'>
						<Link to='/menWomenStress'>
							<SingleSquare
								url='https://blog.myfitnesspal.com/wp-content/uploads/2021/05/How-Men-and-Women-Handle-Stress-Differently-930x550.jpg'
								section='Self Care'
								title='How Men and Women Handle Stress Differently'
								author='Kevin Gray'
							/>
						</Link>
					</div>
					<div id='block38' className='footerLinks'>
						<Link to='/saunaHealthLongevity'>
							<SingleSquare
								url='https://blog.myfitnesspal.com/wp-content/uploads/2021/05/Saunas-Promote-Heart-Health-and-Longevity-Science-Says-2-930x550.jpg'
								section='Self Care'
								title='Saunas Promote Heart Health and Longevity, Science Says'
								author='Kevin Gray'
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

export default HowSleepChanges;
