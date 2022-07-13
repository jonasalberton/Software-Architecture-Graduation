const { Transaction } = require('../models/transaction');
const queue = require("../queue");

const createTransaction = async (req, res, next) => {
	try {
		const transaction = await Transaction.create({
			...req.body
		})
		queue.sendToQueue("user-transaction", transaction);
		return res.json(transaction)
	} catch (error) {
		return res.status(400).json({ message: "Error on creating Transaction, check the params"})
	}
};

module.exports.createTransaction = createTransaction;
