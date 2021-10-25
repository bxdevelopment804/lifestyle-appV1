import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import SingleSquare from '../shared/single-square';

import './generalCompilationFormatting.css';

const SelfCare = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<div>
			<h1 id='compilationTitle'>Self Care</h1>
			<div id='compilationContainer'>
				<div className='compilationContainerItem'>
					<Link to='/fiveWFHStretches'>
						<SingleSquare
							url='https://blog.myfitnesspal.com/wp-content/uploads/2021/07/5-Stretches-to-Relieve-Work-From-Home-Pains-930x550.jpg'
							section='Self Care'
							title='5 Stretches to Relieve Work-From-Home Pains'
							description='The effects of prolonged sitting can be scarier than aches and pains.'
							author='Kevin Gray'
						/>
					</Link>
				</div>
				<div className='compilationContainerItem'>
					<Link to='/howSleepChanges'>
						<SingleSquare
							url='https://blog.myfitnesspal.com/wp-content/uploads/2021/05/How-Sleep-Changes-as-You-Age-930x550.jpg'
							section='Self Care'
							title='How Sleep Changes as You Age'
							description='As we age, our sleep requirements shift, as does our circadian rhythm, which dictates when we feel alert and when we feel tired.'
							author='Kevin Gray'
						/>
					</Link>
				</div>
				<div className='compilationContainerItem'>
					<Link to='/menWomenStress'>
						<SingleSquare
							url='https://blog.myfitnesspal.com/wp-content/uploads/2021/05/How-Men-and-Women-Handle-Stress-Differently-930x550.jpg'
							section='Self Care'
							title='How Men and Women Handle Stress Differently'
							description='If you’ve ever looked at your mom, dad or partner during a difficult situation and noticed inconsistencies in their reactions, it’s not your imagination.'
							author='Kevin Gray'
						/>
					</Link>
				</div>
				<div className='compilationContainerItem'>
					<Link to='/saunaHealthLongevity'>
						<SingleSquare
							url='https://blog.myfitnesspal.com/wp-content/uploads/2021/05/Saunas-Promote-Heart-Health-and-Longevity-Science-Says-2-930x550.jpg'
							section='Self Care'
							title='Saunas Promote Heart Health and Longevity, Science Says'
							description='Saunas are more beneficial than you likely imagined.'
							author='Kevin Gray'
						/>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default SelfCare;
