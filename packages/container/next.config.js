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
            secondApp:
              "secondApp@http://localhost:3001/_next/static/chunks/remoteEntrySecondApp.js",
            // home: 'home@http://localhost:3001/_next/static/chunks/remoteEntry.js',
            // checkout: 'checkout@http://localhost:3000/_next/static/chunks/remoteEntry.js',
          },
          // exposes: {
          //   './shop': './pages/shop',
          //   './pdp': './pages/p/[...slug].js',
          //   './pages-map': './pages-map.js',
          //   './customHook': './components/someHook.js',
          // },
        })
      );
    }
    return config;
  },
};
