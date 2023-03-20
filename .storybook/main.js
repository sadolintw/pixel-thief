const webpack = require('webpack');

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/preset-create-react-app"
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "@storybook/builder-webpack5"
  },
  "managerWebpack": (config) => {
    config.plugins.push(
      new webpack.DefinePlugin({
        // 'process.env.DISABLE_TAB': JSON.stringify(process.env.DISABLE_TAB),
        'process.env.DISABLE_TAB': true,
      })
    );
    return config;
  },
}