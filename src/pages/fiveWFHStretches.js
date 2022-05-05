import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import emailjs from 'emailjs-com';

import SingleSquare from '../shared/single-square';
import './generalSelfCareFormatting.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faFacebook,
	faPinterest,
	faInstagram,
} from '@fortawesome/free-brands-svg-icons';

const FiveWFHStretches = () => {
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

	const sectionType = 'self care';
	const articleTitle = 'Five Stretches to Relieve Work-From-Home Pains';
	const altText = '5 Stretches to Relieve Work-From-Home Pains';
	const authorName = 'Kevin Gray';
	const authorNickname = 'MyFitnessPal';
	const authorPhoto =
		'https://blog.myfitnesspal.com/wp-content/uploads/2016/05/kg-150x150.jpg';
	const authorDescription =
		'Kevin is a Dallas-based writer who spends the majority of his weekends on a bike. His less healthy pursuits can be found at Bevvy and Cocktail Enthusiast.';
	const videoSource = 'https://www.youtube.com/embed/5iICtOPsHJU';
	const initialPhoto1 =
		'https://blog.myfitnesspal.com/wp-content/uploads/2021/07/5-Stretches-to-Relieve-Work-From-Home-Pains-752x472.jpg';

	const title1 = 'How To Avoid Sitting So Much';
	const title2 = 'How To Relieve Work-From-Home Pains';

	const articleDate = 'July 16, 2021';
	const articleDescription1 =
		'In this age of constant connectedness and digital everything, many of us spend the bulk of our days sitting down and staring at laptops and phones. This fact only increased during the pandemic, as the world transitioned to a work-from-home setup that saw us living and working in the same space, tethered to our devices. While working from home brings convenience and freedom, it can also be a literal pain in the neck.';
	const articleDescription2 =
		'“If you sit for an extended period of time, you’ll most likely develop terrible posture,” says Dr. Gbolahan Okubadejo, a spinal and orthopedic surgeon at the New York-area Institute for Comprehensive Spine Care. He notes that poor posture, like slumping in your chair, often leads to chronic back, shoulder and neck pain, as well as poor circulation.';
	const articleDescription3 =
		'The effects of prolonged sitting can be scarier than aches and pains — it can also lead to the formation of a blood clot in a vein, which is called deep vein thrombosis, says Okubadejo. “Sitting for too long can also increase your risk of chronic health problems such as some cancers, diabetes and heart disease. Sitting is more dangerous than smoking, and sitting for too long is probably killing you slowly,” warns Dr. Okubadejo. You may also gain weight and lose strength in your muscles, particularly the glutes and legs. It’s enough to make you want to stand up and move around for a while.';

	// -------------------------
	// SCROLL DOWN TO MANUALLY ENTER ADDITIONAL ARTICLE DESCRIPTION
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
				frameBorder='0'
				allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
				allowFullScreen
			></iframe>

			<div id='title1' className='articleTitle'>
				{title1}
			</div>
			<p className='articleDescription'>
				Fortunately, it’s not all doom and gloom. Dr. Okubadejo provides some
				tips to reduce your sedentary time and keep you moving throughout the
				day.
			</p>
			<ol className='articleListContainer'>
				<li className='articleList'>
					Stand up or walk around while you are talking on the phone.
				</li>
				<li className='articleList'>
					Get up from your desk once every 30 minutes and walk or move for 5–10
					minutes before sitting back down.
				</li>
				<li className='articleList'>
					Take the stairs instead of the elevator whenever you can. Climbing the
					stairs is a great weight-bearing activity that benefits your heart,
					muscles and bones.
				</li>
				<li className='articleList'>
					Don’t loop around the parking lot until you find the best spot. Park
					farther away from where you are going so you can walk longer
					distances.
				</li>
				<li className='articleList'>
					Consider purchasing a standing workstation and split your time between
					sitting and standing while working.
				</li>
			</ol>

			<div id='title2' className='articleTitle'>
				{title2}
			</div>
			<p className='articleDescription'>
				Despite your best efforts, it’s difficult to avoid those work-from-home
				pains entirely. Jessica Mazzucco, a New York-based certified fitness
				trainer and founder of The Glute Recruit, breaks down five common
				ailments with advice on how to relieve each.
			</p>
			<p className='articleDescription'>
				<strong>Shoulders:</strong> “The shoulders can become stiff after hours
				of sitting at a computer,” says Mazzucco. “A simple standing shoulder
				stretch can help alleviate some stiffness and help with tension.” Stand
				up straight and cross your left arm across your chest and hold with your
				right hand for 15 seconds. Repeat with your right arm across your chest
				as many times as you desire.
			</p>
			<p className='articleDescription'>
				<strong>Wrists:</strong> “Excessive typing can cause the wrists to cramp
				up,” says Mazzucco. Position your right hand in front of you with your
				fingers spread wide and your palm facing forward. Bend your wrist down,
				so your fingers are pointing toward the ground. Take your left hand and
				pull your right-hand fingers toward your chest. Maintain this stretch
				for 15 seconds, and then repeat with your left hand.
			</p>
			<p className='articleDescription'>
				<strong>Neck:</strong> “Neck rolls are easy and effective stretches to
				loosen your neck muscles,” says Mazzucco. Start with your head tilted to
				the right side, and roll your head forward and to the left. Repeat to
				the right side. Perform five rolls to each side or until the tension in
				your neck is lessened.
			</p>
			<p className='articleDescription'>
				<strong>Lower Back:</strong> If your lower back is tight from all that
				sitting, try this: “Sit on the floor with your legs in front of you and
				your back straight and shoulders back. Cross your right leg over your
				left with your right knee bent upward. Place your left hand/arm on the
				outside of your right leg and twist your upper body to the right. Hold
				this position for 15 seconds, and then repeat to the left side.”
			</p>
			<p className='articleDescription'>
				<strong>Full Body:</strong> If your lower back is tight from all that
				sitting, try this: “Sit on the floor with your legs in front of you and
				your back straight and shoulders back. Cross your right leg over your
				left with your right knee bent upward. Place your left hand/arm on the
				outside of your right leg and twist your upper body to the right. Hold
				this position for 15 seconds, and then repeat to the left side.”
			</p>

			<div id='articleSection'>
				<div id='block26'>
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
								value={articleTitle}
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

export default FiveWFHStretches;
