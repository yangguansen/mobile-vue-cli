const path = require( 'path' );
const px2rem = require( 'postcss-plugin-px2rem' );
const autoprefixer = require( 'autoprefixer' );

function resolve (dir) {
	return path.join(__dirname, '..', dir)
}

module.exports = {
	entry: {
		app: './src/index.js'
	},
	output: {
		filename: '[name].[hash].bundle.js',
		path: resolve( 'dist' )
	},
	resolve: {
		extensions: [ '.js', '.vue', '.json', '.less' ],
		alias: {
			'vue$': 'vue/dist/vue.esm.js',
			'@': resolve('src')
		}
	},
	module: {
		rules: [
			{ test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
			{

				test: /\.vue$/,
				loader: 'vue-loader',
				options: {
					loaders: [
						{
							'less': 'vue-style-loader!css-loader!less-loader!postcss-loader'
						}
					],
					postcss: function () {
						return [
							px2rem( {
								rootValue: 100,
								minPixelValue: 2
							} ),
							autoprefixer( {
								browsers: [ 'last 10 versions', 'Firefox >= 20', '> 1%', 'iOS 4', 'android >= 2.0', 'and_uc > 1' ]
							} )
						];
					}
				}
			}
		]
	}
};
