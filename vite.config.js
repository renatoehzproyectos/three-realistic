import path from "node:path"
import { fileURLToPath } from "node:url"
import glsl from "vite-plugin-glsl"

const dirName = path.dirname(fileURLToPath(import.meta.url))

export default {
	plugins: [glsl()],
	resolve: {
		alias: [
			{ find: "realism-effects", replacement: path.resolve(dirName, "vendor/realism-effects/index.js") },
			{ find: "three", replacement: path.resolve(dirName, "node_modules/three") },
			{ find: "postprocessing", replacement: path.resolve(dirName, "node_modules/postprocessing") }
		]
	},
	server: {
		host: "0.0.0.0",
		port: 8080,
		fs: { allow: ["."] }
	},
	preview: {
		host: "0.0.0.0",
		port: 8080
	},
	build: {
		target: "es2022",
		assetsInlineLimit: 0
	}
}
