import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
// import CssBaseline from '@material-ui/core/CssBaseline';

const theme = createMuiTheme({
	palette: {
		backgroundColor:
			'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(7,88,64,1) 100%)',
		primary: {
			main: '#09794a',
			contrastText: '#FFF',
		},
		secondary: {
			main: '#00d4ff',
			contrastText: '#FFF',
		},
	},
});

ReactDOM.render(
	// <React.StrictMode>
	// 	<App />
	// </React.StrictMode>,
	<MuiThemeProvider theme={theme}>
		{/* <CssBaseline /> */}
		<App />
	</MuiThemeProvider>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
