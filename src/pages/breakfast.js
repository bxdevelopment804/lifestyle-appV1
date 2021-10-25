import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import SingleSquare from '../shared/single-square';

import './generalCompilationFormatting.css';

const Breakfast = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<div>
			<h1 id='compilationTitle'>Breakfast</h1>
			<div id='compilationContainer'>
				<div className='compilationContainerItem'>
					<Link to='/healthyFrenchToast'>
						<SingleSquare
							url='https://www.eatthis.com/wp-content/uploads/sites/4/2018/12/healthy-french-toast-with-strawberries.jpg?quality=82&strip=1&resize=640%2C360'
							section='Dinner'
							title='Healthy French Toast With Strawberries'
							description='When you want something a little sweet for supper, look no further than this French toast recipe.'
							author='David Zinczenko and Matt Goulding'
						/>
					</Link>
				</div>
			</div>
		</div>
	);
};
export default Breakfast;
