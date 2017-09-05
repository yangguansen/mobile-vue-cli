const path = require( 'path' );
const merge = require( 'webpack-merge' );
const webpack = require( 'webpack' );
const HtmlWebpackPlugin = require( 'html-webpack-plugin' );
const CleanWebpackPlugin = require( 'clean-webpack-plugin' );
const baseConfig = require( './webpack.config.base' );

function resolve (dir) {
	return path.join(__dirname, '..', dir)
}

module.exports = merge( baseConfig, {
	plugins: [
		new HtmlWebpackPlugin( {
			title: '测试vue-cli',
			template: resolve( 'index.html' )
		} ),
		new CleanWebpackPlugin( [ 'dist' ] ),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.optimize.CommonsChunkPlugin({
			name: "vendor",
			// 将minChunks设置为无穷大，就不会有不期望的内容进入vendor了
			minChunks: Infinity,
		}),
		new webpack.optimize.UglifyJsPlugin( {
			compress: {
				warnings: false
			},
			sourceMap: false
		} ),
	],
	// devtool: 'source-map',
	devServer: {
		hot: true,
		contentBase: resolve( 'dist' ),
		publicPath: '/',
		port: 9998,
		compress: true,
		historyApiFallback: true
	},
	watchOptions: {
		ignored: resolve( '/node_modules/' )
	}
} );
