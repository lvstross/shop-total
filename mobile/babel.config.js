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
            navigation: "./navigation",
            utils: "./utils"
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
