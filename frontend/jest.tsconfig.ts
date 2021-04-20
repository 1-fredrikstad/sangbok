import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  verbose: true,
  moduleNameMapper: {
    'react-i18next': '<rootDir>/src/__test__/__mocks__/react-i18next.ts',
  },
  setupFilesAfterEnv: ['<rootDir>/src/__tests__/test-setup.ts'],
  testMatch: ['**/__tests__/*.ts?(x)'],
};

export default config;
