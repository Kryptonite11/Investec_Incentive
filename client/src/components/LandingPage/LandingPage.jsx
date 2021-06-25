import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';

import Carousel from 'react-elastic-carousel';

import Typography from '@material-ui/core/Typography';

import { Bar } from 'react-chartjs-2';

import EmployeeCard from '../EmployeeCard/EmployeeCard';
import HistoryCard from '../History/HistoryCard';

import styles from './LandingPage.styles';
import { HomeContext } from '../../contexts/HomeContext';

const LandingPage = () => {
	const classes = styles();

	const [labels, setLabels] = useState([]);
	const [data, setData] = useState([]);
	const [employees, setEmployees] = useState([]);
	const [graphColours, setGraphColours] = useState([]);
	const [borderColours, setBorderColours] = useState([]);

	const { switchToHistory } = useContext(HomeContext);

	const handleClick = () => {
		console.log('clicked');
		switchToHistory();
	};

	useEffect(() => {
		getVotes();
	}, []);

	const getVotes = async () => {
		try {
			const response = await axios.get('/api/votes');
			// console.log(response);
			const data = response.data.message;
			console.log(data);

			const newLabels = [];
			const newData = [];
			const newEmployees = [];
			const newGraphColours = [];
			const newBorderColours = [];

			let totalNumOfVotes = 0;

			for (let j = 0; j < data.length; j++) {
				totalNumOfVotes += data[j].voteCount;
			}

			let highestVotes = 0.0;
			let highestIdx = 0;
			for (let i = 0; i < data.length; i++) {
				let votePercentage =
					(data[i].voteCount / totalNumOfVotes) * 100;
				newData.push(votePercentage);

				if (votePercentage > highestVotes) {
					highestVotes = votePercentage;
					highestIdx = i;
				}

				let employee = {
					voteId: data[i]._id,
					name: data[i].user.name,
					picture: data[i].user.picture,
				};
				newEmployees.push(employee);

				newLabels.push(data[i].user.name);

				newGraphColours.push('rgba(9, 121, 74, 0.2)');
				newBorderColours.push('rgb(9, 121, 74)');
			}

			newGraphColours[highestIdx] = 'rgba(81, 40, 143, 0.2)';
			newBorderColours[highestIdx] = 'rgb(81, 40, 143)';

			console.log(data[highestIdx]);

			setLabels(newLabels);
			setData(newData);
			setEmployees(newEmployees);

			setGraphColours(newGraphColours);
			setBorderColours(newBorderColours);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<>
			<Typography className={classes.text} variant="h4">
				Vote for Employee of the Month
			</Typography>

			<div className={classes.carousalBox}>
				<Carousel
					className={classes.carousal}
					itemsToShow={6}
					itemPadding={[40, 20]}
				>
					<HistoryCard
						content="Employee of the Month History!"
						handleClick={handleClick}
						toHistory={true}
					/>
					{employees.map((employee) => (
						<div key={employee.voteId}>
							<EmployeeCard
								name={employee.name}
								picture={employee.picture}
								id={employee.voteId}
								updateVotes={getVotes}
							/>
						</div>
					))}
				</Carousel>
			</div>

			<div className={classes.chart}>
				<Bar
					data={{
						labels,
						datasets: [
							{
								label: 'Vote %',
								data: data,
								backgroundColor: graphColours,
								borderColor: borderColours,
								// backgroundColor: ['rgba(9, 121, 74, 0.2)'],
								// borderColor: ['rgb(9, 121, 74)'],
								borderWidth: 2,
							},
						],
					}}
					options={{
						responsive: true,
						maintainAspectRatio: false,
						scales: {
							y: {
								// max: 100,
								min: 0,
								ticks: {
									stepSize: 10,
								},
								title: {
									display: true,
									text: 'Percentage of Votes',
									font: {
										size: 16,
										weight: 'bold',
									},
									padding: 10,
								},
							},
							x: {
								title: {
									display: true,
									text: 'Employees',
									font: {
										size: 16,
										weight: 'bold',
									},
									padding: 20,
								},
							},
						},
					}}
				/>
			</div>
		</>
	);
};

export default LandingPage;
