import type { StorybookConfig } from '@storybook/react-vite'

const config: StorybookConfig = {
  stories: ['../stories/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  viteFinal: async (config) => {
    config.resolve = config.resolve || {}
    config.resolve.alias = config.resolve.alias || {}

    // Ensure PostCSS processes Tailwind CSS
    config.css = config.css || {}
    config.css.postcss = {
      plugins: [require('tailwindcss'), require('autoprefixer')],
    }

    return config
  },
}

export default config
