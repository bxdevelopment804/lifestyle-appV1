import React from 'react';
import {
	BrowserRouter as Router,
	Route,
	// Redirect,
	Switch,
	Link,
} from 'react-router-dom';

import Home from './home';
import Recipes from './recipes';
import MealPlanning from './mealPlanning';
import WeightLoss from './weightLoss';
import Fitness from './fitness';
import SelfCare from './selfCare';
import GreenTeaNoodles from './greenTeaNoodles';
import HealthyFrenchToast from './healthyFrenchToast';
import AsianChickenMeatballs from './asianChickenMeatballs';
import './main.css';
import ChickenZoodleSoup from './chickenZoodleSoup';
import ItalianTunaMelt from './italianTunaMelt';
import ChickenSaladSandwich from './chickenSaladSandwich';
import HealthyUltimateBurger from './healthyUltimateBurger';
import TexmexPitaPizza from './texmexPitaPizza';
import WildRiceSoup from './wildRiceSoup';
import VeganBakedPotato from './veganBakedPotato';
import VeganMacaroniCheese from './veganMacaroniCheese';
import PenneTomatoMushroom from './penneTomatoMushroom';
import BurritosRiceBeans from './burritosRiceBeans';
import HoneyDijonChicken from './honeyDijonChicken';
import BeefStirFry from './beefStirFry';
import ChickenSouvlakiBowl from './chickenSouvlakiBowl';
import IndianChickenBowl from './indianChickenBowl';
import MasonJarNoodles from './masonJarNoodles';
import KoreanChickenBowl from './koreanChickenBowl';
import ZucchiniNoodleCaprese from './zucchiniNoodleCaprese';
import GreekSalad from './greekSalad';
import SalmonAvocadoSalad from './salmonAvocadoSalad';
import TacoSalad from './tacoSalad';
import CucumberRadishSalad from './cucumberRadishSalad';
import SouthwestChickenSalad from './southwestChickenSalad';
import ThirtyMinBeachWorkout from './thirtyMinBeachWorkout';
import FourCommonStretches from './fourCommonStretches';
import ColdWeatherRunning from './coldWeatherRunning';
import TurkishGetUp from './turkishGetUp';
import ThreeDayTotalBody from './threeDayTotalBody';
import OneDumbbellTotalBody from './oneDumbbellTotalBody';
import OneKettlebellLowerBody from './oneKettlebellLowerBody';
import TotalBody2021 from './totalBody2021';
import HolidayAMRAP from './holidayAMRAP';
import OneWeekCore from './oneWeekCore';
import FiveWFHStretches from './fiveWFHStretches';
import HowSleepChanges from './howSleepChanges';
import MenWomenStress from './menWomenStress';
import SaunaHealthLongevity from './saunaHealthLongevity';
import Shop from './shop';

const Main = () => {
	return (
		<main>
			<Switch>
				<Route path='/recipes' component={Recipes} />
				<Route path='/mealPlanning' component={MealPlanning} />
				<Route path='/weightLoss' component={WeightLoss} />
				<Route path='/fitness' component={Fitness} />
				<Route path='/selfCare' component={SelfCare} />
				<Route path='/greenTeaNoodles' component={GreenTeaNoodles} />
				<Route path='/healthyFrenchToast' component={HealthyFrenchToast} />
				<Route
					path='/asianChickenMeatballs'
					component={AsianChickenMeatballs}
				/>
				<Route path='/chickenZoodleSoup' component={ChickenZoodleSoup} />
				<Route path='/italianTunaMelt' component={ItalianTunaMelt} />
				<Route path='/chickenSaladSandwich' component={ChickenSaladSandwich} />
				<Route
					path='/healthyUltimateBurger'
					component={HealthyUltimateBurger}
				/>
				<Route path='/texmexPitaPizza' component={TexmexPitaPizza} />
				<Route path='/wildRiceSoup' component={WildRiceSoup} />
				<Route path='/veganBakedPotato' component={VeganBakedPotato} />
				<Route path='/veganMacaroniCheese' component={VeganMacaroniCheese} />
				<Route path='/penneTomatoMushroom' component={PenneTomatoMushroom} />
				<Route path='/burritosRiceBeans' component={BurritosRiceBeans} />
				<Route path='/honeyDijonChicken' component={HoneyDijonChicken} />
				<Route path='/beefStirFry' component={BeefStirFry} />
				<Route path='/chickenSouvlakiBowl' component={ChickenSouvlakiBowl} />
				<Route path='/indianChickenBowl' component={IndianChickenBowl} />
				<Route path='/masonJarNoodles' component={MasonJarNoodles} />
				<Route path='/koreanChickenBowl' component={KoreanChickenBowl} />
				<Route
					path='/zucchiniNoodleCaprese'
					component={ZucchiniNoodleCaprese}
				/>
				<Route path='/greekSalad' component={GreekSalad} />
				<Route path='/salmonAvocadoSalad' component={SalmonAvocadoSalad} />
				<Route path='/tacoSalad' component={TacoSalad} />
				<Route path='/cucumberRadishSalad' component={CucumberRadishSalad} />
				<Route
					path='/southwestChickenSalad'
					component={SouthwestChickenSalad}
				/>
				<Route
					path='/thirtyMinBeachWorkout'
					component={ThirtyMinBeachWorkout}
				/>
				<Route path='/fourCommonStretches' component={FourCommonStretches} />
				<Route path='/coldWeatherRunning' component={ColdWeatherRunning} />
				<Route path='/turkishGetUp' component={TurkishGetUp} />
				<Route path='/threeDayTotalBody' component={ThreeDayTotalBody} />
				<Route path='/oneDumbbellTotalBody' component={OneDumbbellTotalBody} />
				<Route
					path='/oneKettlebellLowerBody'
					component={OneKettlebellLowerBody}
				/>
				<Route path='/totalBody2021' component={TotalBody2021} />
				<Route path='/holidayAMRAP' component={HolidayAMRAP} />
				<Route path='/oneWeekCore' component={OneWeekCore} />
				<Route path='/fiveWFHStretches' component={FiveWFHStretches} />
				<Route path='/howSleepChanges' component={HowSleepChanges} />
				<Route path='/menWomenStress' component={MenWomenStress} />
				<Route path='/saunaHealthLongevity' component={SaunaHealthLongevity} />
				<Route path='/shop' component={Shop} />
				
				<Route exact path='/' component={Home} />
			</Switch>
		</main>
	);
};

export default Main;
