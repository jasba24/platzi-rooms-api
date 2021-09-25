const rooms = require("./controllers/rooms")

module.exports = {
	name: "ApiRoutes",
	register: async (server, options) => {
		server.route(rooms)
	},
}
