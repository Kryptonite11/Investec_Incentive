const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
	try {
		const token = req.headers.authorization.split(" ")[1];
        const decoded = jwt.verify(token, "INCENTIVE_KEY");
        req.userData = decoded;
		next();
	} catch (err) {
		const response = {
			message: "User not authorized!",
		};
		return res.status(401).json(response);
	}
};