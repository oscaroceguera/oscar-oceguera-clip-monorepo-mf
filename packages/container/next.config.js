const NextFederationPlugin = require("@module-federation/nextjs-mf");

module.exports = {
  webpack(config, options) {
    if (!options.isServer) {
      config.plugins.push(
        new NextFederationPlugin({
          name: "container",
          filename: "static/chunks/remoteEntry.js",
          remotes: {
            marketing: `marketing@https://main.d1q1nicd5914fm.amplifyapp.com/remoteEntry.js`,
          },
          exposes: {
            "./pages-map": "./pages-map.js",
          },
        })
      );
    }

    return config;
  },
};
