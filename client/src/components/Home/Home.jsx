import React, { useContext } from 'react';

import AppBar from '../AppBar/AppBar';
import LandingPage from '../LandingPage/LandingPage';
import HistoryPage from '../HistoryPage/HistoryPage';
import { HomeContext } from '../../contexts/HomeContext';

const Home = (props) => {
	const { viewPage } = useContext(HomeContext);

	return (
		<div>
			<AppBar setToken={props.setToken} />
			{viewPage === 'landing' && <LandingPage />}
			{viewPage === 'history' && <HistoryPage />}
		</div>
	);
};

export default Home;
