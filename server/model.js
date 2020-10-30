const mongoose = require("mongoose")

const schema = mongoose.Schema({
	email: String
})

module.exports = mongoose.model("Email", schema)