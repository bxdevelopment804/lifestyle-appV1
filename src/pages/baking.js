import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import SingleSquare from '../shared/single-square';
import SingleSquareCropped from '../shared/single-square-cropped';

import './generalCompilationFormatting.css';

const Baking = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<div>
			<h1 id='compilationTitle'>Baking</h1>
			<div id='compilationContainer'>
				<div className='compilationContainerItem'>
					<Link to='/texmexPitaPizza'>
						<SingleSquareCropped
							// url='https://www.forksoverknives.com/wp-content/uploads/fly-images/66822/Tex-Mex-Pita-Pizzas_WP-688x387-c.jpg'
							url='/pictures/texMexPitaPizzaSquared.png'
							section='Plant-Based Recipes'
							title='Tex-Mex Pita Pizzas'
							description='These will satisfy your taste buds and satiate your tum.'
							author='Darshana Thacker'
						/>
					</Link>
				</div>
				<div className='compilationContainerItem'>
					<Link to='/veganBakedPotato'>
						<SingleSquareCropped
							// url='https://www.forksoverknives.com/wp-content/uploads/fly-images/42933/Nacho-and-Baked-Potato1561-WPedit-688x387-c.jpg'
							url='/pictures/veganBakedPotatoSquared.png'
							section='Plant-Based Recipes'
							title='"Nacho" Vegan Baked Potato'
							description='This recipe makes a great go-to meal when things are busy.'
							author='Andrea Duclos'
						/>
					</Link>
				</div>
				<div className='compilationContainerItem'>
					<Link to='/honeyDijonChicken'>
						<SingleSquare
							url='https://thegirlonbloor.com/wp-content/uploads/bb-plugin/cache/Sheet-Pan-Honey-Mustard-Chicken-3-400x500-circle.jpg'
							section='Meal Planning'
							title='Honey Dijon Chicken'
							description='A delicious meal that comes together in 30 minutes.'
							author='Taylor Stinson'
						/>
					</Link>
				</div>
				<div className='compilationContainerItem'>
					<Link to='/indianChickenBowl'>
						<SingleSquare
							url='https://thegirlonbloor.com/wp-content/uploads/bb-plugin/cache/Chicken-Tandoori-Meal-Prep-Bowls-14-400x500-circle.jpg'
							section='Meal Planning'
							title='Indian Inspired Chicken Bowls'
							description="These are a tasty sheet pan meal idea ready in 45 minutes – they've even got pakoras!"
							author='Taylor Stinson'
						/>
					</Link>
				</div>
			</div>
		</div>
	);
};
export default Baking;
