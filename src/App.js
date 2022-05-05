//Entire Site Styled After SkinnyMS.com
import React from 'react';

import Navbar from './navbar';
import Main from './pages/main';
import Footer from './footer';

import './App.css';

function App() {
	return (
		<div className='App'>
			<Navbar />
			<Main />
			<Footer />
		</div>
	);
}

export default App;
