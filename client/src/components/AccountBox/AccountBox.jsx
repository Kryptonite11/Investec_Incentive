import React, { useContext } from 'react';

import LoginForm from './Login';
import SignUpForm from './SignUp';

import styles from './AccountBox.styles';
import { AccountContext } from '../../contexts/AccountContext';

const AccountBox = (props) => {
	const classes = styles();

	const { page } = useContext(AccountContext);

	return (
		<div className={classes.root}>
			<div className={classes.boxContainer}>
				<div className={classes.topContainer}>
					<div className={classes.backDrop}></div>
					{page === 'login' && (
						<div className={classes.headerContainer}>
							<h2 className={classes.headerText}>Welcome To</h2>
							<h2 className={classes.headerText}>In-Cent-ive</h2>
							<h5 className={classes.smallText}>
								Please sign-in to continue
							</h5>
						</div>
					)}
					{page === 'signup' && (
						<div className={classes.headerContainer}>
							<h2 className={classes.headerText}>Create</h2>
							<h2 className={classes.headerText}>Account</h2>
							<h5 className={classes.smallText}>
								Please sign-up to continue
							</h5>
						</div>
					)}
				</div>
				{page === 'login' && <LoginForm setToken={props.setToken} />}
				{page === 'signup' && <SignUpForm />}
				{/* <LoginForm /> */}
			</div>
		</div>
	);
};

export default AccountBox;
