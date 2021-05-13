module.exports = {
  stories: [
    '../stories/**/*.stories.@(tsx|mdx)',
    '../pages/**/*.stories.@(tsx|mdx)',
    '../components/**/*.stories.@(tsx|mdx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    'storybook-addon-styled-component-theme/dist/preset',
  ],
};
