import React from 'react';

import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import { CardContent } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import { Typography } from '@material-ui/core';

import styles from './History.styles';

const Card = (props) => {
	const classes = styles();

	return (
		<Paper className={classes.paper} elevation={10} id={props.id}>
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
			<CardContent>
				<Typography variant="caption" component="h5">Date: {props.date}</Typography>
                <Typography variant="caption" component="h5">Votes: {props.votes}</Typography>
			</CardContent>
		</Paper>
	);
};

export default Card;
