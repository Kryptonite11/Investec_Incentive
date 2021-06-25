import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { Line, Bar } from 'react-chartjs-2';

const HistoryGraph = () => {
	const [labels, setLabels] = useState([]);
	const [data, setData] = useState([]);

	useEffect(() => {
		getPaymentHistory();
	}, []);

	const getPaymentHistory = async () => {
		try {
			const response = await axios.get('/api/payment');
			// console.log(response.data);
			const data = response.data.message;

			let newAmounts = [];
			let newDates = [];
			for (let i = 0; i < data.length; i++) {
				newAmounts.push(data[i].amount);
				newDates.push(data[i].date);
			}

			setLabels(newDates);
			setData(newAmounts);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<Bar
			data={{
				labels: labels,
				datasets: [
					{
						label: 'Employee Reward Amount',
						data: data,
                        backgroundColor: "rgba(9, 121, 74, 0.2)",
                        borderColor: 'rgb(9, 121, 74)',
                        borderWidth: 2
					},
				],
			}}
			options={{
				responsive: true,
				maintainAspectRatio: false,
				scales: {
					y: {
						max: 1100,
						min: 0,
						ticks: {
							stepSize: 50,
						},
						title: {
							display: true,
							text: 'Amount (R)',
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
							text: 'Month',
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
	);
};

export default HistoryGraph;
