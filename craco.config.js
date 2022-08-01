const path = require(`path`);

module.exports = {
  webpack: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components'),
      '@container': path.resolve(__dirname, 'src/container'),
      '@store' : path.resolve(__dirname, 'src/store'),
    }
  },
};