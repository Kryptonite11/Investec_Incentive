import React, { useState } from 'react';

import axios from 'axios';

import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';

import FavoriteIcon from '@material-ui/icons/Favorite';

import styles from './EmployeeCard.styles';

const EmployeeCard = (props) => {
	const classes = styles();

	const [voteIconColour, setVoteIconColour] = useState('');

	const handleVoteClick = async () => {
		try {
			const response = await axios.get(`/api/votes/${props.id}`);
			// console.log(response.data);
			const voteCount = response.data.vote.voteCount;
			const payload = [
				{
					propName: 'voteCount',
					value: voteCount + 1,
				},
			];
			const result = await axios.patch(`/api/votes/${props.id}`, payload);
			console.log(result);
		} catch (error) {
			console.log(error);
		}
		// console.log('clicked', props.id);
		setVoteIconColour('#db3550');

		await props.updateVotes();

		setTimeout(() => {
			setVoteIconColour('');
		}, 1000);
	};

	return (
		<Paper className={classes.root} elevation={10} id={props.id}>
			<CardHeader
				avatar={
					<Avatar className={classes.avatar}>{props.name[0]}</Avatar>
				}
				title={props.name}
			/>
			<CardMedia
				className={classes.media}
				image={`/static/images/${props.picture}`}
			/>
			<CardActions>
				<IconButton
					aria-label="vote"
					className={classes.vote}
					onClick={handleVoteClick}
				>
					<FavoriteIcon
						// className={classes.}
						style={{ color: voteIconColour }}
						// fontSize="large"
					/>
				</IconButton>
			</CardActions>
		</Paper>
	);
};

export default EmployeeCard;
