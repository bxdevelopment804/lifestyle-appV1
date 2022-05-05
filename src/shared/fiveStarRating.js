import React from 'react';
import RatingStar from './ratingStar';
import './ratingStar.css';
import './fiveStarRating.css';

const FiveStarRating = (props) => {
	const GRADES = ['Poor', 'Fair', 'Good', 'Very good', 'Excellent'];
	const activeStar = {
		fill: 'black',
	};

	return (
		<div className='starContainer' onClick={props.updateRatingCount}>
			<div className='stars'>
				{GRADES.map((grade, index) => (
					<RatingStar
						index={index}
						key={grade}
						changeGradeIndex={props.changeGradeIndex}
						style={props.gradeIndex >= index ? activeStar : {}}
					/>
				))}
			</div>
			{props.numOfRatings === 0 && <div>&nbsp; No Ratings Yet</div>}
			{props.numOfRatings !== 0 && (
				<div>
					&nbsp; {props.averageRating} stars with {props.numOfRatings} votes
				</div>
			)}
		</div>
	);
};

export default FiveStarRating;
