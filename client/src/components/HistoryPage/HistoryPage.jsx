import React, { useEffect, useState, useContext } from 'react';

import axios from 'axios';

import Carousel from 'react-elastic-carousel';

import { Typography } from '@material-ui/core';

import Card from './Card';
import HistoryCard from '../History/HistoryCard';
import HistoryGraph from './Graph';

import styles from './History.styles';
import { HomeContext } from '../../contexts/HomeContext';

const HistoryPage = () => {
	const classes = styles();

	const [winners, setWinners] = useState([]);

	const { switchToLanding } = useContext(HomeContext);

	const handleClick = () => {
		console.log('clicked');
		switchToLanding();
	};

	useEffect(() => {
		getPreviousWinners();
	}, []);

	const getPreviousWinners = async () => {
		try {
			const response = await axios.get('/api/history');
			console.log(response.data);
			const winnersData = response.data.message;

			setWinners(winnersData);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className={classes.root}>
			<Typography className={classes.text} variant="h4">
				Employee of the Month History
			</Typography>
			<Carousel
				className={classes.carousal}
				itemsToShow={6}
				itemPadding={[40, 20]}
			>
				<HistoryCard
					content="Back to Voting Page"
					toVoting={true}
					handleClick={handleClick}
				/>
				{winners.map((winner) => (
					<div key={winner._id}>
						<Card
							date={winner.date}
							votes={winner.votes}
							name={winner.winner.name}
							picture={winner.winner.picture}
						/>
					</div>
				))}
			</Carousel>
			<div className={classes.graph}>
				<HistoryGraph />
			</div>
		</div>
	);
};

export default HistoryPage;
