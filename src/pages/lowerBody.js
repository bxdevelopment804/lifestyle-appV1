import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import SingleSquare from '../shared/single-square';

import './generalCompilationFormatting.css';

const LowerBody = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<div>
			<h1 id='compilationTitle'>Lower Body</h1>
			<div id='compilationContainer'>
				<div className='compilationContainerItem'>
					<Link to='/oneKettlebellLowerBody'>
						<SingleSquare
							url='https://blog.myfitnesspal.com/wp-content/uploads/2021/01/UACF-Kettlebell-Workout-Guide-featured-01-930x550.jpg'
							section='Home Workouts'
							title='1-Week, 1-Kettlebell Lower-Body Workout Guide'
							description='This workout keeps it simple with one tool and one section of the body.'
							author='Shana Verstegen'
						/>
					</Link>
				</div>
			</div>
		</div>
	);
};
export default LowerBody;
