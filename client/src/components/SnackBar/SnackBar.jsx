import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

import styles from './SnackBar.styles';

function Alert(props) {
	return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const SnackBar = (props) => {
	const classes = styles();

	return (
		<div className={classes.root}>
			<Snackbar
				open={props.open}
				autoHideDuration={3000}
				onClose={props.handleClose}
				anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
			>
				<Alert onClose={props.handleClose} severity={props.severity}>
					{props.message}
				</Alert>
			</Snackbar>
			{/* <Alert severity="error">This is an error message!</Alert>
			<Alert severity="warning">This is a warning message!</Alert>
			<Alert severity="info">This is an information message!</Alert>
			<Alert severity="success">This is a success message!</Alert> */}
		</div>
	);
};

export default SnackBar;
