// module.exports = {
//   presets: ['module:metro-react-native-babel-preset'],
// };

module.exports = function (api) {
  api.cache(true);
  return {
      presets: ['module:metro-react-native-babel-preset'],
      plugins: [
          [
              require.resolve('babel-plugin-module-resolver'),
              {
                  root: ['./app/'],
                  "alias": {
                    "assets": "./assets",
                    "utils": "/utils"
                  }
              },
          ],
      ],
  };
};