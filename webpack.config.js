module.exports = {
   module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        },
		{
		  test: /\.(png|jpg|gif)$/,
		  exclude: /node_modules/,
          use: [
          {
            loader: 'file-loader',
            options: {}  
          }
        ]
		},
		{
		  test: /\.(css)$/,
		  exclude: /node_modules/,
          use: [ 'style-loader','css-loader' ]
		},
		{
		  test: /\.(woff|woff2|eot|ttf|otf)$/,
		  exclude: /node_modules/,
		  loader: "file-loader"
        }
      ]
   }
}