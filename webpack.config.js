const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require('webpack')
const Dotenv = require('dotenv-webpack');

module.exports = (webpackConfigEnv, argv) => {
  const orgName = "org";
  const defaultConfig = singleSpaDefaults({
    orgName,
    projectName: "root-config",
    webpackConfigEnv,
    argv,
    disableHtmlGeneration: true,
    // plugins: [
    //   new webpack.DefinePlugin({
    //     'process.env.NODE_ENV': 'development'
    //   })
    // ]
  });

  return merge(defaultConfig, {
    // modify the webpack config however you'd like to by adding to this object
    plugins: [
      new HtmlWebpackPlugin({
        inject: false,
        template: "src/index.ejs",
        templateParameters: {
          isLocal: webpackConfigEnv && webpackConfigEnv.isLocal,
          orgName,
        },
      }),
      // new webpack.ProvidePlugin({
      //   process: 'process/browser'
      // }),
    //   new webpack.DefinePlugin({
    //     'process': JSON.stringify('process')
    // })
    ],
    // resolve: {
    //   alias: {
    //     process: "process/browser"
    //   },
    // }
  });
};
