/**
 * create by fishYu on 2016-10-24
 */

var webpack = require('webpack');
var path = require('path');
var argv = require('yargs').argv;

var merge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require("html-webpack-plugin");
//production生产环境  development开发环境

var env = 'development';
var port = '8080';  //默认端口号
if(argv.env === 'develop'){
	env = 'development';
    port = argv.port;
}else if(argv.env === 'release'){
	env = 'production';
}
//以下为通用配置，在开发和发布环境通用
var common = {
    entry: [
        './src/index.jsx'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: './js/index.js'
    },
    resolve: {
        modulesDirectories: ['node_modules', 'src'],
        extensions: ['', '.js', '.json', '.jsx', '.css', '.scss']
    },
    module: {
        loaders: [
            {
                test: /\.(js|jsx)?$/,
                exclude: /node_modules/,
                loaders: ['babel-loader']
            },
            {
                test  : /\.(png|jpg|jpeg|ico|gif|woff|woff2|ttf|eot|svg)$/,
                loader: 'url-loader?limit=8192&name=[path][name].[ext]'
            }
        ],
    },
    plugins: [
        new webpack.DefinePlugin({
			'process.env': {
				'NODE_ENV': JSON.stringify(env)//production development
			}
		}),
        new webpack.NoErrorsPlugin()
    ]
};

//开发模式下
var dev = {
    devtool: 'inline-source-map',
    module: {
        loaders: [
            {
                test  : /\.css$/,
                loader: 'style-loader!css-loader'
            }
        ]
    },
    entry: [
        'webpack-dev-server/client?http://localhost:'+port,
        'webpack/hot/only-dev-server'
    ],
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
};

//发布模式下
var release = {
    module: {
        loaders: [
            {
                test  : /\.css$/, //导出CSS
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
            }
        ],
    },
    plugins: [
        new ExtractTextPlugin( "./css/style.css" ),     //导出CSS
        new webpack.optimize.UglifyJsPlugin({       //做JS压缩
            compress: {
                warnings: false
            }
        }),
        new HtmlWebpackPlugin({
            template: './template.html',    //由于不能删掉，对多余的加载JS文件，只能另外再添加一个template.html
            filename: 'index.html',
            minify: {
                removeComments: true,
                collapseWhitespace: false
            },
            hash:true,
            cache:false
        })
    ]
};

if (env === 'production') {		//发布的时候
    module.exports = merge(common, release);
} else if (env === 'development') { //开发模式
    module.exports = merge(common, dev);
}

