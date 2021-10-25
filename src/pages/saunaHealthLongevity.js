import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import SingleSquare from '../shared/single-square';
import './generalSelfCareFormatting.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faPinterest } from '@fortawesome/free-brands-svg-icons';

const SaunaHealthLongevity = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const sectionType = 'self care';
	const articleTitle =
		'Saunas Promote Heart Health and Longevity, Science Says';
	const altText = 'Saunas Promote Heart Health and Longevity, Science Says';
	const authorName = 'Kevin Gray';
	const authorNickname = 'MyFitnessPal';
	const authorPhoto =
		'https://blog.myfitnesspal.com/wp-content/uploads/2016/05/kg-150x150.jpg';
	const authorDescription =
		'Kevin is a Dallas-based writer who spends the majority of his weekends on a bike. His less healthy pursuits can be found at Bevvy and Cocktail Enthusiast.';
	const videoSource = 'https://www.youtube.com/embed/5iICtOPsHJU';
	const initialPhoto1 =
		'https://blog.myfitnesspal.com/wp-content/uploads/2021/05/Saunas-Promote-Heart-Health-and-Longevity-Science-Says-2.jpg';

	const title1 = "The Sauna's Many Benefits";
	const title2 = "Saunas: They're Kind of Like Exercise";

	const articleDate = 'May 14, 2021';
	const articleDescription1 =
		'If you’ve ever used a sauna, you know just a few minutes basking in dry heat can relax your muscles, open your lungs and reduce stress. Because of these benefits, many health enthusiasts add the sauna to their regular wellness regimen. Residents of Finland are way ahead of the game, as the country has more saunas per capita than any other country — about one per household. Turns out, they are really onto something.';

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
				A long-term study from the University of Eastern Finland looked at the
				impact saunas have on cardiovascular incidents and mortality. They
				analyzed the frequency of sauna use among more than 2,300 middle-aged
				men over a period of about 20 years, breaking them into groups by usage
				rate: one time per week, 2–3 times per week and 4–7 times per week. The
				results showed the more sauna time, the better.
			</p>
			<p className='articleDescription'>
				Higher frequencies of sauna bathing were associated with a reduced risk
				of sudden cardiac death, fatal coronary heart disease, fatal
				cardiovascular disease and all-cause mortality. That’s some compelling
				data. Naturally, you may feel an urge to move to Finland — or at least
				to install a sauna in your house.
			</p>
			<p className='articleDescription'>
				Building on this research, a scientific review looked at the available
				studies and trials on saunas and their effects on cardiovascular
				outcomes and other diseases. It found similar results as its
				predecessor, furthering the case for adding the sauna to your health
				regimen. The researchers, based in Finland and the U.K., noted that
				emerging evidence suggests sauna bathing has several health benefits,
				including a reduction in the risk of vascular diseases such as high
				blood pressure, cardiovascular disease, stroke and neurocognitive
				diseases. It also shows benefits for nonvascular conditions like the
				common flu, as well as certain skin conditions and even pain from
				rheumatic diseases and headache. Importantly, the researchers again
				noted that sauna users experienced a reduction in all-cause mortality.
			</p>

			<div id='title2' className='articleTitle'>
				{title2}
			</div>
			<p className='articleDescription'>
				Sitting still in a hot room isn’t the same as taking a HIIT workout,
				running a 5K or going for a brisk bike ride. Luckily, that steamy sit
				might be doing more than it seems.
			</p>
			<p className='articleDescription'>
				The same scientific review found “the physiological responses produced
				by an ordinary sauna bath correspond to those produced by moderate- or
				high-intensity physical activity such as walking.” Once more, that’s
				some compelling data. But lest you think that’s a reason to stop
				exercising, scientists noted that exercise combined with sauna use is a
				powerful one-two punch for your heart health. Good overall fitness
				levels, courtesy of aerobic exercise mixed with frequent sauna use,
				“confers more protection against the risk of cardiovascular and
				all-cause mortality events” than either one alone, they said.
			</p>
			<p className='articleDescription'>
				So, if you are already exercising, keep it up. If you’re not, try to
				start. But regardless of where you are on your wellness journey, the
				evidence for implementing sauna sessions into your routine is strong.
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

export default SaunaHealthLongevity;
