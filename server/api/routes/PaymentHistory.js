const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const PaymentHistory = require('../models/PaymentHistory');

router.get('/', async (req, res, next) => {
	try {
		const docs = await PaymentHistory.find()
			.select('_id amount date')
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
        console.log(req.body.amount)
		const historyInfo = new PaymentHistory({
			_id: new mongoose.Types.ObjectId(),
			amount: req.body.amount,
			date: req.body.date
		});

		const result = await historyInfo.save();

		const response = {
			messages: 'Payment to history successfully',
			paymentHistoryInfo: {
				_id: result.Id,
				amount: result.amount,
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
