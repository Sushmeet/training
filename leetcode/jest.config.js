module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  testMatch: ["**/*.test.ts"],
  verbose: true,
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
};
