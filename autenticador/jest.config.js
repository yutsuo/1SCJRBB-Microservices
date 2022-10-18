module.exports = {
  clearMocks: true,
  testEnvironment: "node",
  moduleFileExtensions: ["js", "json", "jsx", "ts", "tsx", "node"],
  collectCoverage: true,
  coverageDirectory: "coverage/javascript/lcov",
  coverageReporters: ["json", "html", "lcov"],
  testResultsProcessor: "jest-sonar-reporter",
  setupFilesAfterEnv: ["./jest.setup.js"],
};
