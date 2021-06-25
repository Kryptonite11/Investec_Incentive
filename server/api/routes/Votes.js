const { request } = require('express');
const express = require('express');
const router = express.Router();

const Votes = require('../models/Votes');

const mockInvestecTransaction = require("../utils/mockInvestecTransaction");

router.get('/', async (req, res, next) => {
	try {
		const docs = await Votes.find()
			.select('_id name voteCount')
			.populate('user', '_id name email picture')
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

router.get('/:voteId', async (req, res, next) => {
	try {
		const voteId = req.params.voteId;

		const doc = await Votes.findById(voteId)
			.select('_id name voteCount')
			.exec();
		const response = {
			vote: doc,
		};
		res.status(200).json(response);
	} catch (err) {
		res.status(500).json({
			error: err,
		});
	}
});

router.patch('/:voteId', async (req, res, next) => {
	try {
		const voteId = req.params.voteId;

		const updateOps = {};

		for (const ops of req.body) {
			updateOps[ops.propName] = ops.value;
		}

		const result = await Votes.updateOne(
			{
				_id: voteId,
			},
			{
				$set: updateOps,
			}
		).exec();

		console.log(result);

		const response = {
			messages: 'Updated votes successfully!',
		};
		res.status(200).json(response);
	} catch (error) {
		res.status(500).json({
			error: error,
		});
	}
});

router.patch('/', async (req, res, next) => {
	try {
		// const voteId = req.params.voteId;

		const updateOps = {};

		for (const ops of req.body) {
			updateOps[ops.propName] = ops.value;
		}

		const result = await Votes.updateMany({
			$set: updateOps,
		}).exec();

		console.log(result);

		const response = {
			messages: 'Reset votes successfully!',
		};
		res.status(200).json(response);
	} catch (error) {
		res.status(500).json({
			error: error,
		});
	}
});

router.post('/tally', async (req, res, next) => {
	try {
		console.log(req.body)
		const userDetails = req.body.winnerDetails;
		mockInvestecTransaction(userDetails);
		res.status(200).json({
			message: 'Email sent',
		});
	} catch (error) {
		res.status(500).json({
			error: error,
		});
	}
});


module.exports = router;
