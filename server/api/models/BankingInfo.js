const mongoose = require("mongoose");

const BankingInfoSchema = mongoose.Schema({
	_id: mongoose.Schema.Types.ObjectId,
	accountHolder: {
		type: String,
        required: true,
	},
	accountNumber: {
		type: String,
        required: true,
	},
    bankName: {
        type: String,
        required: true
    },
    branchName: {
        type: String,
        required: true
    },
    branchCode: {
        type: String,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
});

module.exports = mongoose.model("BankingInfo", BankingInfoSchema);
