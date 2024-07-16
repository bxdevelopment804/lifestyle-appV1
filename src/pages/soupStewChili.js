import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import SingleSquare from '../shared/single-square';
import SingleSquareCropped from '../shared/single-square-cropped';

import './generalCompilationFormatting.css';

const SoupStewChili = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<div>
			<h1 id='compilationTitle'>Soup, Stew, & Chili</h1>
			<div id='compilationContainer'>
				<div className='compilationContainerItem'>
					<Link to='/chickenZoodleSoup'>
						<SingleSquareCropped
							// url='https://www.eatthis.com/wp-content/uploads/sites/4/2019/12/Whole30-IP-Chicken-Zoodle-Soup.jpg?quality=82&strip=1&resize=640%2C360'
							url='/pictures/chickenZoodleSoup.png'
							section='Dinner'
							title='Instant Pot Chicken Zoodle Soup'
							description='Use zucchini noodles instead of regular ones to make a gluten-free chicken noodle soup.'
							author='Posie Brien'
						/>
					</Link>
				</div>
				<div className='compilationContainerItem'>
					<Link to='/wildRiceSoup'>
						<SingleSquareCropped
							// url='https://www.forksoverknives.com/wp-content/uploads/fly-images/80859/Creamy-Wild-Rice-Soup-for-website-688x387-c.jpg'
							url='/pictures/creamyWildRiceSoupSquared.png'
							section='Plant-Based Recipes'
							title='Creamy Wild Rice Soup'
							description='	It’s like a chicken noodle soup but better.'
							author='Carla Christian'
						/>
					</Link>
				</div>
				<div className='compilationContainerItem'>
					<Link to='/masonJarNoodles'>
						<SingleSquare
							url='https://thegirlonbloor.com/wp-content/uploads/2016/01/Mason-Jar-Instant-Noodle-Soups-500x500.jpg'
							section='Meal Planning'
							title='Mason Jar Instant Noodles'
							description='These are the perfect on-the-go work lunch and packed full of raw veggies, quick-cook vermicelli noodles & shredded chicken!'
							author='Taylor Stinson'
						/>
					</Link>
				</div>
			</div>
		</div>
	);
};
export default SoupStewChili;
