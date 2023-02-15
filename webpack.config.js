var BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
	entry: './src/app.js',
	output: {
		filename: './dist/build.js'
	},
	watch: true,
	plugins: [
	    new BrowserSyncPlugin({
	      // browse to http://localhost:3000/ during development, 
	      // ./public directory is being served 
	      host: 'localhost',
	      port: 8080,
	      files: ['/home/hal/workspace/phpserver/pratikapdv/*/*.php'],
	      proxy: 'http://localhost/pratikapdv/'
	    })
	]
}