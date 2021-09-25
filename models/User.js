const { Schema, model } = require("mongoose")
const uniqueValidator = require("mongoose-unique-validator")

const userSchema = new Schema({
	name: String,
	email: {
		type: String,
		unique: true
	},
	password: String,
	registeredAt: Date,
})

userSchema.set("toJSON", {
	transform: (document, returnedObject) => {
		returnedObject.id = returnedObject._id
		delete returnedObject._id
		delete returnedObject.__v
		delete returnedObject.passwordHash
	},
})

const User = model("User", userSchema)

module.exports = User
