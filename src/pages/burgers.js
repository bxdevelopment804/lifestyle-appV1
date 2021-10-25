import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import SingleSquare from '../shared/single-square';

import './generalCompilationFormatting.css';

const Burgers = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<div>
			<h1 id='compilationTitle'>Burgers</h1>
			<div id='compilationContainer'>
				<div className='compilationContainerItem'>
					<Link to='/healthyUltimateBurger'>
						<SingleSquare
							url='https://www.eatthis.com/wp-content/uploads/sites/4/2019/01/the-healthy-ultimate-burger.jpg?quality=82&strip=1&resize=970%2C546'
							section='Dinner'
							title='The Healthy Ultimate Burger'
							description='Prepare for a true, first-class burger experience.'
							author='David Zinczenko and Matt Goulding'
						/>
					</Link>
				</div>
			</div>
		</div>
	);
};
export default Burgers;
