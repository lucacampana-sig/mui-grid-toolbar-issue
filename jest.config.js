
module.exports = {
  testEnvironment: 'jsdom',
  testMatch: ['**/__tests__/**/*.test.[jt]s?(x)'],
  transform: {
    '^.+\\.(j|t)sx?$': 'babel-jest',
  },
  moduleDirectories: ['node_modules', 'src'],
  rootDir: '.',
  transform: {
    '^.+\\.(j|t)sx?$': 'babel-jest',
  },
  transformIgnorePatterns: ['/node_modules/(?!(tss-react)/).*/'],
};
