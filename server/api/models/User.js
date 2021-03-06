const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
	_id: mongoose.Schema.Types.ObjectId,
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
		unique: true,
		match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
	},
	password: {
		type: String,
		required: true,
	},
	voted: {
		type: Boolean,
		required: true,
	},
	picture: {
		type: String,
		require: true,
	},
});

module.exports = mongoose.model('User', UserSchema);
