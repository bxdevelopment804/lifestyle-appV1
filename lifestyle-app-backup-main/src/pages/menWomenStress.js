import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import SingleSquare from '../shared/single-square';
import './generalSelfCareFormatting.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faPinterest } from '@fortawesome/free-brands-svg-icons';

const MenWomenStress = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const sectionType = 'self care';
	const articleTitle = 'How Men and Women Handle Stress Differently';
	const altText = 'How Men and Women Handle Stress Differently';
	const authorName = 'Kevin Gray';
	const authorNickname = 'MyFitnessPal';
	const authorPhoto =
		'https://blog.myfitnesspal.com/wp-content/uploads/2016/05/kg-150x150.jpg';
	const authorDescription =
		'Kevin is a Dallas-based writer who spends the majority of his weekends on a bike. His less healthy pursuits can be found at Bevvy and Cocktail Enthusiast.';
	const videoSource = 'https://www.youtube.com/embed/5iICtOPsHJU';
	const initialPhoto1 =
		'https://blog.myfitnesspal.com/wp-content/uploads/2021/05/How-Men-and-Women-Handle-Stress-Differently.jpg';

	const title1 = 'Stress Could Lead to Weight Change';
	const title2 = 'The Impact of External Stressors';
	const title3 = 'Make Yourself a Priority';
	const title4 = 'Be More Mindful';
	const title5 = 'Physical Activity as a Stress Release';

	const articleDate = 'May 19, 2021';
	const articleDescription1 =
		'If you’ve ever looked at your mom, dad or partner during a difficult situation and noticed inconsistencies in their reactions, it’s not your imagination. Men and women may experience stress differently and respond to different stress triggers. According to the American Psychological Association (APA), women have more physical and emotional responses to stress than men. While these stress reactions play an obvious emotional role, they could also impact diet, exercise and weight.';
	const articleDescription2 =
		'“When we are stressed, that will affect appetite, which will affect eating behaviors,” says psychologist Marni Amsellem, PhD. “Sometimes, the response is to eat more or drink more. And sometimes, the stress can actually reduce appetites.”';

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
				According to the APA’s most recent Stress in America report, 45 percent
				of women and 39 percent of men said they gained unwanted weight during
				the pandemic. At the same time, 20 percent of men and 17 percent of
				women said they unintentionally lost weight during the pandemic.
			</p>
			<p className='articleDescription'>
				“The things we put into our mouth can seriously affect how we feel
				emotionally on a day-to-day basis or even minute-to-minute,” says Mike
				Fitch, a certified personal trainer and fitness educator. “We might want
				to reach for the comfort food when life is getting hectic, but the truth
				is that those foods may lead to systemic inflammation or blood-sugar
				imbalances that can only add to our feelings of anxiety and stress.
				Sticking with clean foods that are minimally processed and well-sourced
				can give us a serious emotional boost.”
			</p>

			<div id='title2' className='articleTitle'>
				{title2}
			</div>
			<p className='articleDescription'>
				Some people eat as a reaction to challenging circumstances, sometimes
				without realizing they’re responding to an anxiety-producing situation.
				Often, the situation itself has nothing to do with food, particularly
				during the pandemic.
			</p>
			<p className='articleDescription'>
				“So many more women were leaving the workforce [and] experiencing more
				stress in response to that division of labor at home, maybe feeling like
				it was falling more on them,” says Amsellem. “If you already had a plan
				for child care or education — like your kids were in school — taking
				care of them and teaching them had not been part of your job
				description; it was kind of thrust upon you.”
			</p>
			<p className='articleDescription'>
				High-stress situations like these could make females more likely to turn
				to food for comfort or, on the flip side, cause their appetite to drop
				with so many other things on their mind.
			</p>
			<p className='articleDescription'>
				While we often see women portrayed as emotional eaters on TV and in the
				movies, with characters stereotypically digging into a pint of ice cream
				to soothe their feelings after getting dumped, this behavior doesn’t
				solely affect women.
			</p>
			<p className='articleDescription'>
				“Men can be emotional eaters, as well,” says Amsellem. “It’s really a
				learned association where we say, OK, this is how I comfort myself,’ or,
				‘This is what I do when I’m bored.’ Whatever the emotional trigger is,
				the response might be to reach for your favorite comfort food.”
			</p>

			<div id='title3' className='articleTitle'>
				{title3}
			</div>
			<p className='articleDescription'>
				Women often find themselves in caregiving roles, whether they’re looking
				after their children, parents or partners. Men may also be caregivers,
				but two out of three family caregivers in the U.S. are women. Many
				people who care for others put their own needs last, which may increase
				stress levels. Taking time for yourself and doing activities that you
				enjoy and find relaxing may help.
			</p>
			<p className='articleDescription'>
				“A good recommendation for everyone, but particularly those who have a
				ton on their plate and they’re taking care of others, is to find time,
				even if it’s well-disguised, as for time for yourself,” Amsellem
				recommends.
			</p>
			<p className='articleDescription'>
				Even if you don’t have much time, a few minutes here and there for a
				walk, a meditation or a healthy meal may help you stay in a better frame
				of mind. Doing so could decrease your desire to skimp on exercise, reach
				for junk food or adopt unhealthy screen-time habits that may encourage
				more stress.
			</p>
			<p className='articleDescription'>
				“Making small changes in the places you spend the majority of your day
				can result in big rewards,” says Fitch. “That could mean figuring out
				creative ways to switch up your work environment or listening to
				podcasts while on your commute, versus just focusing on traffic. You may
				find it helpful to create nightly routines that allow you to wind down
				for bed gradually before actually going to sleep. Those may include
				turning off electronics and dimming the lights an hour before bedtime or
				reading a book instead of checking your socials until you fall asleep.”
			</p>

			<div id='title4' className='articleTitle'>
				{title4}
			</div>
			<p className='articleDescription'>
				Whether you’re male or female, practicing mindfulness may help you lower
				your stress levels and better focus on your diet or exercise habits and
				goals. Recognizing what you’re actually doing and how that differs from
				what you’d like to be doing may keep you from eating in response to
				emotional stimuli.
			</p>
			<p className='articleDescription'>
				“The first practice is awareness,” says Fitch. “When you begin to feel
				stressed, are you able to link it to anything specific? Keeping a log or
				journal and looking for repetitive patterns and triggers can be the
				first step in deconstructing your stressful day.”
			</p>
			<p className='articleDescription'>
				Being kind and understanding toward yourself may also help.
			</p>
			<p className='articleDescription'>
				“We can be our own worst enemies,” says Amsellem. “That only raises
				stress. So [try] being a lot more compassionate to yourself and more
				mindful of your decisions in the moment.”
			</p>

			<div id='title5' className='articleTitle'>
				{title5}
			</div>
			<p className='articleDescription'>
				Both men and women can benefit from exercising regularly. Physical
				activity has been research-proven to lower stress levels and increase
				mood. Just be sure to watch the intensity, says Fitch. During
				high-stress situations, pushing yourself to the physical limit may do
				more harm than good.
			</p>
			<p className='articleDescription'>
				“It’s important to remember that exercise is also a stress,” says Fitch.
				“An already stressed person may not get the most benefit from going out
				for sprints or taking a HIIT class. Instead, they may want to think
				about taking a long walk with a friend or playing a sport or activity
				that they really enjoy.”
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

export default MenWomenStress;
