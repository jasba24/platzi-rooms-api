const { Schema, model } = require("mongoose")

const roomSchema = new Schema({
	description: String,
	featured_image: String,
	location: String,
	meta: Array,
	price: String,
	publishedAt: Date,
	services: {
		type: Schema.Types.ObjectId,
		ref: "Services",
	},
	title: String,
	userId: {
		type: Schema.Types.ObjectId,
		ref: "User",
	},
	type: String,
})

roomSchema.set("toJSON", {
	transform: (document, returnedObject) => {
		returnedObject.id = returnedObject._id
		delete returnedObject._id
		delete returnedObject.__v
	},
})

const Room = model("Room", roomSchema)

module.exports = Room
