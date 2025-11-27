
import '../src/index.css';

export const parameters = {
  // Remove actions.argTypesRegex when using Visual Test addon
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
