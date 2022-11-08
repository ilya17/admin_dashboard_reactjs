/* craco.config.js */
const path = require(`path`);

const resolvePath = (p) => path.resolve(__dirname, p);

module.exports = {
  webpack: {
    alias: {
      "@core": resolvePath("./src/core"),
      "@assets": resolvePath("./src/assets"),
    },
  },
};
