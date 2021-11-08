import React, { useState } from 'react';
import RatingStar from './ratingStar';
import './ratingStar.css';

const FiveStarRating = (props) => {
	// const [gradeIndex, setGradeIndex] = useState(-1);
	const GRADES = ['Poor', 'Fair', 'Good', 'Very good', 'Excellent'];
	const activeStar = {
		fill: 'black',
	};
	// const changeGradeIndex = (index) => {
	// 	setGradeIndex(index);
	// };

	return (
		<div className='starContainer'>
			{/* <h1 className='result'>
				{GRADES[gradeIndex] ? GRADES[gradeIndex] : "You didn't rate yet"}
			</h1> */}
			<div className='stars'>
				{GRADES.map((grade, index) => (
					<RatingStar
						index={index}
						key={grade}
						// changeGradeIndex={changeGradeIndex}
						changeGradeIndex={props.changeGradeIndex}
						// style={gradeIndex >= index ? activeStar : {}}
						style={props.gradeIndex >= index ? activeStar : {}}
					/>
				))}
			</div>
		</div>
	);
};

export default FiveStarRating;
