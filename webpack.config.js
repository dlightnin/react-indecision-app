const path = require ('path');

// entry -> ouput 

module.exports = {
    entry: "./src/app.js",
    output: {  
        path:path.join(__dirname,'public'),
        filename:"bundle.js"
    },
    module:{
        rules : [{
            loader: 'babel-loader',
            test : /\.js$/,
            exclude: /node-modules/
        },
        {
            test : /\.s?css$/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]

        }
    ] 
    },
    devtool: "cheap-module-eval-source-map",
    devServer : {
        contentBase : path.join(__dirname,'public')

    }
};

//loader: how file types get transformed when webpack uses it
 