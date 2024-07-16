import React from 'react';

import './six-square-cropped.css';

const SixSquareCropped = (props) => {
	return (
		<div id='six-square-cropped-container'>
			<div className='six-square-cropped-image-container'>
				<img id='six-square-cropped-photo' src={props.url} alt='food snapshot' />
			</div>
		
			<div id='six-square-cropped-section' style={{ textDecoration: 'none' }}>
				{props.section}
			</div>
			<div id='six-square-cropped-title'>{props.title}</div>
		</div>
	);
};

export default SixSquareCropped;
