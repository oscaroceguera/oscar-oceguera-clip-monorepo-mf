const NextFederationPlugin = require("@module-federation/nextjs-mf");

module.exports = {
  webpack(config, options) {
    const { webpack } = options;
    if (!options.isServer) {
      config.plugins.push(
        new NextFederationPlugin({
          name: "container",
          filename: "static/chunks/remoteEntry.js",
          remotes: {
            // secondApp:
            //   "secondApp@http://localhost:3001/_next/static/chunks/remoteEntrySecondApp.js",
            marketing: `marketing@https://main.d1q1nicd5914fm.amplifyapp.com/remoteEntry.js`,
          },
        })
      );
    }
    return config;
  },
};
