const mongoose = require("mongoose");

const PaymentHistorySchema = mongoose.Schema({
	_id: mongoose.Schema.Types.ObjectId,
	amount: {
		type: String,
        required: true,
	},
	date: {
		type: String,
		required: true,
	},
});

module.exports = mongoose.model("PaymentHistory", PaymentHistorySchema);
