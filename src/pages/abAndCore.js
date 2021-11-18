import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import SingleSquare from '../shared/single-square';

import './generalCompilationFormatting.css';

const AbAndCore = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<div>
			<h1 id='compilationTitle'>Ab & Core</h1>
			<div id='compilationContainer'>
				<div className='compilationContainerItem'>
					<Link to='/oneWeekCore'>
						<SingleSquare
							url='https://blog.myfitnesspal.com/wp-content/uploads/2020/12/UACF-1-Week-Core-Workout-Guide-01-930x550.jpg'
							section='Home Workouts'
							title='Your Quick and Easy 1-Week Core Workout Guide'
							description='Your “core” is much more complex than the infamous “six-pack abs” which refer to the muscle group known as the rectus abdominis.'
							author='Shana Verstegen'
						/>
					</Link>
				</div>
			</div>
		</div>
	);
};
export default AbAndCore;
