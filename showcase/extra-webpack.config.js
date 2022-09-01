const singleSpaAngularWebpack = require('single-spa-angular/lib/webpack').default;
const webpackMerge = require('webpack-merge');

module.exports = (config, options) => {
  const singleSpaWebpackConfig = singleSpaAngularWebpack(config, options);

  const externalsConfig = {
    externals: [
      {
        rxjs: 'rxjs',
        'rxjs/operators': 'rxjs/operators'
      },
      /^@gongarce\/api$/
    ]
  };

  const library = {
    output: {
      library: 'portfolio-showcase'
    }
  };
  const mergedConfig = webpackMerge.smart(singleSpaWebpackConfig, externalsConfig, library);

  console.log(mergedConfig);

  // Feel free to modify this webpack config however you'd like to
  return mergedConfig;
};
