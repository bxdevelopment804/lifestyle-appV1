import React from 'react';

import './three-square-short.css';

const ThreeSquareShort = (props) => {
	return (
		// <div id='container' style='background-image: url({props.url)'>
		<div id='three-square-short-container'>
			{/* <p>URL: {props.url}</p> */}
			<img id='three-square-short-photo' src={props.url} alt='food photo' />
			<div id='three-square-short-section'>{props.section}</div>
			<div id='three-square-short-title'>{props.title}</div>
			<div id='three-square-short-description'>{props.description}</div>
			<div id='three-square-short-author'>
				by <strong>{props.author}</strong>
			</div>
		</div>
	);
};

export default ThreeSquareShort;
