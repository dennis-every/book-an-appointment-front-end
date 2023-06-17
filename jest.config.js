export default {
  transform: {
    '^.+\\.[jt]sx?$': ['babel-jest', { configFile: './babel.config.json' }],
  },
};
