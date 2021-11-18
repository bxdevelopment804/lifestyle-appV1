import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import SingleSquare from '../shared/single-square';

import './generalCompilationFormatting.css';

const Running = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<div>
			<h1 id='compilationTitle'>Running</h1>
			<div id='compilationContainer'>
				<div className='compilationContainerItem'>
					<Link to='/coldWeatherRunning'>
						<SingleSquare
							url='https://blog.myfitnesspal.com/wp-content/uploads/2021/01/How-to-Breathe-Better-During-Cold-Weather-Running-752x472.jpg'
							section='Fitness'
							title='How to Breathe Better During Cold-Weather Running'
							description="Breathing during winter runs is a struggle.  Here's how to cope."
							author='Lauren Bedosky'
						/>
					</Link>
				</div>
			</div>
		</div>
	);
};
export default Running;
