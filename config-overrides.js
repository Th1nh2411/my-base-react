const path = require('path');

const webpack = require('webpack');
const WorkBoxPlugin = require('workbox-webpack-plugin');

module.exports = function override(config) {
  config.resolve.extensions = ['.js', '.jsx', '.json', '.ts', '.tsx'];
  config.resolve.alias = {
    '@base': path.resolve(__dirname, 'src/base/'),
    '@vehicle': path.resolve(__dirname, 'src/vehicle/'),
    '@planning': path.resolve(__dirname, 'src/planning/'),
    '@member': path.resolve(__dirname, 'src/member/'),
    '@notification': path.resolve(__dirname, 'src/notification/'),
    '@account': path.resolve(__dirname, 'src/account/'),
  };

  // https://stackoverflow.com/questions/69135310/workaround-for-cache-size-limit-in-create-react-app-pwa-service-worker
  config.plugins.forEach((plugin) => {
    if (plugin instanceof WorkBoxPlugin.InjectManifest) {
      plugin.config.maximumFileSizeToCacheInBytes = 50 * 1024 * 1024;
    }
  });
  return config;
};
