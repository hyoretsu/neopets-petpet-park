import { Config } from '@jest/types';

const config: Config.InitialOptions = {
 clearMocks: true,
 collectCoverage: true,
 collectCoverageFrom: ['<rootDir>/src/*.ts'],
 coverageDirectory: 'coverage',
 coverageReporters: ['text-summary', 'lcov'],
 preset: 'ts-jest',
 testMatch: ['**/*.spec.ts'],
};

export default config;
