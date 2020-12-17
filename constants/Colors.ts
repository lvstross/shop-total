const tintColorLight = '#2f95dc';
const tintColorDark = '#fff';

export default {
  Theme: {
    light: {
      text: '#000',
      background: '#fff',
      foreground: '#eaeaec',
      tint: tintColorLight,
      tabIconDefault: '#ccc',
      tabIconSelected: tintColorLight,
    },
    dark: {
      text: '#fff',
      background: '#000',
      foreground: '#2b2b2c',
      tint: tintColorDark,
      tabIconDefault: '#ccc',
      tabIconSelected: tintColorDark,
    },
  },
  black: {
    900: '#000000',
  },
  grey: {
    100: '#eaeaec',
    400: '#838485',
    800: '#2b2b2c',
  },
  lightBlue: {
    100: '#bffbff',
  },
  red: {
    100: '#ff6569',
  },
};
