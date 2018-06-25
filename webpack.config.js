const path = require('path')


module.exports = {
    mode : "development",
    output : {
        // edit the path name as per your convenience
        path : path.resolve(__dirname),
        filename : "bundle.js"

    },
    entry : __dirname + '/src/index.js',
    devServer:{
        contentBase : "./src",
        inline : true,
        port : 8080
    }, 
    module: {
        rules: [
          { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
          { test: /\.jsx?$/, loader: 'babel-loader', exclude: /node_modules/ }
        ]
      }
}