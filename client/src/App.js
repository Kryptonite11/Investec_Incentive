import React from 'react';
import { useToken } from './useToken';

import AccountBox from './components/AccountBox/AccountBox';
import AccountContextProvider from './contexts/AccountContext';
import HomeContextProvider from './contexts/HomeContext';

import Home from './components/Home/Home';

const App = () => {
	const { token, setToken } = useToken();

	if (!token) {
		return (
			<AccountContextProvider>
				<AccountBox setToken={setToken} />;
			</AccountContextProvider>
		);
	}

	return (
		<HomeContextProvider>
			<Home setToken={setToken} />
		</HomeContextProvider>
	);
};

export default App;
