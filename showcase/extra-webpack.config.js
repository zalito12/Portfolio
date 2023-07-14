const singleSpaAngularWebpack = require('single-spa-angular/lib/webpack').default;
const webpackMerge = require('webpack-merge');

module.exports = (config, options) => {
  const singleSpaWebpackConfig = singleSpaAngularWebpack(config, options);

  singleSpaWebpackConfig.externals.push('rxjs', 'rxjs/operators', /^@gongarce\/api$/);

  const library = {
    output: {
      library: 'portfolio-showcase'
    }
  };

  const mergedConfig = webpackMerge.merge(singleSpaWebpackConfig, library);

  console.log(mergedConfig);

  return mergedConfig;
};
