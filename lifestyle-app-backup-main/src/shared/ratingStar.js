import React from 'react';
import './ratingStar.css';

const RatingStar = (props) => {
	const changeGrade = (e) => {
		props.changeGradeIndex(e.target.value);
	};

	return (
		<label className='star'>
			<input
				type='radio'
				name='rating'
				id={props.grade}
				value={props.index}
				className='starsRadioInput'
				onClick={changeGrade}
			/>
			<svg
				// xmlns='http://www.w3.org/2000/svg'
				width='30'
				height='30'
				viewBox='0 0 24 24'
				fill='white'
				stroke='#393939'
				stroke-width='1'
				stroke-linecap='round'
				stroke-linejoin='round'
				style={props.style}
			>
				<polygon points='12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2'></polygon>
			</svg>
		</label>
	);
};

export default RatingStar;
