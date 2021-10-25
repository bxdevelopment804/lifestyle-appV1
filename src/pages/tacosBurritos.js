import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import SingleSquare from '../shared/single-square';

import './generalCompilationFormatting.css';

const TacosBurritos = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<div>
			<h1 id='compilationTitle'>Tacos & Burritos</h1>
			<div id='compilationContainer'>
				<div className='compilationContainerItem'>
					<Link to='/burritosRiceBeans'>
						<SingleSquare
							url='https://www.forksoverknives.com/wp-content/uploads/fly-images/22661/burrito-fok-300kb-688x387-c.jpg'
							section='Plant-Based Recipes'
							title='Burritos With Spanish Rice And Black Beans'
							description='Quick and easy, vegan bean and rice burritos are a perfect vegetarian dinner idea.'
							author='Susan Voisin'
						/>
					</Link>
				</div>
			</div>
		</div>
	);
};
export default TacosBurritos;
