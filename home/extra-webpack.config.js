const singleSpaAngularWebpack = require("single-spa-angular/lib/webpack")
  .default;
const webpackMerge = require("webpack-merge");
const StringReplacePlugin = require("string-replace-webpack-plugin");

module.exports = (angularWebpackConfig, options) => {
  const singleSpaWebpackConfig = singleSpaAngularWebpack(
    angularWebpackConfig,
    options
  );

  const externalsConfig = {
    externals: [
      {
        //"zone.js": "Zone",
        rxjs: "rxjs",
        "rxjs/operators": "rxjs/operators",
        /*"@angular/core": "@angular/core",
        "@angular/common": "@angular/common",
        "@angular/compiler": "@angular/compiler",
        "@angular/forms": "@angular/forms",
        "@angular/platform-browser": "@angular/platform-browser",
        "@angular/platform-browser-dynamic": "@angular/platform-browser-dynamic",
        "@angular/animations": "@angular/animations",
        "@angular/router": "@angular/router" */
      },
      /^@gongarce\/api$/,
    ],
  };

  const library = {
    output: {
      library: "portfolio-home",
      //libraryTarget: "system",
    },
  };

  const cssLoader = {
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            {
              loader: getCssReplacement(
                singleSpaWebpackConfig.output.publicPath
              ),
            },
          ],
        },
      ],
    },
  };

  const mergedConfig = webpackMerge.smart(
    singleSpaWebpackConfig,
    externalsConfig,
    library,
    cssLoader
  );

  //delete mergedConfig.output.library;

  console.log(mergedConfig);
  const r = mergedConfig.module.rules[4];
  console.log(r);
  r.use.forEach((u) => console.log(u.options));

  // Feel free to modify this webpack config however you'd like to
  return mergedConfig;
};

getCssReplacement = (publicPath) => {
  return (replaceCssAssetsUrl = StringReplacePlugin.replace({
    replacements: [
      {
        pattern: /__webpack_public_path__/g,
        replacement: function (_match, _p1, _offset, _string) {
          return publicPath;
        },
      },
    ],
  }));
};
