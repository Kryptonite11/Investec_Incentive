import { createContext, useState } from 'react';

export const HomeContext = createContext();

const HomeContextProvider = (props) => {
	const [viewPage, setViewPage] = useState('landing');

	const switchToLanding = () => {
		setViewPage('landing');
	};

	const switchToHistory = () => {
		setViewPage('history');
	};

	return (
		<HomeContext.Provider
			value={{
				viewPage,
				switchToLanding,
				switchToHistory,
			}}
		>
			{props.children}
		</HomeContext.Provider>
	);
};

export default HomeContextProvider;
