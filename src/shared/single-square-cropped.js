import React from 'react';

import './single-square-cropped.css';

const SingleSquareCropped = (props) => {
	return (
		<div id='single-square-cropped-container'>
			<div className='image-container'>  
				<img
					id='single-square-photo-cropped'
					src={props.url}
					alt='food snapshot'
				/>
			</div>
			<div id='single-square-section'>{props.section}</div>
			<div id='single-square-title'>{props.title}</div>
			<div id='single-square-description'>{props.description}</div>
			<div id='single-square-author'>
				by <strong>{props.author}</strong>
			</div>
		</div>
	);
};

export default SingleSquareCropped;
