import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import SingleSquare from '../shared/single-square';

import './generalCompilationFormatting.css';

const UpperBody = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<div>
			<h1 id='compilationTitle'>Upper Body</h1>
			<div id='compilationContainer'>
				<div className='compilationContainerItem'>
					<Link to='/holidayAMRAP'>
						<SingleSquare
							url='https://blog.myfitnesspal.com/wp-content/uploads/2020/12/MFP-Holiday-AMRAP-3-03-930x550.jpg'
							section='Home Workouts'
							title='12 Days of Cheer: Holiday AMRAP'
							description='To some, the holidays are about partridges in pear trees, turtle doves and French hens, but this holiday workout is about planks, lunge jumps and inchworms in as many reps as possible (AMRAP).'
							author='Shana Verstegen'
						/>
					</Link>
				</div>
			</div>
		</div>
	);
};
export default UpperBody;
