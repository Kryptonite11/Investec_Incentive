const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const BankingInfo = require('../models/BankingInfo');

router.get('/:userId', async (req, res, next) => {
	try {
		const docs = await BankingInfo.find()
			.select('_id accountHolder bankName user')
			.exec();

		const response = {
			count: docs.length,
		};
	} catch (error) {
		res.status(500).json({
			error: error,
		});
	}
});

router.post('/:userId', async (req, res, next) => {
	const userId = req.params.userId;

	try {
		const userBankingDetailsExists = await BankingInfo.find({
			user: userId,
		});

		console.log(userBankingDetailsExists)

		if (userBankingDetailsExists.length !== 0) {
			const response = {
				message: 'Banking details for this User already exists!',
			};
			res.status(409).json(response);
		} else {
			const bankingInfo = new BankingInfo({
				_id: new mongoose.Types.ObjectId(),
				accountHolder: req.body.accountHolder,
				accountNumber: req.body.accountNumber,
				bankName: req.body.bankName,
				branchName: req.body.branchName,
				branchCode: req.body.branchCode,
				user: userId,
			});

			const result = await bankingInfo.save();

			const response = {
				messages: 'Create banking info successfully',
				bankingInfo: {
					_id: result.Id,
					accountHolder: result.accountHolder,
					accountNumber: result.accountNumber,
					bankName: result.bankName,
					branchName: result.branchName,
					branchCode: result.branchCode,
				},
			};
			res.status(200).json(response);
		}
	} catch (error) {
		res.status(500).json({
			error: error,
		});
	}
});

module.exports = router;
