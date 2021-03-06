import React from 'react';

import './six-square.css';

const SixSquare = (props) => {
	return (
		<div id='six-square-container'>
			<img id='six-square-photo' src={props.url} alt='food snapshot' />
			<div id='six-square-section' style={{ textDecoration: 'none' }}>
				{props.section}
			</div>
			<div id='six-square-title'>{props.title}</div>
			{/* <div id='six-square-description'>{props.description}</div> */}
			{/* <div id='six-square-author'>by {props.author}</div> */}
		</div>
	);
};

export default SixSquare;
