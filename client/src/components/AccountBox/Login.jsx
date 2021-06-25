import React, { useContext, useState } from 'react';

import axios from 'axios';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import styles from './Login.styles';
import { AccountContext } from '../../contexts/AccountContext';

const Login = (props) => {
	const classes = styles();

	const { switchToSignUp } = useContext(AccountContext);

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleEmailInput = (event) => {
		setEmail(event.target.value);
	};

	const handlePasswordInput = (event) => {
		setPassword(event.target.value);
	};

	const handleLogin = async () => {
		try {
			const payload = {
				email: email,
				password: password,
			};

			const response = await axios.post('/api/user/login', payload);

			console.log(response);
			const token = response.data.token;
			props.setToken(token);
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<div>
			<TextField
				className={classes.input}
				label="Email"
				value={email}
				onChange={handleEmailInput}
				type="email"
				required
				variant="outlined"
			/>
			<TextField
				className={classes.input}
				label="Password"
				type="password"
				value={password}
				onChange={handlePasswordInput}
				required
				variant="outlined"
			/>
			<Button
				className={classes.submit}
				variant="contained"
				onClick={handleLogin}
			>
				Sign In
			</Button>
			<div>
				<p className={classes.mutedLink}>
					Don't have an account?{' '}
					<a
						className={classes.boldLink}
						href="#"
						onClick={switchToSignUp}
					>
						Sign up
					</a>
				</p>
			</div>
		</div>
	);
};

export default Login;
