const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const History = require('../models/History');

router.get('/', async (req, res, next) => {
	try {
		const docs = await History.find()
			.select('_id winner votes date')
			.populate('winner', '_id name picture')
			.exec();

		const response = {
			count: docs.length,
			message: docs,
		};

		res.status(200).json(response);
	} catch (error) {
		res.status(500).json({
			error: error,
		});
	}
});

router.post('/', async (req, res, next) => {
	try {
		const historyInfo = new History({
			_id: new mongoose.Types.ObjectId(),
			winner: req.body.winner, // user/winner Id
			votes: req.body.votes,
			date: req.body.date,
		});

		const result = await historyInfo.save();

		const response = {
			messages: 'Added record to History successfully',
			historyInfo: {
				_id: result.Id,
				winner: result.winner,
				votes: result.votes,
				date: result.date,
			},
		};
		res.status(200).json(response);
	} catch (error) {
		res.status(500).json({
			error: error,
		});
	}
});


module.exports = router;
