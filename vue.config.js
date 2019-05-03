const webpack = require("webpack");
const path = require("path");

module.exports = {
  transpileDependencies: ["vuex-persist"],
  runtimeCompiler: false,
  filenameHashing: false,

  //baseUrl: "./", //deprecated
  // publicPath: "../SiteAssets/mdv_study_plans/_production/",
  indexPath: "index.html",

  publicPath: "/",
  outputDir: "www",
  assetsDir: "assets",

  // productionSourceMap: undefined,
  // parallel: undefined,
  // crossorigin: "anonymous",
  css: {
    sourceMap: true,
    loaderOptions: {
      css: {
        localIdentName: "[name]-[hash]",
        camelCase: "only"
      },
      // pass options to sass-loader
      // sass: {
      //   // @/ is an alias to src/
      //   // so this assumes you have a file named `src/variables.scss`
      //   // data: `@import "~@/css/main.scss";`
      // },
      // // pass Less.js Options to less-loader
      // less: {
      //   // http://lesscss.org/usage/#less-options-strict-units `Global Variables`
      //   // `primary` is global variables fields name
      //   // globalVars: {
      //   //   // primary: '#fff'
      //   // }
      // }
    }
  },

  configureWebpack: {
    plugins: [
      // new webpack.HashedModuleIdsPlugin(), // so that file hashes don't change unexpectedly
      new webpack.IgnorePlugin(/^sp-request$/),
      new webpack.IgnorePlugin(/^xmldom$/)
    ],
    optimization: {
      runtimeChunk: "single",
      splitChunks: {
        chunks: "all",
        maxInitialRequests: Infinity,
        minSize: 0,
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name(module) {
              // get the name. E.g. node_modules/packageName/not/this/part.js
              // or node_modules/packageName
              const packageName = module.context.match(
                /[\\/]node_modules[\\/](.*?)([\\/]|$)/
              )[1];
              // npm package names are URL-safe, but some servers don't like @ symbols
              return `npm.${packageName.replace("@", "")}`;
            }
          }
        }
      }
    }
  },

  pluginOptions: {
    // "style-resources-loader": {
    //   preProcessor: "stylus",
    //   patterns: [path.resolve(__dirname, "@/css/main.css")]
    // }
  },

  pwa: {
    name: "zir",
    themeColor: "#7ED321",
    msTileColor: "#AAE2E2",
    appleMobileWebAppCapable: "yes",
    appleMobileWebAppStatusBarStyle: "black"
  }
};
