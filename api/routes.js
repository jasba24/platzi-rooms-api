const rooms = require("./controllers/rooms")
const users = require("./controllers/users")
const services = require("./controllers/services")

const routes = [...rooms, ...users, ...services]

module.exports = {
	name: "ApiRoutes",
	register: async (server, options) => {
		server.route(routes)
	},
}
