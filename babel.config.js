module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["module:metro-react-native-babel-preset"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./src"],
          extensions: [
            ".ios.js",
            ".android.js",
            ".js",
            ".ts",
            ".tsx",
            ".json",
            ".svg",
          ],
          alias: {
            "@/shared": "./src/shared",
            "@assets*": "./src/assets",
            "@/shared/components": "./src/shared/components",
            "@/shared/navigations": "./src/shared/navigations",
            "@screens":"./src/screen",
            "@shared/utils": "./src/shared/utils",
            "@shared/api": "./src/shared/api",
            "@shared/assets": "./src/shared/assets",
          },
        },
      ],

      "react-native-reanimated/plugin",
    ],
  };
};
