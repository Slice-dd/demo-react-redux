
var path = require('path');

module.exports = {
    entry: {
        app:'./src/app.jsx'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname ,'dist')
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015','react']
                }
            },
            {
                test: /\.css$/,
                exclude: /^node_modules$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.less', '.scss', '.css'], //后缀名自动补全
    },
    devServer: {
        contentBase: path.join(__dirname,'dist'),//配置服务器参数
        compress: true,
    }

};
