import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import SingleSquare from '../shared/single-square';
import SingleSquareCropped from '../shared/single-square-cropped';

import './generalCompilationFormatting.css';

const PlantBased = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<div>
			<h1 id='compilationTitle'>Plant Based</h1>
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
				<div className='compilationContainerItem'>
					<Link to='/wildRiceSoup'>
						<SingleSquare
							url='https://www.forksoverknives.com/wp-content/uploads/fly-images/80859/Creamy-Wild-Rice-Soup-for-website-688x387-c.jpg'
							section='Plant-Based Recipes'
							title='Creamy Wild Rice Soup'
							description='	It’s like a chicken noodle soup but better.'
							author='Carla Christian'
						/>
					</Link>
				</div>
				<div className='compilationContainerItem'>
					<Link to='/veganBakedPotato'>
						<SingleSquare
							url='https://www.forksoverknives.com/wp-content/uploads/fly-images/42933/Nacho-and-Baked-Potato1561-WPedit-688x387-c.jpg'
							section='Plant-Based Recipes'
							title='"Nacho" Vegan Baked Potato'
							description='This recipe makes a great go-to meal when things are busy.'
							author='Andrea Duclos'
						/>
					</Link>
				</div>
				<div className='compilationContainerItem'>
					<Link to='/veganMacaroniCheese'>
						<SingleSquare
							url='https://www.forksoverknives.com/wp-content/uploads/fly-images/67930/Super-Stove-Top-Mac-and-Cheese-103068713-WP-688x387-c.jpg'
							section='Plant-Based Recipes'
							title='Stove-Top Vegan Macaroni and Cheese'
							description='This classic vegan mac and cheese is ultra cheesy, saucy and creamy.'
							author='Molly Patrick'
						/>
					</Link>
				</div>
				<div className='compilationContainerItem'>
					<Link to='/penneTomatoMushroom'>
						<SingleSquare
							url='https://www.forksoverknives.com/wp-content/uploads/fly-images/41259/Penne-with-Tomato-Mushroom-Cream-Sauce-wp-edit-688x387-c.jpg'
							section='Plant-Based Recipes'
							title='Penne With Tomato-Mushroom Sauce'
							description='Put an authentic Italian pasta dish on your dinner table in just 20 minutes.'
							author='Del Sroufe'
						/>
					</Link>
				</div>
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
export default PlantBased;
