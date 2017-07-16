
module.exports = {
	entry: './main.js',
	output: {
		filename: './bundle.js'
	},
	watch: true,
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
					presets: [ 'es2015' ]
				}
			},
			{
				test: /\.pug$/,
				exclude: /node_modules/,
				loader: 'pug-loader'
			},
			{
            	test: /\.scss$/,
            	exclude: /node_modules/,
            	loader: 'style-loader!css-loader!sass-loader'
            },
           {
				test: /\.css$/,
				exclude: /node_modules/,
				loader: 'style-loader!css-loader'
			}
        ]
	}
};
