import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import SingleSquare from '../shared/single-square';

import './generalCompilationFormatting.css';

const Pizza = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<div>
			<h1 id='compilationTitle'>Pizza</h1>
			<div id='compilationContainer'>
				<div className='compilationContainerItem'>
					<Link to='/texmexPitaPizza'>
						<SingleSquare
							url='https://www.forksoverknives.com/wp-content/uploads/fly-images/66822/Tex-Mex-Pita-Pizzas_WP-688x387-c.jpg'
							section='Plant-Based Recipes'
							title='Tex-Mex Pita Pizzas'
							description='These will satisfy your taste buds and satiate your tum.'
							author='Darshana Thacker'
						/>
					</Link>
				</div>
			</div>
		</div>
	);
};
export default Pizza;
