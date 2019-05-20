module.exports = {
  "output": {
    "filename": "[name].pack.js",
    // "path": __dirname + "/dist",
    "path": __dirname + "/dist/",
  },

  "module": {
    "rules": [
      {
        "use": {
          "loader": "babel-loader",
          "options": {
            "presets": [
              "babel-preset-env",
              "babel-preset-react"
            ]
          }
        },
        "exclude": /node_modules/,
        "test": /\.js$/
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader','sass-loader']
      }      
    ]
  },
  "entry": {
    "index": "./index"
  },
  // "devtool": "cheap-module-source-map",
  "devtool": "source-map",
  "devServer": {
    contentBase: "./",
    writeToDisk: true,
    host: "192.168.1.103",
    port: 8099,
    hot: true,
  }
};