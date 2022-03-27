export const coverageDirectory = 'coverage'
export const collectCoverage = true
export const collectCoverageFrom = [
  'src/**/*.{js,jsx,ts,tsx}',
  '!<rootDir>/src/*.{js,jsx,ts,tsx}',
  '!<rootDir>/src/**/*mock*.{js,jsx,ts,tsx}',
  '!<rootDir>/src/styles/**/*.{js,jsx,ts,tsx}',
  '!<rootDir>/src/config/**/*.{js,jsx,ts,tsx}',
  '!<rootDir>/src/pages/**/*.{js,jsx,ts,tsx}',
  '!<rootDir>/**/stories.{js,jsx,ts,tsx}',
  '!<rootDir>/src/templates/**/*.{js,jsx,ts,tsx}',
  '!<rootDir>/node_modules/',
]
export const testEnvironment = 'jsdom'
export const testMatch = ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[tj]s?(x)']
export const testPathIgnorePatterns = ['/node_modules/', '/.next/', '/.out/', '/public/']
export const setupFilesAfterEnv = ['<rootDir>/.jest/setup-tests.js']
