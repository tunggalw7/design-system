import type { StorybookConfig } from '@storybook/nextjs';
import TsconfigPathsPlugin  from "tsconfig-paths-webpack-plugin"

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  webpackFinal: async (storybookWebpackConfig) => {
    // Ensure that storybookWebpackConfig.resolve is defined
    if (storybookWebpackConfig.resolve) {
      // Ensure that storybookWebpackConfig.resolve.plugins is defined
      if (!storybookWebpackConfig.resolve.plugins) {
        storybookWebpackConfig.resolve.plugins = [];
      }

      // Add TsconfigPathsPlugin to resolve path aliases from tsconfig.json
      storybookWebpackConfig.resolve.plugins.push(
        new TsconfigPathsPlugin({ configFile: './tsconfig.json' })
      );
    }

    // Return the modified webpack config
    return storybookWebpackConfig;
  },

  
};
export default config;