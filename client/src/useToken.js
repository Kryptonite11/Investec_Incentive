import { useState } from 'react';

export const useToken = () => {
	const getToken = () => {
		const tokenString = localStorage.getItem('apiToken');

		return tokenString?.token;
	};

	const [token, setToken] = useState(getToken());

	const saveToken = (userToken) => {
		localStorage.setItem('apiToken', userToken);
		setToken(userToken);
	};

	return {
		setToken: saveToken,
		token,
	};
};
