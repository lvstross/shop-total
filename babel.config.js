module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./"],
          extensions: [".js", ".ts", ".tsx"],
          alias: {
            assets: "./assets",
            components: "./components",
            constants: "./constants",
            hooks: "./hooks",
            lib: "./lib",
            navigation: "./navigation",
            redux: "./redux",
          },
        },
      ],
    ],
    env: {
      production: {
        plugins: ['react-native-paper/babel']
      }
    }
  };
};
