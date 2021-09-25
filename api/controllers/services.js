const Service = require("../models/Service")

const services = [
	{
		method: "GET",
		path: "/api/services",
		handler: async (req, h) => {
			const services = await Service.find({})
			return services
		},
	},
	{
		method: "POST",
		path: "/api/services",
		handler: async (req, h) => {
			const { name, slug } = req.payload

			const newService = new Service({ name, slug })

			let saveService
			try {
				saveService = await newService.save()
			} catch (error) {
				const response = h.response(error.message)
				response.statusCode = 500
				return response
			}

			const response = h.response(saveService)
			response.type("application/json")
			response.statusCode = 201
			return response
		},
	},
]

module.exports = services
