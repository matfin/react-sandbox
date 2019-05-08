/* eslint-disable import/prefer-default-export */
import { css } from 'styled-components';
import { breakpoints } from './vars';

export const media = Object.keys(breakpoints).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${breakpoints[label] / 16}em) {
      ${css(...args)}
    }
  `;

  return acc;
}, {});
