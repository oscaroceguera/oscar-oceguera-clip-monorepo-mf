const NextFederationPlugin = require("@module-federation/nextjs-mf");

module.exports = {
  webpack(config, options) {
    if (!options.isServer) {
      config.plugins.push(
        new NextFederationPlugin({
          name: "secondApp",
          filename: "static/chunks/remoteEntrySecondApp.js",
          remotes: {},
          exposes: {
            "./secondApp": "./pages/secondApp",
          },
        })
      );
    }
    return config;
  },
};
