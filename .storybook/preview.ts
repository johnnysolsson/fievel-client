
import '../src/index.css';

export const parameters = {
  options: {
    storySort: {
      order: ['App', 'Components', '*'],
    },
  },
  // Remove actions.argTypesRegex when using Visual Test addon
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
