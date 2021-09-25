const Room = require("../models/Room")

const rooms = [
	{
		method: "GET",
		path: "/api/rooms",
		handler: async (req, h) => {
			const rooms = await Room.find({})
			return rooms
		},
	},
	{
		method: "POST",
		path: "/api/rooms",
		handler: async (req, h) => {
			const {
				description,
				location,
				featured_image,
				meta,
				price,
				publishedAt,
				title,
			} = req.payload
			const newRoom = new Room({
				description,
				location,
				featured_image,
				meta,
				price,
				publishedAt,
				title,
			})
			let saveRoom
			try {
				saveRoom = await newRoom.save()
			} catch (error) {
				console.log(error)
			}
			return h.response(saveRoom).type("application/json")
		},
	},
	{
		method: "DELETE",
		path: "/api/rooms/{id}",
		handler: async (req, h) => {
			const id = req.params.id
			await Room.findByIdAndRemove(id)
			return h
				.response(`Room ID: ${id} eliminada exitósamente!`)
				.type("application/json")
		},
	},
	{
		method: "PUT",
		path: "/api/rooms/{id}",
		handler: async (req, h) => {
			const id = req.params.id
			const room = req.payload

			await Room.findByIdAndUpdate(id, room)

			return h
				.response(`Room ID: ${id} modificada exitósamente!`)
				.type("application/json")
		},
	},
]


module.exports = rooms