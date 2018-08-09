const path=require('path');
const HtmlWebpackPlugin=require('html-webpack-plugin');
const ExtractTextPlugin=require("extract-text-webpack-plugin");
const glob=require('glob');
const PurifyCSSPlugin=require('purifycss-webpack')
const webpack=require("webpack")
const entry=require('./webpack_config/entry_webpack.js')
var CopyWebpackPlugin=require("copy-webpack-plugin");
module.exports={
    entry:entry,
    plugins:[
        new HtmlWebpackPlugin({
            title:'Output Management',
            minify:{
                removeAttributeQuotes:true
            },
            hash:true,
            template:'./src/index.html'
        }),
        new ExtractTextPlugin("./css/main.css"),
        new PurifyCSSPlugin({
            paths:glob.sync(path.join(__dirname,"./src/*.html"))
        }),
        new webpack.BannerPlugin('婷婷所有'),
        new webpack.ProvidePlugin({
            $:'jQuery'
        }),
        new CopyWebpackPlugin([{
            from:__dirname+'/src/public',
            to:"./public"
        }])
    ],
    output:{
        filename:'bundle.js',
        path:path.resolve(__dirname,'dist')
    },
    module:{
        rules:[{
            test:/\.css$/,
            use:['style-loader','css-loader']
        }],
        rules:[{

            test:/\.css$/,
            use:ExtractTextPlugin.extract({
                fallback:"style-loader",
            use:[{
                loader:"css-loader",
                options:{importLoaders:1}
            },'postcss-loader'],
                publicPath:"../"
            })
         },{
            test:/\.(jpg|png|gif)$/,
            use:[{
                loader:"file-loader",
                options:{
                    limit:500,
                    outputPath:"images/"
                }
            }]
        },{
            test:/\.(html|htm)$/,
            loader:"html-withimg-loader"
        },{
            test:/\.scss$/,
            //use:['style-loader',"css-loader",'sass-loader']
            use:ExtractTextPlugin.extract({
                fallback:"style-loader",
                use:["css-loader","sass-loader"]
            })
        },{
            test:/\.js$/,
            use:{
                loader:'babel-loader',
                options:{presets:'env'}
            }
        }]
    },
    devServer:{
        contentBase:path.resolve(__dirname,'dist'),
        host:'127.0.0.1',
        port:'8081',
        compress:true
    },
    watchOptions:{
        poll:1000,
        aggregateTimeout:500,
        ignored:/node_modules/
    }
}