import React from 'react';

import './three-square.css';

const ThreeSquare = (props) => {
	return (
		// <div id='container' style='background-image: url({props.url)'>
		<div id='three-square-container'>
			{/* <p>URL: {props.url}</p> */}
			<img id='three-square-photo' src={props.url} alt='food photo' />
			<div id='three-square-section'>{props.section}</div>
			<div id='three-square-title'>{props.title}</div>
			<div id='three-square-description'>{props.description}</div>
			<div id='three-square-author'>
				by <strong>{props.author}</strong>
			</div>
		</div>
	);
};

export default ThreeSquare;
