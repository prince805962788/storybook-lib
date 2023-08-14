import type { StorybookConfig } from '@storybook/react-vite';
import viteCompression from 'vite-plugin-compression';
import { mergeConfig } from 'vite';
const config: StorybookConfig = {
  stories: [
    '../src/**/*.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx)',
    '../src/**/**/*.mdx',
    '../src/**/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-docs'],
  core: {
    builder: '@storybook/builder-vite', // 👈 The builder enabled here.
  },
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  viteFinal(config) {
    // Merge custom configuration into the default config
    return mergeConfig(config, {
      // Add dependencies to pre-optimization
      optimizeDeps: {
        include: ['storybook-dark-mode'],
      },
      plugins: [
        viteCompression({
          filter: /\.(js|mjs)$/i,
          deleteOriginFile: true,
        }),
      ],
      build: {
        sourcemap: false,
      },
    });
  },
};
export default config;
