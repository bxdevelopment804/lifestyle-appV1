import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import SingleSquare from '../shared/single-square';

import './generalCompilationFormatting.css';

const TotalBody = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<div>
			<h1 id='compilationTitle'>Total Body</h1>
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
					<Link to='/turkishGetUp'>
						<SingleSquare
							url='https://blog.myfitnesspal.com/wp-content/uploads/2021/06/The-One-Exercise-You-Should-Add-to-Your-Workout-Routine-3-930x550.jpg'
							section='Fitness'
							title='The One Exercise You Should Add to Your Workout Routine'
							description='This technical and challenging movement is well worth learning.'
							author='Lauren Bedosky'
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
					<Link to='/totalBody2021'>
						<SingleSquare
							url='https://blog.myfitnesspal.com/wp-content/uploads/2020/12/MFP-2021-New-Year-Workout-Guide-2-featured-930x550.jpg'
							section='Home Workouts'
							title='Your Total Body (20)21 New Year Workout Guide'
							description='If you haven’t heard of 21s, in honor of 2021, we are introducing this set configuration to you.'
							author='Shana Verstegen'
						/>
					</Link>
				</div>
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
export default TotalBody;
