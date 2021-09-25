const rooms = require("./controllers/rooms")
const users = require("./controllers/users")

const routes = [...rooms, ...users]

module.exports = {
	name: "ApiRoutes",
	register: async (server, options) => {
		server.route(routes)
	},
}
