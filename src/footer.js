import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './footer.css';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import {
	faFacebook,
	faInstagram,
	faPinterest,
	faTwitter,
	faYoutube,
} from '@fortawesome/free-brands-svg-icons';

const Footer = (props) => {
	return (
		<div id='footerContainer'>
			<div id='topButton' className='footerItem'>
				<a id='backToTopContainer' href='#logo'>
					<button>
						<FontAwesomeIcon icon={faChevronUp} /> &nbsp; Back to Top
					</button>
				</a>
			</div>
			<div id='linkList' className='footerItem'>
				<Link to='recipes'>
					<div className='linkItem'>RECIPES</div>
				</Link>
				<Link to='mealPlanning'>
					<div className='linkItem'>MEAL PLANNING</div>
				</Link>
				<Link to='weightLoss'>
					<div className='linkItem'>WEIGHT LOSS</div>
				</Link>
				<Link to='fitness'>
					<div className='linkItem'>FITNESS</div>
				</Link>
				<Link to='selfCare'>
					<div className='linkItem'>SELF-CARE</div>
				</Link>
				<Link to='shop'>
					<div className='linkItem'>SHOP</div>
				</Link>
			</div>
			<div id='copyright' className='footerItem'>
				2022 HealthyLifestyle &nbsp; All Rights Reserved
			</div>
			<div id='iconsWithLogIn' className='footerItem'>
				<a href='https://www.facebook.com/'>
					<FontAwesomeIcon icon={faFacebook} className='iconItem' />
				</a>
				<a href='https://twitter.com'>
					<FontAwesomeIcon icon={faTwitter} className='iconItem' />
				</a>
				<a href='https://www.instagram.com/'>
					<FontAwesomeIcon icon={faInstagram} className='iconItem' />
				</a>
				<a href='https://www.pinterest.com/'>
					<FontAwesomeIcon icon={faPinterest} className='iconItem' />
				</a>
				<a href='https://www.youtube.com/'>
					<FontAwesomeIcon icon={faYoutube} className='iconItem' />
				</a>
			</div>
			<div id='signatureBlock' className='footerItem'>
				Replicated by <strong>BX Development</strong>
			</div>
			<div id='signatureBlock' className='footerItem'>
				Emulation of{' '}
				<a href='https://skinnyms.com/'>
					<strong>SkinnyMS.com</strong>
				</a>
			</div>
		</div>
	);
};

export default Footer;
