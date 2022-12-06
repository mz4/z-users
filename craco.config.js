const sassResourcesLoader = require('craco-sass-resources-loader');

module.export = {
  plugins: [
    {
      plugin: sassResourcesLoader,
      options: {
        resources: ['./src/app/theme/styles.scss']
      }
    }
  ]
};
