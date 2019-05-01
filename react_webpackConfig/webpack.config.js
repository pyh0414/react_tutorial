const path = require("path");

module.exports = {
  mode: "development",
  devtool: "eval",
  resolve: {
    extensions: [".jsx", ".js"] // entry의 ./client.jsx에서 jsx생략가능, 또한 컴포넌트에 import할 때 확장자 안붙여줘도됨
  },
  entry: {
    app: "./client"
  },

  module: {
    rules: [
      {
        test: /\.jsx$/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"],
          plugins: []
        }
      }
    ]
  },
  output: {
    filename: "app.js",
    path: path.join(__dirname, "dist")
  }
};
