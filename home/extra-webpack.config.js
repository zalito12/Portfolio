const singleSpaAngularWebpack = require("single-spa-angular/lib/webpack")
  .default;
const webpackMerge = require("webpack-merge");

module.exports = (angularWebpackConfig, options) => {
  const singleSpaWebpackConfig = singleSpaAngularWebpack(
    angularWebpackConfig,
    options
  );

  singleSpaWebpackConfig.externals.push(
    "rxjs",
    "rxjs/operators",
    /^@gongarce\/api$/
  );

  singleSpaWebpackConfig;

  const library = {
    output: {
      library: "portfolio-home",
    },
  };

  const cssLoader = {
    module: {
      rules: [
        {
          test: /\.css$/,
          loader: "string-replace-loader",
          options: {
            search: /__webpack_public_path__/g,
            replace: singleSpaWebpackConfig.output.publicPath,
          },
        },
      ],
    },
  };

  const mergedConfig = webpackMerge.merge(
    singleSpaWebpackConfig,
    library,
    cssLoader
  );

  return mergedConfig;
};
