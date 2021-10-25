import React from 'react';

import './single-square.css';

const SingleSquare = (props) => {
	return (
		<div id='single-square-container'>
			<img id='single-square-photo' src={props.url} />
			<div id='single-square-section'>{props.section}</div>
			<div id='single-square-title'>{props.title}</div>
			<div id='single-square-description'>{props.description}</div>
			<div id='single-square-author'>
				by <strong>{props.author}</strong>
			</div>
		</div>
	);
};

export default SingleSquare;
