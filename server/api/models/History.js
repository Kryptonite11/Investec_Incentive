const mongoose = require("mongoose");

const HistorySchema = mongoose.Schema({
	_id: mongoose.Schema.Types.ObjectId,
	winner: {
		type: String,
		ref: "User",
        required: true,
	},
	votes: {
		type: String,
        required: true,
	},
	date: {
		type: String,
		required: true,
	},
});

module.exports = mongoose.model("History", HistorySchema);
