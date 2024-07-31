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
            "@/shared/navigation": "./src/shared/navigation",
            "@screens":"./src/screen",
            "@shared/utils": "./src/shared/utils",
            "@shared/api": "./src/shared/api",
            "@shared/assets": "./src/shared/assets",
          },
        },
      ],
      [
        "module:react-native-dotenv",
        {
          moduleName: "@env",
          path: ".env",
        },
      ],
      "react-native-reanimated/plugin",
    ],
  };
};
