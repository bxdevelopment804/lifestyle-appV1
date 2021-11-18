import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import SingleSquare from '../shared/single-square';

import './generalCompilationFormatting.css';

const Beginners = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<div>
			<h1 id='compilationTitle'>Beginners</h1>
			<div id='compilationContainer'>
				<div className='compilationContainerItem'>
					<Link to='/thirtyMinBeachWorkout'>
						<SingleSquare
							url='https://blog.myfitnesspal.com/wp-content/uploads/2021/07/30-Minute-Beach-Workout-930x550.jpg'
							section='Fitness'
							title='30-Minute Beach Workout'
							description='The beach is a perfect spot for a fun, functional workout.'
							author='Shana Verstegen'
						/>
					</Link>
				</div>
				<div className='compilationContainerItem'>
					<Link to='/threeDayTotalBody'>
						<SingleSquare
							url='https://blog.myfitnesspal.com/wp-content/uploads/2021/03/MFP-3-Day-Total-Body-Strength-Workout-featured-930x550.jpg'
							section='Home Workouts'
							title='3-Day Total-Body Strength Workout'
							description='You don’t need an official long weekend to do this workout. Just pick three consecutive days!'
							author='Shana Verstegen'
						/>
					</Link>
				</div>
				<div className='compilationContainerItem'>
					<Link to='/oneDumbbellTotalBody'>
						<SingleSquare
							url='https://blog.myfitnesspal.com/wp-content/uploads/2021/02/UACF-1-Week-1-Dumbbell-Total-Body-01-930x550.jpg'
							section='Home Workouts'
							title='1-Week, 1-Dumbbell Total-Body Workout'
							description='Most of us have at least one dumbbell handy. This workout requires just one dumbbell for each exercise, allowing you to train unilaterally.'
							author='Shana Verstegen'
						/>
					</Link>
				</div>
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
export default Beginners;
