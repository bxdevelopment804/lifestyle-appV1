import React from 'react';

import './hoverIcon.css';

const HoverIcon = (props) => {
	return (
		<React.Fragment>
			<div id='hoverIcon-container'>
				<img id='hoverIcon-photo' src={props.url} alt='food snapshot' />
			</div>
			<div id='hoverIcon-title'>{props.title}</div>
		</React.Fragment>
	);
};

export default HoverIcon;
