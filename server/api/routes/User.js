const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const hashPassword = require('../utils/hashPassword');
const checkPassword = require('../utils/checkPassword');

const User = require('../models/User');
const Votes = require('../models/Votes');

router.get('/', async (req, res, next) => {
	try {
		const docs = await User.find().select('_id name email').exec();
		const response = {
			count: docs.length,
			users: docs.map((doc) => {
				return {
					_id: doc._id,
					name: doc.name,
					email: doc.email,
				};
			}),
		};
		res.status(200).json(response);
	} catch (err) {
		res.status(500).json({
			error: err,
		});
	}
});

router.get('/:userId', async (req, res, next) => {
	try {
	} catch (err) {
		res.status(500).json({
			error: err,
		});
	}
});

router.patch('/:userId', async (req, res, next) => {
	try {
		const userId = req.params.userId;

		const updateOps = {};

		for (const ops of req.body) {
			updateOps[ops.propName] = ops.value;
		}

		const result = await User.updateOne(
			{
				_id: userId,
			},
			{
				$set: updateOps,
			}
		).exec();

		console.log(result);

		const response = {
			message: 'Updated user successfully',
		};

		res.status(200).json(response);
	} catch (err) {
		res.status(500).json({
			error: err,
		});
	}
});

router.patch('/', async (req, res, next) => {
	try {
		const updateOps = {};

		for (const ops of req.body) {
			updateOps[ops.propName] = ops.value;
		}

		const result = await User.updateMany({
			$set: updateOps,
		}).exec();

		console.log(result);

		const response = {
			message: 'Updated voted flag successfully',
		};

		res.status(200).json(response);
	} catch (err) {
		res.status(500).json({
			error: err,
		});
	}
});

router.delete('/:userId', async (req, res, next) => {
	const userId = req.params.userId;

	try {
		const result = await User.remove({
			_id: userId,
		}).exec();
		const response = {
			message: 'Deleted user successfully!',
		};

		res.status(200).json(response);
	} catch (err) {
		res.status(500).json({
			error: err,
		});
	}
});

router.post('/signUp', async (req, res, next) => {
	try {
		const userExists = await User.find({
			email: req.body.email,
		});

		console.log(userExists);

		if (userExists.length !== 0) {
			const response = {
				message: 'User with email exists!',
			};
			res.status(409).json(response);
		} else {
			const hashedPassword = await hashPassword(req.body.password);

			const user = new User({
				_id: new mongoose.Types.ObjectId(),
				name: req.body.name,
				email: req.body.email,
				password: hashedPassword,
				voted: false,
				picture: req.body.picture,
			});

			const userResult = await user.save();

			// console.log(user);
			const vote = new Votes({
				_id: new mongoose.Types.ObjectId(),
				user: userResult._id,
				voteCount: 0,
			});

			const voteResult = await vote.save();

			const response = {
				message: 'Created user successfully!',
				createUser: {
					_id: userResult._id,
					name: userResult.name,
					email: userResult.email,
					voted: userResult.voted,
					picture: userResult.picture,
				},
				vote: {
					_id: voteResult._id,
					name: voteResult.name,
					voteCount: voteResult.voteCount,
				},
			};

			res.status(201).json(response);
		}
	} catch (err) {
		res.status(500).json({
			error: err,
		});
	}
});

router.post('/login', async (req, res, next) => {
	try {
		const user = await User.find({
			email: req.body.email,
		});
		if (user.length === 0) {
			const response = {
				message: 'User login failed!',
			};
			res.status(401).json(response);
		} else {
			const verifyPwd = await checkPassword(
				req.body.password,
				user[0].password
			);

			if (!verifyPwd) {
				const response = {
					message: 'User login failed!',
				};
				res.status(401).json(response);
			} else {
				const jwtToken = jwt.sign(
					{
						email: user[0].email,
						userId: user[0]._id,
					},
					'NMISA_KEY',
					{ expiresIn: '1h' }
				);
				const response = {
					message: 'User login successful!',
					token: jwtToken,
				};
				res.status(200).json(response);
			}
		}
	} catch (err) {
		res.status(500).json({
			error: err,
		});
	}
});

module.exports = router;
