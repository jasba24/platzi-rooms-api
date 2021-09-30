require("dotenv").config()
require("./mongo")

const Hapi = require("@hapi/hapi")
const routes = require("./routes")

const init = async () => {
	const server = Hapi.server({
		port: process.env.PORT,
		routes: {
			cors: {
				origin: ["*"],
				headers: ["Authorization"],
				exposedHeaders: ["Accept"],
				additionalExposedHeaders: ["Accept"],
				maxAge: 60,
				credentials: true,
			},
		},
	})

	await server.register(routes)
	server.route({
		method: "GET",
		path: "/",
		handler: async (req, h) => {
			return `<div>
			<h1>Hello world</h1>
			<h1>Routes</h1>
			<ul>
				<li>
					<a href="api/rooms">api/rooms</a>
				</li>
				<li>
					<a href="api/users">api/users</a>
				</li>
				<li>
					<a href="api/services">api/services</a>
				</li>
			</ul>
			</div>`
		},
	})
	await server.start()
	console.log(`Server running on ${server.info.uri}`)

	process.on("unhandledRejection", err => {
		console.log(err)
		process.exit(1)
	})
}

init()
