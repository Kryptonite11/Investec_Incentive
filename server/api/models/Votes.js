const mongoose = require("mongoose");

const VoteSchema = mongoose.Schema({
	_id: mongoose.Schema.Types.ObjectId,
	user: {
		type: String,
		ref: "User",
        required: true,
	},
	voteCount: {
		type: Number,
		required: true,
	},
});

module.exports = mongoose.model("Votes", VoteSchema);
