import React from 'react';

import './primary-square.css';

const PrimarySquare = (props) => {
	return (
		// <div id='container' style='background-image: url({props.url)'>
		<div id='primary-square-container'>
			{/* <p>URL: {props.url}</p> */}
			<img id='primary-square-photo' src={props.url} />
			<div id='primary-square-section'>{props.section}</div>
			<div id='primary-square-title'>{props.title}</div>
			<div id='primary-square-description'>{props.description}</div>
			<div id='primary-square-author'>
				by <strong>{props.author}</strong>
			</div>
		</div>
	);
};

export default PrimarySquare;
