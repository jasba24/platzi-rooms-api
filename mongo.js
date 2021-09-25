const mongoose = require("mongoose")

const { MONGO_DB_URI } = process.env

const connectionString = MONGO_DB_URI

mongoose
	.connect(connectionString)
	.then(() => {
		console.log("DB connected")
	})
	.catch(err => console.log(err))
