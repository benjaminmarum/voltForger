module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ["<rootDir>/obs/"],
  roots: ["<rootDir>/tests"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    '\\.(jpg|jpeg|png|gif|webp)$': 'jest-transform-stub',
    '\\.svg$': 'jest-svg-transformer',
  },
  setupFilesAfterEnv: ['jest-canvas-mock', '@testing-library/jest-dom/extend-expect', '@testing-library/jest-dom'],
  transform: {
    "^.+\\.(ts|tsx)$": "@swc/jest",
    '^.+\\.jsx?$': ['babel-jest', {
      presets: [
        ['@babel/preset-env', { modules: 'commonjs' }],
        '@babel/preset-react'
      ]
    }],
  },
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
};
