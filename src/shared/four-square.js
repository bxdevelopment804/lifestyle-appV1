import React from 'react';

import './four-square.css';

const FourSquare = (props) => {
	return (
		<div id='four-square-container'>
			<img id='four-square-photo' src={props.url} alt='food snapshot' />
			<div id='four-square-section'>{props.section}</div>
			<div id='four-square-title'>{props.title}</div>
			{/* <div id='four-square-description'>{props.description}</div> */}
			{/* <div id='four-square-author'>by {props.author}</div> */}
		</div>
	);
};

export default FourSquare;
