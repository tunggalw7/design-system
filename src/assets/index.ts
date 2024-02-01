/* eslint-disable @typescript-eslint/no-var-requires */
import en from './lang/en.json';

// Load language strings
export const Lang = {
  en,
};

// Load SVGs as React components
export const Icons = {
  Close: require('./icons/close.svg').default,
};

export const Images = {
  Doctor: require('./images/doctor.png').default,
};
