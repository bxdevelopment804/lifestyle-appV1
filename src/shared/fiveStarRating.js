import React, { useState } from 'react';
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
			{props.numOfRatings == 0 && <div>&nbsp; No Ratings Yet</div>}
			{props.numOfRatings != 0 && (
				<div>
					&nbsp; {props.averageRating} stars with {props.numOfRatings} votes
				</div>
			)}
			{/* Below section left in just for troubleshooting. */}
			{/* <div>&nbsp;Grade Index: {props.gradeIndex}&nbsp;</div>
			<div>Current Rating: {props.currentRating}&nbsp;</div>
			<div>Num of Ratings: {props.numOfRatings}&nbsp;</div>
			<div>Total of Ratings: {props.totalOfRatings}&nbsp;</div>
			<div>Average Rating: {props.averageRating}&nbsp;</div> */}
		</div>
	);
};

export default FiveStarRating;
