/* eslint-disable indent */
const path = require("path");

module.exports = {
  context: path.resolve(__dirname, "src"),
  entry: {
    frontend: "./src_frontend/index.js",
    backend: "./src_backend/admin.js",
  },
  output: {
    filename: "js/[name].js",
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    hot: true,
    static: {
      directory: "dist",
      watch: true,
    },
  },
};
