import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './footer.css';
import {
	faArrowUp,
	faChevronUp,
	faRss,
} from '@fortawesome/free-solid-svg-icons';
import {
	faFacebook,
	faInstagram,
	faPinterest,
	faTwitter,
	faYoutube,
} from '@fortawesome/free-brands-svg-icons';

const Footer = (props) => {
	return (
		// <React.Fragment>
		<div id='footerContainer'>
			<div id='topButton' className='footerItem'>
				<a href='#logo'>
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
				"Copyright" © 2021HealthyLifestyle &nbsp; All Rights Reserved &nbsp;
				Privacy Policy &nbsp; Terms &nbsp; Disclaimer &nbsp; Sitemap
			</div>
			<div id='iconsWithLogIn' className='footerItem'>
				<FontAwesomeIcon icon={faFacebook} className='iconItem' />
				<FontAwesomeIcon icon={faTwitter} className='iconItem' />
				<FontAwesomeIcon icon={faInstagram} className='iconItem' />
				<FontAwesomeIcon icon={faPinterest} className='iconItem' />
				<FontAwesomeIcon icon={faYoutube} className='iconItem' />
				<FontAwesomeIcon icon={faRss} className='iconItem' />
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
		// </React.Fragment>
	);
};

export default Footer;
