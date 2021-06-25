import React, { useContext } from 'react';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import BackIcon from '@material-ui/icons/ArrowBackIos';
import ForwardIcon from '@material-ui/icons/ArrowForwardIos';

import styles from './HistoryCard.styles';

const WinnerCard = (props) => {
	const classes = styles();

	return (
		<Paper
			className={classes.root}
			elevation={10}
			id={props.id}
			onClick={props.handleClick}
		>
			{props.toVoting && <BackIcon className={classes.backIcon} />}
			<Typography variant="h6" component="a" className={classes.text}>
				{props.content}
			</Typography>
			{props.toHistory && <ForwardIcon className={classes.forwardIcon} />}
		</Paper>
	);
};

export default WinnerCard;
