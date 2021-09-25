const bcrypt = require("bcrypt")
const User = require("../models/User")

const users = [
	{
		method: "POST",
		path: "/api/users",
		handler: async (req, h) => {
			const { name, email, password, registeredAt } = req.payload

			const saltRounds = 10
			const passwordHash = await bcrypt.hash(password, saltRounds)

			const user = new User({
				name,
				passwordHash,
				email,
				registeredAt,
			})

			let savedUser

			try {
				savedUser = await user.save()
			} catch (error) {
				const response = h.response(error.message)
				response.statusCode = 500
				return response
			}

			const response = h.response(savedUser)
      response.statusCode = 201
			return response
		},
	},
]

module.exports = users
