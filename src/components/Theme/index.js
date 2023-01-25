const baseColor = {
  black: '#000',
  primary: '#5863cb',
  primaryNavy: '#161A47',
  warning: '#f6567b',
  secondary: '#71717A',
  gray50: '#FAFAFA',
  gray100: '#F4F4F5',
  gray150: '#EDEDED',
  gray200: '#E4E4E7',
  gray300: '#D4D4D8',
  gray400: '#A1A1AA',
  gray500: '#71717A',
  gray600: '#52525B',
  gray700: '#3F3F46',
  emphasizePurple: '#845EB6',
  emphasizeDarkBlue: '#005F9D',
  emphasizeOrange: '#FB7C51'
}

const baseSize = {
  tiny: {
    height: '20px',
    fontSize: '12px'
  },
  small: {
    height: '24px',
    fontSize: '12px'
  },
  medium: {
    height: '36px',
    fontSize: '14px'
  },
  large: {
    height: '46px',
    fontSize: '16px'
  }
}

export const setColorOptions = (arg) => {
  return Object.assign(baseColor, arg)
}
export const setSizeOptions = (arg) => {
  return Object.assign(baseSize, arg)
}
export const setColor = setColorOptions()

export const setSize = setSizeOptions()
