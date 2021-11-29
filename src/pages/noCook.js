import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import SingleSquare from '../shared/single-square';
import SingleSquareCropped from '../shared/single-square-cropped';

import './generalCompilationFormatting.css';

const NoCook = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<div>
			<h1 id='compilationTitle'>No Cook</h1>
			<div id='compilationContainer'>
				<div className='compilationContainerItem'>
					<Link to='/chickenSaladSandwich'>
						<SingleSquareCropped
							url='https://www.eatthis.com/wp-content/uploads/sites/4/2019/01/chicken-salad-sandwich-curry-raisins.jpg?quality=82&strip=1&resize=640%2C360'
							section='Lunch'
							title='Chicken Salad Sandwich with Curry and Raisins'
							description='Who said a chicken salad needs to be drowning in mayo to be tasty?'
							author='David Zinczenko and Matt Goulding'
						/>
					</Link>
				</div>
				<div className='compilationContainerItem'>
					<Link to='/zucchiniNoodleCaprese'>
						<SingleSquare
							url='https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2014/10/zucchini-noodle-caprese-6-300x300.jpg'
							section='Weight Loss Recipes'
							title='Zucchini Noodle Caprese'
							description='This zucchini noodle caprese is a delicious, healthy salad made from zucchini noodles and a few simple, fresh ingredients.'
							author='Lisa Bryan'
						/>
					</Link>
				</div>
				<div className='compilationContainerItem'>
					<Link to='/greekSalad'>
						<SingleSquare
							url='https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2018/08/Greek-Salad-450x450.jpg'
							section='Weight Loss Recipes'
							title='Greek Salad'
							description='This salad is easy to make and bursting with flavor.'
							author='Lisa Bryan'
						/>
					</Link>
				</div>
				<div className='compilationContainerItem'>
					<Link to='/cucumberRadishSalad'>
						<SingleSquare
							url='https://downshiftology.com/wp-content/uploads/2021/07/Cucumber-Radish-Salad-main-1-300x300.jpg'
							section='Weight Loss Recipes'
							title='Cucumber Radish Salad'
							description='Loaded with cool cucumbers, crisp radishes, fresh dill, and a simple olive oil lemon dressing for a fresh, tangy touch.'
							author='Lisa Bryan'
						/>
					</Link>
				</div>
			</div>
		</div>
	);
};
export default NoCook;
