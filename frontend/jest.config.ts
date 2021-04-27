import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  verbose: true,
  setupFilesAfterEnv: ['./jest.setup.ts'],
  testPathIgnorePatterns: ['./.next/', './node_modules/', './cypress/'],
};
export default config;
