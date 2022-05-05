import React from 'react';

import './three-square-short.css';

const ThreeSquareShort = (props) => {
	return (
		<div id='three-square-short-container'>
			<img id='three-square-short-photo' src={props.url} alt='food snapshot' />
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
