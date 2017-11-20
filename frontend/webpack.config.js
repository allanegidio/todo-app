const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

let config = {
	//Ponto de entrada da aplicação
	entry: './src/index.jsx',
	//Ponto de saída dos arquivos
	output: { 
		path: __dirname + 'public',
		filename: './app.js'
	},
	//Server de desenvolvimento
	devServer: {
		port: 8070,
		contentBase: './public',
	},
	//Resolva todos os tipos de extensões .js/.jsx
	resolve: {
		extensions: ['', '.js', '.jsx'],
		// Apelido para diminuir o tamanho do caminho node_modules
		alias: {
			modules: __dirname + '/node_modules'
		}
	},
	// Arquivo CSS que será gerado da aplicação.
	plugins: [
		new ExtractTextPlugin('app.css')
	],
	module: {
		loaders: [{
			test: /.js[x]?$/,
			loader: 'babel-loader',
			exclude: /node_modules/,
			query: {
				presets: ['es2015', 'react'],
				plugins: ['transform-object-rest-spread']
			}
		}, {
			test: /\.css$/,
			loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
		}, {
			test: /\.woff|.woff2|.ttf|.eot|.svg*.*$/,
			loader: 'file'
		}]
	}
}

module.exports = config;