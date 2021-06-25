import React, { useContext, useState } from 'react';

import axios from 'axios';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import SnackBar from '../SnackBar/SnackBar';

import styles from './Login.styles';
import { AccountContext } from '../../contexts/AccountContext';

const SignUp = () => {
	const classes = styles();

	const { switchToLogin } = useContext(AccountContext);

	// States for creating a user
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	// States for SnackBar
	const [openSnackBar, setOpenSnackBar] = useState(false);
	const [snackBarSeverity, setSnackBarSeverity] = useState('success');
	const [snackBarMessage, setSnackBarMessage] = useState('');

	const handleNameInput = (event) => {
		setName(event.target.value);
	};

	const handleEmailInput = (event) => {
		setEmail(event.target.value);
	};

	const handlePasswordInput = (event) => {
		setPassword(event.target.value);
	};

	const handleCreateUser = async () => {
		try {
			const payload = {
				name: name,
				email: email,
				password: password,
			};
			const result = await axios.post('/api/user/signUp', payload);
			console.debug(result);

			console.log('User account successfully created!');

			setOpenSnackBar(true);
			setSnackBarSeverity('success');
			setSnackBarMessage('Created User Account Successfully!');

			setTimeout(() => {
				switchToLogin();
			}, 3000);
		} catch (error) {
			setOpenSnackBar(true);
			setSnackBarSeverity('error');
			setSnackBarMessage('Unable to create User Account!');
		}
	};

	const handleCloseSnackBar = () => {
		setOpenSnackBar(false);
	};

	return (
		<div>
			<TextField
				className={classes.input}
				label="Name"
				value={name}
				onChange={handleNameInput}
				type="text"
				required
				variant="outlined"
			/>
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
				value={password}
				onChange={handlePasswordInput}
				type="password"
				required
				variant="outlined"
			/>
			<Button
				className={classes.submit}
				variant="contained"
				onClick={handleCreateUser}
			>
				Sign Up
			</Button>
			<div>
				<p className={classes.mutedLink}>
					Already have an account?{' '}
					<a
						className={classes.boldLink}
						href="#"
						onClick={switchToLogin}
					>
						Sign in
					</a>
				</p>
			</div>
			<SnackBar
				open={openSnackBar}
				severity={snackBarSeverity}
				message={snackBarMessage}
				handleClose={handleCloseSnackBar}
			/>
		</div>
	);
};

export default SignUp;
