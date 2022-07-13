const path = require('path');
module.exports = {
  mode: 'development',
  output: {
    publicPath: '/static/',
    crossOriginLoading: 'anonymous',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                "@babel/preset-env",
                "@babel/preset-react",
              ],
            },
          },
        ],
      },
      {
        test: /\.css$/i,
        use: [
            'isomorphic-style-loader',
            {
                loader: 'css-loader',
                options: {
                    // modules: true,
                    esModule: false,
                    importLoaders: 1
                }
            },
        ],
      },
    ],
  }
};
